export default function LegalPage({ title }) {
  return (
    <section className="space-y-3">
      <h1 className="text-2xl font-semibold">{title}</h1>
      <p className="text-sm text-slate-600">
        Cette page est prévue pour être remplie par un cabinet spécialisé.
      </p>
      <p className="text-xs text-slate-500">Page en construction.</p>
    </section>
  );
}
