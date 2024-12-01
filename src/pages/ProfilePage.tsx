import { useQueries } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

//==> Components <==//
import { Navbar } from "@/components/navbar";

//==> Lib <==//
import { getUserById, getUserPurchaseHistory } from "@/lib/users";

export default function ProfilePage() {
  const { id } = useParams();

  // Fetch user data and purchase history using react-query
  const [
    { data: user, isLoading: userLoading, isError: userError },
    {
      data: purchaseHistory,
      isLoading: purchaseLoading,
      isError: purchaseError,
    },
  ] = useQueries({
    queries: [
      {
        queryKey: ["user", id],
        queryFn: () => getUserById(Number(id)),
      },
      {
        queryKey: ["user", id, "purchases"],
        queryFn: () => getUserPurchaseHistory(Number(id)),
      },
    ],
  });

  // Handle loading and error states
  if (userLoading || purchaseLoading) {
    return <div className="text-center mt-24">Loading...</div>;
  }

  if (userError || purchaseError) {
    return <div className="text-center mt-24">Something went wrong...</div>;
  }

  return (
    <div className="flex flex-col">
      <div className="lg:px-24 lg:py-4">
        <Navbar />
      </div>

      {/* Profile Card Section */}
      <div className="relative w-[65vw] h-[200px] mx-auto bg-primary-base rounded-xl scale-110 mt-12">
        {/* Profile Picture */}
        <div className="absolute z-10 top-24 left-1/2 transform -translate-x-1/2 flex items-center justify-center bg-slate-400 w-44 h-44 rounded-full overflow-hidden">
          <span className="text-3xl text-primary-base font-bold font-telkom-batik">
            {user?.profile?.name
              .split(" ")
              .map((char) => char.charAt(0))
              .join("")}
          </span>
        </div>

        {/* Wave SVG */}
        <svg
          width="100%"
          viewBox="0 0 1138 200"
          fill="none"
          className="absolute bottom-0 rounded-xl"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 200L18.8241 179.378C37.6481 159.52 76.1519 119.039 113.8 83.1418C151.448 48.0079 189.952 17.4567 227.6 27.3859C265.248 37.315 303.752 88.4882 341.4 98.4173C379.048 108.346 417.552 77.7953 455.2 83.1418C492.848 88.4882 531.352 128.969 569 113.693C606.648 98.4173 645.152 27.3859 682.8 17.4567C720.448 6.76382 758.952 57.937 796.6 73.2126C834.248 88.4882 872.752 67.8662 910.4 67.8662C948.048 67.8662 986.552 88.4882 1024.2 88.4882C1061.85 88.4882 1100.35 67.8662 1119.18 57.937L1138 48.0079V200H1119.18C1100.35 200 1061.85 200 1024.2 200C986.552 200 948.048 200 910.4 200C872.752 200 834.248 200 796.6 200C758.952 200 720.448 200 682.8 200C645.152 200 606.648 200 569 200C531.352 200 492.848 200 455.2 200C417.552 200 379.048 200 341.4 200C303.752 200 265.248 200 227.6 200C189.952 200 151.448 200 113.8 200C76.1519 200 37.6481 200 18.8241 200H0Z"
            fill="#202B44"
          />
        </svg>
      </div>

      {/* User Info */}
      <div className="mt-32 mx-auto text-center">
        <h2 className="text-xl font-semibold">
          {user?.profile?.name} ({user?.username})
        </h2>
        <p className="text-gray-600">{user?.email}</p>
      </div>

      {/* Purchase History Section */}
      <div className="mt-10">
        <h2 className="text-2xl text-center mb-4 font-bold">
          Riwayat Pembelian
        </h2>
        <div className="flex justify-center items-center mt-4">
          <div className="bg-secondary-base text-white rounded-2xl w-full max-w-[70vw]">
            <div className="h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-t-lg"></div>
            <div className="px-6 py-4">
              {purchaseHistory && purchaseHistory.length > 0 ? (
                purchaseHistory.map((purchase, index) => (
                  <div
                    key={index}
                    className="flex flex-col bg-white p-4 rounded-md mb-4"
                  >
                    <h3 className="text-lg font-bold text-primary-base mb-2">
                      {purchase?.package.name}
                    </h3>
                    <div className="flex gap-2 text-sm text-gray-600">
                      <p className="font-medium">Tanggal Mulai:</p>
                      <p>{new Date(purchase?.date).toLocaleDateString()}</p>
                    </div>
                    <div className="flex gap-2 text-sm text-gray-600 mt-1">
                      <p className="font-medium">Tanggal Berakhir:</p>
                      <p>{new Date(purchase?.endDate).toLocaleDateString()}</p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center text-gray-400 py-6">
                  Tidak ada riwayat pembelian.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
