import { ChevronRight, ArrowRight, Tag, CreditCard, Download } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";

const ORDER = [
  {
    name: "Oat Milk Cortado",
    price: "$5.50",
    detail: "Single Origin Espresso, Extra Hot",
    tag: "Ethiopia Yirgacheffe",
    img: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=200&q=80",
  },
  {
    name: "Almond Croissant",
    price: "$4.75",
    detail: "Warmed",
    tag: null,
    img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=200&q=80",
  },
  {
    name: "House Blend Beans",
    price: "$22.00",
    detail: "Whole Bean, 12oz",
    tag: "Retail",
    img: "https://images.unsplash.com/photo-1587734195503-904fca47e0b9?w=200&q=80",
  },
];

export default function Checkout() {
  return (
    <div className="px-6 md:px-10 py-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
      <div>
        <div className="flex items-baseline justify-between mb-6">
          <h1 className="font-display text-4xl font-semibold">Your Order</h1>
          <Badge>3 Items</Badge>
        </div>

        <div className="flex flex-col gap-4 mb-6">
          {ORDER.map((item) => (
            <div key={item.name} className="flex gap-4 bg-white rounded-xl border border-border p-4">
              <img src={item.img} alt={item.name} className="w-16 h-16 rounded-lg object-cover" />
              <div className="flex-1">
                <div className="flex justify-between">
                  <h3 className="font-display font-semibold">{item.name}</h3>
                  <span className="text-sm font-medium">{item.price}</span>
                </div>
                <p className="text-sm text-muted-foreground">{item.detail}</p>
                {item.tag && (
                  <Badge className="mt-2 text-[10px] tracking-wide uppercase">{item.tag}</Badge>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-xl bg-muted p-5">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-muted-foreground">Subtotal</span>
            <span>$32.25</span>
          </div>
          <div className="flex justify-between text-sm mb-4">
            <span className="text-muted-foreground">Tax</span>
            <span>$2.90</span>
          </div>
          <div className="flex justify-between items-baseline border-t border-border pt-4">
            <span className="font-display text-xl font-semibold">Total</span>
            <span className="font-display text-2xl font-semibold">$35.15</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <div className="bg-white rounded-xl border border-border p-6">
          <h2 className="font-display text-2xl font-semibold mb-5">Pickup Details</h2>

          <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">Location</p>
          <button className="w-full flex items-center justify-between border border-border rounded-md px-4 py-3 mb-6 text-left">
            <span>
              <span className="block font-medium">123 Roast Lane</span>
              <span className="block text-sm text-muted-foreground">
                Coffee District, 0.8 miles away
              </span>
            </span>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
          </button>

          <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">Time</p>
          <div className="grid grid-cols-2 gap-3">
            <Button size="lg" className="w-full">ASAP (10 min)</Button>
            <Button variant="outline" size="lg" className="w-full">Schedule Later</Button>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-border p-6">
          <h2 className="font-display text-2xl font-semibold mb-5">Payment</h2>

          <div className="flex flex-col gap-3 mb-5">
            <label className="flex items-center justify-between border-2 border-ink rounded-md px-4 py-3">
              <span className="flex items-center gap-3">
                <input type="radio" name="pay" defaultChecked />
                Apple Pay
              </span>
              <Download className="w-4 h-4 text-muted-foreground" />
            </label>
            <label className="flex items-center justify-between border border-border rounded-md px-4 py-3">
              <span className="flex items-center gap-3">
                <input type="radio" name="pay" />
                •••• 4242
              </span>
              <CreditCard className="w-4 h-4 text-muted-foreground" />
            </label>
          </div>

          <label className="flex items-center justify-between text-sm">
            <span className="flex items-center gap-2 text-muted-foreground">
              <Tag className="w-4 h-4" /> Use 150 points for $5 off
            </span>
            <input type="checkbox" className="rounded border-border" />
          </label>
        </div>

        <Button size="lg" className="w-full justify-between">
          <span className="font-semibold">Place Order</span>
          <span className="flex items-center gap-2">
            $35.15 <ArrowRight className="w-4 h-4" />
          </span>
        </Button>
        <p className="text-xs text-center text-muted-foreground -mt-3">
          By placing this order, you agree to our tactile terms of slow service.
        </p>
      </div>
    </div>
  );
}
