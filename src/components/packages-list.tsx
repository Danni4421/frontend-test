//==> Components <==//
import { PackageCard } from "./package-card";

//==> Types <==//
import { Package } from "@/types";

interface PackageListProps {
  packages: Package[];
}

export function PackageList({ packages }: PackageListProps) {
  return (
    <div className="flex flex-col gap-4 mt-8">
      {packages.map((pkg: Package, index: number) => (
        <PackageCard _package={pkg} key={index} />
      ))}
    </div>
  );
}
