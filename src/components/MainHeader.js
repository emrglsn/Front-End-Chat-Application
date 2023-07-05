import {MdVideoCameraFront} from "react-icons/md"
import {FaPhone} from "react-icons/fa"
import {BiDotsVerticalRounded} from "react-icons/bi"
 
 
 export const MainHeader = (props) => {
    return (
    <div className='w-full h-[3.5rem]  flex items-center'>
      <div className='w-12 h-12 m-2'><img className='object-cover rounded-[50%]' src={props.currentUser.pp} alt=''/></div>
      <span className={`absolute left-[4.5rem] top-[0.2rem] font-bacasime-antique font-bold ${!props.currentUser.online?"text-2xl top-[.7rem]":"text-xl"}`}>{props.currentUser.username}</span>
      <span className='absolute left-[4.7rem] top-[1.7rem] text-xs'>{props.currentUser.online?"Online":""}</span>
      <MdVideoCameraFront className='absolute right-[4rem] text-[1.5rem] cursor-pointer'/>
      <FaPhone className='absolute right-[2.3rem] text-[1rem] cursor-pointer'/>
      <BiDotsVerticalRounded className='absolute right-[.1rem] text-3xl cursor-pointer'/>
    </div>
    )
}