import Image from "next/image";
import Search from "./Search";
import Link from "next/link";
import { CgProfile, CgMenu } from "react-icons/cg";

const Header = () => {
  return (
    <div className="flex align-middle justify-between p-5 pl-32 pr-32 border-b-2 border-gray-200 border-solid">
      <Link href="/">
        <Image
          src="/images/logo-with-name.png"
          width={180}
          height={180}
          alt="Hostshare Logo with name"
        />
      </Link>
      <Search />
      <div className="flex align-middle justify-between">
        <CgMenu className="text-2xl" />
        <CgProfile className="ml-4 text-2xl" />
      </div>
    </div>
  );
};

export default Header;
