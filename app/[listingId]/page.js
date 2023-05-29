import Image from "next/image";
import { fetchListingById } from "../../apis/listings";

const ListingDetails = async ({ params }) => {
  const listingDetails = await fetchListingById(params.listingId);

  return (
    <div className="flex flex-col">
      {/* Title */}
      <div className="flex flex-col">
        <h1>{listingDetails.title}</h1>
        <div className="flex align-middle">
          <div>{listingDetails.ratings.guestSatisfactionOverall}</div>
          <div>{listingDetails.visibleReviewCount}</div>
          {listingDetails.host?.isSuperhost && <div>Superhost</div>}
          <div>
            {listingDetails.location.city},{" "}
            {listingDetails.location.country.title}
          </div>
        </div>
      </div>
      {/* Images */}
      <div className="flex align-middle justify-start flex-wrap">
        {listingDetails.images.data?.map((image) => (
          <div key={image.url} className="p-2 m-2">
            <Image
              // TODO: Temporary use 100x100
              // width={image.width}
              // height={image.height}
              width={100}
              height={100}
              alt="Interior"
              src={image.url}
            />
          </div>
        ))}
      </div>
      {/* Host info */}
      <div className="flex align-middle justify-between">
        <h1>
          {listingDetails.type} hosted by {listingDetails.host?.name}
        </h1>
        <div>
          <Image
            src={listingDetails.host?.avatar.url}
            width={listingDetails.host?.avatar.width}
            height={listingDetails.host?.avatar.height}
            alt="Host"
          />
        </div>
      </div>
      {/* TODO: Render this in markdown or html */}
      <div>{listingDetails.description}</div>

      {/* Amenities */}
      <div>
        <h1>What this place offers</h1>
        {listingDetails.amenities.data?.map((amenity) => (
          <div key={amenity.name}>
            {amenity.title} - {amenity.available ? "Yes" : "No"}
          </div>
        ))}
      </div>

      {/* Location */}
      <div>
        {listingDetails.location.city}, {listingDetails.location.country.title}
      </div>

      {/* Reserve */}
      {/* TODO: Design whole card */}
      <div className="flex align-middle justify-between fixed right-0">
        {listingDetails.currency.symbol}
        {listingDetails.price}/night
      </div>
    </div>
  );
};

export default ListingDetails;
