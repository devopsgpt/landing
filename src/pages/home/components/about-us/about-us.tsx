import { FC, useContext } from 'react';
import { ScrollContext, ScrollContextType } from '../../../../contexts';

export const AboutUs: FC = () => {
  const scrollContext = useContext<ScrollContextType | undefined>(
    ScrollContext,
  );

  return (
    <section ref={scrollContext!.aboutUsRef} className="overflow-x-hidden">
      <div className="relative z-20 flex h-full w-full items-center justify-center bg-about-us">
        <div className="absolute z-[2] h-full w-full xl:bg-corner"></div>
        <div className="absolute z-[1] flex h-full w-full max-w-[900px]">
          <div className="h-full w-full border-x border-stroke"></div>
        </div>
        <div className="absolute -left-[150px] top-1/2 z-[3] h-[80%] w-52 -translate-y-1/2 rounded-[50%] bg-accent/15 blur-3xl"></div>
        <div className="absolute -right-[150px] top-1/2 z-[3] h-[80%] w-52 -translate-y-1/2 rounded-[50%] bg-accent/15 blur-3xl"></div>
        <div className="relative w-full py-24">
          <div className="relative z-[1] flex h-40 w-full items-center border-y border-stroke">
            <div className="container mx-auto w-full max-w-[900px] p-10">
              <div className="flex items-center gap-4 text-3xl text-accent">
                <img src="/images/starburst.svg" />
                <p>About Us</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute bottom-0 w-full border border-stroke" />
            <div className="container relative z-30 mx-auto w-full max-w-[900px] p-10">
              <p className="mb-10 text-3xl leading-normal text-accent-dark">
                Welcome to <span className="text-accent">Hobs.ai</span>, where
                we revolutionize DevOps management with the power of{' '}
                <span className="text-accent">artificial intelligence</span>.
                Our platform is designed to address the critical needs of DevOps
                teams, enabling companies to reduce costs enhance performance
                and streamline their workflows —all without compromising quality
                or efficiency.
              </p>
              <p className="mb-10 text-3xl leading-normal text-accent-dark">
                We believe that{' '}
                <span className="text-accent">
                  Hard Operations Need Boosting Solutions
                </span>
                —this philosophy inspired the name{' '}
                <span className="text-accent">HOBS</span>, and it drives
                everything we do. DevOps is a cornerstone of modern businesses,
                yet it often comes with the challenge of relying on expensive
                expertise, navigating complex operational issues, and managing
                an overwhelming variety of tools. That’s why we’ve builtHobs.ai:
                a smart, AI-driven solution that empowers organizations to
                optimize their DevOps practices while minimizing resource
                expenditures and simplifying tool management .
              </p>
              <p className="mb-5 text-3xl text-accent-dark">
                Key features of Hobs.ai include:
              </p>
              <ul className="mb-10 list-inside list-disc space-y-3 text-3xl">
                <li className="leading-tight text-accent-dark marker:text-accent">
                  <strong className="mr-3 text-accent">
                    Critical Admin Panel:
                  </strong>
                  Manage and oversee your DevOps operations seamlessly,
                  providing complete control and transparency for better
                  decision-making.
                </li>
                <li className="leading-tight text-accent-dark marker:text-accent">
                  <strong className="mr-3 text-accent">
                    AI-Powered Chatbot:
                  </strong>
                  Quickly resolve issues and answer DevOps-related queries with
                  our intelligent assistant, available 24/7 to support your
                  team.
                </li>
                <li className="leading-tight text-accent-dark marker:text-accent">
                  <strong className="mr-3 text-accent">
                    Code Template Generation:
                  </strong>
                  Automatically create tailored code templates for various
                  DevOps tools, accelerating development and deployment
                  processes.
                </li>
                <li className="leading-tight text-accent-dark marker:text-accent">
                  <strong className="mr-3 text-accent">
                    Installation Method Generation:
                  </strong>
                  Simplify and automate the generation of installation guides
                  and configurations for a wide range of DevOps tools, saving
                  valuable time and effort.
                </li>
              </ul>
              <p className="mb-10 text-3xl leading-normal text-accent-dark">
                By combining these{' '}
                <span className="text-accent">innovative tools</span>,{' '}
                <span className="text-accent">Hobs.ai</span> transforms how{' '}
                DevOps teams operate, allowing them to focus on driving
                innovation rather than managing repetitive tasks or grappling
                with the complexity of multiple tools.
              </p>
              <p className="text-3xl leading-normal text-accent-dark">
                Join us in shaping the future of DevOps—where efficiency meets
                intelligence, and operational excellence becomes the standard.
                Let’s work together to unlock new possibilities for your
                business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
