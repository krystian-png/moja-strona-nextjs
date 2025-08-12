'use client';

export default function GlobalError({ error }: { error: Error & { digest?: string } }) {
  console.error(error);
  return (
    <html>
      <body>
        <main className="p-8">
          <h1 className="text-2xl font-semibold">Wystąpił błąd</h1>
          <p className="mt-2 text-sm text-gray-600">Spróbuj ponownie później.</p>
        </main>
      </body>
    </html>
  );
}
