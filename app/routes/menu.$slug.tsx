import { Link } from "react-router";
import { ShoppingCart } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";
import type { Route } from "./+types/menu.$slug";

export default function ProductDetail({ params }: Route.ComponentProps) {
  return (
    <div className="px-6 md:px-10 py-8 max-w-6xl mx-auto">
      <p className="text-xs text-muted-foreground mb-6">
        <Link to="/menu" className="hover:text-ink">Menu</Link> &gt; Espresso &gt;{" "}
        <span className="text-ink font-medium">Signature Latte</span>
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="relative rounded-xl overflow-hidden h-[420px]">
          <img
            src="https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=900&q=80"
            alt="Signature Latte"
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          <div className="flex gap-2 mb-3">
            <Badge>Hot</Badge>
            <Badge>Espresso</Badge>
          </div>
          <h1 className="font-display text-4xl font-semibold mb-3">Signature Latte</h1>
          <p className="text-muted-foreground mb-4">
            Our house espresso, rich with notes of dark chocolate and toasted
            almond, harmoniously blended with velvety micro-foamed milk. A
            comforting, balanced classic designed for slow mornings.
          </p>
          <p className="text-2xl font-semibold mb-6">$5.50</p>

          <div className="mb-6">
            <h3 className="text-sm font-medium mb-3">Size</h3>
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: "8 oz", extra: null, active: true },
                { label: "12 oz", extra: "+$0.50", active: false },
                { label: "16 oz", extra: "+$1.00", active: false },
              ].map((s) => (
                <button
                  key={s.label}
                  className={`rounded-md border py-3 text-sm relative ${
                    s.active
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-white border-border text-ink"
                  }`}
                >
                  {s.extra && (
                    <span className="absolute -top-2 -right-1 text-[10px] bg-accent text-accent-foreground px-1.5 py-0.5 rounded-full">
                      {s.extra}
                    </span>
                  )}
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-sm font-medium mb-3">Milk Base</h3>
            <div className="flex flex-wrap gap-2">
              {[
                { label: "Whole Milk", extra: null, active: true },
                { label: "Oat Milk", extra: "+$0.75", active: false },
                { label: "Almond Milk", extra: "+$0.75", active: false },
                { label: "Skim Milk", extra: null, active: false },
              ].map((m) => (
                <button
                  key={m.label}
                  className={`rounded-full px-4 py-2 text-sm border ${
                    m.active
                      ? "bg-olive text-white border-olive"
                      : "bg-white border-border text-ink"
                  }`}
                >
                  {m.label} {m.extra && <span className="opacity-70">{m.extra}</span>}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-sm font-medium mb-3">Sweetness</h3>
              <div className="flex gap-2">
                {["None", "25%", "50%", "100%"].map((s) => (
                  <button
                    key={s}
                    className={`rounded-md px-3 py-2 text-xs border ${
                      s === "50%"
                        ? "bg-ink text-cream border-ink"
                        : "bg-white border-border text-ink"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-3">Temperature</h3>
              <div className="flex gap-2">
                {["Kids Temp", "Standard", "Extra Hot"].map((t) => (
                  <button
                    key={t}
                    className={`rounded-md px-3 py-2 text-xs border ${
                      t === "Standard"
                        ? "bg-ink text-cream border-ink"
                        : "bg-white border-border text-ink"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-muted p-5 mb-6">
            <h3 className="font-medium mb-3">Add-ons</h3>
            <div className="flex flex-col gap-3">
              {[
                { label: "Extra Espresso Shot", price: "+$1.25" },
                { label: "Vanilla Syrup (House-made)", price: "+$0.75" },
                { label: "Caramel Drizzle", price: "+$0.50" },
              ].map((a) => (
                <label key={a.label} className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-2">
                    <input type="checkbox" className="rounded border-border" />
                    {a.label}
                  </span>
                  <span className="text-muted-foreground">{a.price}</span>
                </label>
              ))}
            </div>
            <div className="flex justify-between items-center border-t border-border mt-4 pt-4">
              <span className="text-sm font-medium">Total</span>
              <span className="font-display text-2xl font-semibold">$5.50</span>
            </div>
          </div>

          <Button size="lg" className="w-full">
            <ShoppingCart className="w-4 h-4" /> Add to Cart
          </Button>
          <p className="text-xs text-center text-muted-foreground mt-3">
            Ready for pickup in ~5 mins
          </p>
        </div>
      </div>
    </div>
  );
}
