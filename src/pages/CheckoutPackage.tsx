import { useSessionStore } from "@/store/useSessionStore";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";

//==> Components <==//
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/button";

//==> Lib <==//
import { getPackageById } from "@/lib/packages";
import { createTransaction } from "@/lib/transactions";

export default function CheckoutPackage() {
  const params = useParams();
  const navigate = useNavigate();
  const { user } = useSessionStore();

  const { data, isPending, isError } = useQuery({
    queryKey: ["package", params.id],
    queryFn: () => getPackageById(Number(params.id)),
  });

  const { mutate } = useMutation({
    mutationFn: () => {
      if (!user) {
        throw new Error("User is not logged in");
      }
      return createTransaction(user.id, Number(params.id));
    },
    onSuccess: () => {
      alert("Pembelian berhasil!");
      navigate("/packages");
    },
  });

  if (isPending) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Something went wrong...</p>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-3xl min-h-screen p-8 rounded-lg shadow-md bg-white flex flex-col justify-between">
        {/* Bagian atas (Back button) */}
        <div>
          <Button
            onClick={() => navigate(-1)}
            className="p-3 mb-5 rounded-full"
          >
            <ArrowLeft />
          </Button>
          {/* Bagian tengah (Konten utama) */}
          <div className="mt-3">
            <h1 className="text-2xl font-semibold text-gray-800 mb-6">
              {data.name}
            </h1>
            <p className="text-gray-600">{data.description}</p>
            <p className="text-xl font-bold mt-5">
              {Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
              }).format(data.price)}
            </p>
          </div>
        </div>

        {/* Bagian bamutatewah (Tombol) */}
        <div>
          <Button
            onClick={() =>
              confirm("Apakah Anda yakin ingin membeli paket ini?") && mutate()
            }
            className="mt-4 w-full px-8 py-4 rounded-full"
            colorType="primary"
          >
            Beli
          </Button>
        </div>
      </div>
    </div>
  );
}
