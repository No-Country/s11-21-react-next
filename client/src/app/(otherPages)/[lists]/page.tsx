import AlFormulario from "@/components/AlFormulario/AlFormulario";
import RenderBest from "@/components/BestRanqued/RenderBest";

import RedenderFavorites from "@/components/FavoritesRender/RenderFavorites";
import RedenderPopulars from "@/components/Populars/RenderPopulars";
import RenderRecent from "@/components/RecentViewed/RenderRecents";

export default function Page({ params }: { params: { lists: string } }) {
  const paginas = ["favorites", "bestRanqued", "populars", "recentViewed"];

  return (
    <div className="h-auto">
      {params.lists === paginas[0] && <RedenderFavorites />}
      {params.lists === paginas[2] && <RedenderPopulars />}
      {params.lists === paginas[1] && <RenderBest />}
      {params.lists === paginas[3] && <RenderRecent />}
      <AlFormulario />
    </div>
  );
}
