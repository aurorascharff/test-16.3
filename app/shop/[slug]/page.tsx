import { cookies } from "next/headers";
import { getProduct } from "../../lib/data";

export default async function ProductPage(props: PageProps<"/shop/[slug]">) {
  const { slug } = await props.params;
  const product = await getProduct(slug);
  const country = (await cookies()).get("country")?.value ?? "US";

  return (
    <div className="grid gap-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">
          {product.name}
        </h1>
        <p className="mt-1 text-xl text-neutral-500">${product.price}</p>
        <p className="mt-4 max-w-prose text-neutral-700 dark:text-neutral-300">
          {product.description}
        </p>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-400">
        Ships to {country}
      </p>
    </div>
  );
}
