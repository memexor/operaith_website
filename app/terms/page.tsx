export default function TermsPage() {
  return (
    <section className="py-20">
      <div className="container-shell">
        <div className="mx-auto max-w-4xl rounded-3xl border border-line bg-white p-8 shadow-sm sm:p-10">
          <h1 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">Terms of Use</h1>
          <p className="mt-4 text-sm leading-7 text-muted">
            Effective date: April 2026. These Terms of Use govern access to the Operaith website and trial
            request workflow.
          </p>

          <div className="mt-10 space-y-8 text-sm leading-7 text-muted">
            <section>
              <h2 className="text-lg font-semibold text-ink">Use of the website</h2>
              <p className="mt-2">
                You may use this website to learn about Operaith and to request trial access for a legitimate
                organization. You agree not to submit false, misleading, abusive, or unlawful information.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-ink">Trial requests and communications</h2>
              <p className="mt-2">
                When you submit a request, you authorize Operaith to contact you about your request, onboarding,
                account verification, service updates, and operational notifications related to the trial
                process. Message frequency varies. Message and data rates may apply. Reply STOP to opt out of
                SMS and HELP for support.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-ink">Acceptable use</h2>
              <p className="mt-2">
                You may not use the website or any Operaith communications channel for spam, harassment,
                unlawful activity, infringement, security testing without permission, or any activity that
                interferes with service integrity.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-ink">No guarantee of trial approval</h2>
              <p className="mt-2">
                Submission of a trial request does not guarantee approval, provisioning, or access. Operaith may
                decline, defer, or limit access based on operational fit, readiness, risk, or capacity.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-ink">Contact</h2>
              <p className="mt-2">
                Questions about these terms may be sent to lubo.houston@gmail.com.
              </p>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
