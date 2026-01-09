
export interface ComponentVariant {
  id: string
  name: string
  description: string
  preview?: React.ReactNode
  code: string
  type: string
  filePath?: string
  installCommand: string
  addedAt?: number // Timestamp when the file was created/modified
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
  latestAddedAt?: number // Most recent file modification in this category
}

export type Block = {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Component: React.ComponentType<any>;
  code: string;
};