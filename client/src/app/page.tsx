import Portada from "@/components/Portada/Portada";
import CarouselCard from "@/components/Carousel/CarouselCard";
import Populars from "@/components/Carousel/Headers/Populars";
import BestRated from "@/components/Carousel/Headers/BestRated";

export default function Home() {
  return (
    <main className="flex flex-col h-auto overflow-y-scroll">
      <Portada />
      <Populars />
      <div className="flex overflow-x-auto overflow-hidden">
        <CarouselCard />
      </div>
      <BestRated />
      <div className="flex overflow-x-auto overflow-hidden">
        <CarouselCard />
      </div>
      <div className="flex flex-row justify-between mt-4">
        <div className="pl-8">
          <h3
            className="text-black font-semibold 
        "
          >
            Vistos recientemente
          </h3>
        </div>
        <button className="text-[#FD7B03] flex pr-6">Ver más</button>
      </div>
      <div className="flex overflow-x-auto overflow-hidden">
        <CarouselCard />
      </div>
    </main>
  );
}
