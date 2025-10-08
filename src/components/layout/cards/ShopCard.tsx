import type { ShopCardProp } from "@src/types/User";
import { Link } from "react-router-dom";



const ShopCard = ({ data }: { data: ShopCardProp }) => {
    return (
        <div className="inline-block ml-2 mb-5 items-center justify-center rounded-lg hover:shadow-lg hover:shadow-secondary-foreground/8 dark:hover:shadow-secondary/6 w-[12rem] h-[16rem] border border-base-content/10">
            <Link to={data?.link || ""}>
                <div className="rounded-lg p-1 w-full h-[60%] overflow-hidden">
                    <img
                        src={data?.image || ""}
                        alt="stores"
                        className="w-full h-full object-cover rounded-lg "
                    />
                </div>
                <div className="w-full h-[40%] flex flex-col items-start px-2 justify-center text-nowrap  text-xs tracking-wide gap-y-3">
                    <div>
                        <h5 className="text-primary text-md">
                            {data.storeName}
                        </h5>
                        <span>{data.category}</span>

                    </div>
                    <div className="flex items-center justify-between w-full gap-x-2">
                        <span>
                            {data.rating && (
                                <span className="">
                                    <span className="text-yellow-500 text-xl">
                                        ★
                                    </span>
                                    <span className="text-base-content/50">
                                        {data.rating}
                                    </span>
                                </span>
                            )}
                        </span>

                        <span>
                            {data.timeRange && (
                                <span className="text-base-content/50">{data.timeRange}</span>
                            )}
                        </span>
                    </div>


                </div>
            </Link>
        </div>
    );
};

export default ShopCard;