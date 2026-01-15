// Mock data for Museu do Legado

export const heroData = {
  title: "Museu do Legado",
  subtitle: "A Arte de contar histórias geracionais através de Experiências Imersivas Sensoriais",
  backgroundImage: "https://images.unsplash.com/photo-1491156855053-9cdff72c7f85?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwxfHxtdXNldW0lMjBpbnRlcmlvcnxlbnwwfHx8fDE3Njg0MzMxMzZ8MA&ixlib=rb-4.1.0&q=85"
};

export const aboutData = {
  title: "Sobre o Museu",
  image: "https://images.unsplash.com/photo-1758413354881-3499004c0b8d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwYXJjaGl0ZWN0dXJlfGVufDB8fHx8MTc2ODQzMzE0Mnww&ixlib=rb-4.1.0&q=85",
  description: [
    "O Museu do Legado é um espaço cultural dedicado à preservação e celebração das histórias geracionais que moldaram nossa sociedade. Através de experiências imersivas e sensoriais, conectamos o passado ao presente, criando pontes entre gerações.",
    "Nossa missão é transformar a forma como as pessoas se conectam com a história e a cultura, proporcionando experiências que vão além da observação tradicional. Cada exposição é cuidadosamente elaborada para estimular todos os sentidos e criar memórias duradouras.",
    "Fundado em 2016, o museu já recebeu mais de 50 mil visitantes e se tornou referência em museologia interativa no Brasil, oferecendo mais de 500 obras em nossa coleção permanente e temporária."
  ],
  stats: [
    { icon: "history", title: "História", description: "10 anos preservando memórias geracionais" },
    { icon: "target", title: "Missão", description: "Conectar gerações através da arte e cultura" },
    { icon: "eye", title: "Visão", description: "Ser referência em experiências culturais imersivas" }
  ],
  counters: [
    { number: 500, label: "Obras", suffix: "+" },
    { number: 10, label: "Anos de História", suffix: "" },
    { number: 50, label: "Visitantes", suffix: "k+" }
  ]
};

export const experiencesData = {
  title: "Experiências Sensoriais",
  subtitle: "Mergulhe em um mundo de sensações que transcendem o visual. Nossas experiências imersivas foram criadas para estimular todos os seus sentidos.",
  experiences: [
    {
      id: 1,
      title: "Visual",
      image: "https://images.unsplash.com/photo-1731101676275-101a32d910ea?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwyfHxlbGVnYW50JTIwYXJjaGl0ZWN0dXJlfGVufDB8fHx8MTc2ODQzMzE0Mnww&ixlib=rb-4.1.0&q=85",
      color: "#430e51",
      description: "Explore galerias onde a luz, sombra e perspectiva criam narrativas visuais únicas. Obras de arte projetadas em ambientes tridimensionais, instalações de vídeo mapping e exposições interativas que respondem aos seus movimentos. Cada sala é uma jornada visual que conta histórias de diferentes épocas e culturas através de elementos visuais cuidadosamente curados."
    },
    {
      id: 2,
      title: "Auditiva",
      image: "https://images.unsplash.com/photo-1521920592574-49e0b121c964?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwyfHxtdXNldW0lMjBpbnRlcmlvcnxlbnwwfHx8fDE3Njg0MzMxMzZ8MA&ixlib=rb-4.1.0&q=85",
      color: "#58a39c",
      description: "Descubra ambientes sonoros envolventes com composições originais, depoimentos históricos e paisagens sonoras que transportam você para diferentes momentos no tempo. Salas de áudio 3D onde você pode ouvir histórias narradas por descendentes de personagens históricos, músicas de época e sons ambientes que recriam atmosferas do passado."
    },
    {
      id: 3,
      title: "Tátil",
      image: "https://images.unsplash.com/photo-1739373849137-1ca495f75286?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHw0fHxlbGVnYW50JTIwYXJjaGl0ZWN0dXJlfGVufDB8fHx8MTc2ODQzMzE0Mnww&ixlib=rb-4.1.0&q=85",
      color: "#040651",
      description: "Toque, sinta e interaja com réplicas históricas, texturas e materiais autênticos. Experiências hands-on que permitem manipular objetos, sentir diferentes superfícies e texturas que contam histórias através do tato. Uma sala sensorial onde você pode explorar artefatos históricos através do toque, com guias em braile e descrições táteis para total acessibilidade."
    }
  ]
};

