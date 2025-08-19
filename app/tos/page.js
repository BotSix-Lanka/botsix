import React from "react";

const PrivacyPolicyAndTerms = () => {
  const currentDate = new Date().toLocaleDateString(); // Format to current date

  return (
    <div className="container mx-auto px-6 py-12 bg-gray-50">
      <section className="mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Privacy Policy
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          At Botsix, your privacy is a top priority. This policy explains how we
          collect, use, and protect your personal data when you use our
          services. Please read it carefully.
        </p>

        <h3 className="text-2xl font-semibold text-gray-800 mb-3">
          1. Information We Collect
        </h3>
        <p className="text-lg text-gray-600 mb-6">
          We collect personal information such as your name, email address,
          phone number, and any other data you provide through forms or
          communication with us.
        </p>

        <h3 className="text-2xl font-semibold text-gray-800 mb-3">
          2. How We Use Your Information
        </h3>
        <p className="text-lg text-gray-600 mb-6">
          The information we collect is used for the following purposes: to
          process your requests, provide customer support, send updates, and
          improve our services. We will not share your personal information with
          third parties without your consent.
        </p>

        <h3 className="text-2xl font-semibold text-gray-800 mb-3">
          3. Data Security
        </h3>
        <p className="text-lg text-gray-600 mb-6">
          We implement advanced security measures to safeguard your personal
          data. However, no method of electronic transmission or storage is 100%
          secure. While we strive to protect your information, we cannot
          guarantee complete security.
        </p>

        <h3 className="text-2xl font-semibold text-gray-800 mb-3">
          4. Your Rights
        </h3>
        <p className="text-lg text-gray-600 mb-6">
          You have the right to access, update, or delete your personal
          information at any time. You may also opt out of receiving promotional
          materials from us by contacting us directly.
        </p>

        <h3 className="text-2xl font-semibold text-gray-800 mb-3">
          5. Changes to This Policy
        </h3>
        <p className="text-lg text-gray-600 mb-6">
          We reserve the right to update this Privacy Policy. Any changes will
          be reflected on this page and will be effective immediately upon
          posting. We encourage you to review this policy periodically.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Terms of Service
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          These Terms of Service govern your use of Botsix's services. By using
          our services, you agree to comply with these terms. Please read them
          carefully.
        </p>

        <h3 className="text-2xl font-semibold text-gray-800 mb-3">
          1. Service Agreement
        </h3>
        <p className="text-lg text-gray-600 mb-6">
          Botsix agrees to provide the services as described in the project
          proposal. Both parties must comply with the terms outlined in the
          signed contract, which will govern the scope, deliverables, and
          timelines.
        </p>

        <h3 className="text-2xl font-semibold text-gray-800 mb-3">
          2. Payment Terms
        </h3>
        <p className="text-lg text-gray-600 mb-6">
          A 40% deposit is required to start the project. The remaining balance
          is due upon completion. If payment is not made within the stipulated
          time frame, the hosted services will be suspended until the
          outstanding amount is cleared.
        </p>

        <h3 className="text-2xl font-semibold text-gray-800 mb-3">
          3. Ownership and Rights
        </h3>
        <p className="text-lg text-gray-600 mb-6">
          Upon full payment, the client will retain ownership of the developed
          product. However, Botsix reserves the right to display the project on
          our website as part of our portfolio, unless otherwise agreed in
          writing.
        </p>

        <h3 className="text-2xl font-semibold text-gray-800 mb-3">
          4. Liability
        </h3>
        <p className="text-lg text-gray-600 mb-6">
          Botsix will not be liable for any issues arising from third-party
          services, including hosting, domain registration, or other related
          services. Our liability is limited to the scope of the contract.
        </p>

        <h3 className="text-2xl font-semibold text-gray-800 mb-3">
          5. Termination
        </h3>
        <p className="text-lg text-gray-600 mb-6">
          Either party may terminate the agreement if the terms are violated. In
          case of early termination, the client will be responsible for payments
          up until the termination date.
        </p>

        <h3 className="text-2xl font-semibold text-gray-800 mb-3">
          6. Project Display
        </h3>
        <p className="text-lg text-gray-600 mb-6">
          All projects created by Botsix will be showcased on our website as
          part of our portfolio unless the client explicitly requests otherwise
          in writing.
        </p>

        <h3 className="text-2xl font-semibold text-gray-800 mb-3">
          7. Changes to These Terms
        </h3>
        <p className="text-lg text-gray-600 mb-6">
          Botsix may update these Terms of Service at any time. All changes will
          be posted on this page, and the updated terms will be effective
          immediately upon posting.
        </p>
      </section>

      <section className="text-center">
        <p className="text-sm text-gray-500">
          Last updated: <strong>{currentDate}</strong>
        </p>
      </section>

      <section className="text-center mt-8">
        <p className="text-lg text-gray-600">
          If you have any questions or concerns about our Privacy Policy or
          Terms of Service, feel free to reach out to us at{" "}
          <a
            href="mailto:info.botsix.lk@gmail.com"
            className="text-[#274393] hover:underline"
          >
            info.botsix.lk@gmail.com
          </a>
          .
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicyAndTerms;
