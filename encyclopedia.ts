export type Entry = {
  name: string
  description: string
  fact: string
  visual: string
  group?: string
}
export type Island = {
  id: string
  name: string
  short: string
  eyebrow: string
  intro: string
  location: string
  color: string
  categories: Record<string, Entry[]>
}
const entries = (text: string, group?: string): Entry[] =>
  text
    .trim()
    .split('\n')
    .map((line) => {
      const [name, description, fact, visual] = line.split('|')
      return {
        name,
        description,
        fact,
        visual:
          visual ||
          `Ilustración educativa de ${name.toLowerCase()} en su ambiente natural.`,
        group,
      }
    })
export const islands: Island[] = [
  {
    id: 'malvinas',
    name: 'Islas Malvinas',
    short: 'Malvinas',
    eyebrow: 'PASTIZALES, COSTAS Y VIDA SILVESTRE',
    location: 'Atlántico Sur · al este de la Patagonia',
    color: '#62876a',
    intro:
      'Dos islas principales y cientos de islas pequeñas forman este archipiélago cercano a la Patagonia. Entre pastizales, playas y costas rocosas, los pingüinos y las aves marinas encuentran refugio. ¡Prepará tu mirada de explorador!',
    categories: {
      Fauna: [
        ...entries(
          `Pingüino papúa|Tiene pico anaranjado y una franja blanca sobre la cabeza. Sus alas transformadas en aletas lo impulsan bajo el agua mientras busca peces y crustáceos.|Es uno de los pingüinos más rápidos al nadar: puede alcanzar unos 36 km/h.|Foto de su franja blanca y sus aletas en el agua.
Pingüino de Magallanes|Dos bandas negras cruzan su pecho blanco. Excava madrigueras en terrenos blandos para proteger huevos y crías del viento.|Su llamado recuerda al rebuzno de un burro.
Pingüino rey|Su cuello luce manchas amarillas y anaranjadas sobre un cuerpo gris y blanco. Es la segunda especie de pingüino más grande y forma colonias en tierra.|Mantiene su único huevo sobre las patas, debajo de un pliegue de piel.
Pingüino de penacho amarillo|Tiene ojos rojos y plumas amarillas a los lados de la cabeza. Sus patas fuertes le permiten subir desde el mar hasta colonias en costas rocosas.|Salta con ambos pies para avanzar entre las rocas.
Pingüino Adelia|Tiene espalda negra, vientre blanco y un aro blanco alrededor del ojo. Su distribución principal es antártica y en Malvinas es un visitante excepcional, no una especie habitual.|Utiliza piedritas para construir su nido.
Albatros de ceja negra|Su cuerpo blanco contrasta con alas oscuras y una línea negra sobre los ojos. Anida en colonias costeras y aprovecha el viento para recorrer el océano.|Sus alas largas funcionan como las de un planeador.
Caracara austral|Esta rapaz oscura recorre las costas en busca de alimento. Sus patas fuertes y su curiosidad le permiten investigar rincones y aprovechar restos de comida.|Puede explorar objetos nuevos con el pico: observá sin dejar pertenencias cerca.
Pato vapor de Malvinas|Es un pato robusto, gris y no volador, propio del archipiélago. Busca pequeños animales marinos en costas y bahías.|Golpea el agua con las alas al correr: parece un barco de paletas.
Cauquén colorado y cauquén común|Son aves herbívoras que recorren los pastizales junto a lagunas. Sus plumajes combinan tonos blancos, castaños y dibujos oscuros, según especie y sexo.|Sus picos cortan pasto como pequeñas tijeras.
Petrel gigante del sur|Posee grandes alas y un pico fuerte con tubos nasales. Se alimenta en el mar y también aprovecha carroña, ayudando a reciclar nutrientes.|Puede expulsar aceite estomacal como defensa.
Gaviota cocinera y gaviota austral|La cocinera tiene dorso oscuro y cuerpo blanco; la austral presenta cabeza gris y pico rojizo. Ambas buscan alimento en las costas, aunque son especies diferentes.|Las colonias de otros animales ofrecen restos de alimento a estas oportunistas.
Churretes y remolineros|Son pequeños pájaros de tonos pardos adaptados a ambientes costeros. Caminan entre piedras y algas buscando invertebrados.|El camuflaje los vuelve difíciles de distinguir entre las rocas.
Halconcito colorado y otras rapaces|Las rapaces poseen vista aguda y garras curvas para capturar presas. La presencia de cada especie varía: no todas las aves continentales son residentes comunes de Malvinas.|Un halcón puede localizar movimientos diminutos desde el aire.`,
          'Viva / Terrestres',
        ),
        ...entries(
          `Elefante marino del sur|Los machos son enormes y tienen una trompa corta sobre el hocico. Descansan y mudan la piel en playas, pero buscan alimento mediante largas inmersiones.|Un macho grande puede pesar varias toneladas.
Lobo marino de un pelo|Los machos presentan cuello robusto y una melena visible. Sus aletas y orejas externas permiten distinguirlos de las focas verdaderas.|Puede girar sus aletas traseras para desplazarse sobre tierra.
Lobo marino austral de dos pelos|Tiene hocico afinado y una capa interna de pelo muy densa. Descansa en costas rocosas y caza peces y calamares en el mar.|Su pelaje atrapa aire y ayuda a conservar el calor.
Orca|Su cuerpo blanco y negro y su aleta dorsal la hacen reconocible. Es un delfín de gran tamaño que vive en grupos y caza según las costumbres de su población.|Las familias transmiten formas de caza de una generación a otra.
Ballena franca austral|No tiene aleta dorsal y presenta callosidades en la cabeza. Puede observarse en aguas de la región, aunque no toda bahía es un lugar habitual de cría.|Su soplido forma dos chorros que recuerdan una V.
Tonina overa y delfín austral|La tonina overa tiene un dibujo blanco y negro; el delfín austral es gris oscuro y más uniforme. Son especies distintas que nadan en aguas frías de Sudamérica y del entorno insular.|La subespecie de tonina overa de Malvinas tiene distribución propia.
Delfín oscuro|Su cuerpo presenta lomo oscuro y zonas claras en los costados. Se desplaza en grupos y utiliza sonidos para orientarse y buscar alimento.|Sus saltos fuera del agua son verdaderas acrobacias.
Calderón común y cachalote|El calderón tiene cabeza redondeada; el cachalote posee una cabeza grande y rectangular. Ambos exploran aguas profundas, donde encuentran calamares y otras presas.|El cachalote puede superar los 2.000 metros de profundidad en sus inmersiones.`,
          'Marina',
        ),
        ...entries(
          `Guará: zorro-lobo de las Malvinas|Este cánido extinto es el único mamífero terrestre nativo conocido del archipiélago. Las reconstrucciones muestran pelaje pardo rojizo y punta de cola blanca; su desaparición se fecha en 1876 por la persecución humana.|Los escritos de Darwin, que lo observa en 1833, ayudan a conocer su comportamiento confiado.|Reconstrucción del guará, identificada como ilustración.`,
          'Extinta',
        ),
      ],
      Flora:
        entries(`Pasto tussac · Poa flabellata|Esta gramínea costera forma matas que pueden superar dos metros de altura. Sus hojas y bases densas ofrecen abrigo a aves e invertebrados frente al viento.|Es como un edificio natural con muchos escondites.
Doncella pálida · Olsynium filifolium|Sus flores claras tienen forma de campana y aparecen sobre hojas estrechas. Es nativa de la región austral, también presente en Tierra del Fuego, por lo que no es exclusiva de Malvinas.|Una flor delicada puede resistir un ambiente muy ventoso.
Diddle-dee · Empetrum rubrum|Este arbusto bajo cubre el terreno con hojas pequeñas y bayas rojas. Crece cerca del suelo, donde el viento tiene menos fuerza.|Sus frutos se utilizan tradicionalmente para preparar mermeladas.
Planta cojín · Azorella selago|Forma almohadillas compactas sobre suelos expuestos. Su crecimiento apretado ayuda a soportar frío y viento sin levantar una copa alta.|Parece un almohadón, pero su superficie puede ser sorprendentemente firme.
Verónica arbustiva · Hebe elliptica|Es un arbusto de hojas ovaladas que crece en lugares protegidos. Sus racimos de flores claras contrastan con un paisaje donde escasean los árboles nativos.|Los pequeños reparos del relieve crean rincones más amables para crecer.
Helechos y musgos esfagno|Los helechos aprovechan ambientes húmedos y los esfagnos participan en las turberas. Sus tapices retienen agua y contribuyen a construir suelos orgánicos.|Algunos esfagnos retienen muchas veces su peso seco en agua.
Gencianas de las Malvinas|Estas pequeñas plantas producen flores que aportan color al pastizal. Sus tonos y formas varían según la especie, por lo que no todas son azules intensas.|Acercar la mirada al suelo revela un jardín que desde lejos parece invisible.`),
      Recursos:
        entries(`Turba|Es materia vegetal que se acumula lentamente en suelos húmedos con poco oxígeno. Sirve históricamente como combustible y almacena carbono, por lo que proteger las turberas tiene valor ambiental.|Se corta en bloques que parecen ladrillos de tierra.
Pesca y calamares|Las aguas de la plataforma sostienen peces y calamares que forman parte de redes alimentarias. La pesca es una actividad económica importante y necesita controles para conservar las poblaciones.|Un calamar cambia de color mediante células especiales de la piel.
Petróleo en el subsuelo marino|En las cuencas cercanas existen yacimientos y proyectos de hidrocarburos. Un recurso identificado no equivale a producción permanente, y su explotación plantea debates ambientales y de soberanía.|Los barcos de exploración estudian rocas que están debajo del fondo del mar.
Rocas y ríos de piedra|El relieve incluye areniscas, cuarcitas y grandes acumulaciones de bloques. Los procesos de congelación, deshielo y movimiento del suelo ayudan a explicar estos paisajes.|Un río de piedra parece fluir, pero está formado por bloques rocosos.`),
      Turismo:
        entries(`Puerto Argentino / Stanley|La capital se extiende junto a un puerto natural y reúne viviendas de techos coloridos, museos y servicios. Sus edificios cuentan historias de navegación y vida insular.|Los techos de colores crean un mosaico que se distingue desde la bahía.
Volunteer Point|Este sector costero combina playas y pastizales con una conocida colonia de pingüinos rey. Las visitas requieren respetar distancias y caminos para no interrumpir a las aves.|En una misma costa se pueden observar diferentes especies de pingüinos.
Estancias y costas rurales|Las estancias muestran paisajes de pastizal y actividades ganaderas. Los recorridos también acercan a playas con aves y mamíferos marinos.|Lejos de las ciudades, el viento y las aves dominan el paisaje sonoro.`),
      Bases:
        entries(`Monte Agradable · Mount Pleasant|Este complejo reúne una base militar británica y el principal aeropuerto internacional del archipiélago. Sus pistas permiten el transporte de personas y suministros a larga distancia.|Además de las pistas, cuenta con numerosos servicios para su personal.
Mare Harbour · Puerto Yegua|Es un puerto de apoyo logístico vinculado al complejo de Monte Agradable. Sus instalaciones reciben buques y suministros, aunque el clima sigue condicionando las operaciones.|Un puerto protegido funciona como una puerta de entrada para cargas muy pesadas.
Puerto Mitre y Bahía Fox|Estos asentamientos rurales disponen de pistas para vuelos locales. Las avionetas ayudan a conectar comunidades donde las distancias y el terreno dificultan el viaje terrestre.|La duración de cada vuelo depende de la ruta, el viento y las escalas.`),
      Vivencias:
        entries(`Vida rural: el camp|La palabra camp identifica el campo fuera de la capital. La ganadería ovina, los caminos rurales y las comunicaciones a distancia forman parte de la vida cotidiana.|Camp deriva de la palabra española campo.
Herencia gaucha|La historia de los gauchos deja huellas en tareas ganaderas y nombres de lugares. Algunas palabras españolas siguen presentes en el vocabulario insular.|Un mapa también conserva memoria: muchos topónimos tienen raíces en español.
Naufragios y navegación|Restos de barcos en costas y puertos recuerdan antiguas rutas oceánicas. El viento, los bajos y las tormentas explican por qué navegar exige tanta preparación.|Un casco de barco puede leerse como una página de historia marítima.
Historia, soberanía y memoria|Argentina reclama la soberanía sobre las Malvinas, Georgias del Sur y Sandwich del Sur, administradas por el Reino Unido. La ONU reconoce una disputa de soberanía sobre Malvinas y promueve una solución pacífica; la memoria de la guerra de 1982 invita a valorar la paz.|Investigar mapas, testimonios y documentos ayuda a comprender diferentes momentos de una misma historia.`),
    },
  },
  {
    id: 'georgias',
    name: 'Islas Georgias del Sur',
    short: 'Georgias del Sur',
    eyebrow: 'GLACIARES Y COLONIAS GIGANTES',
    location: 'Atlántico Sur · al sudeste de Malvinas',
    color: '#5a8294',
    intro:
      'Imaginá montañas que se levantan sobre el océano y glaciares que bajan hasta las bahías. En las costas sin hielo se reúnen enormes colonias de pingüinos y lobos marinos. No hay ciudades como las nuestras: pequeños equipos científicos estudian este gran laboratorio natural, donde el krill conecta la vida del mar con la de la costa.',
    categories: {
      Fauna: [
        ...entries(
          `Pingüino rey|Sus marcas doradas iluminan enormes colonias en las costas. Los adultos se turnan para alimentar a sus crías, que lucen un abrigo de plumón marrón.|Cada familia reconoce sus llamados entre miles de voces.
Pingüino macaroni|Un penacho amarillo anaranjado nace sobre su frente. Anida en colonias y busca crustáceos y otros pequeños animales marinos.|Su nombre recuerda una moda de peinados extravagantes del siglo XVIII.
Albatros errante|Sus alas pueden superar los tres metros y medio de envergadura. Aprovecha cambios de velocidad del viento para planear sobre el mar gastando poca energía.|Un mecanismo en el hombro ayuda a mantener las alas extendidas durante sus largos planeos.
Albatros de cabeza gris y de manto claro|Estas aves oceánicas anidan en laderas y riscos. Sus tonos grises y sus alas largas las ayudan a distinguirse de otros albatros.|Algunas parejas realizan vuelos de cortejo coordinados.
Petrel de las nieves y paloma antártica|El petrel es un ave marina blanca de pico negro; la paloma antártica es robusta y recorre las costas a pie. Ambas aprovechan ambientes australes, pero pertenecen a grupos distintos.|La paloma antártica no tiene las patas palmeadas típicas de tantas aves marinas.
Cachirla de Georgias del Sur|Este pequeño pájaro pardo busca invertebrados entre el pasto. Es endémico del archipiélago y utiliza vegetación densa para ocultar sus nidos.|La eliminación de ratas introducidas favorece su recuperación.
Pato de las Georgias|Este pato de tonos pardos habita ambientes costeros y aguas dulces. Busca pequeños invertebrados y vegetación en zonas húmedas.|También puede alimentarse en la franja que queda descubierta cuando baja la marea.`,
          'Viva / Terrestres',
        ),
        ...entries(
          `Lobo marino antártico|Tiene orejas visibles, bigotes largos y dos capas de pelo. Sus colonias se reproducen en las costas, donde las hembras alternan lactancia y viajes de alimentación.|Su recuperación después de la caza histórica muestra el valor de la protección, aunque enfrenta nuevas amenazas.
Elefante marino del sur|Los machos de gran tamaño se reúnen en playas durante la reproducción. Las hembras también regresan a tierra para criar y mudar su pelaje.|Pasa gran parte de su vida en el mar haciendo inmersiones profundas.
Focas de Weddell, cangrejera y leopardo|Estas focas están asociadas a aguas y hielos antárticos y pueden aparecer en la región. No todas son residentes habituales: la leopardo es un visitante más reconocible en ciertas costas.|La cangrejera come principalmente krill, aunque su nombre sugiera cangrejos.
Ballena azul, de aleta y jorobada|Son cetáceos con barbas que filtran alimento del agua. Visitan áreas de alta productividad y enlazan los mares australes con largas rutas migratorias.|La ballena azul es el animal más grande conocido en la historia del planeta.`,
          'Marina',
        ),
      ],
      Flora:
        entries(`Pasto tussac gigante|Forma matas altas en sectores costeros libres de hielo. Sus bases acumulan restos vegetales y crean refugios para aves y pequeños invertebrados.|El suelo entre las matas puede acumular gruesas capas de materia orgánica.
Acaena · abrojo austral|Esta planta baja tiene hojas divididas y se extiende por terrenos sin hielo. Algunas especies producen frutos con pequeños ganchos que facilitan su dispersión.|Los frutos viajan adheridos al pelaje o a la ropa, como pasajeros con velcro.
Musgos y hepáticas|Forman pequeñas alfombras en suelos húmedos y junto al deshielo. Crecen sin flores ni semillas y absorben agua por sus superficies.|Muchas especies toleran períodos de desecación o frío reduciendo su actividad.
Líquenes crustáceos y foliáceos|La asociación entre un hongo y un organismo fotosintético permite vivir sobre superficies difíciles. Algunos se pegan como costras y otros forman pequeñas láminas.|Pueden colorear las rocas de amarillo, naranja y gris, creciendo muy lentamente.`),
      Recursos:
        entries(`Krill antártico|Este pequeño crustáceo forma grandes concentraciones en el océano. Es alimento para peces, aves, focas y ballenas, por lo que su manejo resulta clave para todo el ecosistema.|Sus enjambres se estudian con instrumentos acústicos que detectan ecos en el agua.
Merluza negra y recursos pesqueros|La merluza negra habita aguas frías y profundas y tiene valor comercial. La pesca regulada utiliza controles para reducir capturas ilegales y daños a aves marinas.|Las líneas de pesca necesitan medidas especiales para evitar que los albatros se enganchen.
Hielo y agua de deshielo|Los glaciares almacenan agua dulce y modelan valles y bahías. Sus cambios permiten estudiar cómo responde la isla al clima.|El hielo puede mostrar tonos azules porque absorbe parte de la luz que lo atraviesa.`),
      Turismo:
        entries(`Grytviken|Este antiguo puerto ballenero conserva estructuras industriales y un museo. Su paisaje permite hablar de la explotación del pasado y de la conservación actual, siempre respetando zonas cerradas.|Cerca se encuentra la tumba del explorador Ernest Shackleton.
Bahía San Andrés|Una amplia planicie costera alberga una extraordinaria colonia de pingüinos rey. Montañas, hielo y aves crean uno de los paisajes más conocidos del archipiélago.|Los adultos localizan a sus crías por la voz en una multitud enorme.
Bahía Fortuna y paisajes glaciares|Las montañas, costas y glaciares ofrecen escenarios relacionados con exploraciones polares. El acceso depende de permisos, clima y normas de protección.|Un mismo recorrido puede mostrar hielo, tussac y playas con animales.`),
      Bases:
        entries(`King Edward Point|Es una estación de investigación junto a Grytviken y un centro de administración local. Los equipos científicos estudian recursos marinos y aportan información para gestionar la pesca.|La ciencia que se hace en tierra ayuda a cuidar animales que viven muy lejos, mar adentro.
Estación de isla Bird|Esta estación científica estudia aves y mamíferos marinos durante largos períodos. El seguimiento de nidos y colonias permite comparar temporadas y detectar cambios.|Algunos albatros identificados individualmente permiten reunir décadas de información.`),
      Vivencias:
        entries(`La travesía de Shackleton|La historia del Endurance muestra cómo una tripulación enfrenta el hielo y la distancia. En el relato de 1916, Shackleton llega en un pequeño bote a Georgias del Sur y cruza montañas para buscar ayuda.|Todos los integrantes de la expedición del Endurance sobreviven a esa extraordinaria operación de rescate.
Patrimonio ballenero|Calderas, depósitos y barcos recuerdan una industria que transforma la región durante el siglo XX. Hoy estos restos permiten explicar por qué la protección de las ballenas es necesaria.|En algunos sectores, los animales ocupan espacios cercanos a instalaciones abandonadas.
Restauración de la naturaleza|Los proyectos de conservación buscan reducir el impacto de especies introducidas y proteger los ambientes nativos. La recuperación de aves terrestres muestra que la acción humana también puede reparar daños.|Limpiar botas y equipos antes de desembarcar evita transportar semillas y organismos.`),
    },
  },
  {
    id: 'sandwich',
    name: 'Islas Sandwich del Sur',
    short: 'Sandwich del Sur',
    eyebrow: 'VOLCANES, HIELO Y NATURALEZA EXTREMA',
    location: 'Atlántico Sur · arco volcánico subantártico',
    color: '#be8060',
    intro:
      'Un arco de once islas principales reúne volcanes, hielo y un océano lleno de vida. Aquí el suelo se transforma con las erupciones y el mar ofrece alimento a grandes colonias de aves. No existe una población civil permanente: las expediciones científicas y las observaciones satelitales ayudan a conocer un territorio remoto, donde cada descubrimiento exige cuidado y preparación.',
    categories: {
      Fauna: [
        ...entries(
          `Pingüino de barbijo|Una fina línea negra cruza su garganta como la cinta de un casco. Forma enormes colonias sobre terrenos rocosos y busca krill en las aguas cercanas.|Zavodovski alberga una de las mayores colonias de esta especie, junto a un volcán activo.
Petrel antártico y petrel damero|Son aves oceánicas adaptadas a planear con los vientos australes. El damero muestra un dibujo blanco y negro muy visible sobre sus alas.|Sus tubos nasales forman parte de una adaptación para vivir y alimentarse en el mar.
Gaviotín antártico|Es un ave esbelta de pico rojo y alas estrechas. Busca pequeños peces e invertebrados cerca de la superficie y anida en lugares costeros.|Puede lanzarse al agua desde el aire para capturar alimento.
Skúa o escúa|Esta ave parda y robusta se alimenta de distintas presas y restos. Vigila colonias y protege con energía el territorio de su nido.|Sus vuelos rasantes de defensa recuerdan que debemos mantener distancia.`,
          'Viva / Terrestres',
        ),
        ...entries(
          `Foca leopardo|Su cuerpo alargado y su cabeza grande la distinguen de otras focas. Captura peces, krill y, en ocasiones, pingüinos u otras focas en aguas frías.|Sus dientes sirven tanto para sujetar presas como para filtrar pequeños crustáceos.
Foca de Ross|Es una foca de la banquisa antártica con ojos grandes y cuerpo robusto. Su presencia cerca del archipiélago es poco habitual y no corresponde presentarla como residente común de sus playas.|Produce vocalizaciones submarinas muy características.
Lobo marino antártico y elefante marino|Estos mamíferos marinos utilizan distintas costas australes para descansar o reproducirse. Su presencia varía según la isla y la temporada, y dependen del océano para alimentarse.|En tierra parecen torpes, pero bajo el agua sus cuerpos son eficientes nadadores.`,
          'Marina',
        ),
      ],
      Flora:
        entries(`Musgos de suelos geotérmicos|En algunos sectores el calor volcánico genera pequeños ambientes menos fríos. Allí pueden crecer musgos adaptados a condiciones muy particulares, sin que eso signifique que cubren todas las islas.|Un rincón calentado por el suelo funciona como un pequeño invernadero natural.
Líquenes y microalgas|Los líquenes colonizan rocas expuestas y las microalgas aprovechan superficies con humedad y luz. Su distribución depende del hielo, la estabilidad del terreno y las condiciones locales.|Son formas de vida pequeñas capaces de iniciar comunidades en ambientes difíciles; no todas son endémicas.`),
      Recursos:
        entries(`Piedra pómez|Algunas erupciones producen una roca con numerosas cavidades. Esas burbujas se forman cuando los gases quedan atrapados en el material volcánico al enfriarse.|Ciertos fragmentos flotan porque su densidad total es menor que la del agua.
Basalto y rocas volcánicas|El magma que llega a la superficie se enfría y forma nuevas rocas. Su composición permite estudiar cómo se construye el arco insular.|Una roca puede conservar pistas de una erupción mucho tiempo después de enfriarse.
Fosa de las Sandwich del Sur|Al este del arco se extiende una profunda depresión oceánica ligada al hundimiento de una placa bajo otra. Es un accidente geográfico, no un mineral ni un recurso explotable por sí mismo.|Sus mayores profundidades superan los ocho kilómetros.
Krill y redes alimentarias|Las aguas de la región sostienen crustáceos, peces y depredadores marinos. El krill convierte el alimento microscópico en energía disponible para animales mucho mayores.|Un pingüino y una ballena pueden depender del mismo diminuto crustáceo.`),
      Turismo:
        entries(`Isla Zavodovski|Un volcán activo domina esta isla donde anidan muchísimos pingüinos de barbijo. El oleaje, las erupciones y los gases hacen que cualquier aproximación sea compleja.|El calor del volcán puede mantener partes del suelo sin nieve, pero también representa un riesgo.
Monte Michael · isla Saunders|Este volcán presenta un cráter con evidencia de un lago de lava persistente. Los satélites y expediciones permiten estudiarlo sin asumir que su estado es idéntico todo el tiempo.|Es uno de los pocos volcanes del mundo donde se identifica un lago de lava.
Isla Thule y paisajes del sur|Thule forma parte del sector austral del archipiélago y combina relieve volcánico y hielo. Las visitas son excepcionales y necesitan autorización y apoyo especializado.|Aquí el paisaje cambia entre paredes rocosas, nieve y un océano muy agitado.`),
      Bases:
        entries(`Monitoreo volcánico remoto|Los satélites permiten observar calor, cenizas y cambios en volcanes remotos. Las campañas pueden usar instrumentos temporales; la observación desde el espacio es especialmente valiosa por la dificultad de acceder a las islas.|Un sensor en órbita puede detectar calor en un cráter que resulta muy difícil visitar.
Refugio Teniente Esquivel|Este refugio argentino de 1955 pertenece a la historia de la presencia humana en Thule. Es una instalación histórica, no una estación científica permanente en funcionamiento.|Un refugio pequeño representa una gran diferencia cuando el clima dificulta cualquier viaje.
Antigua estación Corbeta Uruguay|Es una instalación argentina histórica en Thule, establecida en 1976 y desmantelada después de 1982. Actualmente no existe una base habitada permanente en el archipiélago.|Los mapas históricos permiten distinguir instalaciones del pasado y estaciones que funcionan hoy.`),
      Vivencias:
        entries(`Vulcanología en ambientes extremos|Las expediciones combinan navegación, observaciones geológicas y planificación cuidadosa. El clima y la actividad volcánica limitan cuánto tiempo se puede trabajar en tierra.|Los científicos combinan muestras pequeñas con imágenes de satélite para reconstruir procesos enormes.
Cartografía austral|La historia de los mapas reúne observaciones de navegantes y mediciones modernas. Los nombres de las islas reflejan exploraciones y distintas tradiciones cartográficas.|Cook registra varias de estas islas en 1775; otras se incorporan después al conocimiento cartográfico.
Explorar sin dejar huella|La investigación y las visitas requieren protocolos para no perturbar colonias ni introducir organismos. Mantener distancia y llevarse todos los residuos ayuda a conservar estos lugares.|Una semilla adherida a una bota puede viajar miles de kilómetros si nadie la retira.`),
    },
  },
]
export const sources = [
  {
    name: 'Educ.ar',
    topic: 'Recursos educativos sobre Malvinas, memoria y soberanía.',
    url: 'https://www.educ.ar/',
  },
  {
    name: 'Cancillería Argentina',
    topic: 'La cuestión Malvinas y el Atlántico Sur.',
    url: 'https://www.cancilleria.gob.ar/es/politica-exterior/cuestion-malvinas',
  },
  {
    name: 'Instituto Geográfico Nacional',
    topic: 'Mapas y geografía del territorio argentino.',
    url: 'https://www.ign.gob.ar/',
  },
  {
    name: 'Museo Malvinas e Islas del Atlántico Sur',
    topic: 'Historia, patrimonio y propuestas educativas.',
    url: 'https://www.argentina.gob.ar/cultura/malvinas',
  },
  {
    name: 'Consejo Federal de Inversiones',
    topic: 'Información regional y recursos naturales.',
    url: 'https://cfi.org.ar/',
  },
  {
    name: 'British Antarctic Survey',
    topic: 'Investigación, biodiversidad y estaciones científicas australes.',
    url: 'https://www.bas.ac.uk/',
  },
  {
    name: 'Smithsonian · Global Volcanism Program',
    topic: 'Actividad y características de volcanes.',
    url: 'https://volcano.si.edu/',
  },
  {
    name: 'Naciones Unidas',
    topic: 'Descolonización y cuestión de las Islas Malvinas.',
    url: 'https://www.un.org/dppa/decolonization/es',
  },
]
