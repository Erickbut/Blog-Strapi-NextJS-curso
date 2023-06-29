import NextHead from 'next/head';
import './styles.css';
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <NextHead>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tailwindcss/dist/tailwind.min.css" />
      </NextHead>
      <body className="bg-gray-100">
        {children}
      </body>
    </html>
  );
}
