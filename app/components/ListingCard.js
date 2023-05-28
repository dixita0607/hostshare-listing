import Image from "next/image";
import Link from "next/link";

const ListingCard = ({ details }) => {
  return (
    <div className="p-2 m-2 border-solid rounded border-black	border-2">
      <Link href={`/${details.id}`}>
        <Image
          src={details.mainImage.url}
          width={200}
          height={200}
          alt="Hostshare Logo with name"
        />
        <div className="flex align-middle justify-between">
          <div>{details.location.city}</div>
          <div>
            {details.currency.symbol}
            {details.price}/night
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ListingCard;
