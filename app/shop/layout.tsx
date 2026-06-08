import Link from "next/link";
import { listProducts } from "../lib/data";

export default async function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const products = await listProducts();

  return (
    <div className="mx-auto grid max-w-4xl grid-cols-[200px_1fr] gap-8 px-6 py-12">
      <aside className="border-r border-neutral-200 pr-6 dark:border-neutral-800">
        <Link
          href="/"
          className="text-sm text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100"
        >
          ← Catalog
        </Link>
        <h2 className="mt-6 text-sm font-medium uppercase tracking-wider text-neutral-500">
          Shop
        </h2>
        <ul className="mt-3 grid gap-1">
          {products.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/shop/${p.slug}`}
                className="block rounded px-2 py-1 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-900"
              >
                {p.name}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
      <section>{children}</section>
    </div>
  );
}
