export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 text-sm text-neutral-500">
        © {new Date().getFullYear()} Andrew Rosenfeld — Built with Next.js, MDX, and Tailwind.
      </div>
    </footer>
  );
}
