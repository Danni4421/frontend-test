import { useNavigate } from "react-router-dom";

//==> Components <==//
import { Button } from "@/components/button";
import { LabeledButton } from "@/components/labeled-button";

//==> Types <==//
import { Package } from "@/types";

interface PackageCardProps {
  _package: Package;
}

export function PackageCard({ _package }: PackageCardProps) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/packages/${_package.id}/checkout`)}
      className="flex flex-col justify-between bg-secondary-base rounded-xl p-4 text-start hover:shadow-lg hover:scale-105 transition-transform cursor-pointer"
    >
      <div>
        <LabeledButton
          type={
            _package.category === "Penawaran Terbaik"
              ? "primary"
              : _package.category === "Hot Promo"
              ? "danger"
              : _package.category === "Paket Sakti"
              ? "warning"
              : _package.category === "Paket Super Hemat"
              ? "success"
              : "primary"
          }
        >
          {_package.category}
        </LabeledButton>
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
