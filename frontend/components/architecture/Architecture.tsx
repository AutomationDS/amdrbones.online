import PipelineNode from "./PipelineNode";
import PipelineConnection from "./PipelineConnection";

export default function Architecture() {
  return (
    <section
      id="architecture"
      className="architecture"
    >
      <div className="container">

        <p className="section-tag">
          PLATFORM ARCHITECTURE
        </p>

        <h2 className="section-title">
          Modern Deployment Pipeline
        </h2>

        <p className="section-description">
          A simplified GitOps workflow representing how
          enterprise applications move from source code
          to production.
        </p>

        <div className="pipeline">

          <PipelineNode title="Developer" active />
          <PipelineConnection />

          <PipelineNode title="GitHub" active />
          <PipelineConnection />

          <PipelineNode title="Jenkins" active />
          <PipelineConnection />

          <PipelineNode title="Docker" active />
          <PipelineConnection />

          <PipelineNode title="Helm" />
          <PipelineConnection />

          <PipelineNode title="Argo CD" />
          <PipelineConnection />

          <PipelineNode title="Kubernetes" />
          <PipelineConnection />

          <PipelineNode title="Grafana" />

        </div>

      </div>
    </section>
  );
}