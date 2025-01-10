import { FC } from 'react';

const VisualTour: FC = () => {
  return (
    <section className="bg-vignette-radial py-8 md:py-16">
      <div className="container mx-auto mb-10 w-full px-3 lg:mb-24">
        <div className="flex flex-col items-center justify-center">
          <p className="rounded-3xl border border-gray-500 bg-accent/10 px-6 py-1 text-accent">
            Visual Tour
          </p>
          <h2 className="mt-10 w-full bg-services-text bg-clip-text text-center text-5xl font-semibold leading-tight text-transparent md:text-[64px] lg:w-[60%]">
            Simplify DevOps with Templates and Automation
          </h2>
          <p className="mt-4 w-full text-center text-accent-dark md:w-1/2 lg:w-1/3">
            See how our app makes DevOps tasks easier. automate workflows, and
            simplify your processes with just a few clicks
          </p>
        </div>
      </div>
      <div className="mb-14 grid w-full grid-cols-1 items-center justify-center gap-4 px-8 lg:grid-cols-2">
        <img src="/images/ui-1.png" className="w-full max-w-5xl rounded-2xl" />
        <p className="text-center text-xl font-semibold text-accent">
          You can choose the type of template you need to generate.
        </p>
      </div>
      <div className="mb-14 grid w-full grid-cols-1 items-center justify-center gap-4 px-8 lg:grid-cols-2">
        <p className="order-2 text-center text-xl font-semibold text-accent lg:order-1">
          You can simply provide your inputs and click "Generate" to create your
          template.
        </p>
        <img
          src="/images/ui-2.png"
          className="order-1 w-full max-w-5xl rounded-2xl lg:order-2"
        />
      </div>
    </section>
  );
};

export default VisualTour;
