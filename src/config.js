// =====================================================================
// IZABEL KARINE · LASH DESIGN — Configuração do site
// Edite aqui textos, preços, fotos, depoimentos e contatos.
// Não é preciso mexer em nenhum outro arquivo do site.
// =====================================================================

// Dados gerais da marca
export const site = {
  name: "Izabel Karine",
  role: "Lash Design",
  url: "https://izabelkarine.com.br",
};

// Textos do link de compartilhamento (WhatsApp, Instagram)
export const meta = {
  title: "Izabel Karine · Lash Design — Cílios e Sobrancelhas",
  description:
    "Cílios e sobrancelhas com atendimento personalizado, preciso e acolhedor. Agende seu horário pelo WhatsApp.",
};

// WhatsApp: número com DDI + DDD, apenas dígitos (ex.: 5511999999999)
export const whatsapp = {
  number: "557188403481",
  defaultMessage: "Olá! Vi seu portfólio e gostaria de agendar um horário.",
};

export function whatsappLink(message) {
  const text = message || whatsapp.defaultMessage;
  return `https://wa.me/${whatsapp.number}?text=${encodeURIComponent(text)}`;
}

// Menu do topo
export const nav = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Galeria", href: "#galeria" },
  {
    label: "Serviços",
    children: [
      { label: "Pacotes", href: "#pacotes" },
      { label: "Cursos", href: "#cursos" },
    ],
  },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

// Início da página (destaque)
export const hero = {
  logo: "logos/logo-escuro-principal-transparente.png",
  headline: "Cuidado que realça o que há de mais bonito em você.",
  accentWord: "bonito",
  subline:
    "Cílios e sobrancelhas com atendimento personalizado, preciso e acolhedor.",
  cta: "Agendar pelo WhatsApp",
  secondaryCta: { label: "Ver pacotes", href: "#pacotes" },
  note: "Atendimento com hora marcada",
};

// Seção "Sobre mim"
export const about = {
  overline: "Sobre mim",
  title: "Beleza que nasce do cuidado",
  photos: [
    "/fotos/izabel/1.jpg",
    "/fotos/izabel/2.jpg",
  ],
  alt: "Izabel Karine, lash designer",
  lead: "Beleza também é uma forma de cuidado: cada atendimento deve ser um momento de pausa, atenção e valorização pessoal.",
  paragraphs: [
    "Atendimento personalizado, preciso e acolhedor, unindo técnica, delicadeza e atenção aos detalhes.",
    "Resultados que respeitam os traços e a identidade de cada cliente.",
  ],
  values: [
    {
      name: "Elegância",
      description: "Sofisticação em cada detalhe do atendimento.",
    },
    {
      name: "Acolhimento",
      description: "Um espaço para você pausar e se sentir em casa.",
    },
    {
      name: "Confiança",
      description: "Técnica segura, produtos de qualidade e transparência.",
    },
    {
      name: "Naturalidade",
      description: "Resultados que realçam os seus traços, sem exageros.",
    },
  ],
};

