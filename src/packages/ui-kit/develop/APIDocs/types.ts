export type APIDocRow = {
  props: string;
  description: string;
  type: string;
  default: string;
};

export interface APIDocsProps {
  rows: APIDocRow[];
}
