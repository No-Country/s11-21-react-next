import Map from "@/components/Map/Map"
import SearchInput from "@/components/Searcher/searchInput"
import SearchResultCard from "@/components/card/SearchResultCard"

function SearchresultPage() {
  return (
    <div className="flex h-auto items-center flex-col mt-12">
      <SearchInput />
      <Map />
      <SearchResultCard />   
      <SearchResultCard />   
      <SearchResultCard />      
    
    </div>
  )
}

export default SearchresultPage