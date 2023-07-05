import {BsCheck2All} from "react-icons/bs"

export const MainBody = (props) => {
    return (
    <div className='w-full h-[37.5rem] block  flex-wrap content-start overflow-y-scroll no-scrollbar' >
      {props.messageList.map((e)=>{
        return(
          e.x?
          <div className='w-full flex h-auto justify-end relative'>
            <div className={`h-auto w-auto min-h-2 max-h-[20rem] min-w-2 max-w-[13rem] bg-[${props.chatBalloon}] mt-1 p-2  pb-3 pl-3 rounded-t-3xl rounded-bl-3xl break-words text-black font-quicksand `}>{e.x}</div>
            <div className="h-[1.4rem] w-[4rem] absolute bottom-[-6px] left-[24.7rem] font-bold text-black text-[10px]">{e.date}</div>
            <div className="flex absolute bottom-0 right-1"><BsCheck2All className={e.seen?"text-[#45CFDD] text-md":"text-md"}/></div>
          </div> 
          :
          <div className='w-full flex h-auto relative'>
            <div className={`h-auto w-auto min-h-2 max-h-[20rem] min-w-2 max-w-[13rem] bg-[${props.chatBalloon}] mt-2 p-2 pb-3 rounded-t-3xl rounded-br-3xl break-words text-black font-quicksand`}>{e.y}</div>
            <div className="h-[1.4rem] w-[4rem] flex absolute bottom-[-6px] left-[10rem] font-bold text-black text-[10px] ">{e.date}</div>
          </div>
        )
      })}
    </div>
)}
