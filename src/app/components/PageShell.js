import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export function PageShell({ children }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Nav />
      
      <main className="w-full flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
