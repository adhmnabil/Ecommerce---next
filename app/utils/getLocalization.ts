import fs from "fs";
import path from "path";

// Define Localization Structure
interface LocalizationData {
  labels: {
    searchPlaceholder: string;
    allCategories: string;
    sortByName: string;
    sortByPrice: string;
    sortByNewest: string;
    loadingProducts: string;
    noProductsFound: string;
    productDetails: string;
    products: string;
    recentProducts: string;
  };
}

// Default Localization Fallback
const defaultLocalization: LocalizationData = {
  labels: {
    searchPlaceholder: "Search products...",
    allCategories: "All Categories",
    sortByName: "Sort by Name",
    sortByPrice: "Sort by Price",
    sortByNewest: "Sort by Newest",
    loadingProducts: "Loading products...",
    noProductsFound: "No products found...",
    productDetails: "Product Details",
    products: "Products",
    recentProducts: "Recent Products",
  },
};

// Fetch Localization Data
export const getLocalization = (): LocalizationData => {
  try {
    const localePath = path.join(process.cwd(), "configs/locale.en.json");
    const data = fs.readFileSync(localePath, "utf-8");
    return JSON.parse(data) as LocalizationData;
  } catch (error) {
    console.error("Error loading localization file:", error);
    return defaultLocalization;
  }
};
