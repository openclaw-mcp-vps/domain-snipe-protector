import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Domain Snipe Protector – Stop Registrar Sniping",
  description: "Anonymize your domain availability checks through rotating proxy services. Prevent registrars from sniping the domains you search."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="72ec0fed-9e82-417b-b6c4-8c99c853fe75"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
