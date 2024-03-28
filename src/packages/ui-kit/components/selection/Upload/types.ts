import { InputHTMLAttributes } from "react";

export interface UploadProps
  extends Pick<
    InputHTMLAttributes<HTMLInputElement>,
    "accept" | "multiple" | "style"
  > {
  /**
   * @default "medium"
   */
  size?: "small" | "medium";

  /**
   * @default "Upload"
   */
  buttonText?: string;

  /**
   * @default "Click or drag file to this area to upload"
   */
  dragAreaPlaceholder?: string;

  /**
   * 파일 업로드 API
   */
  upload?: (file: File) => Promise<any>;

  onDeleteClick?: (file: File) => void;

  isDraggable?: boolean;

  initialFiles?: File[];

  limit?: number;

  onLimitOver?: () => void;
}
