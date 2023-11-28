import { useEffect, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { useHeadsObserver } from "../../hooks/hooks";

export function SpotifyTinderPage() {
  const { activeId } = useHeadsObserver();
  const [currentSection, setCurrentSection] = useState("");

  useEffect(() => {
    setCurrentSection(activeId);
  }, [activeId]);

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -145;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "auto" });
  };

  console.log(currentSection);

  return (
    <div className="flex flex-col md:flex-row main-body items-center justify-end md:items-start md:justify-end xl:justify-center px-[110px] mb-[60px]">
      <div className="none md:block flex flex-col space-y-4 md:space-y-4 md:items-start fixed md:left-[110px] md:top-[128px] mb-10">
        <div
          className="flex flex-col font-chivo text-base justify-center"
          style={
            currentSection === "st-project"
              ? { textDecorationLine: "underline" }
              : { textDecorationLine: "none" }
          }
        >
          <Link
            to="#st-project"
            scroll={(el) => scrollWithOffset(el)}
            onClick={() => setCurrentSection("st-project")}
          >
            PROJECT
          </Link>
        </div>
        <div
          className="flex flex-col font-chivo text-base justify-center"
          style={
            currentSection === "st-overview"
              ? { textDecorationLine: "underline" }
              : { textDecorationLine: "none" }
          }
        >
          <Link
            to="#st-overview"
            scroll={(el) => scrollWithOffset(el)}
            onClick={() => setCurrentSection("st-overview")}
          >
            OVERVIEW
          </Link>
        </div>
        <div
          className="font-chivo text-base text-center"
          style={
            currentSection === "st-final"
              ? { textDecorationLine: "underline" }
              : { textDecorationLine: "none" }
          }
        >
          FINAL PRODUCT
        </div>
        <div
          className="flex flex-col font-chivo text-base justify-center"
          style={
            currentSection === "st-problem"
              ? { textDecorationLine: "underline" }
              : { textDecorationLine: "none" }
          }
        >
          <Link
            to="#st-problem"
            scroll={(el) => scrollWithOffset(el)}
            onClick={() => setCurrentSection("st-problem")}
          >
            PROBLEM
          </Link>
        </div>
        <div
          className="flex flex-col font-chivo text-base justify-center"
          style={
            currentSection === "st-users"
              ? { textDecorationLine: "underline" }
              : { textDecorationLine: "none" }
          }
        >
          USERS
        </div>
        <div
          className="flex flex-col font-chivo text-base justify-center"
          style={
            currentSection === "st-solution"
              ? { textDecorationLine: "underline" }
              : { textDecorationLine: "none" }
          }
        >
          SOLUTION
        </div>
        <div
          className="flex flex-col font-chivo text-base justify-center"
          style={
            currentSection === "st-reflection"
              ? { textDecorationLine: "underline" }
              : { textDecorationLine: "none" }
          }
        >
          REFLECTION
        </div>
      </div>
      <div className="project w-[320px] md:pl-[110px] md:w-[480px] lg:w-[680px] space-y-10">
        <div className="mb-10 bg-[#FF83C8] h-[240px] w-full rounded-lg border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"></div>
        <div className="flex flex-col space-y-10 md:flex-row md:space-x-10 md:space-y-0">
          <div className="proj&overview space-y-10">
            <div className="proj">
              <h1
                className="font-chivo text-base py-2 border-b-[1px] border-black mb-2"
                id="st-project"
              >
                PROJECT
              </h1>
              <div className="font-sans text-2xl mb-3">
                <h2 className="font-black">Spotify Tinder</h2>
                <h2 className="italic text-xl">
                  Song discovery made easy via swiping
                </h2>
              </div>
              <p className="font-sans text-base leading-5">
                In my first real attempt to create an app, I decided to build
                something using the Spotify API. Using Spotify Tinder, users can
                discover songs via an engaging and fun card format and add them
                directly to one of their Spotify playlists. This builds off of
                one of my prior UI/US design projects, the Spotify Song Inbox.
              </p>
            </div>
            <div className="overview">
              <h1
                className="font-chivo text-base py-2 border-b-[1px] border-black mb-2"
                id="st-overview"
              >
                OVERVIEW
              </h1>
              <div className="flex flex-row space-x-10">
                <div className="basis-1/2">
                  <h2 className="font-chivo text-xs py-1">PROBLEM</h2>
                  <p className="font-sans text-base leading-5">
                    Two problems I wanted to solve: engagement and ease of song
                    discovery on Spotify
                  </p>
                </div>
                <div className="basis-1/2">
                  <h2 className="font-chivo text-xs py-1">OUTCOME</h2>
                  <p className="font-sans text-base leading-5">
                    An app that my friends and I myself like to use for song
                    discovery!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[240px]">
            <h2 className="font-chivo text-base py-2 border-b-[1px] border-black mb-2">
              INFO
            </h2>
            <div className="space-y-6">
              <div>
                <h2 className="font-chivo text-xs">ROLE</h2>
                <p className="font-sans text-base leading-5">
                  Developer Designer
                </p>
              </div>
              <div>
                <h2 className="font-chivo text-xs">TOOLS</h2>
                <p className="font-sans text-base leading-5">Figma</p>
                <div className="flex flex-row font-sans text-base leading-5">
                  <p className="mr-1">React</p>
                  <p>Native</p>
                </div>
                <p className="font-sans text-base leading-5">Expo JavaScript</p>
              </div>
              <div>
                <h2 className="font-chivo text-xs">TIMELINE</h2>
                <div className="flex flex-row font-sans text-base leading-5">
                  <p className="mr-1">November</p>
                  <p>2022</p>
                </div>
              </div>
              <div className="flex flex-row justify-center px-2 rounded-lg border-[2px] border-black bg-[#FF83C8]">
                <p className="font-sans font-medium text-base">Github</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-10 bg-[#FF83C8] h-[240px] w-full rounded-lg border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"></div>
        <div className="space-y-4">
          <div>
            <h1
              className="font-chivo text-base py-2 border-b-[1px] border-black mb-2"
              id="st-problem"
            >
              PROBLEM
            </h1>
            <div className="flex flex-row space-x-10 font-sans">
              <h2 className="w-1/3 text-2xl italic">Engagement & ease</h2>
              <div className="flex flex-col w-2/3 space-y-3">
                <p className=" font-sans text-base leading-5">
                  There are a couple problems with Spotify's song discovery
                  process that I noted from my own experiences and through
                  conversations with friends.
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-1">
            <p className="font-sans text-base leading-5 italic font-black">
              1. Song discovery is not engaging
            </p>
            <p className="font-sans text-base leading-5">
              When I'm looking for songs, I'll put on one of the playlists
              recommended by Spotify. But RARELY am I devoting time to just
              listening to music. I'm usually doing homework, cleaning, etc.
              When new song I like comes on, I enjoy it, but it does not
              register in my mind that I need to navigate back to Spotify to
              save the song. Thus, I completely miss the song, and later, when
              it finally does register to me that I should have saved the song,
              I don't know what the name of the song is, so I can no longer find
              it.
            </p>
          </div>
          <div className="space-y-1">
            <p className="font-sans text-base leading-5 italic font-black">
              2. Songs don't start at the chorus
            </p>
            <p className="font-sans text-base leading-5">
              Okay you might be asking yourself, wait- why is this a problem?
              Well, when I'm playing my own playlists this is exactly what I
              want. But when I'm trying to find new songs, usually I just need
              to listen to the chorus to determine whether or not I like it.
              However, it's too annoying to navigate back to the app and scrub
              through to find the chorus, so I'll usually wait the minute or so
              it takes to get to it, which is an annoying process. Sometimes,
              I'll just skip songs before they even get to the chorus because
              I'm too fed up with waiting.
            </p>
          </div>
          <div className="space-y-1">
            <p className="font-sans text-base leading-5 italic font-black">
              3. The flow of adding things to playlists is ~slightly~ annoying
            </p>
            <p className="font-sans text-base leading-5">
              This one is kind of picky, but personally, I'd rather add things
              to my playlists all at one time rather than listening to a song,
              adding it to a playlist while other songs play, listening to
              another song, etc. I'd rather just focus on listening and then add
              everything after.
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <div>
            <h1
              className="font-chivo text-base py-2 border-b-[1px] border-black mb-2"
              id="st-problem"
            >
              SOLUTION
            </h1>
            <div className="flex flex-row space-x-10 font-sans">
              <h2 className="w-1/3 text-2xl italic">3 Specific Features</h2>
              <div className="flex flex-col w-2/3 space-y-3">
                <p className=" font-sans text-base leading-5">
                  To address the pain points mentioned above, I created a song
                  card format for discovering songs, had songs play from their
                  preview audios, and changed the flow of adding songs to
                  playlists. 
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-1">
            <p className="font-sans text-base leading-5 italic font-black">
              1. Song discovery is not engaging
            </p>
            <p className="font-sans text-base leading-5">
              When I'm looking for songs, I'll put on one of the playlists
              recommended by Spotify. But RARELY am I devoting time to just
              listening to music. I'm usually doing homework, cleaning, etc.
              When new song I like comes on, I enjoy it, but it does not
              register in my mind that I need to navigate back to Spotify to
              save the song. Thus, I completely miss the song, and later, when
              it finally does register to me that I should have saved the song,
              I don't know what the name of the song is, so I can no longer find
              it.
            </p>
          </div>
          <div className="space-y-1">
            <p className="font-sans text-base leading-5 italic font-black">
              2. Songs don't start at the chorus
            </p>
            <p className="font-sans text-base leading-5">
              Okay you might be asking yourself, wait- why is this a problem?
              Well, when I'm playing my own playlists this is exactly what I
              want. But when I'm trying to find new songs, usually I just need
              to listen to the chorus to determine whether or not I like it.
              However, it's too annoying to navigate back to the app and scrub
              through to find the chorus, so I'll usually wait the minute or so
              it takes to get to it, which is an annoying process. Sometimes,
              I'll just skip songs before they even get to the chorus because
              I'm too fed up with waiting.
            </p>
          </div>
          <div className="space-y-1">
            <p className="font-sans text-base leading-5 italic font-black">
              3. The flow of adding things to playlists is ~slightly~ annoying
            </p>
            <p className="font-sans text-base leading-5">
              This one is kind of picky, but personally, I'd rather add things
              to my playlists all at one time rather than listening to a song,
              adding it to a playlist while other songs play, listening to
              another song, etc. I'd rather just focus on listening and then add
              everything after.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
