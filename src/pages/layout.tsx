export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <header>header</header>
      <body>{children}</body>
      <footer>footer</footer>
    </html>
  );
}
