function LegalPage({ title }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
      <h1 className="text-2xl font-semibold text-[#00497c] mb-2">{title}</h1>
      <p className="text-sm text-slate-600">
        Cette page est en construction. Son contenu sera rédigé ultérieurement
        par un cabinet spécialisé.
      </p>
    </div>
  );
}

export default LegalPage;
