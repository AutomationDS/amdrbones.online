export default function Hero() {

  const stack = [
    "Linux",
    "Docker",
    "Kubernetes",
    "Helm",
    "Argo CD",
    "Terraform",
    "Ansible",
    "Grafana",
  ];

  return (
    <section className="hero">

      <div className="hero-background">
        <div className="hero-glow hero-glow-1"></div>
        <div className="hero-glow hero-glow-2"></div>
        <div className="hero-grid-overlay"></div>
      </div>

      <div className="container hero-grid">

        <div className="hero-left">

          <p className="hero-tag">
            PLATFORM • ENGINEERING • DEVOPS
          </p>

          <h1>
            Building
            <br />
            reliable
            <br />
            platforms
            <br />
            for the
            <br />
            modern cloud.
          </h1>

          <p className="hero-description">
            Platform Engineer specializing in Linux,
            Kubernetes, GitOps,
            Infrastructure Automation,
            Observability and Cloud Native Platforms.
          </p>

          <div className="hero-buttons">

            <a href="#projects" className="primary-btn">
              Explore Projects
            </a>

            <a href="#labs" className="secondary-btn">
              View Labs
            </a>

          </div>

        </div>

        <div className="hero-right">

          <div className="status-card">

            <div className="status-header">

              <div>

                <div className="status-title">

                  <span className="status-dot"></span>

                  PLATFORM ONLINE

                </div>

                <div className="status-subtitle">
                  Last deployment • 2 mins ago
                </div>

              </div>

              <div className="health">
                100%
              </div>

            </div>

            <div className="metrics">

              <div className="metric">

                <span>Nodes</span>

                <strong>08</strong>

              </div>

              <div className="metric">

                <span>Containers</span>

                <strong>31</strong>

              </div>

              <div className="metric">

                <span>Uptime</span>

                <strong>99.99%</strong>

              </div>

            </div>

            <div className="status-list">

              {stack.map((item) => (

                <div
                  className="status-item"
                  key={item}
                >

                  <span>{item}</span>

                  <span className="check">
                    ✓
                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </section>

  );

}