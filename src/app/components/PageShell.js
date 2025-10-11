import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import SiteNavServer from "./SiteNavServer";
import SiteFooterServer from "./SiteFooterServer";

export function PageShell({ children }) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteNavServer />
      
      <main className="w-full flex-1">
        {children}
      </main>
      <SiteFooterServer />
    </div>
  );
}
