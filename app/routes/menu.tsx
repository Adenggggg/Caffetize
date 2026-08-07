import { Link } from "react-router";
import { Search, Plus, Leaf } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";
import { Card } from "~/components/ui/card";
import { Input } from "~/components/ui/input";

const CATEGORIES = [
  "Espresso",
  "Brewed Coffee",
  "Loose Leaf Tea",
  "Artisan Pastries",
  "Whole Bean",
];

const FILTERS = ["Oat Milk Friendly", "Decaf Available", "Vegan Options"];

const ITEMS = [
  {
    slug: "cortado",
    name: "Cortado",
    price: "$4.50",
    tag: "House Blend",
    desc: "Equal parts espresso and steamed milk, creating a balanced, silky cup.",
    img: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=500&q=80",
  },
  {
    slug: "ethiopia-yirgacheffe",
    name: "Ethiopia Yirgacheffe",
    price: "$6.00",
    tag: "Single Origin",
    desc: "Bright acidity with floral notes and a distinct blueberry finish.",
    img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&q=80",
  },
  {
    slug: "classic-cappuccino",
    name: "Classic Cappuccino",
    price: "$5.00",
    tag: null,
    desc: "A traditional 6oz cappuccino with a deep espresso base.",
    img: "https://images.unsplash.com/photo-1534778101976-62847782c213?w=500&q=80",
  },
  {
    slug: "iced-oat-latte",
    name: "Iced Oat Latte",
    price: "$5.50",
    tag: null,
    desc: "Double shot of our seasonal blend over ice, topped with oat milk.",
    img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500&q=80",
  },
];

export default function Menu() {
  return (
    <div className="px-6 md:px-10 py-10 max-w-6xl mx-auto grid md:grid-cols-[220px_1fr] gap-10">
      <aside>
        <h3 className="text-xs tracking-widest uppercase text-muted-foreground mb-3">
          Categories
        </h3>
        <nav className="flex flex-col gap-1 mb-8">
          {CATEGORIES.map((cat, i) => (
            <button
              key={cat}
              className={`text-left px-3 py-2 rounded-md text-sm ${
                i === 0 ? "bg-muted font-medium" : "text-muted-foreground hover:bg-muted/60"
              }`}
            >
              {cat}
            </button>
          ))}
        </nav>

        <div className="rounded-xl bg-muted p-4">
          <div className="flex items-center gap-2 text-xs tracking-widest uppercase text-muted-foreground mb-2">
            <Leaf className="w-3.5 h-3.5" /> Our Philosophy
          </div>
          <p className="text-sm text-muted-foreground italic leading-6">
            Every bean is ethically sourced and roasted in small batches to
            preserve its unique terroir.
          </p>
        </div>
      </aside>

      <div>
        <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between mb-6">
          <div className="relative w-full sm:max-w-xs">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search the menu..." className="pl-9" />
          </div>
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f, i) => (
              <Badge key={f} variant={i === 0 ? "dark" : "default"} className="cursor-pointer">
                {f}
              </Badge>
            ))}
          </div>
        </div>

        <h1 className="font-display text-3xl font-semibold mb-1">Espresso Bar</h1>
        <p className="text-muted-foreground text-sm mb-8 max-w-xl">
          Our signature blends and single-origin offerings, meticulously
          extracted for the perfect balance of crema and body.
        </p>

        <div className="grid sm:grid-cols-2 gap-5">
          {ITEMS.map((item) => (
            <Card key={item.slug} className="overflow-hidden">
              <Link to={`/menu/${item.slug}`}>
                <div className="relative h-40">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                  {item.tag && (
                    <Badge className="absolute top-3 left-3 bg-white/90 text-ink">{item.tag}</Badge>
                  )}
                </div>
              </Link>
              <div className="p-5">
                <div className="flex justify-between items-baseline mb-1">
                  <Link to={`/menu/${item.slug}`}>
                    <h3 className="font-display text-lg font-semibold hover:underline">
                      {item.name}
                    </h3>
                  </Link>
                  <span className="text-sm font-medium">{item.price}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{item.desc}</p>
                <Button variant="outline" size="sm" className="w-full">
                  <Plus className="w-3.5 h-3.5" /> Add to Order
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
