export default function Journal() {
  const entries = [
    {
      date: "July 2026",
      title: "Built a GitOps Deployment Pipeline",
      summary:
        "Integrated Jenkins, Docker, Helm and Argo CD into an automated deployment workflow.",
      link: "https://github.com/AutomationDS/amdrbones.online",
    },
    {
      date: "July 2026",
      title: "Containerized the Portfolio",
      summary:
        "Packaged the Next.js application with Docker and prepared it for production deployment.",
      link: "https://github.com/AutomationDS/amdrbones.online",
    },
    {
      date: "July 2026",
      title: "Linux Automation Lab",
      summary:
        "Created Ansible playbooks for server provisioning, package management and security hardening.",
      link: "https://github.com/AutomationDS/amdrbones.online",
    },
  ];

  return (
    <section id="journal" className="journal">
      <div className="container">
        <p className="section-tag">ENGINEERING JOURNAL</p>

        <h2 className="section-title">
          Building,
          <br />
          Learning,
          <br />
          Improving.
        </h2>

        <p className="section-description">
          A running log of projects, experiments and lessons learned while
          building production-ready infrastructure.
        </p>

        <div className="journal-grid">
          {entries.map((entry) => (
            <article className="journal-card" key={entry.title}>
              <span className="journal-date">{entry.date}</span>

              <h3>{entry.title}</h3>

              <p>{entry.summary}</p>

              <a
                className="journal-button"
                href={entry.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read Journal →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}