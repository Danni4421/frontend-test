//==> Components <==//
import { Search } from "lucide-react";

interface SearchBarProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
}

export function SearchBar({ placeholder, ...props }: SearchBarProps) {
  return (
    <div className="relative max-w-2xl w-full">
      <input
        {...props}
        type="text"
        placeholder={placeholder}
        className="w-full px-8 py-6 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-base focus:border-transparent transition-all duration-200"
      />
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 p-4 rounded-full bg-primary-base text-white hover:bg-slate-800 transition-colors duration-200"
        aria-label="Search"
      >
        <Search size={20} />
      </button>
    </div>
  );
}
