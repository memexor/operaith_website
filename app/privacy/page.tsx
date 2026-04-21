export default function PrivacyPage() {
  return (
    <section className="py-20">
      <div className="container-shell">
        <div className="mx-auto max-w-4xl rounded-3xl border border-line bg-white p-8 shadow-sm sm:p-10">
          <h1 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">Privacy Policy</h1>
          <p className="mt-4 text-sm leading-7 text-muted">
            Effective date: April 2026. This Privacy Policy explains what information Operaith collects through
            the website request-access flow and how that information is used.
          </p>

          <div className="mt-10 space-y-8 text-sm leading-7 text-muted">
            <section>
              <h2 className="text-lg font-semibold text-ink">Information we collect</h2>
              <p className="mt-2">
                We collect the information you submit through the request-access form, including organization
                name, contact name, job title, work email, phone number, and operational notes you choose to
                provide.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-ink">How we use information</h2>
              <p className="mt-2">
                We use submitted information to review trial requests, provision onboarding, communicate with
                your team, support account verification, and send service-related or transactional updates tied to
                your request.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-ink">SMS consent</h2>
              <p className="mt-2">
                If you explicitly opt in to transactional SMS, Operaith may send account verification,
                onboarding updates, ride reminders, ETA changes, and service alerts. Message frequency varies.
                Message and data rates may apply. Reply STOP to opt out and HELP for support.
              </p>
              <p className="mt-2 font-medium text-ink">
                SMS consent is not shared with third parties or affiliates for marketing purposes.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-ink">Sharing and retention</h2>
              <p className="mt-2">
                We share information only as needed to operate the website, review requests, deliver
                transactional communications, and support onboarding. We retain information for as long as needed
                for those purposes, compliance obligations, and legitimate business records.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-ink">Contact</h2>
              <p className="mt-2">
                Questions about this Privacy Policy may be sent to lubo.houston@gmail.com.
              </p>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
