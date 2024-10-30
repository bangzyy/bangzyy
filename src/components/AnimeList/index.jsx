import Image from "next/image"
import Link from "next/link"

const AnimeList = ({ api }) => {
    return (
        <div className="grid md:grid-cols-6 sm: grid-cols-2 gap-8 px-6">
            {api.data?.map((anime,index) => {
            return (
                <div key= {index} className="relative hover:scale-105 transition-all ">
                <Link href={`/anime/${anime.mal_id}`} className="cursor-pointer text-color-dark  hover:text-color-third
                transition-all" key={index}>
                <Image src={anime.images.webp.image_url}
                    alt="...."
                    width={350} 
                    height={350}
                    className="w-full max-h-64 object-cover" />
                    <div className="absolute flex justify-center items-center bottom-0 w-full
                 bg-color-accent h-16 hover:text-color-third transition-all ">
                <h3 className="justify-center text-center  font-bold md:text-xl text-md p-4">{anime.title}</h3>
                    </div>
            </Link>
                </div>
            )
            })}     
        </div>
    )
}
export default AnimeList