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
  { label: "Pacotes", href: "#pacotes" },
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
  image: {
    src: "fotos/retrato.svg",
    alt: "Izabel Karine, lash designer",
  },
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

// Galeria de trabalhos — troque "src" pelo caminho das suas fotos
// (coloque os arquivos na pasta "fotos" e use, por ex.: "fotos/meu-trabalho.jpg")
export const gallery = {
  overline: "Portfólio",
  title: "Galeria de trabalhos",
  photos: [
    {
      src: "fotos/foto-01.svg",
      alt: "Extensão de cílios volume clássico com efeito natural",
      caption: "Volume clássico",
    },
    {
      src: "fotos/foto-02.svg",
      alt: "Volume brasileiro com olhar cheio e marcante",
      caption: "Volume brasileiro",
    },
    {
      src: "fotos/foto-03.svg",
      alt: "Design de sobrancelhas alinhado aos traços do rosto",
      caption: "Design de sobrancelhas",
    },
    {
      src: "fotos/foto-04.svg",
      alt: "Volume híbrido com textura delicada",
      caption: "Volume híbrido",
    },
    {
      src: "fotos/foto-05.svg",
      alt: "Sobrancelhas desenhadas com henna delicada",
      caption: "Henna design",
    },
    {
      src: "fotos/foto-06.svg",
      alt: "Cílios alongados para um olhar desperto",
      caption: "Efeito alongado",
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
      name: "Volume Clássico",
      description:
        "Um fio aplicado em cada cílio natural, para um olhar desperto e natural — como se fossem seus.",
      price: "R$ 150",
      featured: false,
    },
    {
      name: "Volume Híbrido",
      description:
        "Mistura de fios clássicos e leques, criando desenho, textura e um charme a mais no olhar.",
      price: "R$ 180",
      featured: false,
    },
    {
      name: "Volume Brasileiro",
      description:
        "Leques ultraleves com efeito cheio e marcante, mantendo o conforto e a saúde dos cílios.",
      price: "R$ 220",
      featured: true,
    },
    {
      name: "Design de Sobrancelhas",
      description:
        "Mapeamento personalizado, alinhamento e correção para sobrancelhas simétricas e harmoniosas.",
      price: "R$ 70",
      featured: false,
    },
  ],
};

// Depoimentos de clientes
export const testimonials = {
  overline: "Depoimentos",
  title: "Quem vive a experiência, recomenda",
  items: [
    {
      name: "Mariana C.",
      detail: "Volume clássico",
      text: "A Izabel transformou meu olhar! O atendimento é impecável, ela explica tudo com calma e o resultado ficou natural e lindo.",
    },
    {
      name: "Fernanda L.",
      detail: "Design de sobrancelhas",
      text: "Simplesmente a melhor! Minhas sobrancelhas nunca estiveram tão bem desenhadas e alinhadas ao meu rosto.",
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
