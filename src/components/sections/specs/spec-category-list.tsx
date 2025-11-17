import { specCategories } from "@/data/products";

export const SpecCategoryList = () => (
  <div className="grid gap-8 lg:grid-cols-2">
    {specCategories.map((category) => (
      <div
        key={category.id}
        className="space-y-4 rounded-[1.75rem] bg-white/70 p-6 shadow-[0_20px_60px_rgba(35,24,16,0.08)]"
      >
        <h3 className="text-2xl font-semibold">{category.title}</h3>
        <ul className="space-y-2 text-base text-clay/80">
          {category.bullets.map((bullet) => (
            <li key={bullet} className="leading-relaxed">
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

