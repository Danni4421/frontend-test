import { instanceApi } from "@/lib/main";
import { Package } from "@/types";

/**
 * Fetch all packages
 * Then return packages data
 *
 * @returns {Package[]}
 */
export const getAllPackages = async (
  searchKeyword: string,
  filterOption: string | null
): Promise<Package[]> => {
  try {
    if (filterOption) {
      const packages = await instanceApi
        .get("/packages", {
          params: {
            category: filterOption,
          },
        })
        .then((response) => response.data);

      return packages;
    }

    if (searchKeyword.length < 3) {
      const packages = await instanceApi
        .get("/packages")
        .then((response) => response.data);

      return packages;
    }

    const packages = await instanceApi
      .get("/packages", {
        params: {
          name_like: searchKeyword,
        },
      })
      .then((response) => {
        console.log(response.request);
        return response.data;
      });

    return packages;
  } catch (error) {
    console.log(error);
    return [];
  }
};

/**
 * Fetch package by id
 * Then return package data for PackageDetail component
 *
 * @param id number
 * @returns {Package}
 */
export const getPackageById = async (id: number): Promise<Package> => {
  try {
    const _package = await instanceApi
      .get(`/packages/${id}`)
      .then((response) => response.data);

    return _package;
  } catch (error) {
    console.log(error);
    return {} as Package;
  }
};

/**
 * Fetch all packages with category "Penawaran Terbaik"
 * Then return packages data for Offer component
 *
 * @returns {Package[]}
 */
export const getOfferedPackages = async (): Promise<Package[]> => {
  try {
    const packages = await instanceApi
      .get(`/packages?category=Penawaran Terbaik`)
      .then((response) => response.data);

    return packages;
  } catch (error) {
    console.log(error);
    return [];
  }
};
