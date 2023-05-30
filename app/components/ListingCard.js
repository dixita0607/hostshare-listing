"use client";

import Image from "next/image";
import Link from "next/link";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

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
