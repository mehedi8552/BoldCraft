import Marquee from "react-fast-marquee";
import { cn } from "../../lib/utils";
const TitleMarquee = ({title, className}: {title: string, className?: string }) => {
  return (
    <>
      <Marquee pauseOnHover={true}>
        <div className={cn("text-hero-title agency-heading Mulish-light text-left cursor-pointer py-4 overflow-hidden", className)}>
            {title}
        </div>
      </Marquee>
    </>
  );
};

export default TitleMarquee;
