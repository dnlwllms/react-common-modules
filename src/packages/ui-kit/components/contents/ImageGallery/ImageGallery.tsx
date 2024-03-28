import { FC, Fragment, useRef, useState } from "react";

import Flicking from "@egjs/react-flicking";
import "@egjs/flicking/dist/flicking.css";

import { ImageGalleryProps } from "./types";
import ImageGalleryStyledComponents from "./styled";

import { Dialog } from "../../../core";
import { IconButton } from "../../actions";
import { LeftSVG, RightSVG } from "../../../icons/outlined/arrows";
import { colors } from "../../../foundations";
import { CloseSmallSVG } from "../../../icons/outlined/character";

const {
  Container,
  ImageList,
  ImageListItem,
  StyledImage,
  PreviewContainer,
  PreviewHeader,
  PreviewBody,
  PreviewNavigationArea,
  PreviewImageArea,
  PreviewImage,
  PreviewFooter,
} = ImageGalleryStyledComponents;

const ImageGallery: FC<ImageGalleryProps> = ({ images }) => {
  const flickingRef = useRef<Flicking>(null);

  const [previewIndex, setPreviewIndex] = useState<number>(0);

  return (
    <Container>
      <ImageList>
        {images.map((image, index) => (
          <Dialog key={index}>
            {({ handleClose }) => {
              return (
                <Fragment>
                  <Dialog.Trigger>
                    <ImageListItem onClick={() => setPreviewIndex(index)}>
                      <StyledImage src={image.src} alt={image.alt} />
                    </ImageListItem>
                  </Dialog.Trigger>
                  <Dialog.Body>
                    <PreviewContainer onClick={handleClose}>
                      <PreviewHeader>
                        <span>
                          {previewIndex + 1} / {images.length}
                        </span>
                        <IconButton
                          style={{
                            position: "absolute",
                            top: 20,
                            right: 20,
                          }}
                          icon={<CloseSmallSVG fill={colors.white} />}
                        />
                      </PreviewHeader>
                      <PreviewBody>
                        <PreviewNavigationArea>
                          <IconButton
                            icon={<LeftSVG fill={colors.white} />}
                            onClick={(e) => {
                              e.stopPropagation();
                              if (
                                flickingRef.current &&
                                !flickingRef.current.animating
                              ) {
                                flickingRef.current.prev();
                              }
                            }}
                          />
                        </PreviewNavigationArea>
                        <Flicking
                          ref={flickingRef}
                          defaultIndex={previewIndex}
                          circular
                          interruptable={false}
                          panelsPerView={1}
                          onChanged={({ index }) => setPreviewIndex(index)}
                        >
                          {images.map(({ src, alt }, index) => (
                            <PreviewImageArea
                              key={index}
                              onClick={(e) => e.stopPropagation()}
                            >
                              <PreviewImage src={src} alt={alt} />
                            </PreviewImageArea>
                          ))}
                        </Flicking>
                        <PreviewNavigationArea>
                          <IconButton
                            icon={<RightSVG fill={colors.white} />}
                            onClick={(e) => {
                              e.stopPropagation();
                              if (
                                flickingRef.current &&
                                !flickingRef.current.animating
                              ) {
                                flickingRef.current.next();
                              }
                            }}
                          />
                        </PreviewNavigationArea>
                      </PreviewBody>
                      <PreviewFooter>{images[previewIndex].alt}</PreviewFooter>
                    </PreviewContainer>
                  </Dialog.Body>
                </Fragment>
              );
            }}
          </Dialog>
        ))}
      </ImageList>
    </Container>
  );
};

ImageGallery.displayName = "ImageGallery";

export default ImageGallery;
