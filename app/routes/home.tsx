import { Link } from "react-router";
import { ArrowRight, Plus } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";
import { Card } from "~/components/ui/card";

const FEATURED = [
  {
    slug: "artisanal-cortado",
    name: "Artisanal Cortado",
    price: "$4.50",
    tag: "Hot",
    desc: "Equal parts rich espresso and steamed milk for a balanced, velvety texture.",
    img: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=600&q=80",
  },
  {
    slug: "kyoto-cold-brew",
    name: "Kyoto Cold Brew",
    price: "$5.00",
    tag: "Iced",
    desc: "Slow-steeped over 18 hours for an incredibly smooth, low-acidity profile with notes of chocolate.",
    img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=600&q=80",
  },
  {
    slug: "ethiopian-yirgacheffe",
    name: "Ethiopian Yirgacheffe",
    price: "$6.00",
    tag: "Single Origin",
    desc: "Bright and floral with distinct notes of bergamot and jasmine. Brewed fresh via V60.",
    img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80",
  },
];

export default function Home() {
  return (
    <div>
      <section className="relative h-[420px] flex items-end px-6 md:px-10 pb-12 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1600&q=80"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/50" />
        <div className="relative max-w-xl text-cream">
          <h1 className="font-display text-4xl md:text-5xl font-semibold mb-3">
            Ready for your morning brew?
          </h1>
          <p className="text-cream/85 mb-6">
            Experience the tactile joy of slow coffee. Masterfully roasted beans,
            brewed with intention just for you.
          </p>
          <Button asChild size="lg" className="bg-cream text-ink hover:bg-white">
            <Link to="/menu">
              Order Now <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="px-6 md:px-10 py-14 max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="font-display text-3xl font-semibold mb-1">Featured Brews</h2>
            <p className="text-muted-foreground text-sm">Curated selections to start your day.</p>
          </div>
          <Link to="/menu" className="text-sm text-ink/70 hover:text-ink flex items-center gap-1">
            View full menu <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {FEATURED.map((item) => (
            <Card key={item.slug} className="overflow-hidden">
              <div className="relative h-44">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                <Badge className="absolute top-3 right-3 bg-white/90 text-ink">{item.tag}</Badge>
              </div>
              <div className="p-5">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-display text-lg font-semibold">{item.name}</h3>
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
      </section>

      <section className="px-6 md:px-10 py-14 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-xs tracking-widest text-muted-foreground uppercase mb-2">
            The Process
          </p>
          <h2 className="font-display text-3xl font-semibold mb-4">Our Craft</h2>
          <p className="text-muted-foreground mb-4">
            We believe in the slow coffee movement. Every bean is sourced ethically,
            roasted meticulously in small batches, and brewed with precision. We
            invite you to slow down, savor the aroma, and experience the tactile
            joy of a truly intentional cup.
          </p>
          <Link to="/story" className="text-sm underline underline-offset-4">
            Read our full story
          </Link>
        </div>
        <img
          src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&q=80"
          alt="Coffee beans"
          className="rounded-xl w-full h-72 object-cover"
        />
      </section>

      <section className="grid md:grid-cols-2 max-w-6xl mx-auto mb-14 rounded-xl overflow-hidden border border-border">
        <img
          src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=800&q=80"
          alt="Barista"
          className="h-72 md:h-full w-full object-cover"
        />
        <div className="p-8 bg-white flex flex-col justify-center">
          <Badge variant="accent" className="w-fit mb-3">Barista's Pick</Badge>
          <h3 className="font-display text-2xl font-semibold mb-2">Honey Oat Latte</h3>
          <p className="text-muted-foreground text-sm mb-5">
            My go-to comfort drink. We use a locally sourced wildflower honey
            that perfectly complements the nutty profile of our house espresso,
            smoothed out with creamy oat milk. It's subtle, sweet, and feels
            like a warm hug.
          </p>
          <div className="flex items-center gap-3">
            <Button>Try It Now</Button>
            <span className="text-muted-foreground line-through text-sm">$6.50</span>
            <span className="font-semibold">$5.50</span>
          </div>
        </div>
      </section>
    </div>
  );
}
