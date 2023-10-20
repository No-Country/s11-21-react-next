import Map from "@/components/Map/Map";
import { SearchButtons } from "@/components/SearchButtons/SearchButtons";
import SearchInput from "@/components/Searcher/searchInput";
import SearchResultCard from "@/components/SearchResultCard/SearchResultCard";

function SearchresultPage() {
  return (
    <div className="flex flex-col h-auto items-center ">
      <SearchButtons />
      <SearchInput />
      <Map />
      <SearchResultCard />
      <SearchResultCard />
      <SearchResultCard />
    </div>
  );
}

export default SearchresultPage;
