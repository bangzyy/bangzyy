"use client"
import {MagnifyingGlass} from "@phosphor-icons/react"
import { useRouter } from "next/navigation"
import { useRef } from "react"

const InputSearch = () => {
    const searchRef = useRef()
    const router = useRouter()

    const handleSearch = (event) =>{
    const keyword = searchRef.current.value

        if(!keyword || keyword.trim() == "") return
        if(event.key === "Enter" || event.type === "click"){
            event.preventDefault()
            router.push(`/search/${keyword}`)
        }
    }

    return (
        <div className="relative justify-center items-center">
            <input placeholder="Cari Anime.." 
            className="w-full p-3  rounded-md " 
            ref={searchRef}
            onKeyDown = {handleSearch}
            />
            <button className="absolute top-2 end-0" onClick={handleSearch}>
            <MagnifyingGlass size={23} />
            </button>
        </div>
    )
}
export default InputSearch