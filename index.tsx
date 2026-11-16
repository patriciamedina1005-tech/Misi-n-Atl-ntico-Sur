import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import {
  ArrowUpRight,
  ArrowRight,
  BookOpen,
  Compass,
  MapPin,
  Bird,
  Leaf,
  Gem,
  Camera,
  Radio,
  History,
  ChevronDown,
  Lightbulb,
  Search,
  X,
  Waves,
  Mountain,
  ExternalLink,
  Check,
  Route as RouteIcon,
} from 'lucide-react'
import { islands, sources, type Entry } from '@/data/encyclopedia'
export const Route = createFileRoute('/')({ component: Home })
const categories = [
  { name: 'Fauna', icon: Bird, caption: 'Conocé a sus habitantes' },
  { name: 'Flora', icon: Leaf, caption: 'La vida que crece' },
  { name: 'Recursos', icon: Gem, caption: 'Tesoros naturales' },
  { name: 'Turismo', icon: Camera, caption: 'Lugares por descubrir' },
  { name: 'Bases', icon: Radio, caption: 'Ciencia y conexiones' },
  { name: 'Vivencias', icon: History, caption: 'Historias que nos unen' },
]
const image = (width: number) =>
  `/.netlify/images?url=/img/penguins.jpg&w=${width}&fm=webp`
