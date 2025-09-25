export function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container mx-auto max-w-6xl px-4 py-6 text-sm text-neutral-600">
        <p>
        <a href="mailto:hmjones3@gmail.com">hmjones3@gmail.com</a> cell 309-838-2156
        <br />
        <a href="mailto:sspindler@gmail.com">sspindler@gmail.com</a> cell 608-770-9357
        </p>

        <p className="mt-2">
          © {new Date().getFullYear()} Madison Pinball · All rights reserved
        </p>
      </div>
    </footer>
  );
}
