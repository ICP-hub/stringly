import React from 'react';

const Privacy = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-16 xl:px-24">
      <div className="max-w-7xl mx-auto bg-white shadow-xl rounded-lg p-8 lg:p-12 transition-all hover:shadow-[0_12px_30px_rgba(0,0,0,0.25)]">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 text-center border-b-4 border-purple-600 pb-4">
          Stringly Privacy Policy
        </h1>
        <p className="text-gray-700 mb-10 text-center text-lg">
          Last Updated: <span className="font-semibold">[Insert Date]</span>
        </p>
 
        <section className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-purple-700 mb-6">1. Who We Are</h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Stringly is dedicated to creating meaningful and authentic connections through innovative technology. This Privacy Policy applies to all services provided through our mobile app and any associated websites or services.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-purple-700 mb-6">2. Information We Collect</h2>
          <ul className="list-disc pl-8 text-gray-700 space-y-4 text-base md:text-lg">
            <li>
              <strong>Personal Information:</strong> Name, email address, phone number, gender, date of birth, and preferences.
            </li>
            <li>
              <strong>Profile Data:</strong> Photos, bio, and verification data.
            </li>
            <li>
              <strong>Location Information:</strong> Geolocation data with your consent.
            </li>
            <li>
              <strong>Activity Information:</strong> Swipes, matches, messages, and interactions.
            </li>
            <li>
              <strong>Device Information:</strong> Device model, OS, IP address, and usage logs.
            </li>
            <li>
              <strong>Payment Information:</strong> Subscription and purchase details.
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-purple-700 mb-6">3. How We Use Your Information</h2>
          <ul className="list-disc pl-8 text-gray-700 space-y-4 text-base md:text-lg">
            <li>Matching users based on preferences, location, and interests.</li>
            <li>Authenticating and verifying profiles to ensure trustworthy interactions.</li>
            <li>Customizing user experiences.</li>
            <li>Detecting and preventing fraud and unauthorized activity.</li>
            <li>Processing payments securely.</li>
            <li>Enhancing features and performance through analytics.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-purple-700 mb-6">4. Sharing Your Information</h2>
          <ul className="list-disc pl-8 text-gray-700 space-y-4 text-base md:text-lg">
            <li>With trusted partners for payment processing, analytics, and support.</li>
            <li>To comply with legal obligations.</li>
            <li>In case of a merger or acquisition.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-purple-700 mb-6">5. Your Privacy Choices</h2>
          <ul className="list-disc pl-8 text-gray-700 space-y-4 text-base md:text-lg">
            <li>Update or edit your data in-app.</li>
            <li>Request account deletion via app settings.</li>
            <li>Manage permissions in your device settings.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-purple-700 mb-6">6. Data Retention</h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            We retain your data as long as your account is active. Once deleted, data is removed within 30 days, except for legal compliance.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-purple-700 mb-6">7. Cookies and Tracking Technologies</h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            We use cookies to enhance your experience. You can manage cookie preferences through your browser or device settings.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-purple-700 mb-6">8. Security</h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            We implement encryption and secure protocols to protect your data. While no system is foolproof, we maintain high-security standards.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-purple-700 mb-6">9. Children’s Privacy</h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Stringly is intended for users aged 18 and older. We do not knowingly collect information from individuals under 18.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-purple-700 mb-6">10. International Data Transfers</h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            If you’re using Stringly outside of [Insert Country], your data may be transferred to and processed in countries where we operate. We comply with applicable data protection laws for these transfers.
          </p>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-purple-700 mb-6">11. Contact Us</h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            If you have questions or concerns about this Privacy Policy or your data, please contact us at:
          </p>
          <p className="text-gray-700 text-base md:text-lg">
            Email:{' '}
            <a
              href="mailto:support@stringly.com"
              className="text-purple-600 hover:underline"
            >
              support@stringly.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default Privacy;
