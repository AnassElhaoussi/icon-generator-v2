import React, {useContext} from "react"
import { UserContext } from "../Context/UserContextProvider"


const Account = () => {
    const {user} = useContext(UserContext)
    return (
        <main>
           Account
        </main>
    )
}

export default Account