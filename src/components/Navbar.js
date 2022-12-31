import { useLocation } from 'react-router-dom';
import Resume from '../docs/resume.pdf'

export function Navbar() {
    let location = useLocation();
    return(
        <div className= "bg-white flex-1 flex flex-col sticky top-0 items-center bg-teal px-[110px] py-[48px] text-lg md:flex-row text-2xl md:justify-between">
            <div className= " logo">
                <h1 className= 'font-chivo'>ARIANE</h1>
            </div>
            <div className= " navlinks">
                <ul className= "flex flex-row font-chivo space-x-[16px] md:space-x-[32px] text-lg md:text-2xl">
                    <li>
                        <a href= "/" style={location.pathname === '/' ? {textDecorationLine: 'underline'} : {textDecorationLine: 'none'}} >WORK</a>
                    </li>
                    <li>
                        <a href= {Resume} target = "_blank" style={location.pathname === '/resume' ? {textDecorationLine: 'underline'} : {textDecorationLine: 'none'}} >RESUME</a>
                    </li>
                    <li>
                        <a href= "/about" style={location.pathname === '/about' ? {textDecorationLine: 'underline'} : {textDecorationLine: 'none'}} >ABOUT</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}