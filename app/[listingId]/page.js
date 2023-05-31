"use client";
import Image from "next/image";
import { useState } from "react";
import { AiFillStar, AiOutlineCloseCircle } from "react-icons/ai";
import { GrGallery } from "react-icons/gr";
import Modal from "react-modal";
import useSWR from "swr";

const getListingDetails = (listingId) => {
  return fetch(`${process.env.NEXT_PUBLIC_URL}/api/${listingId}`).then((res) =>
    res.json()
  );
};

const ListingDetails = ({ params }) => {
  const { data: listingDetails, isLoading } = useSWR(
    [params.listingId],
    getListingDetails
  );

  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  if (isLoading || !listingDetails)
    return <div className="mt-5 text-center">Loading...</div>;
  return (
    <div className="flex flex-col px-32 max-md:px-3 py-5">
      {/* Title */}
      <div className="flex flex-col">
        <h1 className="text-2xl font-medium">{listingDetails?.title}</h1>
        <div className="flex items-center text-gray-700 text-xs font-medium space-x-2">
          <div className="flex items-center">
            <AiFillStar />
            <span>{listingDetails?.ratings?.guestSatisfactionOverall}</span>
          </div>
          <div className="underline">
            {listingDetails?.visibleReviewCount} reviews
          </div>
          <div className="underline">
            {listingDetails?.location?.city},{" "}
            {listingDetails?.location?.country?.title}
          </div>
        </div>
      </div>
      {/* Images */}
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Images of the property"
      >
        <div className="p-2">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-medium">
              A {listingDetails?.type} hosted by {listingDetails?.host?.name}
            </h1>
            <div>
              <button type="button" onClick={closeModal} className="text-xl">
                <AiOutlineCloseCircle />
              </button>
            </div>
          </div>
          <div className="mt-3 flex flex-col justify-center items-center">
            {listingDetails?.images?.data
              ?.filter(
                (image) => image.type !== "avatar" && image.type !== "main"
              )
              ?.map((image, index) => (
                <div key={index.toString()} className="p-1 m-1">
                  <Image
                    width={800}
                    height={image.height}
                    alt="Interior"
                    src={image.url}
                    className="max-w-60 object-cover rounded-md"
                  />
                </div>
              ))}
          </div>
        </div>
      </Modal>
      <div className="flex items-center justify-center flex-wrap mt-2 relative">
        {listingDetails?.images?.data
          ?.filter((image) => image.type !== "avatar" && image.type !== "main")
          ?.slice(0, 8)
          ?.map((image) => (
            <div key={image.url} className="p-1 m-1">
              <Image
                width={280}
                height={240}
                alt="Interior"
                src={image.url}
                className="h-60  min-h-60 object-cover rounded-md"
              />
            </div>
          ))}
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="absolute flex items-center right-14 bottom-4 bg-white p-2 rounded-md text-xs border-black border-2"
        >
          <GrGallery />
          <span className="ml-1">Show all photos</span>
        </button>
      </div>
      <div className="flex space-x-8 max-md:space-x-0">
        <div className="flex-1">
          {/* Host info */}
          <div className="flex items-center justify-between mt-3">
            <h1 className="text-xl font-medium">
              A {listingDetails?.type} hosted by {listingDetails?.host?.name}
            </h1>
            <div className="ml-3">
              <Image
                src={listingDetails?.host?.avatar?.url}
                width={50}
                height={50}
                alt="Host"
                className="rounded-full"
              />
            </div>
          </div>

          {/* TODO: Render this in markdown or html */}
          <div className="mt-3">
            <h1 className="text-xl font-medium">About this place</h1>
            <div title={listingDetails?.description} className="text-sm mt-1">
              {listingDetails?.description?.slice(0, 500)}...
            </div>
          </div>

          {/* Amenities */}
          <div className="mt-3">
            <h1 className="text-xl font-medium">What this place offers</h1>
            <div className="flex flex-wrap items-center">
              {listingDetails?.amenities?.data?.map((amenity, index) => (
                <div
                  key={index.toString()}
                  className={`border-black border-2 rounded-md p-2 m-1 ${
                    !amenity.available
                      ? "line-through text-gray-600 border-slate-600"
                      : ""
                  }`}
                >
                  {amenity.title}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Reserve */}
        {/* TODO: Design whole card */}
        <div className="flex flex-col sticky bg-white border-zinc-300 border-2 shadow-lg rounded-md p-4 mt-4 w-96 max-md:w-[94%] h-fit md:top-5 max-md:fixed max-md:bottom-0 max-md:mt-0">
          <div className="flex align-center justify-between">
            <div>Price:</div>
            <div>
              <span className="font-semibold">
                {listingDetails?.currency?.symbol}
                {listingDetails?.price}{" "}
              </span>
              night
            </div>
          </div>
          <div className="flex align-center justify-between">
            <div>People: </div>
            <div>2</div>
          </div>
          <div className="flex align-center justify-between">
            <div>Check-in:</div>
            <div> 2nd June, 2023</div>
          </div>
          <div className="flex align-center justify-between">
            <div>Check-out:</div>
            <div>6nd June, 2023</div>
          </div>
          <div className="flex align-center justify-between">
            <div>Total nights:</div>
            <div>4 nights</div>
          </div>
          <div className="flex align-center justify-between">
            <div>Total:</div>
            <div className="font-semibold">
              {listingDetails?.currency?.symbol}
              {4 * listingDetails?.price}
            </div>
          </div>
          <button
            type="button"
            className="bg-primary p-2 mt-3 rounded-md text-white"
          >
            Reserve
          </button>
        </div>
      </div>
      {/* TODO: Location map */}
    </div>
  );
};

export default ListingDetails;
