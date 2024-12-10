'use client';

import { FC } from 'react';

export const CustomerFeedback: FC = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-vignette-radial py-10 md:py-10">
      <div className="h-[66px]">
        <div className="flex h-[66px] items-center justify-center gap-6">
          <div className="h-0.5 w-[88px] rotate-180 bg-Linear" />
          <p className="text-sm text-accent">Customer Feedbacks</p>
          <div className="h-0.5 w-[88px] bg-Linear" />
        </div>
      </div>
      <div className="container mx-auto max-w-6xl">
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2">
          <div className="w-full border border-gray-200/10 p-10">
            <div className="flex items-center justify-center">
              <p className="italic text-accent-dark">
                &quot;This platform saved us countless hours with its
                ready-to-use Terraform templates and real-time troubleshooting
                assistance.&quot;
              </p>
            </div>
          </div>
          <div className="w-full border border-gray-200/10 p-10">
            <div className="flex items-center justify-center">
              <p className="italic text-accent-dark">
                &quot;The chatbot has streamlined our DevOps operations
                significantly. It provides instant answers to
                infrastructure-related queries, saving countless hours.&quot;
              </p>
            </div>
          </div>
          <div className="w-full border border-gray-200/10 p-10">
            <div className="flex items-center justify-center">
              <p className="italic text-accent-dark">
                &quot;Using Terraform templates from the platform, we set up a
                complex infrastructure in no time. The templates are
                well-organized and easy to adapt.&quot;
              </p>
            </div>
          </div>
          <div className="w-full border border-gray-200/10 p-10">
            <div className="flex items-center justify-center">
              <p className="italic text-accent-dark">
                &quot;Jenkin&apos;s integration has made our CI/CD process
                incredibly smooth. The step-by-step guides from the platform
                helped us onboard quickly.&quot;
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 flex flex-col items-center space-y-4 text-center">
        <h5 className="text-2xl font-semibold text-accent">
          Customer Satisfaction with Chatbots
        </h5>
        <p className="text-center text-lg text-accent-dark md:w-1/2">
          According to a survey, 77% of consumers find automated services like
          chatbots useful for addressing their questions, showing the increasing
          trust in these solutions.
        </p>
      </div>
    </section>
  );
};
