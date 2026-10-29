import Image from "next/image";
import NavLinks from "./NavLinks";
import UserInfo from "./UserInfo";
import CurrentDate from "./CurrentDate";

const Header = () => {
  return (
    <header className="relative w-full bg-white py-3 shadow-sm">
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-1 sm:gap-2">
          {/* Logo and Title Section */}
          <div className="flex items-center gap-3">
            <Image
              className="w-10 h-10 object-contain"
              height={50}
              width={50}
              src="/logo.webp"
              alt="Logo"
            />

            <div className="flex flex-col items-center sm:items-start">
              <span className="text-2xl font-bold tracking-tight text-red-700">
                Bangla News 24
              </span>
              <CurrentDate />
            </div>
          </div>

          {/* Auth Buttons Section */}
        
        </div>
      </div>
     <div className="flex items-center justify-between">
      <div></div>
       <NavLinks/>
       <UserInfo/>
  
     </div>
    </header>
  );
};

export default Header;