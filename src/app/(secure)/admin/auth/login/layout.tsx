export default function MinimalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <div className="container mx-auto px-2 min-h-screen flex items-center justify-center">
        {children}
      </div>
    </main>
  );
}
