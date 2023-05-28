import Image from "next/image";

const ListingCard = ({ details }) => {
  return (
    <div className="p-2 m-2 border-solid rounded border-black	border-2">
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
    </div>
  );
};

export default ListingCard;
