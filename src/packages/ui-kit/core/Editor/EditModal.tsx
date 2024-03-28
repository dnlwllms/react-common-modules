import { FC, useContext, useEffect } from "react";

import { EditModalProps, ValueType } from "./types";
import Context from "./context";
import EditorStyledComponents from "./styled";

import Field from "./Field";

import Form, { useForm } from "../Form";

import Modal from "../../develop/Modal";

const { ErrorMessage } = EditorStyledComponents;

const EditModal: FC<EditModalProps> = ({ config }) => {
  const { saveProps, handleKeydown } = useContext(Context);

  useEffect(() => {
    window.removeEventListener("keydown", handleKeydown);

    return () => {
      window.addEventListener("keydown", handleKeydown);
    };
  }, [handleKeydown]);

  const form = useForm({
    initialValues: config.props,
    validation: [
      {
        key: "",
        message: "",
      },
    ],
  });

  useEffect(() => {
    const validation = Object.entries(config.props).map(
      ([key, value], index) => {
        const type = getValueType(value);
        const currentValue = form.values[key];

        let isValid = true,
          message = "";

        switch (type) {
          case "string": {
            isValid = currentValue !== "";
            message = "값을 입력해 주세요.";
            break;
          }
          case "array": {
            try {
              JSON.parse(currentValue);
            } catch {
              isValid = Array.isArray(currentValue);
              message = "배열 형태가 올바르지 않습니다.";
            }
            break;
          }
          case "object": {
            try {
              JSON.parse(currentValue);
            } catch {
              isValid = false;
            }
            break;
          }
        }

        return {
          key,
          message,
          isValid,
        };
      }
    );

    form.handleValidation(validation);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.values]);

  const handleSubmit = async (values: any) => {
    await saveProps(config.id, values);

    if (config.close) {
      config.close();
    }
  };

  return (
    <Form form={form}>
      <Modal
        title={`${config.item.title} Properties`}
        size="x-large"
        onClose={config.close}
        primary={{
          title: "확인",
          onClick: () => form.handleSubmit(handleSubmit),
          isDisabled: Object.values(form.errors).length > 0,
        }}
      >
        <div>
          {Object.entries(config.props).map(([key, value], index) => {
            return (
              <div key={index}>
                <Form.Item fieldKey={key}>
                  <Field
                    label={key}
                    value={form.values[key]}
                    onChange={({ target }) => {
                      let type: ValueType;
                      try {
                        type = getValueType(JSON.parse(target.value));
                      } catch {
                        type = "string";
                      }

                      switch (type) {
                        case "string": {
                          form.handleValue(key, target.value);
                          break;
                        }
                        case "number": {
                          form.handleValue(key, Number(target.value));
                          break;
                        }
                        case "object":
                        case "array": {
                          form.handleValue(key, JSON.parse(target.value));
                          break;
                        }
                      }
                    }}
                    autoFocus={index === 0}
                  />
                  <Form.Item.ErrorMessage
                    as={<ErrorMessage />}
                    visible={!!form.errors[key]?.length}
                  />
                </Form.Item>
              </div>
            );
          })}
        </div>
      </Modal>
    </Form>
  );
};

export default EditModal;

const getValueType = (value: unknown): ValueType => {
  switch (typeof value) {
    case "object":
      if (value === null) {
        return "invalid";
      }
      const isArray = Array.isArray(value);
      if (isArray) {
        return "array";
      } else {
        return "object";
      }

    case "string":
    case "boolean":
    case "number":
      return typeof value as ValueType;
    default:
      return "invalid";
  }
};
