import { useEffect, useState } from "react";
import Card from "./components/Card.tsx";
import Header from "./components/Header.tsx";
import List from "./components/List.tsx";   // 👈 importera List
import "./App.css"; // här kan du importera tailwind via index.css istället om du vill


export default function App() {
  const [resources, setResources] = useState([]);   // 👈 array istället för ""
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getData = async () => {
    try {
      const resp = await fetch(
        "https://api.sampleapis.com/codingresources/codingResources"
      );
      if (!resp.ok) throw new Error("Något gick fel med API:et");
      const json = await resp.json();
      setResources(json);
    } catch (err) {
      setError(err.message || "Okänt fel");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50">
        <p className="text-gray-600">Laddar resurser...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50">
        <div className="rounded-lg border border-rose-200 bg-rose-50 px-4 py-3 text-rose-800">
          Något gick fel: {error}
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8">
      <section className="mx-auto max-w-5xl space-y-6">
        <Header />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource) => (
            <Card key={resource.id} resource={resource} />
          ))}
        </div>
        <List resources={resources}/>
      </section>
    </main>
  );
}

