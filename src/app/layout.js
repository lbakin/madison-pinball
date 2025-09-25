import "./globals.css";
import { PageShell } from "@/components/PageShell";

export const metadata = {
  title: "Madison Pinball",
  description: "Pinball across Madison — locations, events, and more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-neutral-50 text-neutral-900">
        <PageShell>{children}</PageShell>
      </body>
    </html>
  );
}
