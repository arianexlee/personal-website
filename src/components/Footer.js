import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';

export function Footer(){
    return(
        <div className= "flex flex-col space-y-4 items-center px-[110px] py-[32px] text-lg md:flex-row md:justify-between">
            <div className='font-sans text-center'>
                Contact me at <span className='font-chivo underline'><a href="mailto:arialee@stanford.edu">arialee@stanford.edu</a></span>!
            </div>
            <div className='space-x-4'>
                <SocialIcon style={{width: '40px', height: '40px'}} bgColor='black' url="https://www.linkedin.com/in/ariane-lee-8b95ba192/"/>
                <SocialIcon style={{width: '40px', height: '40px'}} bgColor='black' url="https://github.com/arianexlee"/>
            </div>
        </div> 
    )
}