//==> Components <==//
import { Button } from "@/components/button";
import { LabeledButton } from "@/components/labeled-button";

//==> Types <==//
import { Package } from "@/types";

interface OfferCardProps {
  _package: Package;
}

export function OfferCard({ _package }: OfferCardProps) {
  return (
    <div className="flex flex-col justify-between w-52 h-72 bg-white shadow-md rounded-lg p-4 text-start">
      <div>
        <LabeledButton type="primary">{_package.category}</LabeledButton>
        <h2 className="text-xl font-bold mt-4">{_package.name}</h2>
        <p className="text-sm text-gray-500 mt-2">{_package.description}</p>
      </div>
      <div className="flex justify-end mt-5">
        <Button className="px-4 py-1 rounded-full" colorType="danger">
          {Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
          }).format(_package.price)}
        </Button>
      </div>
    </div>
  );
}
