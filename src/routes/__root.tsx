import { useState } from 'react'
import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { ExpeditionQuiz } from '@/components/expedition-quiz'

import '../../styles.css'
import '../components/expedition-quiz.css'

const siteName = 'Misión Atlántico Sur | Enciclopedia de las Islas Australes'
const siteDescription =
  'Explorá las Islas Malvinas, Georgias del Sur y Sandwich del Sur: animales, naturaleza e historias en una enciclopedia interactiva para jóvenes exploradores.'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: siteName },
      { name: 'description', content: siteDescription },
      { property: 'og:title', content: siteName },
      { property: 'og:description', content: siteDescription },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  const [quizOpen, setQuizOpen] = useState(false)

  return (
    <html lang="es">
      <head>
        <HeadContent />
      </head>
      <body
        onClickCapture={(event) => {
          const button = (event.target as HTMLElement).closest('button')
          if (button?.textContent?.includes('Probá lo que descubriste')) {
            event.preventDefault()
            event.stopPropagation()
            setQuizOpen(true)
          }
        }}
      >
        {children}
        <ExpeditionQuiz open={quizOpen} onOpenChange={setQuizOpen} />
        <Scripts />
      </body>
    </html>
  )
}
