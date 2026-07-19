export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">

        <p className="section-tag">
          GET IN TOUCH
        </p>

        <h2 className="section-title">
          Let's build
          <br />
          reliable platforms.
        </h2>

        <p className="section-description">
          Interested in Platform Engineering,
          DevOps, Kubernetes or Linux Infrastructure?
          Let's connect.
        </p>

        <div className="contact-cards">

          <a
  className="contact-card"
  href="mailto:ambalaji@outlook.com"
>
  <h3>Email</h3>
  <span>ambalaji@outlook.com</span>
</a>

<a
  className="contact-card"
  href="https://github.com/AutomationDS/amdrbones.online"
  target="_blank"
  rel="noopener noreferrer"
>
  <h3>GitHub</h3>
  <span>github.com/AutomationDS/amdrbones.online</span>
</a>

<a
  className="contact-card"
  href="https://www.linkedin.com/in/balajisowdavaram"
  target="_blank"
  rel="noopener noreferrer"
>
  <h3>LinkedIn</h3>
  <span>linkedin.com/in/balajisowdavaram</span>
</a>

        </div>

      </div>
    </section>
  );
}