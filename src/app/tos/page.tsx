import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Hobs.ai",
  description: "Terms of Service and Privacy Policy for Hobs.ai",
};

export default function TOS() {
  return (
    <main className="min-h-screen bg-vignette-radial py-14 text-white md:py-24">
      <div className="container mx-auto max-w-3xl px-4">
        <h1 className="mb-8 text-center text-4xl font-bold text-white">
          Terms of Service
        </h1>
        <ul className="space-y-4 text-lg list-decimal">
          <li>
            <strong>Acceptance of Terms</strong>
            <p className="mt-2">
              By accessing or using Hobs.ai, you agree to be bound by these
              Terms of Service. If you do not agree, you may not use the
              platform.
            </p>
          </li>
          <li>
            <strong>Services Provided</strong>
            <p className="mt-2">
              Hobs.ai provides AI-powered tools to optimize DevOps processes,
              including a critical admin panel, chatbot, code template
              generation, and installation methods for DevOps tools. Features
              may change or evolve over time.
            </p>
          </li>
          <li>
            <strong>User Responsibilities</strong>
            <ul className="mt-2 ml-6 list-disc list-inside space-y-2">
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
            <p className="mt-2">
              All content, trademarks, and features of Hobs.ai are the property
              of Hobs.ai and may not be used without permission.
            </p>
          </li>
          <li>
            <strong>Disclaimer of Warranties</strong>
            <p className="mt-2">
              The platform is provided &quot;as is&quot; without any guarantees of
              performance, uptime, or suitability for specific purposes.
            </p>
          </li>
          <li>
            <strong>Limitation of Liability</strong>
            <p className="mt-2">
              Hobs.ai is not responsible for any damages, direct or indirect,
              resulting from the use or inability to use the platform.
            </p>
          </li>
          <li>
            <strong>Termination</strong>
            <p className="mt-2">
              We reserve the right to suspend or terminate accounts that violate
              these terms or engage in malicious activities.
            </p>
          </li>
          <li>
            <strong>Changes to Terms</strong>
            <p className="mt-2">
              We may update these Terms of Service periodically. Continued use
              of the platform implies acceptance of the updated terms.
            </p>
          </li>
        </ul>

        <h2 className="mb-8 mt-16 text-center text-4xl font-bold text-white">
          Privacy Policy
        </h2>
        <ul className="space-y-4 text-lg list-decimal">
          <li>
            <strong>Information We Collect</strong>
            <p className="mt-2">We may collect the following types of information:</p>
            <ul className="mt-2 ml-6 list-disc list-inside space-y-2">
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
            <p className="mt-2">We use the collected data to:</p>
            <ul className="mt-2 ml-6 list-disc list-inside space-y-2">
              <li>Provide and improve our services.</li>
              <li>Respond to user inquiries and provide support.</li>
              <li>Personalize the user experience.</li>
              <li>Ensure security and prevent unauthorized access.</li>
            </ul>
          </li>
          <li>
            <strong>Sharing Your Information</strong>
            <p className="mt-2">We do not sell your information. However, we may share it with:</p>
            <ul className="mt-2 ml-6 list-disc list-inside space-y-2">
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
            <p className="mt-2">
              We use industry-standard security measures to protect your data.
              However, no method of transmission or storage is 100% secure.
            </p>
          </li>
          <li>
            <strong>Your Rights</strong>
            <p className="mt-2">Depending on your location, you may have the right to:</p>
            <ul className="mt-2 ml-6 list-disc list-inside space-y-2">
              <li>Access, update, or delete your personal data.</li>
              <li>Opt-out of marketing communications.</li>
              <li>Request a copy of your data.</li>
            </ul>
          </li>
          <li>
            <strong>Cookies Policy</strong>
            <p className="mt-2">
              Our platform uses cookies to enhance the user experience. You can
              manage or disable cookies through your browser settings.
            </p>
          </li>
          <li>
            <strong>Changes to Privacy Policy</strong>
            <p className="mt-2">
              We may update this Privacy Policy periodically. We encourage you
              to review it regularly.
            </p>
          </li>
          <li>
            <strong>Contact Us</strong>
            <p className="mt-2">
              For questions or concerns about these Terms of Service or Privacy
              Policy, please contact us at: <strong>Email: </strong>
              info@hobs.ai
            </p>
          </li>
        </ul>
      </div>
    </main>
  );
}
