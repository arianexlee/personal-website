import { useEffect, useState } from "react"
import { HashLink as Link } from 'react-router-hash-link';
import { useHeadsObserver } from "../../hooks/hooks";


export function SpotifyTinderPage() {
    const {activeId} = useHeadsObserver()
    const [currentSection, setCurrentSection] = useState('')

    useEffect(() =>{
        setCurrentSection(activeId)
    }, [activeId])

    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -145; 
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'auto' }); 
    }

    console.log(currentSection)

    return(
        <div className= 'flex flex-col md:flex-row main-body items-center justify-end md:items-start md:justify-end xl:justify-center px-[110px] mb-[60px]'>
                <div className= 'none md:block flex flex-col space-y-4 md:space-y-4 md:items-start fixed md:left-[110px] md:top-[128px] mb-10'>
                    <div className= 'flex flex-col font-chivo text-base justify-center' 
                    style={currentSection === 'st-project' ? {textDecorationLine: 'underline'} : {textDecorationLine: 'none'}}>
                        <Link to='#st-project' scroll={el => scrollWithOffset(el)} onClick={() => setCurrentSection('st-project')}>
                        PROJECT
                        </Link>
                    </div>
                    <div className= 'flex flex-col font-chivo text-base justify-center'
                    style={currentSection === 'st-overview' ? {textDecorationLine: 'underline'} : {textDecorationLine: 'none'}}>
                        <Link to='#st-overview' scroll={el => scrollWithOffset(el)} onClick={() => setCurrentSection('st-overview')}>
                        OVERVIEW
                        </Link>
                    </div>
                    <div className= 'font-chivo text-base text-center'
                    style={currentSection === 'st-final' ? {textDecorationLine: 'underline'} : {textDecorationLine: 'none'}}>
                        FINAL PRODUCT
                    </div>
                    <div className= 'flex flex-col font-chivo text-base justify-center' 
                    style={currentSection === 'st-problem' ? {textDecorationLine: 'underline'} : {textDecorationLine: 'none'}}>
                        <Link to='#st-problem' scroll={el => scrollWithOffset(el)} onClick={() => setCurrentSection('st-problem')}>
                        PROBLEM
                        </Link>
                    </div>
                    <div className= 'flex flex-col font-chivo text-base justify-center'
                    style={currentSection === 'st-users' ? {textDecorationLine: 'underline'} : {textDecorationLine: 'none'}}>
                        USERS
                    </div>
                    <div className= 'flex flex-col font-chivo text-base justify-center'
                    style={currentSection === 'st-solution' ? {textDecorationLine: 'underline'} : {textDecorationLine: 'none'}}>
                        SOLUTION
                    </div>
                    <div className= 'flex flex-col font-chivo text-base justify-center'
                    style={currentSection === 'st-reflection' ? {textDecorationLine: 'underline'} : {textDecorationLine: 'none'}}>
                        REFLECTION
                    </div>
                </div>
                <div className='project w-[320px] md:pl-[110px] md:w-[480px] lg:w-[680px] space-y-10'>
                    <div className= 'mb-10 bg-[#FF83C8] h-[240px] w-full rounded-lg border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'>   
                    </div>
                    <div className= 'flex flex-col space-y-10 md:flex-row md:space-x-10 md:space-y-0'>
                    <div className= 'proj&overview space-y-10'>
                        <div className= 'proj'>
                            <h1 className= 'font-chivo text-base py-2 border-b-[1px] border-black mb-2' id='st-project'>
                                PROJECT
                            </h1>
                            <div className= 'font-sans text-2xl mb-3'>
                                <h2 className= 'font-black'>
                                    Project Title
                                </h2>
                                <h2 className= 'italic'>
                                    Project Brief Description
                                </h2>
                            </div>
                            <p className= 'font-sans text-base leading-5'>
                            For the fall & winter semester of the Master of Information program, the faculty released the courses offered on an excel sheet. 
                            This excel sheet made the process of creating a class schedule cumbersome. You'd have to look up classes and use a third party 
                            time table scheduler. I believed there could be an easier way to build a fall & winter timetable.
                            </p>
                        </div>
                        <div className='overview'>
                            <h1 className= 'font-chivo text-base py-2 border-b-[1px] border-black mb-2' id='st-overview'>
                                OVERVIEW
                            </h1>  
                            <div className= 'flex flex-row space-x-10'>
                                <div>
                                    <h2 className= 'font-chivo text-xs py-1'>
                                    PROBLEM
                                    </h2>  
                                    <p className= 'font-sans text-base leading-5'>
                                    For the fall & winter semester of the Master of Information program, the faculty released the courses offered on an excel sheet. 
                                    This excel sheet made the process of creating a class schedule cumbersome.</p>
                                </div>
                                <div>
                                    <h2 className= 'font-chivo text-xs py-1'>
                                    OUTCOME
                                    </h2>  
                                    <p className= 'font-sans text-base leading-5'>
                                    For the fall & winter semester of the Master of Information program, the faculty released the courses offered on an excel sheet. 
                                    This excel sheet made the process of creating a class schedule cumbersome.</p>
                                </div>
                            </div>                           
                        </div>
                    </div>
                    <div className= 'w-full md:w-[240px]'>
                        <h2 className= 'font-chivo text-base py-2 border-b-[1px] border-black mb-2'>
                            INFO
                        </h2>
                        <div className= 'space-y-6'>
                            <div>
                                <h2 className= 'font-chivo text-xs'>
                                ROLE
                                </h2>  
                                <p className= 'font-sans text-base leading-5'>
                                Developer Designer                           
                                </p>
                            </div>
                            <div>
                                <h2 className= 'font-chivo text-xs'>
                                TOOLS
                                </h2>  
                                <p className= 'font-sans text-base leading-5'>
                                Figma
                                </p>   
                                <div className= 'flex flex-row font-sans text-base leading-5'>
                                    <p className= 'mr-1'>React</p><p>Native</p>        
                                </div>
                                <p className= 'font-sans text-base leading-5'>
                                Expo
                                JavaScript 
                                </p>  
                            </div>
                            <div>
                                <h2 className= 'font-chivo text-xs'>
                                TIMELINE
                                </h2>  
                                <div className= 'flex flex-row font-sans text-base leading-5'>
                                    <p className= 'mr-1'>November</p><p>2022</p>        
                                </div>
                            </div>
                            <div className='flex flex-row justify-center px-2 rounded-lg border-[2px] border-black bg-[#FF83C8]'>
                                <p className='font-sans font-medium text-base'>
                                    Github
                                </p>
                            </div>
                        </div>  
                    </div>
                </div>
                <div className= 'mb-10 bg-[#FF83C8] h-[240px] w-full rounded-lg border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'>   
                </div>
                <div>
                    <h1 className= 'font-chivo text-base py-2 border-b-[1px] border-black mb-2' id='st-problem'>
                        PROBLEM
                    </h1>
                    <div className= 'flex flex-row space-x-10 font-sans'>
                        <h2 className= 'w-1/3 text-2xl italic'>
                        Project Brief Description
                        </h2>
                        <p className= 'w-2/3 font-sans text-base leading-5'>
                            For the fall & winter semester of the Master of Information program, the faculty released the courses offered on an excel sheet. 
                            This excel sheet made the process of creating a class schedule cumbersome.                                   
                        </p>
                    </div>
                </div>
                </div>
        </div>
    )
}