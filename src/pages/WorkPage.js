import { ProjectCard } from '../components/ProjectCard';
import spotifyTinder from '../imgs/spotify-tinder-mockup.png'
import fizzCard from '../imgs/fizz-card.png'
import carta from '../imgs/carta-redesign.png'
import voiceMessage from '../imgs/voice-imessage.png'

export function WorkPage() {
    return (
        <div className= 'flex flex-col main-body items-center mb-[60px] space-y-10'>
        <div className= 'flex flex-col space-y-10 md:flex-row md:space-x-20 md:space-y-0'>
          <ProjectCard
            id= '1'
            color= '#FF83C8'
            title= 'Spotify Tinder'
            tags={['App Dev', 'UI/UX Design']}
            company= 'Project'
            img= {spotifyTinder}
            projectPage = '/construction'
            />
          <ProjectCard
            id= '2'
            color= '#2449FE'
            title= 'Design @ Fizz'
            tags={['UI/UX Design', 'Branding']}
            company= 'Internship'
            img= {fizzCard}
            projectPage = '/construction'
          />
        </div>
        <div className= 'flex flex-col space-y-10 md:flex-row md:space-x-20 md:space-y-0'>
          <ProjectCard
            id= '3'
            color= '#FFEC42'
            title= 'Carta Redesign'
            tags={['Web Dev', 'UI/UX Design']}
            company= 'Project'
            img= {carta}
            projectPage = '/construction'
            />
          <ProjectCard
            id= '4'
            color= '#84E7D6'
            title= 'Voice iMessage Redesign'
            tags={['UI/UX Design']}
            company= 'Project'
            img= {voiceMessage}
            projectPage = '/construction'
          />
        </div>
        {/* <div className= 'flex flex-col space-y-10 mb-[60px] md:flex-row md:space-x-20 md:space-y-0'>
          <ProjectCard
            id= '3'
            color= '#FFEC42'
            title= 'Carta Redesign'
            tags={['Web Dev', 'UI/UX Design']}
            company= 'Project'
            img= {spotifyTinder}
            projectPage = '/spotify-tinder'
            />
          <ProjectCard
            id= '4'
            color= '#84E7D6'
            title= 'Spotify Song Inbox'
            tags={['UI/UX Design']}
            company= 'Project'
            img= {spotifyTinder}
            projectPage = '/spotify-tinder'
            />
        </div> */}
      </div>
    )
}