export const collectionsData = {
  title: "Nossas Coleções",
  description: "Explore nossa diversificada coleção de obras que abrangem desde a arte clássica até as mais contemporâneas expressões artísticas. Cada peça foi cuidadosamente selecionada para contar uma história única sobre nossa herança cultural.",
  filters: ["Todas", "Arte Clássica", "Arte Moderna", "Contemporânea"],
  artworks: [
    {
      id: 1,
      title: "Teto Sistino",
      artist: "Inspiração Renascentista",
      category: "Arte Clássica",
      year: "Século XVI",
      image: "https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?crop=entropy&cs=srgb&fm=jpg&q=85",
      description: "Afresco monumental representando cenas bíblicas com técnica renascentista impecável."
    },
    {
      id: 2,
      title: "Navegação Histórica",
      artist: "Escola Holandesa",
      category: "Arte Clássica",
      year: "Século XVII",
      image: "https://images.unsplash.com/photo-1582561424760-0321d75e81fa?crop=entropy&cs=srgb&fm=jpg&q=85",
      description: "Pintura marítima holandesa retratando grandes embarcações em alto-mar."
    },
    {
      id: 3,
      title: "Paisagem Pastoral",
      artist: "Tradição Inglesa",
      category: "Arte Clássica",
      year: "Século XVIII",
      image: "https://images.unsplash.com/photo-1578926375605-eaf7559b1458?crop=entropy&cs=srgb&fm=jpg&q=85",
      description: "Paisagem bucólica inglesa com técnicas de luminosidade características do período."
    },
    {
      id: 4,
      title: "Natureza Morta Floral",
      artist: "Era Dourada Holandesa",
      category: "Arte Clássica",
      year: "Século XVII",
      image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?crop=entropy&cs=srgb&fm=jpg&q=85",
      description: "Composição floral detalhada com simbolismo típico da pintura holandesa."
    },
    {
      id: 5,
      title: "Maternidade",
      artist: "Escultura Clássica",
      category: "Arte Clássica",
      year: "Século XIX",
      image: "https://images.unsplash.com/photo-1552044173-20b284c6fe1f?crop=entropy&cs=srgb&fm=jpg&q=85",
      description: "Escultura em mármore representando a relação maternal com delicadeza."
    },
    {
      id: 6,
      title: "Estátua Clássica",
      artist: "Tradição Greco-Romana",
      category: "Arte Clássica",
      year: "Inspiração Antiga",
      image: "https://images.unsplash.com/photo-1571033690858-b336bfa1dd0f?crop=entropy&cs=srgb&fm=jpg&q=85",
      description: "Escultura masculina de proporções ideais inspirada na estatuária clássica."
    },
    {
      id: 7,
      title: "David Contemporâneo",
      artist: "Reinterpretação Moderna",
      category: "Contemporânea",
      year: "Século XXI",
      image: "https://images.unsplash.com/photo-1601887389937-0b02c26b602c?crop=entropy&cs=srgb&fm=jpg&q=85",
      description: "Releitura contemporânea de obras clássicas com técnicas modernas."
    },
    {
      id: 8,
      title: "Galeria Moderna",
      artist: "Curadoria Contemporânea",
      category: "Arte Moderna",
      year: "2020",
      image: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?crop=entropy&cs=srgb&fm=jpg&q=85",
      description: "Exposição de obras modernas em espaço minimalista."
    },
    {
      id: 9,
      title: "Experiência Imersiva",
      artist: "Coletivo de Artistas",
      category: "Contemporânea",
      year: "2024",
      image: "https://images.unsplash.com/photo-1606819717115-9159c900370b?crop=entropy&cs=srgb&fm=jpg&q=85",
      description: "Instalação interativa que convida o público a fazer parte da obra."
    },
    {
      id: 10,
      title: "Espaço Contemporâneo",
      artist: "Arte Conceitual",
      category: "Contemporânea",
      year: "2023",
      image: "https://images.unsplash.com/photo-1565876427310-0695a4ff03b7?crop=entropy&cs=srgb&fm=jpg&q=85",
      description: "Obra que questiona os limites entre arte e espaço expositivo."
    }
  ]
};

