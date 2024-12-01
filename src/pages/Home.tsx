//==> Components <==//
import { Hero } from "@/components/hero";
import { Offer } from "@/components/offer";
import { Advantages } from "@/components/advantages";

//==> Queries <==//
import { useQuery } from "@tanstack/react-query";
import { getOfferedPackages } from "@/lib/packages";

export default function Home() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["offered-packages"],
    queryFn: getOfferedPackages,
    initialData: [],
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Something went wrong...</p>;
  }

  return (
    <div>
      {/* Hero */}
      <Hero />

      {/* Best Product */}
      <section className="text-center mt-24">
        <h1 className="text-3xl font-bold">Pilihan Kami Buat Kamu!</h1>
        <Offer packages={data} />
      </section>

      {/* Advantages */}
      <Advantages />
    </div>
  );
}
