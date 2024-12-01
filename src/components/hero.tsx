//==> Components <==//
import { Button } from "@/components/button";

//==> Assets <==//
import list from "@/assets/list.png";
import speedtest from "@/assets/speedtest.png";

export function Hero() {
  return (
    <div className="flex flex-col justify-center min-h-[20rem] lg:h-80 mt-16 lg:mt-24 mx-4 lg:mx-0 rounded-3xl lg:rounded-se-7xl lg:rounded-es-7xl bg-primary-base relative">
      {/* Main content container */}
      <div className="flex flex-col gap-8 lg:gap-16 px-6 lg:px-16 py-8 lg:py-0 relative z-10">
        {/* Text content */}
        <div className="flex flex-col gap-2 text-center sm:text-start">
          <h1 className="text-2xl lg:text-4xl text-white font-telkom font-bold max-w-full lg:w-80">
            Internet Cepat, Harga Terjangkau
          </h1>
          <p className="text-sm lg:text-base text-white max-w-full lg:w-96">
            Dapatkan pilihan paket internet berkualitas dengan harga yang
            menghemat kantong Anda.
          </p>
        </div>

        {/* CTA Button */}
        <Button
          className="w-96 sm:w-60 mx-auto sm:mx-0 px-8 py-4 rounded-full"
          colorType="secondary"
        >
          Beli Sekarang
        </Button>
      </div>

      {/* Images container - Hidden on mobile, shown from small breakpoint up */}
      <div className="hidden sm:block">
        {/* Speedtest image */}
        <img
          src={speedtest}
          alt="Speedtest visualization"
          className="absolute right-4 lg:right-28 -bottom-8 w-48 lg:w-72 -rotate-12"
        />

        {/* List image */}
        <img
          src={list}
          alt="List of available products"
          className="absolute -right-4 lg:-right-1 -bottom-8 w-48 lg:w-72"
        />
      </div>
    </div>
  );
}
