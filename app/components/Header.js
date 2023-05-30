import Image from "next/image";
import Search from "./Search";
import Link from "next/link";
import { CgProfile, CgMenu } from "react-icons/cg";

const Header = () => {
  return (
    <div className="flex items-center justify-between py-5 px-8 border-b-2 border-gray-200 border-solid">
      <Link href="/" className="flex items-center">
        <Image
          src="/images/logo-with-name.png"
          width={180}
          height={180}
          alt="Hostshare Logo with name"
        />
      </Link>
      <Search />
      <div className="flex items-center justify-between">
        <CgMenu className="text-2xl" />
        <CgProfile className="ml-4 text-2xl" />
      </div>
    </div>
  );
};

export default Header;
