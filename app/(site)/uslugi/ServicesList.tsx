"use client"

import { useQuery } from "@tanstack/react-query"

interface Service {
  id: number
  name: string
  description: string
}

export default function ServicesList() {
  const { data, isLoading } = useQuery<Service[]>({
    queryKey: ["services"],
    queryFn: async () => {
      const response = await fetch("/api/services")
      if (!response.ok) {
        throw new Error("Nie udało się pobrać listy usług")
      }
      return response.json()
    },
  })

  if (isLoading) {
    return (
      <div className="rounded-2xl bg-slate-900/70 p-8 text-center text-slate-200">
        Ładujemy aktualną listę usług...
      </div>
    )
  }

  if (!data?.length) {
    return (
      <div className="rounded-2xl bg-slate-900/70 p-8 text-center text-slate-200">
        Obecnie aktualizujemy listę usług. Skontaktuj się z nami, aby otrzymać indywidualną ofertę.
      </div>
    )
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {data.map((service) => (
        <article key={service.id} className="rounded-2xl bg-slate-900/70 p-6 backdrop-blur">
          <h3 className="text-xl font-semibold text-white">{service.name}</h3>
          <p className="mt-3 text-sm text-slate-300">{service.description}</p>
        </article>
      ))}
    </div>
  )
}
