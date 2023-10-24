import Map from "@/components/Map/Map";
import { SearchButtons } from "@/components/SearchButtons/SearchButtons";
import SearchInput from "@/components/Searcher/searchInput";
import SearchResultCard from "@/components/SearchResultCard/SearchResultCard";

function SearchresultPage() {
  return (
    <div className="flex flex-col h-auto justify-center items-center mt-12">
      <SearchButtons />
      <SearchInput />
      <Map />
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-2 lg:gap-3">
        <SearchResultCard />
        <SearchResultCard />
        <SearchResultCard />
        <SearchResultCard />
      </div>
    </div>
  );
}

export default SearchresultPage;
