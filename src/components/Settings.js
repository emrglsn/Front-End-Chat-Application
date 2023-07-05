import { Wallpapers , ChatBaloons} from "../data"

export const Settings = (props) => {
    return (
    <div className={`h-[39rem] w-[10rem]absolute top-[5rem] ${props.theme?"text-white":"text-black"}`}>
        <span className="w-full h-5 flex justify-center font-kanit">Background</span>

        <div className="w-full h-[13rem]  flex-wrap flex content-start overflow-scroll no-scrollbar justify-center ">
            {Wallpapers.map((e)=>{
                return (
                    <div className={`h-[3.5rem] w-[4rem]  m-1 cursor-pointer `} onClick={()=>{props.setbgImage(e)}}>
                        <img src={e} className="object-fill h-full w-full flex mr-5 rounded-lg transition ease-in-out hover:scale-125" alt=""/>
                    </div>
                )
            })}
        </div>

        <span className="w-full h-5 flex justify-center font-kanit">Chat Balloons</span>

        <div className="w-full h-[5rem]  justify-center flex mt-2 flex-wrap content-start overflow-scroll no-scrollbar ">
            {ChatBaloons.map((e)=>{
            return(
                <div className={e.className + "justify-center items-center transition ease-in-out hover:scale-125 cursor-pointer"} onClick={()=>{props.setChatBalloon(e.color)}}>
                    <span className="text-[.2rem] flex">xxxxxxxxxxxx</span>
                </div>
            )
            })}
        </div>

        <div>
            <label for="small-input" className=" mb-1 ml-[3.5rem] text-sm font-medium font-kanit">Name</label>
            <input type="text" value="Emir Gulsen" className="ml-2 w-[9rem] p-2 text-gray-900 border focus:outline-none rounded-lg bg-gray-50 sm:text-xs dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "/>
        </div>

        <div>
            <label for="small-input" className=" mb-1 ml-[3.5rem] text-sm font-medium font-kanit">Status</label>
            <input type="text" value="No Disturb, I am Busy." className=" ml-2 w-[9rem] p-2 text-gray-900 border focus:outline-none rounded-lg bg-gray-50 sm:text-xs dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "/>
        </div>

        <div>
            <label for="small-input" className={`mb-1 ml-[3.5rem] text-sm font-medium font-kanit`}>Phone</label>
            <input type="text" value="+90 (535) 000 0000" className="ml-2 w-[9rem] p-2 text-gray-900 border focus:outline-none rounded-lg bg-gray-50 sm:text-xs dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "/>
        </div>

        <label class="relative inline-flex items-center cursor-pointer ml-2 mt-2" >
            <input type="checkbox" value="" class="sr-only peer" />
            <div onClick={()=>{props.setTheme(!props.theme)}} className="w-11 h-6  outline-none rounded-full peer dark:bg-[#2C3333] peer-checked:after:translate-x-full  after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-[#2C3333] "></div>
            <span className="font-kanit ml-1"> Dark Mode</span>
        </label>

        <label class="relative inline-flex items-center cursor-pointer ml-2 mt-1" >
            <input type="checkbox" value="" class="sr-only peer" />
            <div  className="w-11 h-6  outline-none rounded-full peer dark:bg-[#2C3333] peer-checked:after:translate-x-full  after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-[#2C3333] "></div>
            <span className="font-kanit ml-1"> Notifications</span>
        </label>

        <div>
            <img className="h-[2rem] w-[3rem] flex absolute bottom-2 " src="/logo.png" alt=""/> <span className="flex absolute bottom-4 left-[3rem]">github/emrglsn</span>
        </div>

    
    </div>
    )
}
