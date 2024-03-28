export interface EditorProps {
  value: string;
  onChange: (value: string) => void;
  padding ?: number;
  isReadOnly?: boolean;
}
