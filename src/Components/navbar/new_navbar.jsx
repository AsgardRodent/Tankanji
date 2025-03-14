import React from 'react'
import { CgProfile } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';
import Logo from "../../Images/logo.svg";
import Search from "../../Images/Search.svg"


const New_navbar = () => {

    const navigate = useNavigate()
    
        const levels = () => {
          navigate('/levels')
        }
            
        const Quiz = () => {
          navigate('/Quiz')
        }
        
        const Home = () => {
          navigate('/Home')
        }

        const Ranks = () => [
          navigate('/Ranks')
      ]
    
        const Help = () => {
          navigate('/Help')
        }
        const Profile = () => {
          navigate('/Profile')
        }
  return (
    <div>
      <div className='w-full h-[60px] pt-10 flex flex-row justify-center items-center gap-2'>
        <div className='w-[35px] h-[35px] rounded-full flex justify-center items-center'>
          <img src={Search} alt="Search" className="h-full w-full object-contain"/>
        </div> 
        <div className='w-[40%] h-[40px] bg-[#EBDEBB] rounded-lg flex justify-center items-center gap-16 text-[#18517A]'>
            <ul className='flex flex-row gap-16 items-center'>
                <li onClick={levels}>Levels</li>
                <li onClick={Quiz}>Quiz</li>
                <li onClick={Home}> 
                  <div className="h-[55px] w-[55px] rounded-md flex items-center justify-center">
                    <img src={Logo} alt="Logo" className="h-full w-full object-contain"/>
                  </div>
                </li>
                <li onClick={Ranks}>Ranks</li>
                <li onClick={Help}>Help</li>
            </ul>
        </div>
        <div className='w-[40px] h-[40px] rounded-full flex items-center justify-center' onClick={Profile}>
            <CgProfile className='w-full h-full text-[#18517A]'/>
        </div>
      </div>
    </div>
  )
}

export default New_navbar
