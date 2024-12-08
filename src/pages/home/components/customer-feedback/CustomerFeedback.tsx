import { FC } from 'react';

const CustomerFeedback: FC = () => {
  return (
    <section className="bg-vignette-radial flex flex-col items-center justify-center pb-40 pt-40">
      <div className="h-[66px]">
        <div className="flex h-[66px] items-center justify-center gap-6">
          <div className="h-0.5 w-[88px] rotate-180 bg-Linear" />
          <p className="text-sm text-accent">Customer Feedbacks</p>
          <div className="h-0.5 w-[88px] bg-Linear" />
        </div>
      </div>
      <div className="mt-10 grid grid-cols-2">
        <div className="w-[465px] border border-gray-200/10 p-10">
          <div className="flex items-center justify-center">
            <p className="text-accent-dark italic">
              "This platform saved us countless hours with its ready-to-use
              Terraform templates and real-time troubleshooting assistance."
            </p>
          </div>
        </div>
        <div className="w-[465px] border border-gray-200/10 p-10">
          <div className="flex items-center justify-center">
            <p className="text-accent-dark italic">
              "The chatbot has streamlined our DevOps operations significantly.
              It provides instant answers to infrastructure-related queries,
              saving countless hours."
            </p>
          </div>
        </div>
        <div className="w-[465px] border border-gray-200/10 p-10">
          <div className="flex items-center justify-center">
            <p className="text-accent-dark italic">
              "Using Terraform templates from the platform, we set up a complex
              infrastructure in no time. The templates are well-organized and
              easy to adapt."
            </p>
          </div>
        </div>
        <div className="w-[465px] border border-gray-200/10 p-10">
          <div className="flex items-center justify-center">
            <p className="text-accent-dark italic">
              "Jenkins' integration has made our CI/CD process incredibly
              smooth. The step-by-step guides from the platform helped us
              onboard quickly."
            </p>
          </div>
        </div>
      </div>
      <div className="mt-20 flex flex-col items-center space-y-4 text-center">
        <h5 className="text-2xl font-semibold text-accent">
          Customer Satisfaction with Chatbots
        </h5>
        <p className="text-accent-dark w-1/2 text-center text-lg">
          According to a survey, 77% of consumers find automated services like
          chatbots useful for addressing their questions, showing the increasing
          trust in these solutions.
        </p>
      </div>
    </section>
  );
};

export default CustomerFeedback;
