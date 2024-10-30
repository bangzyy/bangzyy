import Link from "next/link"
import {authUserSession} from "@/libs/auth-libs"

const UserActionButton = async() => {
    const user = await authUserSession();
    const actionLabel = user ? "Sign Out" : "Sign In" 
    const actionUrl = user ? "/api/auth/signout" : "/api/auth/signin"

    return(
        <div className="flex justify-between  gap-10 text-center text-xl">
            {
                user ? <Link href="/users/dashboard" className="py-1  text-color-accent bg-color-dark rounded-md hover:text-color-third transition-all ">DASHBOARD</Link> : null
            }
            <Link href={actionUrl} className="bg-color-dark text-color-accent py-1 px-12
            inline-block rounded-lg hover:text-color-third transition-all" >{actionLabel}</Link>
        </div>
    )
}
export default UserActionButton