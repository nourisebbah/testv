# MOBEX Salla Theme

Complete Salla theme based on reference theme (theme-raed) with MOBEX frontend design integrated.

## 🎯 What This Is

This is a **complete, working Salla theme** that:
- ✅ Uses the proven structure from reference theme (theme-raed)
- ✅ Has all config files, JS, and SCSS from reference theme (untouched)
- ✅ Only VIEW files (Twig templates) customized to match MOBEX frontend design
- ✅ All MOBEX styles integrated into SCSS structure
- ✅ All MOBEX images copied to assets

## 📦 Installation

```bash
cd salla-theme
pnpm install
```

## 🏗️ Build

```bash
# Development (with watch)
pnpm run watch

# Production
pnpm run production
```

## 📁 Structure

- **Config files**: From reference theme (package.json, webpack.config.js, etc.) - ✅ Unchanged
- **JavaScript**: From reference theme - ✅ Unchanged  
- **SCSS**: From reference theme + MOBEX custom styles - ✅ Integrated
- **Views**: Customized to match MOBEX design - ✅ Updated
- **Images**: All MOBEX frontend images - ✅ Copied

## 🎨 Custom Components

All components in `src/views/components/` have been customized:
- Header with top banner
- Footer with MOBEX design
- Home components (categories, products, brands, etc.)

## 🚀 Upload to Salla

1. Build the theme: `pnpm run production`
2. Zip the `salla-theme` folder (exclude node_modules)
3. Upload to Salla theme manager
4. Activate and customize

See `SETUP_INSTRUCTIONS.md` for detailed setup guide.
"# testv" 
