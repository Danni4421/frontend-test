//==> Components <==//
import { Swiper, SwiperSlide } from "swiper/react";
import { OfferCard } from "@/components//offer-card";

//==> Types <=//
import { Package } from "@/types";

//==> Assets <==//
import offerImage from "@/assets/offer-image.png";

import "swiper/swiper-bundle.css";

interface OfferProps {
  packages: Package[];
}

export function Offer({ packages }: OfferProps) {
  return (
    <div className="flex flex-col lg:flex-row mt-6 lg:mt-12 items-center gap-3 lg:gap-5 p-4 lg:p-8 rounded-xl lg:rounded-2xl bg-secondary-base relative mx-4 lg:mx-0">
      {/* Image container with responsive sizing */}
      <div className="w-32 lg:w-52 shrink-0">
        <img
          src={offerImage}
          alt="Offering hot products"
          className="w-full h-auto"
        />
      </div>

      {/* Text content with responsive width and padding */}
      <div className="flex flex-col gap-3 lg:gap-5 w-full lg:w-72 p-2 lg:p-5 text-center lg:text-start">
        <h1 className="text-xl lg:text-2xl font-bold">Produk Terbaik!</h1>
        <p className="text-sm lg:text-base">
          Produk terbaik untuk kebutuhan internet Anda, hemat, cepat, dan sesuai
          gaya hidup!
        </p>
      </div>

      <div className="w-full overflow-hidden">
        <Swiper
          slidesPerView={1}
          spaceBetween={8}
          breakpoints={{
            320: {
              slidesPerView: 1.2,
              spaceBetween: 8,
              centeredSlides: true,
            },
            480: {
              slidesPerView: 1.5,
              spaceBetween: 12,
              centeredSlides: true,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 16,
              centeredSlides: false,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
          }}
          className="mySwiper !pb-8"
          autoHeight
        >
          {packages.map((pkg: Package, index: number) => (
            <SwiperSlide key={index} className="h-auto">
              <OfferCard _package={pkg} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
