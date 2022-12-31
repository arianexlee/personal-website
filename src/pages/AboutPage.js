import pfp from '../imgs/pfp.png'
import stanfordEVGR from '../imgs/stanford-evgr.png'
import oval from '../imgs/oval.png'
import cabbage from '../imgs/cabbage.png'
import earth from '../imgs/earth.png'
import roman from '../imgs/roman.png'
import hoover from '../imgs/hoover.png'
import greed from '../imgs/greed.png'
import apple from '../imgs/apple.png'

export function AboutPage() {
    return (
        <div className= 'flex flex-col items-center mx-[110px] mb-[60px] space-y-10'>
            <div className= 'flex flex-col space-y-10 md:w-[680px] md:flex-row md:space-x-10 md:space-y-0 md:items-end'>
                <img src={pfp} className='h-[360px] object-contain'/>
                <div className= 'flex flex-col space-y-10'>
                    <div>
                        <h1 className= 'text-2xl font-chivo font-black mb-3'>
                            Hi, I'm Ariane!
                        </h1>
                        <div>
                        <h1 className= 'font-sans text-2xl'>I'm a developer and designer studying
                        <span className= 'text-2xl font-chivo font-black'> Computer Science @ Stanford University</span></h1>
                        </div>
                    </div>
                    <div className='space-y-3 font-sans'>
                        <div>
                            <h1 className='font-chivo text-base'>CURRENTLY LEARNING</h1>
                            <p classname='text-2xl'>C, Accounting</p>
                        </div>
                        <div>
                            <h1 className= 'font-chivo text-base'>CURRENTLY READING</h1>
                            <h1 classname= 'text-2xl'>Why the West Rules...For Now by Ian Morris</h1>
                        </div>
                        <div>
                            <h1 className='font-chivo text-base'>CURRENT FAVORITE PAINTING</h1>
                            <h2 classname='text-base'>May 1808 by Francisco de Goya</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full max-w-[1000px]' >
                <div className= 'mb-4'>
                <h1 className= 'font-chivo text-base py-2 border-b-[1px] border-black mb-2'>
                @ SCHOOL
                </h1>
                </div>
                <div className= 'flex flex-col mb-10 space-y-10 items-center md:items-start md:flex-row md:space-x-10 md:space-y-0'>
                    <div className= 'w-full font-sans text-xl space-y-3'>
                        <p>Outside of class I'm...</p>
                        <p>
                            <span className= 'font-chivo font-black'>
                            VC3 Director of <span className='underline'><a href="https://ases.stanford.edu/" target="_blank">Stanford ASES</a></span>
                            </span>
                            , where my job is to host and plan a pitch competition between Stanford’s 
                            top startups with Silicon Valley’s top VCs as judges. 
                        </p>
                        <p>
                            <span className= 'font-chivo font-black'>
                            a front-end developer for <span className='underline'><a href="https://carta-beta.stanford.edu/" target="_blank">Carta</a></span>
                            </span>
                            , Stanford’s official course planning and reviewing platform, 
                            used by 95% of Stanford undergrads
                        </p>
                        <p>
                            <span className= 'font-chivo font-black'>
                            a designer for <span className='underline'><a href="https://www.treehacks.com/" target="_blank">TreeHacks</a></span>
                            </span>
                            , Stanford’s premier hackathon with over 2,000+ participants and $250k in prizes.
                        </p>
                        <p>
                            <span className= 'font-chivo font-black'>
                            a consultant for <span className='underline'><a href="http://www.stanfordmarketing.org/" target="_blank">Stanford Marketing</a></span>
                            </span>
                            , where I've served clients like BeReal, Typed, and Hilton.
                        </p>
                        <p>
                            a member of 
                            <span className='font-chivo font-black underline ml-[5px]'><a href="https://www.stanfordwomenincomputerscience.com/" target="_blank">Stanford Women in CS</a></span>, 
                            <span className='font-chivo font-black underline ml-[5px]'><a href="https://stanfordwomenindesign.com/" target="_blank">Stanford Women in Design</a></span>, 
                            and 
                            <span className='font-chivo font-black ml-[5px]'>Kappa Alpha Theta</span>                        </p>
                    </div>
                    <div className= ''>
                        <img src={stanfordEVGR} className='max-h-[480px] items-center object-contain'/>
                    </div>
                </div>
                <div className='font-sans mb-10 flex flex-col space-y-10 items-center md:items-start md:flex-row md:space-x-10 md:space-y-0 md:justify-between'>
                    <div className='flex flex-col space-y-4 leading-6 text-[16px]'>
                        <div>
                            <h1 className='font-chivo text-base'>CURRENT COURSEWORK</h1>
                            <p classname='text-2xl'>CS 107: Computer Organizations & Systems</p>
                            <p classname='text-2xl'>CS 124: From Languages to Information (NLP)</p>
                            <p classname='text-2xl'>PWR 2KSB: Design Thinking</p>
                            <p classname='text-2xl'>POLISCI 330A: Origins of Political Thought</p>
                            <p classname='text-2xl'>ChinLang 22B: 2nd Year Chinese for Bilingual Studentss</p>
                        </div>
                        <div>
                            <h1 className='font-chivo text-base'>PAST RELEVANT COURSEWORK</h1>
                            <p classname='text-2xl'>CS 106B: Programming Abstractions (C++)</p>
                            <p classname='text-2xl'>CS 103: Mathematical Foundations of Computing (C++)</p>
                            <p classname='text-2xl'>CS 109: Intro to Probability for Computer Scientists (Python)</p>
                            <p classname='text-2xl'>CS 47: Cross Platform Mobile Development (React Native)</p>
                            <p classname='text-2xl'>CS 9SI: Intro to VR Design & Development (C#)</p>
                            <p classname='text-2xl'>CS 11SI: Intro to UI/UX Design (Figma)</p>
                            <p classname='text-2xl'>Math 51: Linear Algebra & Multivariable Calculus</p>
                            <p classname='text-2xl'>Physics 14N: Quantum Information & Emerging Technologies</p>
                            <p classname='text-2xl'>Think 66: Design that Understands Us </p>

                        </div>
                    </div>
                    <div className= ''>
                        <img src={oval} className='max-h-[400px] items-center object-contain'/>
                    </div>
                </div> 
                <div className= ''>
                    <h1 className= 'mb-4 font-chivo text-base py-2 border-b-[1px] border-black'>
                    @ HOME
                    </h1>
                    <div className= 'flex flex-col md:flex-row md:space-x-10 mb-10'>
                        <div className='space-y-3 font-sans'>
                            <div>
                                <h1 className='font-chivo text-base'>HOME</h1>
                                <p classname='text-2xl'>New York</p>
                            </div>
                            <div>
                                <h1 className= 'font-chivo text-base'>HOBBIES</h1>
                                <h1 classname= 'text-2xl'>Painting, Photography, & Reading</h1>
                            </div>
                        </div>
                        <div className= 'font-sans text-xl space-y-3'>
                        <p>I’ve always been artistically inclined, and I’ve been creating my whole life. 
                            My preferred physical medium is paint, but I also love taking photographs. </p>
                        <p>Lately, I’ve also been trying to level up my mile time, meditate regularly, 
                            and learn to cook more dishes. </p>
                        </div>
                    </div>
                    {/* <div className= 'w-full overflow-hidden'> 
                        <div className='flex w-[200%] left-[-1000px]'>
                            <img src={cabbage} className= 'h-[320px]'/>
                            <img src={cabbage} className= 'h-[320px]'/>
                            <img src={cabbage} className= 'h-[320px]'/>
                            <img src={cabbage} className= 'h-[320px]'/>
                            <img src={cabbage} className= 'h-[320px]'/>
                            <img src={cabbage} className= 'h-[320px]'/>
                        </div>
                    </div> */}

                </div>
            </div>
        </div>
    )
}