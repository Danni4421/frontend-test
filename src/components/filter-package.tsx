import { useState } from "react";

export type FilterOption =
  | "Penawaran Terbaik"
  | "Hot Promo"
  | "Paket Sakti"
  | "Paket Super Hemat";

type FilterButtonOptionsProps = {
  id: number;
  label: FilterOption;
};

const FilterButtonOptions: FilterButtonOptionsProps[] = [
  {
    id: 1,
    label: "Penawaran Terbaik",
  },
  {
    id: 2,
    label: "Hot Promo",
  },
  {
    id: 3,
    label: "Paket Sakti",
  },
  {
    id: 4,
    label: "Paket Super Hemat",
  },
];

interface PackageFilterProps {
  onChangeFilter: (filter: FilterOption) => void;
}

export function PackageFilter({ onChangeFilter }: PackageFilterProps) {
  const [activeFilter, setActiveFilter] =
    useState<FilterOption>("Penawaran Terbaik");

  return (
    <div className="flex flex-wrap gap-3">
      {FilterButtonOptions.map((option) => (
        <button
          key={option.id}
          onClick={() => {
            setActiveFilter(option.label);
            onChangeFilter(option.label);
          }}
          className={`
            px-6 py-2 rounded-full text-sm font-medium transition-colors
            ${
              activeFilter === option.label
                ? "bg-slate-900 text-white"
                : "bg-white text-slate-900 border border-slate-200 hover:bg-slate-50"
            }
          `}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
