"use client";

import Image from "next/image";
import Link from "next/link";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { AiFillStar } from "react-icons/ai";

const ListingCard = ({ details }) => {
  return (
    <div className="first:mt-8 first:ml-2">
      <Carousel
        showStatus={false}
        showIndicators={false}
        autoPlay={false}
        showThumbs={false}
        dynamicHeight={false}
        width={240}
      >
        {details.images.data
          .filter((image) => image.type !== "avatar" && image.type !== "main")
          ?.map((image, index) => (
            <div key={index.toString()}>
              <Image
                src={image.url}
                width={240}
                height={240}
                alt="Property preview"
                className="h-60 w-60 max-w-60 min-w-60 object-cover rounded"
              />
            </div>
          ))}
      </Carousel>
      <Link href={`/${details.id}`} target="_blank">
        <div className="flex justify-between text-sm">
          <div>
            <div className="mt-2">
              <span className="font-semibold">{details.location.city}</span>
              <span>
                {", "}
                {details.location.country?.title}
              </span>
            </div>
            <div>
              <span className="font-semibold">
                {details.currency.symbol}
                {details.price}{" "}
              </span>
              night
            </div>
          </div>
          <div className="flex items-center">
            <AiFillStar />
            <span className="font-semibold ml-0.5 mt-0.5">
              {details.ratings.guestSatisfactionOverall}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ListingCard;
