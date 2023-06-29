import './styles.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tailwindcss/dist/tailwind.min.css" />
      </head>
      <body className="bg-gray-100">
        {children}
      </body>
    </html>
  );
}
