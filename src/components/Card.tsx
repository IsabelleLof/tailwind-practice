export default function Card({ resource }) {
    return (
      <article className="flex flex-col justify-between rounded-xl border bg-white/80 p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
        <div>
          <h2 className="mb-2 text-lg font-semibold line-clamp-2">
            {resource.description || "No description"}
          </h2>
  
          <p className="mb-3 text-sm text-gray-600 break-all">
            <a
              href={resource.url}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-2 hover:no-underline"
            >
              {resource.url}
            </a>
          </p>
  
          <div className="mb-2 flex flex-wrap gap-2 text-xs">
            {resource.types?.map((type) => (
              <span
                key={type}
                className="rounded-full bg-slate-100 px-2 py-1 text-slate-700"
              >
                {type}
              </span>
            ))}
          </div>
  
          <div className="mb-2 flex flex-wrap gap-2 text-xs">
            {resource.topics?.map((topic) => (
              <span
                key={topic}
                className="rounded-full bg-indigo-50 px-2 py-1 text-indigo-700"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
  
        <div className="mt-3 flex items-center justify-between text-xs">
          <span
            className={`rounded-full px-2 py-1 ${
              resource.paid
                ? "bg-rose-100 text-rose-700"
                : "bg-emerald-100 text-emerald-700"
            }`}
          >
            {resource.paid ? "Paid" : "Free"}
          </span>
  
          {resource.levels?.length > 0 && (
            <span className="text-gray-500">
              Level: {resource.levels.join(", ")}
            </span>
          )}
        </div>
      </article>
    );
  }