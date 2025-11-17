import Image from "next/image";
import Link from "next/link";
import { compareProducts } from "@/data/products";
import { Button } from "@/components/ui/button";

export const CompareCards = () => (
  <div className="grid gap-8 md:grid-cols-2">
    {compareProducts.map((product) => (
      <div
        key={product.slug}
        className="card-surface flex flex-col items-center gap-6 rounded-[2.5rem] bg-white/80 p-8 text-center"
      >
        <div className="relative h-64 w-full">
          <Image
            src={product.heroImage}
            alt={product.name}
            fill
            className="object-contain"
          />
        </div>
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold text-clay">{product.name}</h3>
          <p className="text-base text-clay/70">Starting at ${product.price}</p>
        </div>
        <Button asChild variant="primary">
          <Link href={`/buy/${product.slug}`}>Buy Now</Link>
        </Button>
      </div>
    ))}
  </div>
);

