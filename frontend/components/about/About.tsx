export default function About() {
  const stats = [
    { value: "9+", label: "Years in IT" },
    { value: "2", label: "Certifications" },
    { value: "KL", label: "Malaysia Based" },
  ];

  const skillGroups = [
    {
      title: "Cloud & Infrastructure",
      skills: ["AWS", "Terraform", "EKS", "VPC / Networking"],
    },
    {
      title: "Automation & Config Mgmt",
      skills: ["Ansible", "Bash", "CI/CD Pipelines"],
    },
    {
      title: "Containers & Orchestration",
      skills: ["Docker", "Kubernetes", "Helm", "Argo CD"],
    },
    {
      title: "Systems",
      skills: ["Linux / RHEL", "Nginx", "Monitoring"],
    },
  ];

  const certifications = [
    "AWS Certified Solutions Architect – Associate",
    "HashiCorp Certified: Terraform Associate",
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <p className="section-tag">ABOUT</p>

        <h2 className="section-title">
          The engineer
          <br />
          behind the platform.
        </h2>

        <p className="section-description">
          A closer look at the background, tools and certifications behind
          this work.
        </p>

        <div className="about-grid">
          <div className="about-content">
            <p>
              I&apos;m a Cloud and DevOps Engineer based in Kuala Lumpur,
              Malaysia, with close to a decade of IT experience spanning
              automation and cloud platform engineering. My work centers on
              designing reliable, automated infrastructure — from
              provisioning and hardening Linux systems to running
              production workloads on Kubernetes.
            </p>

            <p>
              Day to day, that means building with AWS, Terraform and
              Ansible, wiring up CI/CD pipelines, and containerizing and
              orchestrating services with Docker, Kubernetes, Helm and
              Argo CD. I care about infrastructure that is reproducible,
              observable and boring in the best way — systems that fail
              predictably and recover fast.
            </p>

            <p>
              Beyond day-to-day engineering, I&apos;m building toward
              advisory, consulting and technical leadership work —
              going deep enough on the fundamentals to mentor others and
              make sound platform decisions at scale.
            </p>

            <div className="about-stats">
              {stats.map((stat) => (
                <div className="about-stat" key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="about-side">
            <div className="about-panel">
              <h3 className="about-panel-title">Core Stack</h3>

              <div className="about-skills">
                {skillGroups.map((group) => (
                  <div className="skills-group" key={group.title}>
                    <span className="skills-group-title">{group.title}</span>

                    <div className="skill-tags">
                      {group.skills.map((skill) => (
                        <span className="skill-tag" key={skill}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="about-panel">
              <h3 className="about-panel-title">Certifications</h3>

              <div className="cert-list">
                {certifications.map((cert) => (
                  <div className="cert-item" key={cert}>
                    <span className="cert-check">✓</span>
                    <span>{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
