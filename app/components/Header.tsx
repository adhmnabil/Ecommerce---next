import Link from "next/link";
import MobileMenu from "./MobileMenu";


export default function Header() {

  return (
    <>


      {/* MAIN HEADER */}
      <header className="bg-white text-gray-900 py-4 px-4 flex justify-between items-center relative z-50">
        {/* Logo & Tagline */}
        <div>
          <h1 className="text-2xl font-bold">
            <Link href="/" className="text-gray-900 hover:text-gray-700">
              Dubisign
            </Link>
          </h1>
        </div>

        <MobileMenu />
      </header>
    </>
  );
}
