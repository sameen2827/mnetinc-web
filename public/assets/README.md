# Assets Folder

This folder contains all the static assets for the MNet website including logos, images, icons, and backgrounds.

## Folder Structure

```
assets/
├── logos/           # Company and partner logos
│   ├── mnet-logo.svg
│   ├── aws-logo.svg
│   ├── azure-logo.svg
│   └── gcp-logo.svg
├── images/          # General images and photos
├── icons/           # UI icons and symbols
└── backgrounds/     # Background images and patterns
    └── hero-bg.svg
```

## Usage

### In React Components

```tsx
import { getLogoPath, getImagePath } from '../utils/assets'

// Use logos
<img src={getLogoPath('mnet')} alt="MNet Logo" />

// Use images
<img src={getImagePath('hero')} alt="Hero Background" />

// Use custom paths
<img src={getAssetPath('logos/custom-logo.svg')} alt="Custom Logo" />
```

### Direct Path Access

```tsx
// Direct access to assets
<img src="/assets/logos/mnet-logo.svg" alt="MNet Logo" />
```

## File Formats

- **Logos**: SVG (scalable, crisp at any size)
- **Images**: SVG, PNG, JPG (optimized for web)
- **Icons**: SVG (scalable, customizable)
- **Backgrounds**: SVG (scalable, lightweight)

## Adding New Assets

1. **Place files** in the appropriate subfolder
2. **Update** `src/utils/assets.ts` with new paths
3. **Use** the utility functions in your components
4. **Commit** and push changes

## Optimization Tips

- **SVG logos** for crisp display at any size
- **Compress images** before adding to assets
- **Use descriptive filenames** for easy identification
- **Keep file sizes** under 500KB for optimal performance

## Brand Guidelines

- **MNet Logo**: Primary brand logo with rocket design
- **Cloud Partner Logos**: Official logos from AWS, Azure, GCP
- **Color Scheme**: Primary (#0ea5e9), Secondary (#8b5cf6)
- **Style**: Modern, professional, technology-focused
