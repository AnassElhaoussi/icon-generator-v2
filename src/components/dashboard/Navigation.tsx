import React, {useEffect, useContext,useState} from "react";
import { logo } from "../../assets";
import { UserContext } from "../../Context/UserContextProvider";
import { UserContextType } from "../../types/Context";
import { googleLogout } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate()
  const {user, logoutUser} = useContext(UserContext) as UserContextType
  const [profile, setProfile] = useState([])
  console.log(user)
  useEffect(() => { 
    async function fetchData(){
        const response = await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
            headers: {
                "Authorization": `Bearer ${user?.access_token}`,
                "Accept" : "application/json"
            }
        })
        const data = await response.json()
        setProfile(data)
    }
    fetchData()
  }, [])

  const signOut = () => {
    googleLogout()
    logoutUser()
    location.href = "/"
  }
  return (
    <nav className="relative flex items-center justify-between py-3 px-6">
      <h3 className="text-4xl font-light">IconAI</h3>
      <div className="flex">
        <button>Credits</button>
        <img src={profile.picture} alt="" />
        <button onClick={signOut}>logout</button>

      </div>
    </nav>
  );
};
export default Navigation;
