import { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { ArrowRight, Check, Compass, Sparkles, X } from 'lucide-react'
import { islands } from '@/data/encyclopedia'

type Challenge = {
  islandId: string
  question: string
  hint: string
  options: string[]
  answer: string
  correctMessage: string
  retryMessage: string
}

const challenges: Challenge[] = [
  {
    islandId: 'malvinas',
    question: '¿Qué mamífero terrestre nativo de las Malvinas se extinguió?',
    hint: 'Era un cánido conocido también como zorro-lobo.',
    options: ['El guará', 'El lobo marino', 'La tonina overa'],
    answer: 'El guará',
    correctMessage: '¡Exacto! El guará era el único mamífero terrestre nativo conocido de las islas.',
    retryMessage: '¡Buen intento! La respuesta era el guará. Cada pregunta suma una nueva pista.',
  },
  {
    islandId: 'malvinas',
    question: '¿Qué planta alta forma refugios naturales en las costas malvinenses?',
    hint: 'Es una gramínea nativa que forma matas muy densas.',
    options: ['El pasto tussac', 'El diddle-dee', 'La genciana'],
    answer: 'El pasto tussac',
    correctMessage: '¡Muy bien! Las matas densas del tussac dan abrigo a distintas especies.',
    retryMessage: 'No pasa nada: era el pasto tussac. ¡Sigamos explorando!',
  },
  {
    islandId: 'malvinas',
    question: '¿Dónde construye sus nidos el pingüino de Magallanes?',
    hint: 'Busca protección bajo el suelo, en terrenos blandos.',
    options: ['En madrigueras', 'En árboles altos', 'En cuevas de lava'],
    answer: 'En madrigueras',
    correctMessage: '¡Correcto! Sus madrigueras ayudan a proteger los huevos y las crías del viento.',
    retryMessage: '¡Casi! El pingüino de Magallanes anida en madrigueras. ¡Ya aprendiste el dato!',
  },
  {
    islandId: 'georgias',
    question: '¿Qué ave austral tiene una envergadura enorme y planea sobre el océano?',
    hint: 'Su nombre habla de sus largos viajes.',
    options: ['El albatros errante', 'La cachirla', 'El pingüino macaroni'],
    answer: 'El albatros errante',
    correctMessage: '¡Así es! Sus alas largas le permiten aprovechar el viento para planear.',
    retryMessage: 'La respuesta era el albatros errante. ¡No te preocupes: ya tienes una pista nueva!',
  },
  {
    islandId: 'georgias',
    question: '¿Qué pequeño crustáceo es alimento clave de muchos animales australes?',
    hint: 'Forma parte de la dieta de ballenas, aves, peces y focas.',
    options: ['El krill antártico', 'La turba', 'La piedra pómez'],
    answer: 'El krill antártico',
    correctMessage: '¡Excelente! El krill conecta a muchos animales dentro de la red alimentaria austral.',
    retryMessage: '¡Buen intento! Era el krill antártico, un alimento pequeño con un papel enorme.',
  },
  {
    islandId: 'georgias',
    question: '¿Qué lugar fue un antiguo puerto ballenero y hoy conserva un museo?',
    hint: 'Allí también está la tumba del explorador Ernest Shackleton.',
    options: ['Grytviken', 'Volunteer Point', 'Isla Zavodovski'],
    answer: 'Grytviken',
    correctMessage: '¡Correcto! Grytviken permite conocer la historia ballenera y polar de la isla.',
    retryMessage: 'La respuesta era Grytviken. ¡Ahora ya sabes dónde seguir esa historia!',
  },
  {
    islandId: 'sandwich',
    question: '¿Qué pingüino lleva una fina línea negra bajo la garganta?',
    hint: 'Esa marca parece la correa de un casco.',
    options: ['El pingüino de barbijo', 'El pingüino rey', 'El pingüino papúa'],
    answer: 'El pingüino de barbijo',
    correctMessage: '¡Lo descubriste! La línea bajo la garganta le da su nombre al pingüino de barbijo.',
    retryMessage: '¡Casi! Era el pingüino de barbijo. La próxima pista puede ser la tuya.',
  },
  {
    islandId: 'sandwich',
    question: '¿Qué roca volcánica porosa puede flotar si conserva suficientes burbujas?',
    hint: 'Se forma cuando material volcánico se enfría con gases atrapados.',
    options: ['La piedra pómez', 'La turba', 'La cuarcita'],
    answer: 'La piedra pómez',
    correctMessage: '¡Muy bien! Las burbujas que quedan atrapadas hacen que algunos trozos de pómez floten.',
    retryMessage: 'La respuesta era piedra pómez. ¡Un dato volcánico para guardar en tu cuaderno!',
  },
  {
    islandId: 'sandwich',
    question: '¿Qué fuerza de la Tierra ayuda a formar la profunda fosa oceánica del archipiélago?',
    hint: 'Ocurre cuando una placa tectónica se hunde bajo otra.',
    options: ['El movimiento de placas tectónicas', 'El crecimiento del tussac', 'La acumulación de turba'],
    answer: 'El movimiento de placas tectónicas',
    correctMessage: '¡Exactamente! El movimiento de placas da forma a la fosa y al arco volcánico.',
    retryMessage: 'La respuesta era el movimiento de placas tectónicas. ¡La geología también es una aventura!',
  },
]

function shuffled<T>(items: T[]): T[] {
  const result = [...items]
  for (let index = result.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1))
    ;[result[index], result[swapIndex]] = [result[swapIndex], result[index]]
  }
  return result
}

