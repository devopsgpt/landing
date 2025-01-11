import { FC, Suspense } from 'react';

const TOS: FC = () => {
  return (
    <Suspense fallback={<div />}>
      <main className="min-h-[calc(100dvh-100px)] bg-vignette-radial py-14 text-white md:py-24">
        <div className="container mx-auto max-w-3xl">
          <h1 className="mb-8 text-center text-4xl font-bold text-white">
            Terms of Service
          </h1>
          <ul className="list-decimal space-y-4">
            <li>
              <strong>Acceptance of Terms</strong>
              <p>
                By accessing or using Hobs.ai, you agree to be bound by these
                Terms of Service. If you do not agree, you may not use the
                platform.
              </p>
            </li>
            <li>
              <strong>Services Provided</strong>
              <p>
                Hobs.ai provides AI-powered tools to optimize DevOps processes,
                including a critical admin panel, chatbot, code template
                generation, and installation methods for DevOps tools. Features
                may change or evolve over time.
              </p>
            </li>
            <li>
              <strong>User Responsibilities</strong>
              <ul className="list-inside list-disc">
                <li>Ensure your account information is accurate and secure.</li>
                <li>Use the platform only for lawful purposes.</li>
                <li>
                  Do not attempt to disrupt the service or gain unauthorized
                  access.
                </li>
              </ul>
            </li>
            <li>
              <strong>Intellectual Property</strong>
              <p>
                All content, trademarks, and features of Hobs.ai are the
                property of Hobs.ai and may not be used without permission.
              </p>
            </li>
            <li>
              <strong>Disclaimer of Warranties</strong>
              <p>
                The platform is provided "as is" without any guarantees of
                performance, uptime, or suitability for specific purposes.
              </p>
            </li>
            <li>
              <strong>Limitation of Liability</strong>
              <p>
                Hobs.ai is not responsible for any damages, direct or indirect,
                resulting from the use or inability to use the platform.
              </p>
            </li>
            <li>
              <strong>Termination</strong>
              <p>
                We reserve the right to suspend or terminate accounts that
                violate these terms or engage in malicious activities.
              </p>
            </li>
            <li>
              <strong>Changes to Terms</strong>
              <p>
                We may update these Terms of Service periodically. Continued use
                of the platform implies acceptance of the updated terms.
              </p>
            </li>
          </ul>
          <h2 className="mb-8 mt-16 text-center text-4xl font-bold text-white">
            Privacy Policy
          </h2>
          <ul className="list-decimal space-y-4">
            <li>
              <strong>Information We Collect</strong>
              <p>We may collect the following types of information:</p>
              <ul className="list-inside list-disc">
                <li>
                  <strong>Personal Information: </strong>
                  Name, email, company details, etc., provided during account
                  creation.
                </li>
                <li>
                  <strong>Usage Data: </strong>
                  Information about how you interact with our platform (e.g.,
                  pages visited, features used).
                </li>
                <li>
                  <strong>Cookies: </strong>
                  Small files stored on your device to improve user experience.
                </li>
              </ul>
            </li>
            <li>
              <strong>How We Use Your Information</strong>
              <p>We use the collected data to:</p>
              <ul className="list-inside list-disc">
                <li>Provide and improve our services.</li>
                <li>Respond to user inquiries and provide support.</li>
                <li>Personalize the user experience.</li>
                <li>Ensure security and prevent unauthorized access.</li>
              </ul>
            </li>
            <li>
              <strong>Sharing Your Information</strong>
              <p>
                We do not sell your information. However, we may share it with:
              </p>
              <ul className="list-inside list-disc">
                <li>
                  Trusted third-party service providers (e.g., analytics,
                  hosting).
                </li>
                <li>
                  Authorities if required by law or to prevent illegal
                  activities.
                </li>
              </ul>
            </li>
            <li>
              <strong>Data Security</strong>
              <p>
                We use industry-standard security measures to protect your data.
                However, no method of transmission or storage is 100% secure.
              </p>
            </li>
            <li>
              <strong>Your Rights</strong>
              <p>Depending on your location, you may have the right to:</p>
              <ul className="list-inside list-disc">
                <li>Access, update, or delete your personal data.</li>
                <li>Opt-out of marketing communications.</li>
                <li>Request a copy of your data.</li>
              </ul>
            </li>
            <li>
              <strong>Cookies Policy</strong>
              <p>
                Our platform uses cookies to enhance the user experience. You
                can manage or disable cookies through your browser settings.
              </p>
            </li>
            <li>
              <strong>Changes to Privacy Policy</strong>
              <p>
                We may update this Privacy Policy periodically. We encourage you
                to review it regularly.
              </p>
            </li>
            <li>
              <strong>Contact Us</strong>
              <p>
                For questions or concerns about these Terms of Service or
                Privacy Policy, please contact us at: <strong>Email: </strong>
                info@hobs.ai
              </p>
            </li>
          </ul>
        </div>
      </main>
    </Suspense>
  );
};

export default TOS;