export const eventsData = {
  title: "Programação e Eventos",
  subtitle: "Confira nossa agenda cultural repleta de exposições, workshops, palestras e experiências únicas.",
  events: [
    {
      id: 1,
      date: "15",
      month: "FEV",
      year: "2026",
      title: "Exposição: Memórias do Brasil Colonial",
      time: "14h - 18h",
      location: "Galeria Principal",
      image: "https://images.unsplash.com/photo-1562064729-6c3f058785fd?crop=entropy&cs=srgb&fm=jpg&q=85",
      description: "Abertura da nova exposição permanente que explora a riqueza cultural do período colonial brasileiro através de artefatos, pinturas e instalações interativas."
    },
    {
      id: 2,
      date: "22",
      month: "FEV",
      year: "2026",
      title: "Workshop: Técnicas de Pintura Clássica",
      time: "10h - 16h",
      location: "Ateliê do Museu",
      image: "https://images.unsplash.com/photo-1724877595167-d741c5d58183?crop=entropy&cs=srgb&fm=jpg&q=85",
      description: "Aprenda técnicas tradicionais de pintura com artistas renomados. Vagas limitadas, inscrições abertas."
    },
    {
      id: 3,
      date: "08",
      month: "MAR",
      year: "2026",
      title: "Noite Cultural: Música e Arte",
      time: "19h - 22h",
      location: "Auditório e Jardins",
      image: "https://images.unsplash.com/photo-1761124739660-c2410c5d917c?crop=entropy&cs=srgb&fm=jpg&q=85",
      description: "Apresentações musicais ao vivo, performances artísticas e visitação noturna especial às galerias. Evento gratuito para toda a família."
    },
    {
      id: 4,
      date: "20",
      month: "MAR",
      year: "2026",
      title: "Palestra: Preservação de Patrimônio Cultural",
      time: "15h - 17h",
      location: "Sala de Conferências",
      image: "https://images.unsplash.com/photo-1716726319178-6d60f2b027f4?crop=entropy&cs=srgb&fm=jpg&q=85",
      description: "Especialistas nacionais e internacionais discutem os desafios e inovações na preservação do patrimônio cultural brasileiro."
    }
  ]
};

export const instagramData = {
  handle: "@museulegado",
  followers: "12.5k",
  posts: [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1554907984-15263bfd63bd?crop=entropy&cs=srgb&fm=jpg&q=85",
      likes: 324,
      caption: "Nossa coleção de obras clássicas 🎨"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?crop=entropy&cs=srgb&fm=jpg&q=85",
      likes: 567,
      caption: "Espaço moderno para experiências únicas"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1572953109213-3be62398eb95?crop=entropy&cs=srgb&fm=jpg&q=85",
      likes: 892,
      caption: "Visitantes explorando nossa galeria principal"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1491156855053-9cdff72c7f85?crop=entropy&cs=srgb&fm=jpg&q=85",
      likes: 1205,
      caption: "Arquitetura que inspira 🏛️"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1606819717115-9159c900370b?crop=entropy&cs=srgb&fm=jpg&q=85",
      likes: 445,
      caption: "A arte é para todos. Visite-nos!"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1569783721854-33a99b4c0bae?crop=entropy&cs=srgb&fm=jpg&q=85",
      likes: 678,
      caption: "Momentos compartilhados através da arte"
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1565876427310-0695a4ff03b7?crop=entropy&cs=srgb&fm=jpg&q=85",
      likes: 534,
      caption: "Arte contemporânea em destaque"
    },
    {
      id: 8,
      image: "https://images.pexels.com/photos/2372978/pexels-photo-2372978.jpeg?auto=compress&cs=tinysrgb&w=800",
      likes: 723,
      caption: "Cada canto conta uma história"
    },
    {
      id: 9,
      image: "https://images.pexels.com/photos/2261165/pexels-photo-2261165.jpeg?auto=compress&cs=tinysrgb&w=800",
      likes: 389,
      caption: "Minimalismo e elegância ✨"
    }
  ]
};

export const practicalInfoData = {
  title: "Planeje sua Visita",
  info: [
    {
      icon: "clock",
      title: "Horários",
      content: "Terça a Domingo\n10h às 18h\nSegundas fechado"
    },
    {
      icon: "ticket",
      title: "Ingressos",
      content: "Inteiro: R$ 30,00\nMeia-entrada: R$ 15,00\nGratuito às quartas"
    },
    {
      icon: "map-pin",
      title: "Localização",
      content: "Rua da Cultura, 500\nCentro Histórico\nSão Paulo - SP"
    },
    {
      icon: "info",
      title: "Regras",
      content: "Proibido flash\nSilêncio nas galerias\nGuarde pertences nos armários"
    }
  ],
  mapUrl: "https://maps.google.com/maps?q=Museu%20do%20Ipiranga%20S%C3%A3o%20Paulo&t=&z=13&ie=UTF8&iwloc=&output=embed"
};

export const contactData = {
  title: "Entre em Contato",
  address: "Rua da Cultura, 500\nCentro Histórico\nSão Paulo - SP, 01000-000",
  phone: "(11) 3456-7890"
};
