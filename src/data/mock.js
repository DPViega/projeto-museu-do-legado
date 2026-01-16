// Mock data for Museu dos Legados

export const heroData = {
  title: "Museu dos Legados",
  subtitle: "A Arte de contar histórias geracionais através de Experiências Imersivas Sensoriais",
  backgroundImage: "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?q=80&w=2400&auto=format&fit=crop"
};

export const aboutData = {
  title: "Sobre o Museu",
  image: "https://images.unsplash.com/photo-1758413354881-3499004c0b8d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwYXJjaGl0ZWN0dXJlfGVufDB8fHx8MTc2ODQzMzE0Mnww&ixlib=rb-4.1.0&q=85",
  description: [
    "O Museu dos Legados é um espaço cultural dedicado à preservação e celebração das histórias geracionais que moldaram nossa sociedade. Através de experiências imersivas e sensoriais, conectamos o passado ao presente, criando pontes entre gerações.",
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
  filters: ["Todos", "1930 - 1970", "1971 - 2000", "2000+"],
  artworks: [
    {
      id: 1,
      title: "Rádio Semp",
      artist: "Indústria Brasileira",
      category: "1930 - 1970",
      year: "Anos 50",
      image: "/images/collections/1930-1970/radio-semp.png",
      description: "Rádio de mesa da marca Semp, ícone da era de ouro do rádio no Brasil."
    },
    {
      id: 2,
      title: "Rock'n'Roll nos Anos 50",
      artist: "Cultura Popular",
      category: "1930 - 1970",
      year: "1956",
      image: "/images/collections/1930-1970/rock-n-roll.png",
      description: "Cena vibrante de um casal dançando rock'n'roll, capturando a energia da juventude da época."
    },
    {
      id: 3,
      title: "Gramofone Vintage",
      artist: "Tecnologia Sonora",
      category: "1930 - 1970",
      year: "Anos 30",
      image: "/images/collections/1930-1970/gramofone.png",
      description: "Gramofone clássico, precursor da reprodução sonora moderna nas casas brasileiras."
    },
    {
      id: 4,
      title: "Música Popular Brasileira",
      artist: "Movimento Tropicalista",
      category: "1930 - 1970",
      year: "Anos 60",
      image: "/images/collections/1930-1970/tropicalia.png",
      description: "Artistas da Tropicália e Bossa Nova em momento de reunião e criação musical."
    },
    {
      id: 5,
      title: "A Arte do Retrato",
      artist: "Fotografia Clássica",
      category: "1930 - 1970",
      year: "Início do Século XX",
      image: "/images/collections/1930-1970/fotografa.png",
      description: "Fotógrafa com câmera de fole, registrando a história através das lentes."
    },
    {
      id: 6,
      title: "Era dos Cruzeiros",
      artist: "Cédulas de Papel",
      category: "1971 - 2000",
      year: "Anos 80/90",
      image: "/images/collections/1971-2000/nota-cruzeiro.png",
      description: "Cédulas que marcaram o período de inflação e mudanças econômicas no Brasil."
    },
    {
      id: 7,
      title: "Ídolos do Rock",
      artist: "Posters de Época",
      category: "1971 - 2000",
      year: "Anos 70/80",
      image: "/images/collections/1971-2000/posters-rock.png",
      description: "A explosão do rock mundial estampada nas paredes dos jovens brasileiros."
    },
    {
      id: 8,
      title: "Divertimento Eletrônico",
      artist: "Mega Drive e TV de Tubo",
      category: "1971 - 2000",
      year: "Anos 90",
      image: "/images/collections/1971-2000/televisao-megadrive.png",
      description: "O auge dos consoles de 16 bits e a clássica televisão de tubo no centro da sala."
    },
    {
      id: 9,
      title: "Revolução Digital",
      artist: "Windows 98",
      category: "1971 - 2000",
      year: "1998",
      image: "/images/collections/1971-2000/computador-windows98.png",
      description: "A popularização do computador pessoal e o som clássico da internet discada."
    },
    {
      id: 10,
      title: "Sextou na Locadora",
      artist: "Era do VHS e DVD",
      category: "1971 - 2000",
      year: "Anos 90",
      image: "/images/collections/1971-2000/locadora-dvd.png",
      description: "O ritual de escolher filmes para o fim de semana em prateleiras repletas de novidades."
    },
    {
      id: 11,
      title: "Fenômeno Social Café Mania",
      artist: "Jogos Sociais",
      category: "2000+",
      year: "2010",
      image: "/images/collections/2000plus/cafe-mania.png",
      description: "A era de ouro dos jogos em redes sociais que conectou milhões de brasileiros."
    },
    {
      id: 12,
      title: "PlayStation 2 Slim",
      artist: "Console de Videogame",
      category: "2000+",
      year: "Anos 2000",
      image: "/images/collections/2000plus/ps2-slim.png",
      description: "O console mais popular do Brasil, símbolo de uma geração dedicada aos games."
    },
    {
      id: 13,
      title: "SNES Station no PS2",
      artist: "Emulação e Nostalgia",
      category: "2000+",
      year: "Anos 2000",
      image: "/images/collections/2000plus/snes-station.png",
      description: "A curiosa união entre a modernidade do PS2 e a nostalgia do Super Nintendo via emulação."
    },
    {
      id: 14,
      title: "Xuxa Só Para Baixinhos",
      artist: "Cultura Infantil",
      category: "2000+",
      year: "Início dos Anos 2000",
      image: "/images/collections/2000plus/xuxa-xspb.png",
      description: "O icônico álbum que marcou a infância de uma geração inteira no início do milênio."
    }
  ]
};

export const eventsData = {
  title: "Programação e Eventos",
  subtitle: "Confira nossa agenda cultural repleta de exposições, workshops, palestras e experiências únicas.",
  events: [
    {
      id: 1,
      date: "16",
      month: "JAN",
      year: "2026",
      title: "Estreia do Museu dos Legados",
      time: "14:30 - 16:00",
      location: "Instituto Caldeira - Sala Multiuso",
      image: "https://images.unsplash.com/photo-1562064729-6c3f058785fd?crop=entropy&cs=srgb&fm=jpg&q=85",
      description: "Grande estreia do Museu dos Legados. Venha participar do início desta jornada de preservação e celebração das histórias geracionais."
    }
  ]
};

export const instagramData = {
  handle: "@museudolegado.rs",
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
      content: "Centro Histórico\nPorto Alegre - RS"
    },
    {
      icon: "info",
      title: "Regras",
      content: "Proibido flash\nSilêncio nas galerias\nGuarde pertences nos armários"
    }
  ],
  mapUrl: "https://maps.google.com/maps?q=Centro%20Hist%C3%B3rico%20Porto%20Alegre&t=&z=15&ie=UTF8&iwloc=&output=embed"
};

export const contactData = {
  title: "Entre em Contato",
  address: "Rua da Cultura, 500\nCentro Histórico\nSão Paulo - SP, 01000-000",
  phone: "(11) 3456-7890"
};
