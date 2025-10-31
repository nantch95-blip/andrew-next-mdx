export default function Contact() {
  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24">
      <h1 className="text-3xl font-semibold mb-6">Contact</h1>
      <form className="max-w-md space-y-3" action="https://formspree.io/f/your-id" method="POST">
        <input className="w-full border rounded p-2" type="text" name="name" placeholder="Your name" required />
        <input className="w-full border rounded p-2" type="email" name="email" placeholder="Your email" required />
        <textarea className="w-full border rounded p-2" name="message" rows={5} placeholder="Hello! I'd like to talk about..." required></textarea>
        <button className="rounded-2xl px-4 py-2 bg-black text-white" type="submit">Send</button>
      </form>
      <p className="text-xs text-neutral-500 mt-3">Replace the Formspree endpoint with your own.</p>
    </main>
  );
}
