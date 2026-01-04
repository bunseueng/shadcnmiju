
export interface ComponentVariant {
  id: string
  name: string
  description: string
  preview?: React.ReactNode
  code: string
  type: string
  filePath?: string
  installCommand: string
}

export interface ComponentPreviewType {
  id: string
  title: string
  type: string
  description: string
  category: string
  slug: string
  previewImage: string
  dependencies: string[]
  tags: string[]
  variants: ComponentVariant[]
}

export type Block = {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Component: React.ComponentType<any>;
  code: string;
};