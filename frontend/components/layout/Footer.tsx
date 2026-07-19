export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">

        <div>
          <h3 className="footer-logo">amdrbones.</h3>
          <p>
            Platform Engineering • Linux • Kubernetes • DevOps
          </p>
        </div>

        <div className="footer-links">
          <a href="#projects">Projects</a>
          <a href="#labs">Labs</a>
          <a href="#architecture">Architecture</a>
          <a href="#journal">Journal</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 amdrbones.online • Built with Next.js
      </div>
    </footer>
  );
}