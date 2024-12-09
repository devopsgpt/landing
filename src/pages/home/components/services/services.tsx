import { FC } from 'react';

const Services: FC = () => {
  return (
    <section id="our-services" className="bg-vignette-radial py-14 md:py-24">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-center">
          <p className="rounded-3xl border border-gray-500 bg-accent/10 px-6 py-1 text-accent">
            Services
          </p>
          <h2 className="mt-10 bg-services-text bg-clip-text text-center text-5xl font-semibold leading-tight text-transparent md:text-[64px] lg:w-full">
            An AI-powered assistant that simplifies DevOps tasks
          </h2>
          <p className="mb-24 mt-4 w-1/2 text-center text-accent-dark">
            Your one-stop platform for DevOps problem-solving, infrastructure
            templates, and seamless automation setup.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <div className="col-span-2">
            <div className="w-full rounded-3xl border border-gray-400 bg-gray-100 bg-opacity-10 bg-clip-padding p-10 backdrop-blur-3xl backdrop-filter md:h-[400px]">
              <div className="flex h-full flex-col justify-between md:flex-row">
                <div className="flex flex-col justify-between">
                  <div className="mb-12 flex h-16 w-16 items-center justify-center rounded-2xl border border-gray-500 bg-accent-light-linear-1 drop-shadow-service-shape md:mb-0">
                    <img src="/images/shape-1.png" />
                  </div>
                  <div className="mb-4 md:mb-0">
                    <h3 className="mb-4 bg-services-text bg-clip-text text-4xl font-semibold text-transparent">
                      DevOps Chatbot
                    </h3>
                    <p className="w-full text-accent-dark md:w-1/2">
                      Get instant answers to all your DevOps questions, from
                      CI/CD pipelines to infrastructure issues. Just ask!
                    </p>
                  </div>
                </div>
                <div className="flex h-[320px] w-full items-center justify-center rounded-3xl border border-gray-400 bg-clip-padding p-10 backdrop-blur-2xl backdrop-filter md:w-[320px]">
                  <img
                    src="/images/shape-2.png"
                    className="animate-spin-slow"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 h-full w-full rounded-3xl border border-gray-400 bg-gray-100 bg-opacity-10 bg-clip-padding p-10 backdrop-blur-3xl backdrop-filter md:h-[568px] lg:col-span-1">
            <div className="flex h-full flex-col justify-between gap-6 md:gap-0">
              <div className="space-y-4">
                <h4 className="mb-4 bg-services-text bg-clip-text text-4xl font-semibold text-transparent">
                  Code Templates
                </h4>
                <p className="text-accent-dark">
                  Access ready-to-use templates for tools like Terraform,
                  Ansible and more—simplify your workflows with optimized,
                  production-ready modules.
                </p>
              </div>
              <div className="flex h-[320px] w-full items-center justify-center rounded-3xl border border-gray-400 bg-clip-padding p-10 backdrop-blur-2xl backdrop-filter">
                <img src="/images/shape-3.png" />
              </div>
            </div>
          </div>
          <div className="col-span-2 h-[568px] w-full rounded-3xl border border-gray-400 bg-gray-100 bg-opacity-10 bg-clip-padding p-10 backdrop-blur-3xl backdrop-filter lg:col-span-1">
            <div className="flex h-full flex-col justify-between gap-6 md:gap-0">
              <div className="space-y-4">
                <h4 className="mb-4 bg-services-text bg-clip-text text-4xl font-semibold text-transparent">
                  Installation Automation
                </h4>
                <p className="text-accent-dark">
                  This section helps you generate a bash script or a docker
                  compose file based on the environment you choose. You don’t
                  need to search for instructions on installing DevOps tools.
                  Just specify what you need and get it.
                </p>
              </div>
              <div className="flex h-[320px] w-full items-center justify-center rounded-3xl border border-gray-400 bg-clip-padding p-10 backdrop-blur-2xl backdrop-filter">
                <img src="/images/shape-4.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
