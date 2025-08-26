// Asset path utilities
export const ASSETS_PATH = '/assets'

// Logo paths
export const LOGOS = {
  mnet: `${ASSETS_PATH}/logos/mnet-logo.svg`,
  aws: `${ASSETS_PATH}/logos/aws-logo.svg`,
  azure: `${ASSETS_PATH}/logos/azure-logo.svg`,
  gcp: `${ASSETS_PATH}/logos/gcp-logo.svg`,
} as const

// Image paths
export const IMAGES = {
  hero: `${ASSETS_PATH}/backgrounds/hero-bg.svg`,
  // Add more image paths as needed
} as const

// Icon paths
export const ICONS = {
  // Add icon paths as needed
} as const

// Helper function to get asset path
export const getAssetPath = (path: string): string => {
  return `${ASSETS_PATH}/${path}`
}

// Helper function to get logo path
export const getLogoPath = (logoName: keyof typeof LOGOS): string => {
  return LOGOS[logoName]
}

// Helper function to get image path
export const getImagePath = (imageName: keyof typeof IMAGES): string => {
  return IMAGES[imageName]
}
