import { useRef } from "react";
import { MoveLeft, MoveRight } from "../layout/ArrowMove";
import ShopCard from "../layout/cards/ShopCard";
import CategoryCard from "../layout/cards/CategoryCard";
import type { ShopCardProp } from "@src/types/User";

interface PageProps {
  data: ShopCardProp[];
  title?: string | undefined;
  row?: boolean;
  // categories?: boolean;
}

const ShopRow = ({ data, title, row = true }: PageProps) => {
  const sliderRef = useRef(null);

  return (
    <div>
      <div className="pt-5 md:pt-9 ">
        <h2 className="font-bold md:text-xl p-2">{title}</h2>

        {!row ? (
          <div className="flex flex-wrap gap-x-4">
            {data?.map((item, index) => (
              <ShopCard key={`${index} ${item?.title}`} data={item} />
            ))}
          </div>
        ) : (
          <div className="relative flex items-center group">
            <MoveLeft sliderRef={sliderRef} />
            <div
              className="py-1 md:py-3 w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth relative no-scrollbar"
              ref={sliderRef}
            >
              {data?.map((item, index) => (
                <CategoryCard key={`${index} ${item.title}`} data={item} />
              ))}
            </div>

            <MoveRight sliderRef={sliderRef} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ShopRow;
