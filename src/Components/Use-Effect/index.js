import { useReseveList, useShowUser } from "./hocs"
import './style.css'
const List = ({list, handleOnClick}) => <ul className="list">{list.map(item => <li key={item.id} onClick={()=>handleOnClick(item.id)}>{item.name}</li>)}</ul>
const Details = ({user}) => {
    const {name, avatar, details} = user
    return <div className="user">
        <div><img src={avatar}/></div>
        <div className="name">{name}</div>
        <div>{details.city}</div>
        <div>{details.company}</div>
        <div>{details.position}</div>
    </div>
}
const UseEffect = () => {
    const list =useReseveList('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json')
    const [activeUser, setActiveUser] = useShowUser()
    return(
        <section className="section">
        <List list={list} handleOnClick={setActiveUser}/>
        {activeUser&&<Details user={activeUser}/>}
        </section>   
    )
}
export default UseEffect