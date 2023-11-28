import { IntroSection } from "../sections/IntroSection";
import { ProcessSection } from "../sections/ProcessSection";
import { TeamSection } from "../sections/TeamSection";
export function HomePage() {
  return (
    <div
      className="flex flex-col main-body items-center mb-[60px] space-y-20"
      id="home"
    >
      <IntroSection />
      <TeamSection />
      <ProcessSection />
    </div>
  );
}
