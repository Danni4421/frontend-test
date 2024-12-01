import { useNavigate } from "react-router-dom";

//==> Components <==//
import { Button } from "@/components/button";

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-2xl text-gray-600 mb-8">
        Oops! Halaman yang Anda cari tidak ditemukan.
      </p>
      <Button onClick={() => navigate("/")}>Kembali</Button>
    </div>
  );
}
