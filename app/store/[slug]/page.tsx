import { Suspense } from "react";
import { cookies } from "next/headers";
import { getProduct } from "../../lib/data";

type Params = PageProps<"/store/[slug]">["params"];

export default function ProductPage(props: PageProps<"/store/[slug]">) {
  return (
    <div className="grid gap-6">
      <Suspense fallback={<p className="text-neutral-500">Loading product…</p>}>
        <ProductInfo params={props.params} />
      </Suspense>
      <Suspense fallback={<p className="text-neutral-500">Loading region…</p>}>
        <ShippingRegion />
      </Suspense>
    </div>
  );
}

async function ProductInfo({ params }: { params: Params }) {
  const { slug } = await params;
  const product = await getProduct(slug);
  return (
    <div>
      <h1 className="text-3xl font-semibold tracking-tight">{product.name}</h1>
      <p className="mt-1 text-xl text-neutral-500">${product.price}</p>
      <p className="mt-4 max-w-prose text-neutral-700 dark:text-neutral-300">
        {product.description}
      </p>
    </div>
  );
}

async function ShippingRegion() {
  const country = (await cookies()).get("country")?.value ?? "US";
  return (
    <p className="text-sm text-neutral-600 dark:text-neutral-400">
      Ships to {country}
    </p>
  );
}
