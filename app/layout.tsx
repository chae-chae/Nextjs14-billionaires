import { Metadata } from "next";
import "../styles/global.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Next Billionares",
    default: "Next Billionares",
  },
  description: "practice next 14",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
