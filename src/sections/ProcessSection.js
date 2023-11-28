import { AssignmentBar } from "../components/AssignmentBar";
export function ProcessSection() {
  const assignmentData = [
    {
      title: "A1: Needfinding",
      links: [
        {
          id: 1,
          text: "canva",
          link: "https://www.canva.com/design/DAFwVfSEKfg/1eRO8FZ9MKMzw0usQbdw2w/edit?utm_content=DAFwVfSEKfg&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
        },
      ],
    },
    {
      title:
        "A2: Additional Needfinding, POVs, HMWs, Brainstorming & Experience Prototypes",
      links: [
        {
          id: 1,
          text: "canva",
          link: "https://www.canva.com/design/DAFw_GlHbuc/9NZwva85hmHXeLiNa2PsMg/edit?utm_content=DAFw_GlHbuc&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
        },
      ],
    },
    {
      title: "A4: Concept Video",
      links: [
        {
          id: 1,
          text: "mp4",
          link: "https://www.youtube.com/watch?v=lRh_K2XxQLI",
        },
        {
          id: 2,
          text: "youtube",
          link: "https://www.youtube.com/watch?v=lRh_K2XxQLI",
        },
        {
          id: 3,
          text: "canva",
          link: "https://www.canva.com/design/DAFxlUF28CU/Gec8kvp6pTK0_V7g3O09vg/edit",
        },
      ],
    },
    {
      title: "A5: Sketching, Low-Fi Prototyping & Usability Testing",
      links: [
        {
          id: 1,
          text: "canva",
          link: "https://www.canva.com/design/DAFyJbqvra8/ZD_aSi02Qo0e5iX2Cx3Okg/edit?utm_content=DAFyJbqvra8&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
        },
      ],
    },
    {
      title: "A6: Interactive Medium-fi Prototype",
      links: [
        {
          id: 1,
          text: "README",
          link: "https://www.canva.com/design/DAFzbkW1HQM/E2a1D9B1ZKRLCnTk70jbzg/edit?utm_content=DAFzbkW1HQM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
        },
        {
          id: 2,
          text: "figma",
          link: "https://www.figma.com/proto/kYvHrnqoLD0qnNdP5VA7Fs/Grapevine-(Copy)?page-id=0%3A1&type=design&node-id=1467-14731&viewport=9005%2C-1246%2C0.47&t=ctno9AfaTkxUHHDy-9&scaling=scale-down&starting-point-node-id=1467%3A14731&show-proto-sidebar=1",
        },
        {
          id: 3,
          text: "canva",
          link: "https://www.canva.com/design/DAFy2uitSAw/P-QnIyjW0uoxVPX4NXNDgg/edit?utm_content=DAFy2uitSAw&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
        },
      ],
    },
    {
      title: "A9: Heuristic Evaluation Synthesis ",
      links: [
        {
          id: 1,
          text: "report",
          link: "https://docs.google.com/document/d/14hP97vICYhwuthU31tntSvLFCLdC4hz5PDXMj3EFzlg/edit?usp=sharing",
        },
      ],
    },
    {
      title: "A10: Poster, Pitch & Demo Video",
      links: [
        {
          id: 1,
          text: "mp4",
          link: "https://www.canva.com/design/DAFzbkW1HQM/E2a1D9B1ZKRLCnTk70jbzg/edit?utm_content=DAFzbkW1HQM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
        },
        {
          id: 2,
          text: "youtube",
          link: "https://www.canva.com/design/DAFzbkW1HQM/E2a1D9B1ZKRLCnTk70jbzg/edit?utm_content=DAFzbkW1HQM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
        },
        {
          id: 3,
          text: "slide",
          link: "https://www.canva.com/design/DAFy2uitSAw/P-QnIyjW0uoxVPX4NXNDgg/edit?utm_content=DAFy2uitSAw&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
        },
        {
          id: 4,
          text: "script",
          link: "https://www.figma.com/proto/kYvHrnqoLD0qnNdP5VA7Fs/Grapevine-(Copy)?page-id=0%3A1&type=design&node-id=1467-14731&viewport=9005%2C-1246%2C0.47&t=ctno9AfaTkxUHHDy-9&scaling=scale-down&starting-point-node-id=1467%3A14731&show-proto-sidebar=1",
        },
        {
          id: 5,
          text: "poster",
          link: "https://www.canva.com/design/DAFy2uitSAw/P-QnIyjW0uoxVPX4NXNDgg/edit?utm_content=DAFy2uitSAw&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
        },
      ],
    },
    {
      title: "A11: Final Report",
      links: [
        {
          id: 1,
          text: "report",
          link: "https://www.canva.com/design/DAFzbkW1HQM/E2a1D9B1ZKRLCnTk70jbzg/edit?utm_content=DAFzbkW1HQM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
        },
      ],
    },
  ];

  return (
    <div className="w-full px-[60px] md:px-[110px] " id="process">
      <h1 className="font-chivo text-2xl">PROCESS</h1>
      {assignmentData.map((item) => (
        <AssignmentBar title={item.title} links={item.links} key={item.title} />
      ))}
    </div>
  );
}
