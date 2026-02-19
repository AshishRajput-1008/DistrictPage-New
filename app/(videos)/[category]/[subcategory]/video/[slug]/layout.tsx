export const metadata = {
  title: 'Celebrity Visual Stories | Lifestyle Web Stories | Tech Tips & Tricks – Sadaiv Satya',
  description: 'Watch professional web stories and videos on Sadaiv Satya',
  icons: {
    icon: '/Final Logo.webp',
    apple: '/Final Logo.webp',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-neutral-900 text-white">{children}</body>
    </html>
  );
}