// Galeria de trabalhos — cada modelo corresponde a uma pasta
// "fotos/trabalhos/{id}/" e "photos" lista as fotos dessa pasta (capa = primeira).
export const gallery = {
  overline: "Portfólio",
  title: "Galeria de trabalhos",
  models: [
    {
      id: "volume-brasileiro",
      name: "Volume Brasileiro",
      photos: [
        "/fotos/trabalhos/volume-brasileiro/1.jpeg",
        "/fotos/trabalhos/volume-brasileiro/2.jpeg",
        "/fotos/trabalhos/volume-brasileiro/3.jpeg",
        "/fotos/trabalhos/volume-brasileiro/4.jpeg",
        "/fotos/trabalhos/volume-brasileiro/5.jpeg",
      ],
    },
    {
      id: "volume-brasileiro-marrom",
      name: "Volume Brasileiro Marrom",
      photos: [
        "/fotos/trabalhos/volume-brasileiro-marrom/1.jpeg",
        "/fotos/trabalhos/volume-brasileiro-marrom/2.jpeg",
        "/fotos/trabalhos/volume-brasileiro-marrom/3.jpeg",
        "/fotos/trabalhos/volume-brasileiro-marrom/4.jpeg",
      ],
    },
    {
      id: "volume-americano",
      name: "Volume Americano",
      photos: [
        "/fotos/trabalhos/volume-americano/1.jpeg",
        "/fotos/trabalhos/volume-americano/2.jpeg",
        "/fotos/trabalhos/volume-americano/3.jpeg",
        "/fotos/trabalhos/volume-americano/4.jpeg",
        "/fotos/trabalhos/volume-americano/5.jpeg",
      ],
    },
    {
      id: "fox-eyes",
      name: "Fox Eyes",
      photos: [
        "/fotos/trabalhos/fox-eyes/1.jpeg",
        "/fotos/trabalhos/fox-eyes/2.jpeg",
        "/fotos/trabalhos/fox-eyes/3.jpeg",
        "/fotos/trabalhos/fox-eyes/4.jpeg",
      ],
    },
    {
      id: "mega-fox-eyes",
      name: "Mega Fox Eyes",
      photos: ["/fotos/trabalhos/mega-fox-eyes/1.jpeg"],
    },
    {
      id: "micropigmentacao",
      name: "Micropigmentação",
      photos: [
        "/fotos/trabalhos/micropigmentacao/1.jpeg",
        "/fotos/trabalhos/micropigmentacao/2.jpeg",
        "/fotos/trabalhos/micropigmentacao/3.jpeg",
        "/fotos/trabalhos/micropigmentacao/4.jpeg",
      ],
    },
    {
      id: "efeito-sirena",
      name: "Efeito Sirena",
      photos: ["/fotos/trabalhos/efeito-sirena/1.jpeg"],
    },
    {
      id: "brow-lamination",
      name: "Brow Lamination",
      photos: [
        "/fotos/trabalhos/brow-lamination/1.jpeg",
        "/fotos/trabalhos/brow-lamination/2.jpeg",
      ],
    },
  ],
};

// Pacotes e valores — edite nomes, descrições e preços à vontade
export const packages = {
  overline: "Pacotes e valores",
  title: "Escolha o seu momento de cuidado",
  note: "Os valores podem variar conforme a técnica indicada para você. Confirme os detalhes no WhatsApp.",
  cta: "Agendar",
  items: [
    {
      name: "Efeito Sirena",
      description:
        "Focado em criar um olhar alongado, sensual e sofisticado, imitando o efeito de um delineado gatinho.",
      price: "R$ 100,00",
      maintenance: null,
      featured: false,
    },
    {
      name: "Fox Eyes",
      description:
        "É uma técnica que alonga e levanta o olhar, com foco no canto externo. Manutenção entre 20 dias.",
      price: "R$ 160,00",
      maintenance: "R$ 130,00",
      featured: false,
    },
    {
      name: "Volume Americano 5D",
      description:
        "É uma técnica de extensão de cílios que utiliza feixes pré-montados com 5 fios ultrafinos entrelaçados em uma mesma base em formato de W.",
      price: "R$ 150,00",
      maintenance: "R$ 120,00",
      featured: false,
    },
    {
      name: "Volume Brasileiro",
      description:
        "É uma técnica de extensão de cílios que utiliza fios sintéticos em formato de \"Y\". Manutenção entre 20 dias.",
      price: "R$ 140,00",
      maintenance: "R$ 110,00",
      featured: true,
    },
    {
      name: "Volume Brasileiro Marrom",
      description:
        "É uma técnica de extensão de cílios que utiliza fios sintéticos em formato de \"Y\" Marrom. Manutenção entre 20 dias.",
      price: "R$ 145,00",
      maintenance: "R$ 115,00",
      featured: false,
    },
    {
      name: "Mega Fox Eyes",
      description:
        "São uma tendência de extensão de cílios que une o efeito foxy (olhar de raposa, alongado e sensual) com a densidade marcante do Mega Volume. Dura em média 35 a 40 dias e não tem manutenção.",
      price: "R$ 210,00",
      maintenance: null,
      featured: false,
    },
    {
      name: "Micropigmentação Shadow",
      description:
        "É uma técnica de preenchimento de sobrancelhas que utiliza micropixels para criar um efeito esfumado e degradê, simulando o visual de uma sobrancelha levemente maquiada.",
      price: "R$ 400,00",
      maintenance: null,
      featured: false,
    },
    {
      name: "Brow Lamination",
      description:
        "Alinhar, modelar e fixar os fios das sobrancelhas para cima, criando um efeito de maior volume, densidade e aspecto penteado.",
      price: "R$ 150,00",
      maintenance: null,
      featured: false,
    },
  ],
};

