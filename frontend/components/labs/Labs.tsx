export default function Labs() {
  const labs = [
    { name: "Linux", total: 54 },
    { name: "Docker", total: 31 },
    { name: "Kubernetes", total: 18 },
    { name: "Helm", total: 10 },
    { name: "Argo CD", total: 6 },
    { name: "Terraform", total: 8 },
    { name: "Ansible", total: 14 },
    { name: "Nginx", total: 11 },
  ];

  return (
    <section id="labs" className="labs">

      <div className="container">

        <p className="section-tag">
          ENGINEERING LABS
        </p>

        <h2 className="section-title">
          Learn by
          <br />
          building.
        </h2>

        <p className="section-description">
          Hands-on enterprise labs covering Linux,
          Containers, Kubernetes,
          Automation and Platform Engineering.
        </p>

        <div className="labs-card">

          {labs.map((lab) => (

            <div
              key={lab.name}
              className="lab-row"
            >

              <span>{lab.name}</span>

              <strong>{lab.total} Labs</strong>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}