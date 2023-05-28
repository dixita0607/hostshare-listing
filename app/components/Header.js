import Image from "next/image";
import Search from "./Search";

const Header = () => {
  return (
    <div className="flex align-middle justify-between p-8">
      <Image
        src="/images/logo-with-name.png"
        width={200}
        height={200}
        alt="Hostshare Logo with name"
      />
      <Search />
      <div>Profile and Menu</div>
    </div>
  );
};

export default Header;