import { FC, useContext } from 'react';
import { ScrollContext, ScrollContextType } from '../../../../contexts';

export const ContactUs: FC = () => {
  const scrollContext = useContext<ScrollContextType | undefined>(
    ScrollContext,
  );

  return (
    <section ref={scrollContext?.contactUsRef} className="overflow-x-hidden">
      <div className="relative z-20 flex h-full w-full items-center justify-center bg-about-us py-10">
        <div className="absolute z-[2] h-full w-full xl:bg-corner"></div>
        <div className="absolute z-[1] flex h-full w-full max-w-[900px]">
          <div className="h-full w-full border-x border-stroke"></div>
        </div>
        <div className="absolute -left-[150px] top-1/2 z-[3] h-[80%] w-52 -translate-y-1/2 rounded-[50%] bg-accent/15 blur-3xl"></div>
        <div className="absolute -right-[150px] top-1/2 z-[3] h-[80%] w-52 -translate-y-1/2 rounded-[50%] bg-accent/15 blur-3xl"></div>
        <div className="relative w-full py-36">
          <div className="relative z-[1] flex h-40 w-full items-center border-y border-stroke">
            <div className="container mx-auto w-full max-w-[900px] p-10">
              <div className="flex items-center gap-4 text-3xl text-accent">
                <img src="/images/asterisk.svg" />
                <p>Contact Us</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute bottom-0 w-full border border-stroke" />
            <div className="container relative z-30 mx-auto w-full max-w-[900px] p-10">
              <p className="mb-7 text-3xl leading-normal text-accent-dark">
                We're here to assist with any questions, feedback, or support
                needs—just email us at{' '}
                <a href="mailto:info@hobs.ai" className="text-accent underline">
                  info@hobs.ai
                </a>
                . For partnerships, collaborations, or enterprise solutions,
                reach out at the same address. Let's work together to create
                smarter DevOps solutions!
              </p>
              <p className="mb-5 text-3xl leading-normal text-accent-dark">
                Follow us on social media to stay updated on the latest news,
                features, and insights:
              </p>
              <div className="mb-7 flex">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/company/hobsai/"
                  className="text-3xl text-accent underline"
                >
                  LinkedIn
                </a>
              </div>
              <p className="mb-5 text-3xl leading-normal text-accent-dark">
                We’d love to hear from you! Let’s build smarter DevOps solutions
                together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
