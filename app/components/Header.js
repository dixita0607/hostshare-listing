import Image from "next/image";
import Search from "./Search";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex align-middle justify-between p-8">
      <Link href="/">
        <Image
          src="/images/logo-with-name.png"
          width={200}
          height={200}
          alt="Hostshare Logo with name"
        />
      </Link>
      <Search />
      <div>Profile and Menu</div>
    </div>
  );
};

export default Header;
