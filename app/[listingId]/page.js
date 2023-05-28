export default function ListingDetails({ params }) {
  return (
    <div className="flex items-center p-24">
      Listing Details of {params.listingId}
    </div>
  );
}
