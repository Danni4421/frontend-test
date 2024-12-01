import { useState } from "react";
import { useDebounce } from "use-debounce";
import { useSearch } from "@/hooks/useSearch";
import { useQuery } from "@tanstack/react-query";

//==> Components <==//
import { SearchBar } from "@/components/search-bar";
import { PackageList } from "@/components/packages-list";
import { FilterOption, PackageFilter } from "@/components/filter-package";
import { PackageListSkeleton } from "@/components/skeletons/package-list-skeleton";

//==> Libs <==//
import { getAllPackages } from "@/lib/packages";

export default function PackagesPage() {
  const { keyword: searchKeyword, setSearchKeyword } = useSearch({
    paramKeyword: "search",
  });
  const [filterOption, setFilterOption] = useState<FilterOption | null>(null);
  const [debouncedKeyword] = useDebounce(searchKeyword, 500);
  const [debouncedFilter] = useDebounce(filterOption, 300);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["packages", debouncedKeyword, debouncedFilter],
    queryFn: () => getAllPackages(debouncedKeyword || "", debouncedFilter),
    initialData: [],
  });

  const isDebouncing =
    searchKeyword !== debouncedKeyword || filterOption !== debouncedFilter;

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Something went wrong...</p>;
  }

  return (
    <div className="px-8">
      <div className="flex flex-col items-center gap-8 mt-12">
        <SearchBar
          onChange={(event) => {
            setSearchKeyword(event.target.value);
            if (filterOption) {
              setFilterOption(null);
            }
          }}
          defaultValue={searchKeyword || ""}
          placeholder="Cari paket pilihanmu disini!"
        />
        <PackageFilter onChangeFilter={setFilterOption} />
      </div>

      <section className="mx-auto">
        {isDebouncing ? (
          <PackageListSkeleton />
        ) : data.length !== 0 ? (
          <PackageList packages={data} />
        ) : (
          <p className="text-center mt-12">Paket tidak ditemukan</p>
        )}
      </section>
    </div>
  );
}
