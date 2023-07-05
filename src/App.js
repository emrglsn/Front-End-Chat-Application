
import './App.css';
import { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { MainHeader } from './components/MainHeader';
import { MainBody } from './components/MainBody';
import { MainFooter } from './components/MainFooter';

function App() {
  const [settings,setSettings] = useState(false)   
  const [currentUser,setCurrentUser] = useState("")  
  const [chat,setChat] = useState(false)
  const [messageList,setMessageList] = useState([])
  const [bgimage,setbgImage] = useState("https://w.wallha.com/ws/2/jFRkzyQ9.png")
  const [theme,setTheme] = useState(false)
  const [chatBalloon,setChatBalloon] = useState("#F2EAD3")
return (
<div className="flex justify-center">      
  <div className='h-screen w-screen flex'><img className='object-fill h-full w-full flex' src={bgimage} alt=''/></div>   
    
  <div className={`h-[44rem] w-[38rem] ${theme?"bg-[#080202]/50":"bg-[#CECECEEB]/50"} block  absolute top-5 left-[30%]`}>     
      <div className={`${theme?"text-white":"text-black"}`}>
      
        <Dashboard 
        messageList={messageList}
        setMessageList={setMessageList}
        setChat={setChat}
        setCurrentUser={setCurrentUser}
        setSettings={setSettings}
        settings={settings}
        setbgImage={setbgImage}
        setTheme={setTheme}
        theme={theme}
        setChatBalloon={setChatBalloon}
        />
      
      <div className='  w-[28rem] h-[44rem] absolute top-0 right-0'>               
        {chat?
        <div>
        <MainHeader
          currentUser={currentUser}
        />
        <MainBody
          messageList={messageList}
          chatBalloon={chatBalloon}
        />
        <MainFooter                         
          messageList={messageList}
          setMessageList={setMessageList}
        />
        </div>
        :""}
      </div>
      </div>
  </div>

</div>
   
  );
}

export default App;
