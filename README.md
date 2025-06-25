# Novel Ecommerce - Database-Free eCommerce Solution  

**Novel Ecommerce** is built with **Next.js 15, TypeScript, Tailwind CSS, and Redux**.

## Features    
- **Fast & Lightweight** – Built with Next.js and optimized for performance.  
- **Cart & Checkout** – LocalStorage cart with Stripe, PayPal (Standard + Express Checkout), and Cash on Delivery.
- **SEO Optimized** – Fast, indexable product pages.  
- **Deploy Anywhere** – Works on Vercel, or any static hosting.  



## Tech Stack  
- **Frontend**: Next.js 15, TypeScript, Tailwind CSS, Redux  


## Getting Started  

### Install Dependencies
```sh
npm install
```

### Configuration

**/configs/products.json** - Contains all the product data for your store. Each product includes fields like:
- ID, Title, Slug, ShortDescription, LongDescription
- RegularPrice, SalePrice, Currency, FeatureImageURL
- ProductImageGallery, Category, SubscriptionType, etc.

This file is the source of truth for product listings shown on the site and is fully editable without a database. You can manage physical or digital products here.

**/configs/locale.en.json** - Manages all localized content for your store’s interface including:
- UI labels (buttons, messages)
- Navigation menu items
- Footer and contact info
- Social media links
- Homepage and About page content

Use this to customize language, structure, and brand messaging across your storefront.

**/configs/checkout.json** - Defines all settings related to the checkout experience:
- Shipping Methods: Names, prices
- Available Countries: Separate lists for shipping and billing countries


### Code and TypeScript Validation
```sh
npm run lint
```

```sh
npx tsc --noEmit
```

### Run the Development Server
```sh
npm run dev
```

Then open http://localhost:3000 in your browser.


### How It Works
- **Product Listings** – All product data is stored in a flat products.json file. No database or backend is needed for product management.
- **Cart & Checkout** – Users add products to a cart, which is managed entirely in the browser using LocalStorage. During checkout, users enter shipping info 


### Release Notes

##### Release 1.0.0: MVP (28-June-2025)

- JSON-based product listings
- Cart stored in LocalStorage
- Checkout 

