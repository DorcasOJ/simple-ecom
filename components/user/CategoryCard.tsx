'use dom'
import { FeaturedObj } from '@/types/UserType'
import { Box } from '@components/ui/box'
import { Image } from '@components/ui/image'
import { Link } from 'expo-router'



const CategoryCard = ({ data, }: FeaturedObj) => {
    return (
        <Box className="inline-block m-2  items-center justify-center rounded-xl hover:shadow-lg hover:shadow-secondary-foreground/8 dark:hover:shadow-secondary/6 w-[8rem] h-[10rem]">
            <Link href={data?.link || ""}>
                <Box className="rounded-xl w-full h-full overflow-hidden relaBoxe">
                    <Image
                        source={{ uri: data?.image }}
                        alt="item"
                        className="w-full h-full object-cover "
                    />

                    <Box className="rounded-lg px-1 py-2 inline-flex items-center justify-center w-fit text-wrap text-[12px] font-[Lato] tracking-wide  absolute top-0 left-0">
                        <Box className='bg-primary-500 text-white rounded-lg px-2 py-1 '>
                            {data.title}
                        </Box>
                    </Box>
                </Box>
            </Link>
        </Box>
    )
}

export default CategoryCard
