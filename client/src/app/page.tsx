import Portada from "@/components/Portada/Portada";
import SearchResultCard from "@/components/card/SearchResultCard";

export default function Home() {
  return (
    <main className="flex h-auto items-center flex-col">
      <Portada></Portada>
      <SearchResultCard />
      <SearchResultCard />
      <SearchResultCard />
      <SearchResultCard />
      <SearchResultCard />
      <SearchResultCard />
      <SearchResultCard />
      <SearchResultCard />
    </main>
  );
}
