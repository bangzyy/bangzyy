import Link from "next/link"
import InputSearch from "./InputSearch"
import Config from "/tailwind.config"
import UserActionButton from "./UserActionButton"
const Navbar = () => {
    return (
        <header className="bg-color-accent">
            <div className="flex md:flex-row flex-col gap-3 justify-between md:items-center p-4">
                <Link href="/" className="font-bold text-2xl">ZYY WEB ANIME</Link>
                <InputSearch /> 
                <UserActionButton/>
            </div>
        </header>
    )
}
export default Navbar