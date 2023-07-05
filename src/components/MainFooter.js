import {MdOutlineSend} from "react-icons/md"
import {GiPhotoCamera} from "react-icons/gi"
import {BsEmojiHeartEyes} from "react-icons/bs"
import EmojiPicker from 'emoji-picker-react';
import { useState } from "react"


export const MainFooter = (props) => {
    const [emoji,setEmoji] = useState(false)
    const [text,setText] = useState("")
    return (
    <div className='w-full h-[3rem]  border-t-2 flex items-center '>
      <BsEmojiHeartEyes className='text-3xl ml-2' onClick={()=>{setEmoji(!emoji)}}/>
      <GiPhotoCamera className='text-3xl ml-3'/>
      <input className='min-h-[2rem] w-[21rem]  outline-none bg-inherit' value={text} onChange={(event)=>{setText(event.target.value)}} placeholder='  say something..'/>
      <MdOutlineSend className='text-2xl' onClick={()=>{props.setMessageList(prev=>[...prev,{x:text,date:new Date().toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'}),seen:false}])}}/>

      <div className='absolute  h-[20rem] w-[20rem] flex top-[16rem]'>
        {emoji?<EmojiPicker 
          height={400}
          width={300}
          onEmojiClick={(emojiData)=>{setText(prev=>(`${prev}${emojiData.emoji}`))}}
          theme='dark'/>:""}
      </div>
    </div>
    )
}