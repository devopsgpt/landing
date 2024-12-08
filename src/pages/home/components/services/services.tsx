import { FC } from 'react';

const Services: FC = () => {
  return (
    <section className="bg-vignette-radial pb-40 pt-40">
      <div className="flex flex-col items-center justify-center">
        <p className="rounded-3xl border border-gray-500 bg-accent/10 px-6 py-1 text-accent">
          Services
        </p>
        <h2 className="bg-services-text mt-10 w-1/2 bg-clip-text text-center text-[64px] font-semibold leading-tight text-transparent">
          An AI-powered assistant that simplifies DevOps tasks
        </h2>
        <p className="text-accent-dark mb-24 mt-4 w-1/4 text-center">
          Your one-stop platform for DevOps problem-solving, infrastructure
          templates, and seamless automation setup.
        </p>
      </div>
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-2 gap-5">
          <div className="col-span-2">
            <div className="h-[400px] w-full rounded-3xl border border-gray-400 bg-gray-100 bg-opacity-10 bg-clip-padding p-10 backdrop-blur-3xl backdrop-filter">
              <div className="flex h-full justify-between">
                <div className="flex flex-col justify-between">
                  <div className="bg-accent-light-linear-1 drop-shadow-service-shape flex h-16 w-16 items-center justify-center rounded-2xl border border-gray-500">
                    <img src="/images/shape-1.png" />
                  </div>
                  <div>
                    <h3 className="bg-services-text mb-4 bg-clip-text text-4xl font-semibold text-transparent">
                      DevOps Chatbot
                    </h3>
                    <p className="text-accent-dark w-1/2">
                      Get instant answers to all your DevOps questions, from
                      CI/CD pipelines to infrastructure issues. Just ask!
                    </p>
                  </div>
                </div>
                <div className="flex h-[320px] w-[320px] items-center justify-center rounded-3xl border border-gray-400 bg-clip-padding p-10 backdrop-blur-2xl backdrop-filter">
                  <img
                    src="/images/shape-2.png"
                    className="animate-spin-slow"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="h-[568px] w-full rounded-3xl border border-gray-400 bg-gray-100 bg-opacity-10 bg-clip-padding p-10 backdrop-blur-3xl backdrop-filter">
            <div className="flex h-full flex-col justify-between">
              <div className="space-y-4">
                <h4 className="bg-services-text mb-4 bg-clip-text text-4xl font-semibold text-transparent">
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
          <div className="h-[568px] w-full rounded-3xl border border-gray-400 bg-gray-100 bg-opacity-10 bg-clip-padding p-10 backdrop-blur-3xl backdrop-filter">
            <div className="flex h-full flex-col justify-between">
              <div className="space-y-4">
                <h4 className="bg-services-text mb-4 bg-clip-text text-4xl font-semibold text-transparent">
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
