import type { Metadata } from "next";
import RecentProducts from "./components/homepage/RecentProducts";

// Set page metadata
export const metadata: Metadata = {
  title: `Dubisign`,
};

export default function Home() {
  return (
    <main>
      <RecentProducts />
    </main>
  );
}
