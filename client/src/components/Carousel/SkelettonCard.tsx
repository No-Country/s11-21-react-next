import { BeatLoader, ScaleLoader } from "react-spinners";

export default function SkelettonCard() {
  return (
    <div className="carousel my-4 mx-auto px-8 flex">
      <div className="carousel-container relative flex gap-2 scroll-smooth snap-x snap-mandatory touch-pan-x z-0">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="carousel-item text-start relative snap-start w-36 h-56 z-10">
            <div className="relative h-56">
              <div className="absolute top-0 left-0 w-full h-full rounded-xl bg-[#FFCF91] flex items-center justify-center">
                <BeatLoader
                  size={10}
                  color={"#FD7B03"}
                  loading={true}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}