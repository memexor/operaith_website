const faqs = [
  [
    'How does trial access work?',
    'Submit a request from our website. Our platform team reviews your request, provisions your organization, and shares access details once your setup is ready.',
  ],
  [
    'Why is access reviewed before activation?',
    'Operaith is designed for organizations with real operational needs. We review each request so onboarding, org setup, and access controls are aligned from the start.',
  ],
  [
    'How does pricing work?',
    'Operaith is priced per organization, not per rider or trip. Each plan supports a different operational range and deployment need.',
  ],
  [
    'Do riders or passengers get charged?',
    'No. Operaith bills the organization. Riders and passengers are never the billing target.',
  ],
  [
    'What do auditable records include?',
    'Operaith records trips, operational actions, and execution outcomes in a structured way so organizations can review how work was planned and completed.',
  ],
  [
    'How long does onboarding take?',
    'Most organizations can get started within 1–2 weeks, depending on review, provisioning, and operational data readiness.',
  ],
];

export function FAQList() {
  return (
    <div className="mt-12 grid gap-6 lg:grid-cols-2">
      {faqs.map(([question, answer]) => (
        <article key={question} className="card">
          <h3 className="text-xl font-semibold text-[#031B3A]">{question}</h3>
          <p className="mt-4 text-base leading-7 text-muted">{answer}</p>
        </article>
      ))}
    </div>
  );
}
