import Portada from "@/components/Portada/Portada";
import CarouselCard from "@/components/Carousel/CarouselCard";
import Populars from "@/components/Carousel/Headers/Populars";
import BestRated from "@/components/Carousel/Headers/BestRated";
import Recently from "@/components/Carousel/Headers/Recently";
import Formulario from "@/components/AlFormulario/AlFormulario";


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
      <Recently />
      <div className="flex overflow-x-auto overflow-hidden">
        <CarouselCard />
      </div>
      <Formulario />
    </main>
  );
}