// Cursos & Mentoria — formação para lash designers
export const courses = {
  overline: "Cursos & Mentoria",
  title: "Eleve sua carreira",
  subtitle: "Torne-se uma Lash Designer segura, valorizada e lucrativa.",
  cards: [
    {
      tag: "Especialização",
      name: "I.K. Lash Power",
      subtitle: "Para quem já atende e quer se destacar no mercado.",
      description:
        "Curso intensivo de 1 dia (08h às 18h) com teoria + prática para você atender com segurança e qualidade.",
      topics: [
        "Acoplagem perfeita dos fios",
        "Curvaturas ideais e tipos de fios",
        "Fio tecnológico e suas vantagens",
        "Mapeamento personalizado",
        "Biossegurança e postura profissional",
      ],
      bonus: ["1 hora de mentoria exclusiva após 30 dias."],
      price: "R$ 800,00",
      payment: "à vista ou até 12x no cartão",
      cta: "Quero me especializar",
      message: "Olá! Tenho interesse no Curso de Especialização I.K. Lash Power.",
    },
    {
      tag: "Iniciante",
      name: "I.K. Lash Power",
      subtitle: "Sua virada de chave na extensão de cílios.",
      description:
        "2 dias de imersão presencial. Você aprende técnica, prática e mentalidade de empresária. Aqui você não aprende só a colocar cílios, aprende a viver de cílios.",
      topics: [
        "Teoria completa e acoplagem perfeita",
        "Controle de adesivo e direcionamento",
        "Prática em modelo real",
      ],
      bonus: [
        "Aula de Marketing (atração de clientes) e Finanças (precificação e MEI)",
        "Kit Iniciante incluso (material novinho) + Apostila + Certificado",
      ],
      price: "R$ 1.000,00",
      payment: "à vista ou até 12x no cartão",
      cta: "Garantir minha vaga",
      message: "Olá! Tenho interesse no Curso Iniciante I.K. Lash Power.",
    },
  ],
  students: {
    title: "Algumas das nossas alunas em ação:",
    photos: [
      "/fotos/mentorias/1.jpeg",
      "/fotos/mentorias/2.jpeg",
      "/fotos/mentorias/3.jpeg",
    ],
  },
};

// Depoimentos de clientes
export const testimonials = {
  overline: "Depoimentos",
  title: "Quem vive a experiência, recomenda",
  items: [
    {
      name: "Mariana C.",
      detail: "Fox Eyes",
      text: "A Izabel transformou meu olhar! O atendimento é impecável, ela explicou tudo com calma e o efeito do Fox Eyes ficou exatamente como eu queria: natural e com aquele lifting.",
    },
    {
      name: "Fernanda L.",
      detail: "Brow Lamination",
      text: "Simplesmente a melhor! Minhas sobrancelhas nunca estiveram tão alinhadas e preenchidas. A laminação deixou os fios super definidos e o resultado ficou natural, do jeito que eu queria.",
    },
    {
      name: "Paula R.",
      detail: "Volume brasileiro",
      text: "Saio de lá renovada. O espaço é acolhedor e o cuidado com cada detalhe faz toda a diferença no resultado.",
    },
  ],
};

// Contato e horários
export const contact = {
  overline: "Contato",
  title: "Vamos conversar",
  instagram: "lashemsalvador_",
  instagramUrl: "https://www.instagram.com/lashemsalvador_?vrfl=MTVuY3l1dDkyejh1Mg==",
  // Link do perfil no TikTok (ícone no rodapé)
  tiktokUrl: "https://www.tiktok.com/@izabelkarine1?_r=1&_t=ZS-9AbpPhryZqX",
  // Telefone exibido no card de WhatsApp da seção Contato
  phone: "(+55)7188403481",
  hours: [
    "Terça a Sábado · 9h às 18h",
    "Somente com hora marcada",
  ],
};

// Onde atendo — locais exibidos no popover do rodapé
export const locations = {
  title: "Onde atendo",
  places: [
    {
      name: "Studio Lauro de Freitas",
      address: "LFTV",
      mapsUrl: "https://maps.app.goo.gl/P8QEiHxBfmSMZRUd9",
    },
    {
      name: "Studio Salvador",
      address: "Imbui Torres Center",
      mapsUrl: "https://maps.app.goo.gl/iv4DgjnJtW5wgNiF6",
    },
  ],
};

// Faixa final de chamada para agendamento
export const cta = {
  title: "Pronta para realçar seu olhar?",
  text: "Escolha o seu momento de cuidado — estamos a apenas uma mensagem de distância.",
  button: "Agendar pelo WhatsApp",
};

// Rodapé
export const footer = {
  logo: "logos/logo-claro-variacao-transparente.png",
  tagline: "Cuidado que realça o que há de mais bonito em você.",
  credit: "Feito com cuidado.",
};
