import React from 'react'
import { Award, Shield, Clock } from 'lucide-react'
import { Card } from '@/components/ui/card'

const trustCards = [
  {
    icon: Award,
    title: 'Ponad 10 lat doświadczenia',
    text: 'Zaufały nam setki przedsiębiorców z całej Polski.',
  },
  {
    icon: Shield,
    title: 'Bezpieczeństwo dokumentów',
    text: 'Dbamy o poufność i zgodność z przepisami.',
  },
  {
    icon: Clock,
    title: 'Terminowość',
    text: 'Działamy szybko i sprawnie, pilnując terminów.',
  },
]

export default function Trust() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        {trustCards.map(({ icon: Icon, title, text }) => (
          <Card key={title} className="text-center">
            <Icon className="mx-auto mb-4 h-12 w-12 text-amber-600" />
            <h3 className="font-semibold mb-2">{title}</h3>
            <p className="text-sm text-gray-600">{text}</p>
          </Card>
        ))}
      </div>
    </section>
  )
}
