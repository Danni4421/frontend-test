//==> Components <==//
import { Button } from "@/components/button";

//==> Images <==//
import advantage1 from "@/assets/advantage-1.png";
import advantage2 from "@/assets/advantage-2.png";

//==> Types <==//
import { type Advantage } from "@/types";

interface AdvantageProps {
  image: string;
  title: string;
  description: string;
  callToAction: string;
  rtl?: boolean;
}

const content: Advantage[] = [
  {
    image: advantage1,
    title: "Pilihan Paket Paling Hemat!",
    description:
      "Temukan berbagai pilihan paket data yang cocok untuk segala aktivitas kamu, mulai dari streaming, gaming, hingga browsing. Nikmati kuota besar dengan harga terjangkau dan masa aktif yang fleksibel.",
    callToAction: "/paket-data",
  },
  {
    image: advantage2,
    title: "Telepon Dimana Saja, Kapan Saja!",
    description:
      "Nikmati kebebasan telepon ke siapa saja, kapan saja, tanpa khawatir kantong bolong. Kuota murah, koneksi lancar, komunikasi lebih mudah!",
    callToAction: "/paket-data",
  },
];

export function Advantages() {
  return (
    <section className="flex flex-col items-center gap-12 mt-24">
      {content.map((advantage, index) => (
        <Advantage
          key={index}
          image={advantage.image}
          title={advantage.title}
          description={advantage.description}
          callToAction={advantage.callToAction}
          rtl={index % 2 !== 0}
        />
      ))}
    </section>
  );
}

function Advantage({
  image,
  title,
  description,
  callToAction,
  rtl = false,
}: AdvantageProps) {
  return (
    <div
      className={`flex flex-col lg:flex-row w-10/12 justify-between gap-12 ${
        rtl && "lg:flex-row-reverse"
      }`}
    >
      <div>
        <img src={image} alt={title} className="w-[40rem]" />
      </div>
      <div className="flex flex-col justify-center items-start gap-5">
        <h2 className="text-3xl font-bold">{title}</h2>
        <p className="text-lg">{description}</p>
        <Button
          onClick={() => {
            console.log(callToAction);
          }}
          className="px-8 py-4 rounded-full"
          colorType="primary"
        >
          Lihat Lebih Lengkap
        </Button>
      </div>
    </div>
  );
}
