import { useSearchParams } from "react-router-dom";

interface SearchParams {
  paramKeyword: string;
}

export function useSearch({ paramKeyword }: SearchParams) {
  const [searchParams, setSearchParams] = useSearchParams();

  const keyword = searchParams.get(paramKeyword);

  const setSearchKeyword = (value: string) => {
    setSearchParams({ [paramKeyword]: value });
  };

  return { keyword, setSearchKeyword };
}
