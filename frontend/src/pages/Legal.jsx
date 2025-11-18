import { useParams } from "react-router-dom";

export default function Legal() {
  const { type } = useParams();

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{type.replace("-", " ")}</h1>
      <p className="opacity-70">Page en construction…</p>
    </div>
  );
}
