export const metadata = {
  title: 'Privacy Policy | Operaith',
  description: 'Privacy Policy for the Operaith website and Operaith Driver mobile application.',
};

export default function PrivacyPage() {
  return (
    <section className="py-20">
      <div className="container-shell">
        <div className="mx-auto max-w-4xl rounded-3xl border border-line bg-white p-8 shadow-sm sm:p-10">
          <h1 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">Privacy Policy</h1>
          <p className="mt-4 text-sm leading-7 text-muted">
            Effective date: August 16, 2026. This Privacy Policy explains how Operaith handles information through
            the Operaith website and the Operaith Driver mobile application ("Operaith Driver").
          </p>

          <div className="mt-10 space-y-8 text-sm leading-7 text-muted">
            <section>
              <h2 className="text-lg font-semibold text-ink">Scope</h2>
              <p className="mt-2">
                This policy applies to information processed through operaith.com, including the request-access
                flow, and through Operaith Driver. Operaith Driver is used by authorized drivers and operational
                personnel to sign in, view assigned work, navigate routes, execute pickup and drop-off actions,
                receive operational information, and report route telemetry.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-ink">Information we collect and process</h2>
              <p className="mt-2">
                Depending on how you use Operaith, we may collect or process account and identity information,
                organization and driver identifiers, assigned center and vehicle information, work-order and route
                information, operational actions, support and diagnostic information, device and connectivity
                information, and information you submit through the website request-access form such as organization
                name, contact name, job title, work email, phone number, and operational notes.
              </p>
              <p className="mt-2">
                Operaith Driver also processes precise device location when location-dependent driver features are
                active. This may include latitude, longitude, accuracy, timestamps, work-order and vehicle context,
                and related route telemetry.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-ink">Location data and background location</h2>
              <p className="mt-2 font-medium text-ink">
                Operaith Driver collects location data to enable route guidance, live route operations, GPS
                telemetry, and pickup and drop-off execution, including when the app is closed or not in use while
                an active route or work order is being executed.
              </p>
              <p className="mt-2">
                Location is used to support the driver&apos;s assigned transportation workflow, maintain route and
                stop execution continuity, synchronize operational telemetry, and help authorized operations teams
                understand the status of active transportation work. Operaith Driver does not use precise location
                data for advertising.
              </p>
              <p className="mt-2">
                On supported devices, Operaith Driver may continue location collection while an active route is
                running in the background. The app provides an in-app disclosure and requests the applicable Android
                location permission before background location functionality is enabled.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-ink">How we use information</h2>
              <p className="mt-2">
                We use information to authenticate users, provide assigned transportation operations, display and
                synchronize routes and work orders, support navigation, record authorized pickup and drop-off
                actions, maintain operational continuity, provide support, protect the service, investigate errors
                or security events, review website access requests, provision onboarding, and send service-related
                or transactional communications.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-ink">Sharing and service providers</h2>
              <p className="mt-2">
                Information may be available to the organization that authorized a driver&apos;s Operaith account and
                to authorized personnel who need it to operate or support transportation services. We may also use
                service providers that support infrastructure hosting, security, mapping and navigation,
                communications, and other functions necessary to operate Operaith. These providers are permitted to
                process information only for the services they provide to Operaith and subject to applicable
                contractual and legal requirements.
              </p>
              <p className="mt-2 font-medium text-ink">
                Operaith does not sell precise location data and does not use Driver location data for advertising.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-ink">SMS consent</h2>
              <p className="mt-2">
                If you explicitly opt in to transactional SMS, Operaith may send account verification, onboarding
                updates, ride reminders, ETA changes, and service alerts. Message frequency varies. Message and data
                rates may apply. Reply STOP to opt out and HELP for support.
              </p>
              <p className="mt-2 font-medium text-ink">
                SMS consent is not shared with third parties or affiliates for marketing purposes.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-ink">Security</h2>
              <p className="mt-2">
                Operaith uses technical and organizational safeguards designed to protect information against
                unauthorized access, loss, misuse, or alteration. Operaith Driver is designed to use encrypted
                network transport for production service connections and protected device storage for authentication
                credentials and other sensitive local records.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-ink">Retention and deletion</h2>
              <p className="mt-2">
                We retain information for as long as reasonably necessary to provide the service, support operational
                and security requirements, satisfy contractual obligations, maintain legitimate business records,
                and comply with applicable law. Retention periods may vary by data type and by the organization that
                authorized the account.
              </p>
              <p className="mt-2">
                Requests to access, correct, or delete personal information may be submitted using the contact
                information below. Some records may need to be retained where required for security, legal,
                contractual, or legitimate operational purposes.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-ink">Children</h2>
              <p className="mt-2">
                Operaith Driver is an operational application for authorized drivers and personnel and is not
                directed to children.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-ink">Changes to this policy</h2>
              <p className="mt-2">
                We may update this Privacy Policy as Operaith services, legal requirements, or data practices change.
                The effective date at the top of this page identifies the current version.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-ink">Contact</h2>
              <p className="mt-2">
                Questions or privacy requests may be sent to lubo.houston@gmail.com.
              </p>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