function IslandMap({ index }: { index: number }) {
  return (
    <svg className="island-map" viewBox="0 0 280 170" aria-hidden="true">
      <defs>
        <pattern
          id={`grid${index}`}
          width="28"
          height="28"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 28 0 L 0 0 0 28"
            fill="none"
            stroke="currentColor"
            strokeWidth=".5"
            opacity=".18"
          />
        </pattern>
      </defs>
      <rect width="280" height="170" fill={`url(#grid${index})`} />
      <ellipse
        cx="140"
        cy="90"
        rx="95"
        ry="62"
        fill="none"
        stroke="currentColor"
        strokeDasharray="3 6"
        opacity=".25"
      />
      {index === 0 ? (
        <g fill="currentColor">
          <path d="M65 64 92 47 110 61 119 45 135 67 127 85 134 100 112 113 94 102 83 115 67 98 76 82 56 74Z" />
          <path d="m143 56 20-13 18 17 22-4-5 20 23 19-21 13-18-3-8 19-21-11 5-24-18-10Z" />
        </g>
      ) : index === 1 ? (
        <path
          fill="currentColor"
          d="m48 115 24-21 25-9 19-21 25 1 19-17 18 5 24-13 26 9-18 15-25 6-12 17-27 1-18 16-27-1-23 18Z"
        />
      ) : (
        <g fill="currentColor">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
            <ellipse
              key={n}
              cx={140 + Math.sin(n / 3) * 37}
              cy={23 + n * 12}
              rx={(n % 3) + 3}
              ry="4"
              transform={`rotate(-25 ${140 + Math.sin(n / 3) * 37} ${23 + n * 12})`}
            />
          ))}
        </g>
      )}
      <path d="M242 35v-17m-4 6 4-6 4 6" stroke="currentColor" fill="none" />
      <text x="238" y="12" fill="currentColor" fontSize="8">
        N
      </text>
      <text x="17" y="156" fill="currentColor" fontSize="7" letterSpacing="2">
        ATLÁNTICO SUR
      </text>
    </svg>
  )
}
function EntryCard({ entry }: { entry: Entry }) {
  return (
    <article className="entry-card">
      <div className="entry-top">
        <span>{entry.group || 'CUADERNO DE CAMPO'}</span>
        <BookOpen size={17} />
      </div>
      <h4>{entry.name}</h4>
      <p>{entry.description}</p>
      <details>
        <summary>
          <Lightbulb size={17} /> Dato curioso <ChevronDown size={16} />
        </summary>
        <div className="fact">{entry.fact}</div>
      </details>
      <details className="visual">
        <summary>
          <Camera size={15} /> Pista visual <ChevronDown size={15} />
        </summary>
        <p>{entry.visual}</p>
      </details>
    </article>
  )
}
function Home() {
  const [selected, setSelected] = useState(0)
  const [category, setCategory] = useState('Fauna')
  const [group, setGroup] = useState('Todas')
  const [query, setQuery] = useState('')
  const [visited, setVisited] = useState<string[]>([])
  const [sourcesOpen, setSourcesOpen] = useState(false)
  const [quiz, setQuiz] = useState(false)
  const [answer, setAnswer] = useState('')
  const island = islands[selected]
  const list = island.categories[category].filter(
    (e) =>
      (group === 'Todas' || e.group === group) &&
      `${e.name} ${e.description}`
        .toLocaleLowerCase('es')
        .includes(query.toLocaleLowerCase('es')),
  )
  const explore = (index: number) => {
    setSelected(index)
    setGroup('Todas')
    setQuery('')
    setVisited((v) =>
      v.includes(islands[index].id) ? v : [...v, islands[index].id],
    )
    document
      .getElementById('explorador')
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#">
          <span className="brand-icon">
            <Compass size={27} />
          </span>
          <span>
            Misión <b>Atlántico Sur</b>
            <small>ENCICLOPEDIA INTERACTIVA</small>
          </span>
        </a>
        <nav aria-label="Principal">
          <a className="active" href="#destinos">
            Las islas
          </a>
          <a href="#explorador">Explorá</a>
          <button onClick={() => setSourcesOpen(true)}>
            Fuentes <ArrowUpRight size={13} />
          </button>
        </nav>
        <span className="header-tag">
          <span /> Para mentes curiosas
        </span>
      </header>
      <main>
        <section className="hero">
          <div className="hero-copy">
            <span className="eyebrow">
              <span className="tiny-line" /> TU PRÓXIMA GRAN AVENTURA
            </span>
            <h1>
              Un océano de
              <br />
              historias por
              <br />
              <em>descubrir.</em>
            </h1>
            <p>
              Explorá las{' '}
              <strong>
                Islas Malvinas, Georgias del Sur
                <br className="desktop" /> y Sandwich del Sur.
              </strong>{' '}
              Tres destinos increíbles.
              <br className="desktop" /> Una expedición que vos elegís.
            </p>
            <a className="primary-button" href="#destinos">
              ¡Iniciar expedición! <ArrowRight size={18} />
            </a>
            <div className="hero-meta">
              <span>
                <Compass size={15} /> Exploración libre
              </span>
              <span>
                <BookOpen size={15} /> Aprendé jugando
              </span>
            </div>
          </div>
          <div className="hero-photo">
            <img
              src={image(1000)}
              alt="Dos pingüinos rey con sus característicos cuellos dorados junto al océano"
              fetchPriority="high"
            />
            <span className="photo-label">
              <MapPin size={13} /> LA VIDA EN EL ATLÁNTICO SUR
            </span>
            <div className="photo-note">
              <span className="note-icon">
                <Bird size={23} />
              </span>
              <div>
                <small>¿LISTO PARA SORPRENDERTE?</small>
                <strong>Acá, la naturaleza es la protagonista.</strong>
              </div>
            </div>
            <div className="explorer-stamp">
              <Compass size={31} />
              <span>
                ESPÍRITU
                <br />
                EXPLORADOR
              </span>
            </div>
          </div>
        </section>
        <div className="expedition-strip">
          <span>
            <Waves size={20} /> Un viaje al sur del mundo
          </span>
          <span>3 archipiélagos</span>
          <i />
          <span>6 formas de explorar</span>
          <i />
          <span>Infinitas preguntas por hacer</span>
          <ArrowUpRight size={18} />
        </div>
        <section id="destinos" className="destinations section-wrap">
          <div className="section-title">
            <div>
              <span className="eyebrow">01 / ELEGÍ TU DESTINO</span>
              <h2>¿Dónde empieza tu curiosidad?</h2>
            </div>
            <p>
              No hay un camino correcto.
              <br />
              Elegí una isla y empezá a descubrir.
            </p>
          </div>
          <div className="island-cards">
            {islands.map((item, i) => (
              <button
                key={item.id}
                className={`island-card island-${i}`}
                onClick={() => explore(i)}
              >
                <div className="map-area">
                  <span className="map-number">0{i + 1}</span>
                  <IslandMap index={i} />
                  <span className="map-symbol">
                    {i === 0 ? (
                      <Leaf size={21} />
                    ) : i === 1 ? (
                      <Mountain size={21} />
                    ) : (
                      <Waves size={21} />
                    )}
                  </span>
                  {visited.includes(item.id) && (
                    <span className="visited">
                      <Check size={12} /> Visitada
                    </span>
                  )}
                </div>
                <div className="island-card-body">
                  <span className="card-eyebrow">{item.eyebrow}</span>
                  <h3>{item.name}</h3>
                  <p>
                    {i === 0
                      ? 'Entre pingüinos, pastizales e historias que nos conectan.'
                      : i === 1
                        ? 'Gigantes de hielo y miles de habitantes con plumas.'
                        : 'Donde el fuego de los volcanes se encuentra con el hielo.'}
                  </p>
                  <span className="card-link">
                    Explorar isla <ArrowUpRight size={19} />
                  </span>
                </div>
              </button>
            ))}
          </div>
        </section>
        <section className="discovery-banner section-wrap">
          <div className="bulb-circle">
            <Lightbulb size={29} />
          </div>
          <div>
            <span className="eyebrow">
              PEQUEÑA PREGUNTA, GRAN DESCUBRIMIENTO
            </span>
            <h3>¿Un pingüino puede vivir junto a un volcán?</h3>
            <p>
              En Sandwich del Sur, la naturaleza tiene una respuesta
              sorprendente.
            </p>
          </div>
          <button
            onClick={() => {
              explore(2)
              setCategory('Fauna')
            }}
          >
            ¡Quiero saberlo! <ArrowRight size={18} />
          </button>
        </section>
        <section id="explorador" className="explorer section-wrap">
          <div className="section-title">
            <div>
              <span className="eyebrow">02 / SEGUÍ TU PROPIA RUTA</span>
              <h2>Tu cuaderno de exploración</h2>
            </div>
            <span className="free-badge">
              <RouteIcon size={16} /> Vos elegís el recorrido
            </span>
          </div>
          <div className="island-tabs" role="group" aria-label="Elegir isla">
            {islands.map((item, i) => (
              <button
                key={item.id}
                aria-pressed={selected === i}
                onClick={() => explore(i)}
                className={selected === i ? 'selected' : ''}
              >
                {item.name}
              </button>
            ))}
          </div>
          <div className="island-intro">
            <span className="location">
              <MapPin size={14} />
              {island.location}
            </span>
            <h3>{island.name}</h3>
            <p>{island.intro}</p>
          </div>
          <div className="category-grid" aria-label="Categorías">
            {categories.map(({ name, icon: Icon, caption }) => (
              <button
                key={name}
                className={category === name ? 'selected' : ''}
                onClick={() => {
                  setCategory(name)
                  setGroup('Todas')
                  setQuery('')
                }}
                aria-pressed={category === name}
              >
                <Icon size={23} />
                <strong>{name}</strong>
                <small>{caption}</small>
              </button>
            ))}
          </div>
          <div className="content-heading">
            <div>
              <h3>
                {category === 'Recursos'
                  ? 'Recursos y minerales'
                  : category === 'Bases'
                    ? 'Bases e infraestructura'
                    : category === 'Vivencias'
                      ? 'Vivencias e historia'
                      : category === 'Turismo'
                        ? 'Lugares para descubrir'
                        : category}
              </h3>
              <span>
                {list.length} fichas para explorar · Abrí las curiosidades
              </span>
            </div>
            <label className="search">
              <Search size={17} />
              <input
                aria-label="Buscar en esta categoría"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="¿Qué querés descubrir?"
              />
              {query && (
                <button
                  aria-label="Borrar búsqueda"
                  onClick={() => setQuery('')}
                >
                  <X size={15} />
                </button>
              )}
            </label>
          </div>
          {category === 'Fauna' && (
            <>
              <div className="filter-row">
                {['Todas', 'Viva / Terrestres', 'Marina', 'Extinta'].map(
                  (item) => (
                    <button
                      key={item}
                      className={group === item ? 'selected' : ''}
                      onClick={() => setGroup(item)}
                    >
                      {item === 'Extinta'
                        ? 'Fauna extinta'
                        : item === 'Viva / Terrestres'
                          ? 'Fauna viva / Terrestres'
                          : item === 'Marina'
                            ? 'Fauna marina'
                            : 'Todas'}
                    </button>
                  ),
                )}
              </div>
              <p className="editorial-note">
                Aves que anidan en tierra, animales marinos y visitantes
                ocasionales. Esta selección reúne las especies mencionadas en la
                expedición; no es un inventario de toda la biodiversidad.
              </p>
            </>
          )}
          <div className="entry-grid" key={`${selected}-${category}-${group}`}>
            {list.map((entry) => (
              <EntryCard key={entry.name} entry={entry} />
            ))}
          </div>
          {list.length === 0 && (
            <div className="empty">
              <Search size={28} />
              <h4>
                {group === 'Extinta'
                  ? 'No hay especies extintas documentadas en esta selección para esta isla.'
                  : 'No encontramos fichas con esa búsqueda.'}
              </h4>
              <button
                onClick={() => {
                  setQuery('')
                  setGroup('Todas')
                }}
              >
                Ver todas las fichas <ArrowRight size={16} />
              </button>
            </div>
          )}
        </section>
        <section className="closing section-wrap">
          <Compass size={37} />
          <div>
            <h2>La mejor brújula es tu curiosidad.</h2>
            <p>
              Para una misión de 2 a 5 minutos, elegí una isla, abrí dos fichas
              y compartí un descubrimiento.
            </p>
          </div>
          <button
            className="primary-button"
            onClick={() => {
              setQuiz(true)
              setAnswer('')
            }}
          >
            Probá lo que descubriste <ArrowRight size={18} />
          </button>
        </section>
        <section className="source-preview section-wrap">
          <BookOpen size={23} />
          <div>
            <h3>
              Explorar también es preguntar de dónde viene la información.
            </h3>
            <p>
              Conocé los organismos y recursos de referencia de esta
              enciclopedia.
            </p>
          </div>
          <button onClick={() => setSourcesOpen(true)}>
            Ver fuentes <ArrowUpRight size={17} />
          </button>
        </section>
      </main>
      <footer>
        <a className="brand" href="#">
          <Compass size={23} />
          <span>
            Misión <b>Atlántico Sur</b>
          </span>
        </a>
        <span>Hecho para aprender, descubrir y cuidar.</span>
        <button onClick={() => setSourcesOpen(true)}>
          Fuentes y referencias <ArrowUpRight size={13} />
        </button>
      </footer>
      <Dialog.Root open={sourcesOpen} onOpenChange={setSourcesOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="modal-backdrop" />
          <Dialog.Content
            className="modal accessible-modal"
            aria-describedby="source-description"
          >
            <button
              className="close"
              autoFocus
              aria-label="Cerrar fuentes"
              onClick={() => setSourcesOpen(false)}
            >
              <X />
            </button>
            <span className="eyebrow">BIBLIOTECA DE LA EXPEDICIÓN</span>
            <Dialog.Title asChild>
              <h2 id="source-title">Fuentes y referencias</h2>
            </Dialog.Title>
            <Dialog.Description asChild>
              <p id="source-description">
                Organismos y portales para ampliar y contrastar información. Los
                enlaces llevan a sus recursos generales; no implican que cada
                afirmación provenga de una página específica.
              </p>
            </Dialog.Description>
            <div className="source-list">
              {sources.map((s) => (
                <a key={s.name} href={s.url} target="_blank" rel="noreferrer">
                  <div>
                    <strong>{s.name}</strong>
                    <span>{s.topic}</span>
                  </div>
                  <ExternalLink size={17} />
                </a>
              ))}
            </div>
            <p className="editorial-note">
              Fotografía ilustrativa de pingüinos rey: Unsplash. Mapas
              esquemáticos: orientación educativa, sin escala ni delimitación de
              soberanía. La selección distingue instalaciones históricas,
              estaciones actuales y visitantes ocasionales.
            </p>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
      <Dialog.Root open={quiz} onOpenChange={setQuiz}>
        <Dialog.Portal>
          <Dialog.Overlay className="modal-backdrop" />
          <Dialog.Content
            className="modal quiz accessible-modal"
            aria-describedby="quiz-description"
          >
            <button
              autoFocus
              className="close"
              aria-label="Cerrar pregunta"
              onClick={() => setQuiz(false)}
            >
              <X />
            </button>
            <span className="eyebrow">DESAFÍO EXPLORADOR</span>
            <Dialog.Title asChild>
              <h2 id="quiz-title">¿Quién cuida su huevo sobre las patas?</h2>
            </Dialog.Title>
            <Dialog.Description asChild>
              <p id="quiz-description">
                Pista: su cuello tiene colores dorados y anaranjados.
              </p>
            </Dialog.Description>
            {['El pingüino rey', 'El albatros errante', 'El guará'].map(
              (option) => (
                <button
                  className={`quiz-option ${answer === option ? 'chosen' : ''}`}
                  key={option}
                  onClick={() => setAnswer(option)}
                >
                  {option}
                  <ArrowRight size={17} />
                </button>
              ),
            )}
            {answer && (
              <div role="status" className="quiz-result">
                {answer === 'El pingüino rey'
                  ? '¡Exacto! Un pliegue de piel mantiene el huevo calentito sobre sus patas.'
                  : '¡Seguí explorando! Es el pingüino rey: no construye un nido para su huevo.'}
              </div>
            )}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  )
}
