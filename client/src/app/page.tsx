import Portada from "@/components/Portada/Portada";
import SearchResultCard from "@/components/card/SearchResultCard";
import ToForm from "@/components/ToForm/toForm";

export default function Home() {
  return (
    <main className="flex h-auto items-center flex-col">
      <Portada></Portada>
      <SearchResultCard />
      <SearchResultCard />
      <SearchResultCard />
      <SearchResultCard />
      <ToForm></ToForm>
    </main>
  );
}
