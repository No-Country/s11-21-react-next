import CarouselCard from "@/components/Carousel/CarouselCard";

export default function Home() {
  return (
    <main className="flex h-screen flex-col overflow-x-auto">
      <div className="flex flex-row justify-between">
        <div className="pl-8">
          <h3
            className="text-black font-semibold 
        "
          >
            Populares
          </h3>
        </div>
        <button className="text-[#FD7B03] flex pr-8">Ver más</button>
      </div>
      <CarouselCard />
      <div className="flex flex-row justify-between mt-4">
        <div className="pl-8">
          <h3
            className="text-black font-semibold 
        "
          >
            Mejor evaluados
          </h3>
        </div>
        <button className="text-[#FD7B03] flex pr-8">Ver más</button>
      </div>
      <CarouselCard />
      <div className="flex flex-row justify-between mt-4">
        <div className="pl-8">
          <h3
            className="text-black font-semibold 
        "
          >
            Vistos recientemente
          </h3>
        </div>
        <button className="text-[#FD7B03] flex pr-8">Ver más</button>
      </div>
      <CarouselCard />
    </main>
  );
}
