import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Globe, Share2, Camera } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-cream-2 px-6 md:px-10 py-14">
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        <div>
          <h3 className="font-display text-lg mb-3">Visit Us</h3>
          <p className="text-sm text-muted-foreground leading-6">
            Mon – Fri: 7am – 8pm
            <br />
            Sat – Sun: 8am – 9pm
            <br />
            123 Roast Lane, Coffee District
          </p>
        </div>
        <div>
          <h3 className="font-display text-lg mb-3">Newsletter</h3>
          <p className="text-sm text-muted-foreground mb-3">
            Join our brew club for exclusive beans.
          </p>
          <div className="flex gap-2">
            <Input placeholder="your@email.com" className="bg-white/70" />
            <Button size="default">Join</Button>
          </div>
        </div>
        <div>
          <h3 className="font-display text-lg mb-3">Follow the Craft</h3>
          <div className="flex gap-3 text-ink/60">
            <Globe className="w-4 h-4" />
            <Share2 className="w-4 h-4" />
            <Camera className="w-4 h-4" />
          </div>
        </div>
      </div>
      <p className="text-center text-xs text-muted-foreground mt-12">
        © 2024 Caffetize Artisan Coffee. All rights reserved.
      </p>
    </footer>
  );
}
