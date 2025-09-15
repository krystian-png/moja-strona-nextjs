"use client";

import { useQuery } from "@tanstack/react-query";

interface Service {
  id: number;
  name: string;
  description: string;
}

export default function Page() {
  const { data: services, isLoading } = useQuery<Service[]>({
    queryKey: ["/api/services"],
    queryFn: () => fetch("/api/services").then((res) => res.json()),
  });

  if (isLoading) {
    return (
      <main className="p-8">
        <h1 className="text-2xl font-semibold">Ładowanie...</h1>
      </main>
    );
  }

  return (
    <main className="p-8">
      <h1 className="text-2xl font-semibold mb-4">Usługi</h1>
      <ul className="space-y-4">
        {services?.map((service) => (
          <li key={service.id}>
            <h2 className="text-xl font-medium">{service.name}</h2>
            <p className="text-sm text-gray-600">{service.description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
