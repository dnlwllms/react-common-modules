import { FC, Fragment, useMemo, useState } from "react";

import { UploadProps } from "./types";
import UploadStyledComponents from "./styled";

import { NumberUtility } from "../../../core/util";
import { useCount } from "../../../core/useCount";

import { colors } from "../../../foundations";

import { Button, IconButton } from "../../actions";
import { Spinner } from "../../feedback";

import { AttentionSVG, CloseOncSVG } from "../../../icons/filled/character";
import { CheckOneSVG } from "../../../icons/filled/character";
import { CloseSmallSVG } from "../../../icons/outlined/character";
import { FileSVG } from "../../../icons/outlined/office";
import { LinkSVG } from "../../../icons/outlined/base";
import { UploadSVG } from "../../../icons/outlined/arrows";

const {
  Container,
  StyledLabel,
  FileList,
  FileListItem,
  DragArea,
  ProgressContainer,
  ProgressInfoArea,
  ProgressBar,
  DraggableFileList,
  DraggableFileListItem,
} = UploadStyledComponents;

const Upload: FC<UploadProps> = ({
  accept,
  multiple,
  style,
  size = "medium",
  buttonText = "Upload",
  dragAreaPlaceholder = "Click or drag file to this area to upload",
  upload = test,
  onDeleteClick,
  isDraggable,
  initialFiles = [],
  limit,
  onLimitOver,
}) => {
  const [fileStates, setFileStates] = useState<
    {
      key: string;
      isSuccess: boolean;
      isLoading: boolean;
      file: File;
    }[]
  >(
    initialFiles.map((file, index) => ({
      key: index.toString(),
      file: file,
      isLoading: false,
      isSuccess: true,
    }))
  );

  const [isFinished, setIsFinished] = useState(false);
  const [isFail, setIsFail] = useState(false);

  const progress = useMemo(() => {
    return Math.round(
      (fileStates.filter(({ isLoading }) => !isLoading).length /
        fileStates.length) *
        100
    );
  }, [fileStates]);

  const { count, reset } = useCount(progress, {
    speed: 20,
    step: Math.ceil(10 / fileStates.length),
    enable: fileStates.some(({ isLoading }) => isLoading),
  });

  const buttonStyle = useMemo(() => {
    switch (size) {
      case "small": {
        return {
          width: 124,
        };
      }
      case "medium":
      default: {
        return {
          width: 156,
        };
      }
    }
  }, [size]);

  const handleChange = async (files: FileList) => {
    if (limit && files.length > limit) {
      if (onLimitOver) {
        onLimitOver();
      }
    } else if (files && upload) {
      reset();
      setIsFinished(false);
      const states: typeof fileStates = Array.from({
        length: files.length,
      }).map((_, index) => {
        return {
          key: `new-${index.toString()}`,
          file: files.item(index) as File,
          isLoading: true,
          isSuccess: false,
        };
      });

      setFileStates(states);

      for (const state of states) {
        try {
          await upload(state.file);
          state.isSuccess = true;
          setIsFail(false);
        } catch {
          state.isSuccess = false;
          setIsFail(true);
        } finally {
          state.isLoading = false;
          setFileStates([...states]);
        }
      }

      setIsFinished(true);
    }
  };

  const handleDeleteClick = (key: string) => {
    if (fileStates.every(({ isLoading }) => !isLoading)) {
      setFileStates((prev) => {
        const target = prev.find((item) => item.key === key);
        if (target && onDeleteClick) {
          onDeleteClick(target.file);
        }

        return prev.filter((item) => item.key !== key);
      });
    }
  };

  const successFiles = fileStates.filter(
    ({ isLoading, isSuccess }) => !isLoading && isSuccess
  );
  const failFiles = fileStates.filter(
    ({ isLoading, isSuccess }) => !isLoading && !isSuccess
  );

  const hasFail = failFiles.length > 0;

  const render = () => {
    if (isDraggable) {
      return (
        <Fragment>
          <DragArea
            onDragStart={(e) => e.preventDefault()}
            onDragOver={(e) => e.preventDefault()}
            onDragEnd={(e) => e.preventDefault()}
            onDrop={(e) => {
              e.preventDefault();
              if (e.dataTransfer.files) {
                if (
                  (!multiple && e.dataTransfer.files.length === 1) ||
                  multiple
                ) {
                  handleChange(e.dataTransfer.files);
                }
              }
            }}
          >
            <UploadSVG width={24} height={24} />
            <span>{dragAreaPlaceholder}</span>
            <StyledLabel htmlFor="upload-button">
              <Button color="gray02" size="x-small">
                {buttonText}
              </Button>
            </StyledLabel>
          </DragArea>
          {fileStates.length > 0 && (
            <Fragment>
              <ProgressContainer style={{ margin: "8px 0 16px" }}>
                <ProgressInfoArea theme={{ isFinished }}>
                  <span>
                    {successFiles.length} / {fileStates.length}개 업로드
                    {isFinished && hasFail && (
                      <span
                        style={{ color: colors.red500 }}
                      >{` (${failFiles.length}개 실패)`}</span>
                    )}
                  </span>
                  <span>{count}%</span>
                </ProgressInfoArea>
                <ProgressBar
                  theme={{
                    progress,
                    isFail,
                    isFinished,
                  }}
                />
              </ProgressContainer>
              <DraggableFileList>
                {fileStates.map(({ key, file, isLoading, isSuccess }) => {
                  let stateIcon = null;
                  if (isLoading) {
                    stateIcon = (
                      <CheckOneSVG fill={[colors.gray200, colors.white]} />
                    );
                  } else if (isSuccess) {
                    stateIcon = (
                      <CheckOneSVG fill={[colors.green500, colors.white]} />
                    );
                  } else {
                    stateIcon = (
                      <AttentionSVG fill={[colors.red500, colors.white]} />
                    );
                  }
                  return (
                    <DraggableFileListItem key={key}>
                      <div className="profile">
                        {isLoading ? (
                          <Spinner size={16} />
                        ) : (
                          <FileSVG
                            width={16}
                            height={16}
                            fill={colors.blue500}
                          />
                        )}
                      </div>
                      <div className="info">
                        <span className="name">{file.name}</span>
                        <span className="size">
                          {NumberUtility.convertByteToString(file.size)}
                        </span>
                      </div>
                      <IconButton
                        style={{ cursor: "default" }}
                        size="x-small"
                        icon={stateIcon}
                      />
                      <IconButton
                        size="x-small"
                        icon={<CloseSmallSVG fill={colors.gray900} />}
                        onClick={() => handleDeleteClick(key)}
                      />
                    </DraggableFileListItem>
                  );
                })}
              </DraggableFileList>
            </Fragment>
          )}
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <StyledLabel htmlFor="upload-button">
            <Button
              size={size}
              color="gray02"
              style={buttonStyle}
              icon={{
                position: "leading",
                node: <UploadSVG width={14} height={14} />,
              }}
            >
              {buttonText}
            </Button>
          </StyledLabel>
          {fileStates.length > 0 && (
            <FileList theme={{ size }}>
              {fileStates.map(({ key, file, isLoading, isSuccess }) => {
                let state = "";
                if (!isLoading) {
                  if (isSuccess) {
                    state = "success";
                  } else {
                    state = "fail";
                  }
                }
                return (
                  <FileListItem key={key}>
                    {isLoading ? (
                      <Spinner size={12} />
                    ) : (
                      <LinkSVG width={12} height={12} fill={colors.gray500} />
                    )}
                    <span className={state}>{file.name}</span>
                    <span
                      className="close"
                      onClick={() => handleDeleteClick(key)}
                    >
                      <CloseOncSVG
                        width={12}
                        height={12}
                        fill={[colors.gray500, colors.white]}
                      />
                    </span>
                  </FileListItem>
                );
              })}
            </FileList>
          )}
        </Fragment>
      );
    }
  };

  return (
    <Container style={style}>
      <input
        id="upload-button"
        type="file"
        hidden
        accept={accept}
        multiple={multiple}
        onChange={({ target: { files } }) => {
          if (files) {
            handleChange(files);
          }
        }}
      />
      {render()}
    </Container>
  );
};

Upload.displayName = "Upload";

export default Upload;

async function test(file: File) {
  console.log(file);

  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      if (Math.round(Math.random() * 10) % 2 === 0) {
        resolve();
      } else {
        reject();
      }
    }, 200);
  });
}
