import {IoMdSettings} from "react-icons/io"
import {BiSearch} from "react-icons/bi"
import {BsCheck2} from "react-icons/bs"
import {RxCross2} from "react-icons/rx"
import { Settings } from "./Settings"
import { useState , useEffect} from "react"
import {AiOutlinePlus,AiOutlineUserAdd} from "react-icons/ai"
import {MdOutlineKeyboardArrowDown,MdOutlineKeyboardArrowUp} from "react-icons/md"
import { FriendRequests , FriendRooms , SearchUsers} from "../data"




export const Dashboard = (props) => {
        const [friendBar,setFriendBar] = useState(false) 
    return (
    <div className={` h-full w-40 `}>
        <div className="h-20 w-full items-center flex border-b-2 border-black">
            <img className='rounded-[50%] w-[3.7rem] h-[3.7rem] ml-3' src="/foto.jpg" alt=''/>
            <IoMdSettings className='text-[2rem] ml-3 cursor-pointer transition ease-linear hover:rotate-180 duration-300' onClick={()=>{props.setSettings(!props.settings)}}/>
            <AiOutlinePlus className='text-[2rem] ml-2 cursor-pointer transition ease-in-out hover:scale-75' onClick={()=>{setFriendBar(!friendBar)}} />
        </div>
        {
        props.settings?
        <Settings 
            setbgImage={props.setbgImage}
            setTheme={props.setTheme}
            theme={props.theme}
            setChatBalloon={props.setChatBalloon}
        />:
        !friendBar?
        <Friends                              
            setMessageList={props.setMessageList}                            
            setChat={props.setChat}
            FriendRooms={FriendRooms}
            setCurrentUser={props.setCurrentUser}
            theme={props.theme}
        />
        :<AddFriends                          
            FriendRequests={FriendRequests}
        />
        }
    </div>
    )
}

const Friends = (props) => {
    return (
    <div className="h-[39rem] w-full block flex-wrap content-start overflow-scroll no-scrollbar">
        {FriendRooms.map((e)=>{
            return (
            <div className={`w-full h-14  border-y-[1px] hover:bg-[gray]/50 items-center flex relative cursor-pointer`}  onClick={()=>{props.setChat(true);props.setMessageList(e.messages);props.setCurrentUser(e)}}>
                <img className='rounded-[50%] h-[2.5rem] w-[2.5rem] ml-1' src={e.pp} alt=''/>
                <span className={`h-[2rem] w-[8rem] absolute top-1 left-12  text-base font-bacasime-antique font-semibold `} >{e.username}</span>
                <span className='h-[1rem] w-[6.5rem] absolute top-7 left-12 text-xs truncate text-ellipsis '>{e.messages[e.messages.length-1].x?e.messages[e.messages.length-1].x:e.messages[e.messages.length-1].y}</span>    
            </div>
            )
        })}  
    </div> 
    )
}
const AddFriends = (props) => {
    const [searchedUsers,setSearchedUsers] = useState([])
    const [showRequests,setShowRequests] = useState(false)
    const [searchText,setSearchText] = useState("")
    const [requests,setRequests] = useState([])
    useEffect(()=>{
        setRequests(FriendRequests)
    },[])
   
    const searchFunc = () =>{
        SearchUsers.forEach((e)=>{
            if(e.username.toLowerCase().match(searchText)){
                setSearchedUsers(prev=>[...prev,e])
            }
        })
    }
    return (
    <div className="h-[39rem] w-full block">
        <div className="w-full h-[3rem] flex items-center">
            <input className="w-[8rem] h-7 flex border-2 outline-none rounded-xl mr-1 ml-2 text-xs" placeholder="Search for someone.." onChange={(event)=>{setSearchText(event.target.value)}}/> <BiSearch className="text-xl" onClick={()=>{searchFunc()}}/>
        </div>
        <div className="h-[36rem] w-full block flex-wrap content-start overflow-scroll no-scrollbar">
            {searchedUsers?
            searchedUsers.map((t)=>{
                return(
            <div className="w-full h-14  border-b-[1px] hover:bg-gray-400 items-center flex relative" >
                <img className='rounded-[50%] h-[2.5rem] w-[2.5rem] ml-1' src={t.pp} alt=''/>
                <span className='absolute top-2 left-12 font-bold text-sm'>{t.username}</span>
                <span className='absolute top-7 left-12 text-[.5rem] w-[5.3rem] h-[1rem] truncate text-ellipsis '>{t.bio}</span>
                <AiOutlineUserAdd className="absolute right-0 transition hover:scale-125 duration-200  text-xl" onClick={()=>{setSearchedUsers(searchedUsers.filter((k)=>{return k!==t}))}}/>
            </div>
                )
            }):""
            }
        <div className="w-full h-auto">
            <div className="w-full h-[1.6rem] justify-center flex items-center">
                <span className="text-xs">Friend Requests</span>{showRequests?
                <MdOutlineKeyboardArrowUp className="text-xl" onClick={()=>{setShowRequests(!showRequests)}}/>:
                <MdOutlineKeyboardArrowDown className="text-xl" onClick={()=>{setShowRequests(!showRequests)}}/>}
            </div>
            {showRequests?
            requests.map((k)=>{
                return (
                <div className="w-full block flex-wrap content-start h-auto">
                    <div className="w-full h-14  border-y-[1px] hover:bg-gray-400 items-center flex relative" >
                        <img className='rounded-[50%] h-[2.5rem] w-[2.5rem] ml-1' src={k.pp} alt=''/>
                        <span className='absolute top-1 left-12 font-bold text-[0.8rem]'>@{k.username}</span>
                        <span className='absolute top-7 left-12 text-[0.6rem] truncate text-ellipsis w-[4rem] h-[3rem]'>{k.bio}</span>
                        <BsCheck2 className="absolute right-6 text-xl hover:scale-150 hover:text-[green]" onClick={()=>{setRequests(requests.filter((e)=>{return e!==k}))}}/>
                        <RxCross2 className="absolute right-1 text-xl hover:scale-125 hover:text-[red]" onClick={()=>{setRequests(requests.filter((e)=>{return e!==k}))}}/>
                    </div> 
                </div>
                )
            })
        :""}
        </div>
        </div>
    </div>
    )
}