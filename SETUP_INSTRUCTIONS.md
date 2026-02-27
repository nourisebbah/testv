# MOBEX Salla Theme - Setup Instructions

## ✅ What Has Been Done

### 1. Complete Theme Structure
- ✅ Copied entire reference theme (theme-raed) to `salla-theme/` folder
- ✅ All config files, JS, SCSS structure intact
- ✅ Only VIEW files (Twig templates) have been customized to match MOBEX frontend design

### 2. Custom Components Created
- ✅ `components/header/top-banner.twig` - Top promotional banner with countdown
- ✅ `components/header/header.twig` - Updated to match MOBEX header design
- ✅ `components/footer/footer.twig` - Updated to match MOBEX footer design
- ✅ `components/home/featured-categories.twig` - Featured categories grid
- ✅ `components/home/featured-products.twig` - Featured products grid
- ✅ `components/home/featured-brands.twig` - Featured brands
- ✅ `components/home/featured-manufacturers.twig` - Featured manufacturers
- ✅ `components/home/promotional-banners.twig` - Promotional banners

### 3. Custom Styles Added
- ✅ `styles/04-components/mobex-custom.scss` - All MOBEX frontend styles
- ✅ Integrated into `app.scss` - Will compile with theme
- ✅ MOBEX brand colors and design preserved

### 4. Assets Copied
- ✅ All images from frontend copied to `src/assets/images/`
- ✅ Brand logos, category images, product images, etc.

## 🚀 Next Steps

### Step 1: Install Dependencies
```bash
cd salla-theme
pnpm install
```

### Step 2: Build the Theme
```bash
# Development build (with watch mode)
pnpm run watch

# OR Production build
pnpm run production
```

This will:
- Compile `app.scss` → `public/app.css` (includes all MOBEX styles)
- Compile all JS files → `public/*.js`
- Copy images → `public/images/`

### Step 3: Register Home Components in twilight.json

You need to register the home components so they appear in the Salla theme editor. Add to `twilight.json`:

```json
"components": [
    {
        "key": "mobex-featured-categories",
        "title": {
            "en": "Featured Categories",
            "ar": "التصنيفات المميزة"
        },
        "icon": "sicon-layout-grid-rearrange",
        "path": "home.featured-categories"
    },
    {
        "key": "mobex-featured-products",
        "title": {
            "en": "Featured Products",
            "ar": "المنتجات المميزة"
        },
        "icon": "sicon-shopping-bag",
        "path": "home.featured-products"
    },
    {
        "key": "mobex-featured-brands",
        "title": {
            "en": "Featured Brands",
            "ar": "العلامات التجارية المميزة"
        },
        "icon": "sicon-award-ribbon",
        "path": "home.featured-brands"
    },
    {
        "key": "mobex-featured-manufacturers",
        "title": {
            "en": "Featured Manufacturers",
            "ar": "الشركات المصنعة المميزة"
        },
        "icon": "sicon-car",
        "path": "home.featured-manufacturers"
    },
    {
        "key": "mobex-promotional-banners",
        "title": {
            "en": "Promotional Banners",
            "ar": "البنرات الترويجية"
        },
        "icon": "sicon-image",
        "path": "home.promotional-banners"
    }
]
```

### Step 4: Test in Salla
1. Zip the `salla-theme` folder (excluding `node_modules`, `.git`)
2. Upload to Salla theme manager
3. Activate the theme
4. Go to Theme Editor → Homepage
5. Add the custom components to build your homepage

## 📁 File Structure

```
salla-theme/
├── package.json              ✅ Reference theme config
├── webpack.config.js         ✅ Reference theme config
├── tailwind.config.js        ✅ Reference theme config
├── postcss.config.js         ✅ Reference theme config
├── twilight.json             ✅ Salla theme config (needs component registration)
├── src/
│   ├── assets/
│   │   ├── styles/
│   │   │   ├── app.scss      ✅ Includes mobex-custom.scss
│   │   │   └── 04-components/
│   │   │       └── mobex-custom.scss  ✅ All MOBEX styles
│   │   ├── js/               ✅ All reference theme JS (unchanged)
│   │   └── images/           ✅ All MOBEX images copied
│   ├── views/
│   │   ├── layouts/
│   │   │   └── master.twig   ✅ Updated to use includes
│   │   ├── components/
│   │   │   ├── header/
│   │   │   │   ├── header.twig        ✅ MOBEX design
│   │   │   │   └── top-banner.twig    ✅ MOBEX design
│   │   │   ├── footer/
│   │   │   │   └── footer.twig        ✅ MOBEX design
│   │   │   └── home/
│   │   │       ├── featured-categories.twig    ✅ MOBEX design
│   │   │       ├── featured-products.twig      ✅ MOBEX design
│   │   │       ├── featured-brands.twig       ✅ MOBEX design
│   │   │       ├── featured-manufacturers.twig ✅ MOBEX design
│   │   │       └── promotional-banners.twig    ✅ MOBEX design
│   │   └── pages/
│   │       └── index.twig     ✅ Homepage (uses {% component home %})
│   └── locales/              ✅ Translation files
└── public/                   (Generated by webpack)
```

## 🎨 Design Features

### Header
- Top banner with countdown timer
- Main header with logo, search, currency/language selectors
- Navigation menu with categories button

### Homepage Components
- Featured categories (circular icons)
- Featured products (grid layout)
- Promotional banners (3-column grid)
- Featured brands
- Featured manufacturers (12-column grid)
- Customer reviews/testimonials
- Blog articles preview

### Footer
- Top section with 4 feature boxes (green background)
- Main footer with 5 columns:
  - Logo, social links, newsletter
  - Account links
  - Catalog links
  - Help links
  - Contact information

## ⚙️ Configuration

### Currency & Language Switching
- Uses Salla API as primary method
- Falls back to URL parameters if API unavailable
- Static display if no currencies/languages available

### Dynamic Data
- All components use Salla objects (products, categories, brands, etc.)
- Fallbacks to static content if data unavailable
- No hardcoded placeholders

## 🔧 Customization

### Colors
All MOBEX brand colors are defined in `mobex-custom.scss`:
- `--mobex-primary-blue: #034c8c`
- `--mobex-primary-orange: #f29f05`
- `--mobex-primary-red: #bf3617`
- etc.

### Fonts
- Inter font family imported
- Applied to body element

## ✅ Status

**Theme Structure**: ✅ Complete (based on reference theme)
**View Files**: ✅ Customized to match MOBEX design
**Styles**: ✅ Integrated and ready to compile
**JavaScript**: ✅ All reference theme JS intact
**Images**: ✅ All frontend images copied

**Ready for**: Build and upload to Salla

---

**Next Action**: 
1. Run `cd salla-theme && pnpm install`
2. Run `pnpm run production` to build
3. Register components in `twilight.json`
4. Upload to Salla
