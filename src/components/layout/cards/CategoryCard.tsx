
import type { FeaturedObj } from '@src/types/User'
import { Link } from 'react-router-dom'


const CategoryCard = ({ data, }: FeaturedObj) => {
    return (
        <div className="inline-block m-2  items-center justify-center rounded-xl hover:shadow-lg hover:shadow-secondary-foreground/8 dark:hover:shadow-secondary/6 w-[8rem] h-[10rem]">
            <Link to={data?.link || ""}>
                <div className="rounded-xl w-full h-full overflow-hidden relative">
                    <img
                        src={data?.image || ""}
                        alt="game"
                        className="w-full h-full object-cover "
                    />

                    <span className="rounded-xl p-1 inline-flex items-center justify-center w-fit text-wrap text-[12px] font-[Lato] tracking-wide  absolute top-0 left-0">
                        <span className='bg-primary text-white rounded-xl px-2 py-1 '>
                            {data.title}

                        </span>
                    </span>
                </div>
            </Link>
        </div>
    )
}

export default CategoryCard
