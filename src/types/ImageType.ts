type ImageSizeType = {
  path?: string
  width?: number
  height?: number
}

type ImageType = {
  src?: string
  srcSet?: string
  path?: string
  width?: number
  height?: number
  images?: ImageSizeType[]
  placeholder?: string
  toString(): string
}

export type { ImageSizeType, ImageType }
