export default function Projects() {
  const projects = [
    {
      title: "Enterprise Kubernetes Platform",
      tech: "Kubernetes • Helm • Argo CD • Grafana",
      description:
        "Production-ready GitOps platform with automated deployments, monitoring and observability.",
      link: "https://github.com/AutomationDS/amdrbones.online",
    },
    {
      title: "Docker Platform",
      tech: "Docker • Compose • Nginx",
      description:
        "Multi-container application stack with reverse proxy, networking and persistent storage.",
      link: "https://github.com/AutomationDS/amdrbones.online",
    },
    {
      title: "Linux Automation",
      tech: "RHEL • Ansible • Bash",
      description:
        "Enterprise automation for provisioning, patching, hardening and server management.",
      link: "https://github.com/AutomationDS/amdrbones.online",
    },
  ];

  return (
    <section id="projects" className="projects">

      <div className="container">

        <p className="section-tag">
          FEATURED PROJECTS
        </p>

        <h2 className="section-title">
          Engineering projects
          <br />
          built for production.
        </h2>

        <p className="section-description">
          Real projects focused on reliability,
          automation and modern platform engineering.
        </p>

        <div className="project-grid">

          {projects.map((project) => (

            <div
              className="project-card"
              key={project.title}
            >

              <h3>{project.title}</h3>

              <p className="project-tech">
                {project.tech}
              </p>

              <p className="project-description">
                {project.description}
              </p>

              <a
                className="project-button"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project →
              </a>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}