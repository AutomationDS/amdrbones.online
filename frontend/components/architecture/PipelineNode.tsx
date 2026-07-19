type PipelineNodeProps = {
  title: string;
  active?: boolean;
};

export default function PipelineNode({
  title,
  active = false,
}: PipelineNodeProps) {
  return (
    <div
      className={`pipeline-node ${
        active ? "pipeline-node-active" : ""
      }`}
    >
      <span className="pipeline-dot"></span>

      <span className="pipeline-text">
        {title}
      </span>
    </div>
  );
}