import Link from "next/link";
import { listProducts } from "./lib/data";

async function ProductLinks({ basePath }: { basePath: string }) {
  "use cache";
  const products = await listProducts();
  return (
    <ul className="flex flex-col gap-1">
      {products.map((p) => (
        <li key={p.slug}>
          <Link
            href={`${basePath}/${p.slug}`}
            className="text-blue-600 underline dark:text-blue-400"
          >
            {p.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function Home() {
  return (
    <main className="mx-auto flex max-w-3xl flex-1 flex-col gap-12 px-8 py-16">
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl font-semibold tracking-tight">
          Instant Navigation Demo
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          Two product sections wired up to showcase Instant Insights and the
          Navigation Inspector.
        </p>
      </header>

      <section className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold">/shop — blocking</h2>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Fetches uncached data without local Suspense. Triggers Instant
          Insights errors in dev.
        </p>
        <ProductLinks basePath="/shop" />
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold">/store — instant</h2>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Cached product info + Suspense around dynamic inventory. Passes
          validation; useful for the Navigation Inspector screenshot.
        </p>
        <ProductLinks basePath="/store" />
      </section>
    </main>
  );
}
