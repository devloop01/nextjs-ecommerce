export interface Discount {
  value: number
}

export interface Measurement {
  value: number
  unit: 'KILOGRAMS' | 'GRAMS' | 'POUNDS' | 'OUNCES'
}

export interface Image {
  url: string
  alt?: string
  width?: number
  height?: number
}
