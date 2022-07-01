import { useEffect, useState } from "react";
export const useReseveList = (endpoint) => {
    const [userList, setUserList] = useState([])
    useEffect(()=>{
     fetch(endpoint)
     .then((response)=> response.json())
     .then(data => setUserList(data))
    },[])
    return userList
}
export const useShowUser = () => {
    const [activeUser, setActiveUser] = useState(null)
    const [userId,setUserId] = useState(null)
    useEffect(()=>{
       fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${userId}.json`)
       .then((response)=> response.json())
       .then(data => setActiveUser(data))
    }, [userId])
    return [activeUser,setUserId]
}