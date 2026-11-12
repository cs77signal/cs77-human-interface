export default function Home() {
  return (
    <main className="interface">
      <iframe
        src="https://human-verification-psi.vercel.app/"
        title="CS77 Human Verification"
        className="verification-frame"
        allow="publickey-credentials-get; camera; clipboard-read; clipboard-write"
      />

      <iframe
        src="https://cs77-human-counter.vercel.app/"
        title="CS77 Human Counter"
        className="counter-frame"
      />
    </main>
  );
}
