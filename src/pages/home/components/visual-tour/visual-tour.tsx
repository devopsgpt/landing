import { FC } from 'react';

const VisualTour: FC = () => {
  return (
    <section className="bg-vignette-radial pb-40 pt-40">
      <div className="flex flex-col items-center justify-center">
        <p className="rounded-3xl border border-gray-500 bg-accent/10 px-6 py-1 text-accent">
          Visual Tour
        </p>
        <h2 className="bg-services-text mt-10 w-1/2 bg-clip-text text-center text-[64px] font-semibold leading-tight text-transparent">
          Simplify DevOps with Templates and Automation
        </h2>
        <p className="text-accent-dark mb-24 mt-4 w-1/4 text-center">
          See how our app makes DevOps tasks easier. automate workflows, and
          simplify your processes with just a few clicks
        </p>
      </div>
      <div className="mb-14 flex w-full items-center justify-center gap-4">
        <img src="/images/basic.png" className="rounded-2xl" width={768} />
        <p className="text-xl font-semibold text-accent">
          You can ask any question related to DevOps tools and receive an
          answer.
        </p>
      </div>
      <div className="flex w-full items-center justify-center gap-4">
        <p className="text-xl font-semibold text-accent">
          You can simply provide your inputs and click "Generate" to create your
          template.
        </p>
        <img src="/images/ansible.png" className="rounded-2xl" width={768} />
      </div>
    </section>
  );
};

export default VisualTour;
