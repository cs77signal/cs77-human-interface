import "./globals.css";

export const metadata = {
  title: "CS77 | HUMAN INTERFACE",
  description:
    "CS77 Human Verification and live human statistics.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
