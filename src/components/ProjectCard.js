import { useNavigate } from "react-router-dom";


export function ProjectCard(props) {
    const navigate = useNavigate();
    const routeChange = () => { 
        console.log('clicked')
        let path = props.projectPage; 
        navigate(path);
      }
    const Chips = props.tags.map(item => {
        return (
        <div className='px-2 rounded-lg border-[2px] border-black'>
            <h1 className='font-sans font-medium text-base'>
                {item}
            </h1>
        </div>
        )
    })
    return (
        <div onClick={routeChange}>
            <div className="h-[300px] w-[300px] rounded-lg border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
            flex flex-row justify-center items-center mb-6" style={{backgroundColor: props.color}}>
            <img src={props.img} className='h-[240px] w-[240px] rounded-lg object-contain'/>
            </div>
            <div className="space-y-[8px] details-container">
                <div className='flex flex-row space-x-2 chip-container'>
                {Chips}
                </div>
                <div className='flex flex-col space-y-[0px] text-container'>
                    <h1 className='font-sans font-black text-2xl leading-7 mb-[0px]'>
                        {props.title}
                    </h1>
                    <h1 className='font-sans font-medium text-base leading-5'>
                        {props.company}
                    </h1>
                </div>
            </div>
        </div>

    )

}