type Props = {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ExpeditionQuiz({ open, onOpenChange }: Props) {
  const [round, setRound] = useState<Challenge[]>(() => shuffled(challenges))
  const [questionIndex, setQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)
  const question = round[questionIndex]
  const answered = selectedAnswer !== null
  const isCorrect = selectedAnswer === question.answer

  const startNewRound = () => {
    setRound(shuffled(challenges))
    setQuestionIndex(0)
    setSelectedAnswer(null)
    setScore(0)
    setFinished(false)
  }

  const chooseAnswer = (option: string) => {
    if (answered) return
    setSelectedAnswer(option)
    if (option === question.answer) setScore((current) => current + 1)
  }

  const nextQuestion = () => {
    if (questionIndex === round.length - 1) {
      setFinished(true)
      return
    }
    setQuestionIndex((current) => current + 1)
    setSelectedAnswer(null)
  }

  const exploreAnotherIsland = () => {
    const currentIslandIndex = islands.findIndex(
      (island) => island.id === round[questionIndex].islandId,
    )
    const nextIsland = islands[(currentIslandIndex + 1) % islands.length]
    onOpenChange(false)
    window.setTimeout(() => {
      const islandTabs = document.querySelector('[aria-label="Elegir isla"]')
      const islandButton = Array.from(
        islandTabs?.querySelectorAll('button') ?? [],
      ).find((button) => button.textContent?.includes(nextIsland.name))
      islandButton?.click()
      document
        .getElementById('explorador')
        ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      startNewRound()
    }, 0)
  }

  return (
    <Dialog.Root
      open={open}
      onOpenChange={(nextOpen) => {
        onOpenChange(nextOpen)
        if (nextOpen) startNewRound()
      }}
    >
      <Dialog.Portal>
        <Dialog.Overlay className="modal-backdrop" />
        <Dialog.Content
          className="modal quiz accessible-modal expedition-quiz"
          aria-describedby="expedition-quiz-description"
        >
          <button
            autoFocus
            className="close"
            aria-label="Cerrar desafío"
            onClick={() => onOpenChange(false)}
          >
            <X />
          </button>
          {!finished ? (
            <>
              <span className="eyebrow">
                DESAFÍO EXPLORADOR · {questionIndex + 1} DE {round.length}
              </span>
              <Dialog.Title asChild>
                <h2>{question.question}</h2>
              </Dialog.Title>
              <Dialog.Description id="expedition-quiz-description">
                {question.hint}
              </Dialog.Description>
              <div className="expedition-quiz-options">
                {question.options.map((option) => (
                  <button
                    className={`quiz-option ${selectedAnswer === option ? 'chosen' : ''}`}
                    key={option}
                    disabled={answered}
                    aria-pressed={selectedAnswer === option}
                    onClick={() => chooseAnswer(option)}
                  >
                    {option}
                    {selectedAnswer === option && isCorrect && <Check size={17} />}
                    {selectedAnswer !== option && <ArrowRight size={17} />}
                  </button>
                ))}
              </div>
              {answered && (
                <div
                  role="status"
                  className={`quiz-result expedition-quiz-feedback ${isCorrect ? 'expedition-quiz-feedback--correct' : 'expedition-quiz-feedback--retry'}`}
                >
                  {isCorrect ? (
                    <span className="expedition-quiz-celebration" aria-hidden="true">
                      ✨ 🧭 ✨
                    </span>
                  ) : (
                    <span aria-hidden="true">💚 </span>
                  )}
                  {isCorrect ? question.correctMessage : question.retryMessage}
                </div>
              )}
              {answered && (
                <button
                  className="primary-button expedition-quiz-next"
                  onClick={nextQuestion}
                >
                  {questionIndex === round.length - 1
                    ? 'Ver cómo me fue'
                    : 'Siguiente desafío'}
                  <ArrowRight size={17} />
                </button>
              )}
            </>
          ) : (
            <>
              <span className="eyebrow">
                <Sparkles size={14} /> EXPEDICIÓN COMPLETA
              </span>
              <Dialog.Title asChild>
                <h2>¡Terminaste el desafío!</h2>
              </Dialog.Title>
              <Dialog.Description id="expedition-quiz-description">
                Acertaste {score} de {round.length}. ¡Cada respuesta, correcta o no, suma un nuevo descubrimiento!
              </Dialog.Description>
              <div className="quiz-result expedition-quiz-feedback expedition-quiz-feedback--correct">
                ¡Sos parte del club de exploradores del Atlántico Sur!
              </div>
              <div className="expedition-quiz-actions">
                <button
                  className="primary-button"
                  onClick={startNewRound}
                >
                  Seguir jugando <ArrowRight size={17} />
                </button>
                <button className="quiz-option" onClick={exploreAnotherIsland}>
                  Aprender sobre otra isla <Compass size={17} />
                </button>
              </div>
            </>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
