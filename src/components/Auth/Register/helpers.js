import cookies from "js-cookie";

export const authenticate = (response) => {
    cookies.set("token", response.data.access, {expiresIn: "3d"})
    localStorage.setItem("token", JSON.stringify(response.data.access))
}
export  const isAuth = () => {
    const checkToken = cookies.get("token")
    if (checkToken){
        if (localStorage.getItem("user")){
            return JSON.parse(localStorage.getItem("user"))
        } else {
            return false
        }
    }
}