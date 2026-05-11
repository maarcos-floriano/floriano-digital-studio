import {
  ArrowUpRight,
  BadgeCheck,
  Bot,
  Brush,
  Check,
  Code2,
  DatabaseZap,
  Headphones,
  LayoutTemplate,
  Link as LinkIcon,
  MessageCircle,
  ShieldCheck,
  Star,
  Store,
  Wand2,
  Zap,
} from 'lucide-react'
import { motion } from 'framer-motion'
import { clsx } from 'clsx'

const fallbackBuyUrl = '#comprar'
const portfolioUrl = 'https://maarcos-floriano.github.io/my-portfolio/'
const githubUrl = 'https://github.com/maarcos-floriano'

const services = [
  {
    id: 'prospeccao-b2b',
    name: 'Prospecção B2B',
    icon: DatabaseZap,
    price: 'R$ 297+',
    label: 'Leads qualificados',
    promise: 'Receba uma lista organizada de empresas para iniciar sua abordagem comercial.',
    description:
      'Pesquisa sob demanda de negócios, segmentos e oportunidades com critérios definidos antes da entrega.',
    bullets: ['Segmentação por nicho e região', 'Planilha pronta para usar', 'Critérios e fontes documentados'],
    buyUrl: fallbackBuyUrl,
  },
  {
    id: 'imagem-profissional',
    name: 'Imagem profissional',
    icon: BadgeCheck,
    price: 'R$ 197+',
    label: 'Perfil que passa confiança',
    promise: 'Melhore sua apresentação no Instagram, WhatsApp e canais de venda.',
    description:
      'Ajuste de bio, posicionamento, destaques, texto de apresentação e direção visual básica.',
    bullets: ['Bio comercial', 'Texto de apresentação', 'Orientação visual para perfil'],
    buyUrl: fallbackBuyUrl,
  },
  {
    id: 'idv-starter',
    name: 'Identidade Visual Starter',
    icon: Brush,
    price: 'R$ 697+',
    label: 'Marca com cara profissional',
    promise: 'Tenha uma identidade visual inicial para começar a vender com mais autoridade.',
    description:
      'Kit visual para pequenos negócios que precisam sair do improviso e organizar a primeira presença de marca.',
    bullets: ['Logo base', 'Paleta e tipografia', 'Aplicações para redes sociais'],
    buyUrl: fallbackBuyUrl,
  },
  {
    id: 'site-express',
    name: 'Site Express',
    icon: LayoutTemplate,
    price: 'R$ 997+',
    label: 'Página pronta para vender',
    promise: 'Coloque seu serviço, produto ou negócio no ar com uma landing page profissional.',
    description:
      'Página de apresentação com copy, visual responsivo, botões de contato e estrutura para conversão.',
    bullets: ['Landing page responsiva', 'Texto de venda', 'Publicação e SEO básico'],
    buyUrl: fallbackBuyUrl,
    featured: true,
  },
  {
    id: 'stockzap-ai',
    name: 'StockZapAI',
    icon: Bot,
    price: 'Setup + mensal',
    label: 'Automação com IA',
    promise: 'Automatize atendimento, operação e rotinas comerciais com IA e WhatsApp.',
    description:
      'Configuração de fluxos inteligentes para organizar demandas, responder melhor e reduzir tarefas repetitivas.',
    bullets: ['Diagnóstico inicial', 'Setup do fluxo', 'Treinamento para uso'],
    buyUrl: fallbackBuyUrl,
  },
  {
    id: 'suporte-tecnico',
    name: 'Suporte remoto',
    icon: Headphones,
    price: 'R$ 97+',
    label: 'Ajuda rápida',
    promise: 'Resolva problemas digitais sem perder horas tentando descobrir sozinho.',
    description:
      'Atendimento remoto para sites, domínios, e-mails, ferramentas, configurações e ajustes técnicos.',
    bullets: ['Atendimento remoto', 'Diagnóstico do problema', 'Orientação final'],
    buyUrl: fallbackBuyUrl,
  },
  {
    id: 'automacao-ia',
    name: 'Automação com IA',
    icon: Wand2,
    price: 'R$ 697+',
    label: 'Processos inteligentes',
    promise: 'Crie fluxos automatizados para atendimento, conteúdo, leads e tarefas internas.',
    description:
      'Mapeamos uma rotina do seu negócio e criamos uma automação prática para ganhar tempo e consistência.',
    bullets: ['Mapeamento do processo', 'Automação configurada', 'Documentação de uso'],
    buyUrl: fallbackBuyUrl,
  },
]

const trustPoints = [
  'Serviços objetivos, com escopo claro antes da compra.',
  'Entrega pensada para pequenos negócios e prestadores de serviço.',
  'Soluções digitais com visual, tecnologia e automação no mesmo lugar.',
]

const bioLinks = [
  ['Comprar ou solicitar orçamento', '#servicos', Store],
  ['Ver portfólio técnico', portfolioUrl, Code2],
  ['GitHub', githubUrl, LinkIcon],
]

function App() {
  return (
    <main className="min-h-screen bg-[#090b10] text-white">
      <Hero />
      <ServiceStrip />
      <Services />
      <Trust />
      <BuyHub />
      <FinalCTA />
    </main>
  )
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-white/10 bg-[#090b10]">
      <div className="absolute left-0 top-0 h-full w-2 bg-[#19ff8f]" />
      <div className="mx-auto min-h-[90svh] max-w-7xl px-5 py-5 md:px-8 lg:px-10">
        <header className="flex items-center justify-between border-b border-white/10 pb-5">
          <a href="#top" className="flex items-center gap-3">
            <span className="grid size-11 place-items-center rounded-[8px] bg-[#19ff8f] text-base font-black text-[#07100b]">
              FD
            </span>
            <span>
              <strong className="block text-sm uppercase tracking-[.2em] text-white">Floriano</strong>
              <span className="text-xs font-semibold uppercase tracking-[.2em] text-[#19ff8f]">
                Digital Studio
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-semibold text-white/72 md:flex">
            <a href="#servicos" className="hover:text-white">Serviços</a>
            <a href="#comprar" className="hover:text-white">Comprar</a>
            <a href="#contato" className="hover:text-white">Contato</a>
          </nav>

          <a
            href="#servicos"
            className="inline-flex items-center gap-2 rounded-[8px] bg-white px-4 py-3 text-sm font-black text-[#090b10] transition hover:bg-[#19ff8f]"
          >
            Ver serviços <Store size={17} />
          </a>
        </header>

        <div className="grid gap-10 py-16 md:grid-cols-[1.05fr_.95fr] md:py-24">
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-[8px] border border-[#19ff8f]/40 bg-[#19ff8f]/10 px-3 py-2 text-sm font-bold text-[#19ff8f]">
              <Zap size={16} />
              Serviços digitais para negócios que querem vender melhor
            </div>

            <h1 className="max-w-5xl text-[clamp(3rem,8vw,7.4rem)] font-black uppercase leading-[.88] tracking-normal">
              Compre soluções digitais prontas para o seu negócio.
            </h1>

            <p className="mt-7 max-w-2xl text-lg font-medium leading-8 text-white/76 md:text-xl">
              Sites, identidade visual, melhoria de imagem, prospecção B2B, suporte técnico,
              automações com IA e StockZapAI em um só lugar.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#servicos"
                className="inline-flex items-center gap-2 rounded-[8px] bg-[#19ff8f] px-5 py-4 text-sm font-black uppercase tracking-wide text-[#07100b] transition hover:-translate-y-0.5"
              >
                Escolher serviço <ArrowUpRight size={18} />
              </a>
              <a
                href="#comprar"
                className="inline-flex items-center gap-2 rounded-[8px] border border-white/18 px-5 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-[#090b10]"
              >
                Links de compra <MessageCircle size={18} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08 }}
            className="flex items-center"
          >
            <div className="w-full rounded-[8px] border border-white/12 bg-white p-3 text-[#090b10] shadow-[0_40px_140px_rgba(0,0,0,.4)]">
              <div className="rounded-[8px] border-2 border-[#090b10]">
                <div className="border-b-2 border-[#090b10] bg-[#19ff8f] p-4">
                  <p className="text-sm font-black uppercase tracking-[.18em]">Catálogo de soluções</p>
                  <p className="mt-2 text-3xl font-black uppercase leading-none">Escolha. Compre. Receba.</p>
                </div>

                <div className="grid gap-3 p-4">
                  {services.slice(0, 5).map((service) => (
                    <a
                      key={service.id}
                      href={service.buyUrl}
                      className="flex items-center justify-between rounded-[8px] border-2 border-[#090b10] bg-[#f5f5f0] p-3 font-black transition hover:bg-[#19ff8f]"
                    >
                      <span>{service.name}</span>
                      <span>{service.price}</span>
                    </a>
                  ))}
                </div>

                <div className="border-t-2 border-[#090b10] bg-[#111827] p-4 text-white">
                  <p className="text-sm font-bold uppercase tracking-[.18em] text-[#19ff8f]">Atendimento direto</p>
                  <p className="mt-2 text-2xl font-black">Compre pelo link ou peça orçamento.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ServiceStrip() {
  return (
    <section className="border-b border-white/10 bg-[#111827] px-5 py-4 md:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-3 text-sm font-black uppercase tracking-wide">
        {services.map((service) => (
          <a
            key={service.id}
            href={`#${service.id}`}
            className="rounded-[8px] border border-white/12 bg-white/5 px-4 py-2 text-white/86 transition hover:bg-[#19ff8f] hover:text-[#090b10]"
          >
            {service.name}
          </a>
        ))}
      </div>
    </section>
  )
}

function Services() {
  return (
    <section id="servicos" className="bg-[#f5f5f0] px-5 py-20 text-[#090b10] md:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-6 md:grid-cols-[.88fr_1.12fr] md:items-end">
          <div>
            <p className="mb-3 text-sm font-black uppercase tracking-[.22em] text-[#0f766e]">
              Serviços disponíveis
            </p>
            <h2 className="text-4xl font-black uppercase leading-[.96] md:text-6xl">
              Escolha o que você precisa e compre pelo link.
            </h2>
          </div>
          <p className="max-w-xl text-lg font-medium leading-8 text-slate-700">
            Cada serviço tem uma entrega objetiva. Se o seu caso precisar de ajuste no escopo, você
            pode solicitar orçamento antes da compra.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              id={service.id}
              key={service.id}
              className={clsx(
                'flex min-h-[455px] scroll-mt-8 flex-col justify-between rounded-[8px] border-2 p-5 shadow-[8px_8px_0_rgba(9,11,16,.18)]',
                service.featured
                  ? 'border-[#090b10] bg-[#19ff8f]'
                  : 'border-[#090b10] bg-white',
              )}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
            >
              <div>
                <div className="mb-8 flex items-start justify-between gap-4">
                  <span className="rounded-[6px] bg-[#090b10] px-3 py-1.5 text-xs font-black uppercase tracking-wide text-white">
                    {service.label}
                  </span>
                  <span className="grid size-12 shrink-0 place-items-center rounded-[8px] border-2 border-[#090b10] bg-[#f5f5f0]">
                    <service.icon size={25} />
                  </span>
                </div>

                <h3 className="text-3xl font-black uppercase leading-none">{service.name}</h3>
                <p className="mt-4 text-lg font-black leading-7">{service.promise}</p>
                <p className="mt-3 text-base font-medium leading-7 text-slate-700">{service.description}</p>
              </div>

              <div>
                <p className="mt-8 border-y-2 border-[#090b10] py-4 text-3xl font-black">{service.price}</p>
                <div className="mt-5 space-y-2">
                  {service.bullets.map((item) => (
                    <p key={item} className="flex items-start gap-2 text-sm font-bold text-slate-700">
                      <Check className="mt-0.5 shrink-0 text-[#0f766e]" size={17} />
                      <span>{item}</span>
                    </p>
                  ))}
                </div>
                <a
                  href={service.buyUrl}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-[8px] bg-[#090b10] px-4 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-[#0f766e]"
                >
                  Comprar este serviço <ArrowUpRight size={17} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Trust() {
  return (
    <section className="bg-white px-5 py-18 text-[#090b10] md:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-[.9fr_1.1fr] md:items-center">
        <div>
          <p className="mb-3 text-sm font-black uppercase tracking-[.22em] text-[#0f766e]">
            Por que comprar aqui
          </p>
          <h2 className="text-4xl font-black uppercase leading-[.96] md:text-5xl">
            Serviço digital sem enrolação.
          </h2>
        </div>

        <div className="grid gap-3">
          {trustPoints.map((point) => (
            <div key={point} className="flex items-start gap-3 rounded-[8px] border-2 border-[#090b10] bg-[#f5f5f0] p-4">
              <ShieldCheck className="mt-0.5 shrink-0 text-[#0f766e]" size={22} />
              <p className="font-bold leading-7 text-slate-800">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function BuyHub() {
  return (
    <section id="comprar" className="bg-[#19ff8f] px-5 py-20 text-[#090b10] md:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[.92fr_1.08fr] md:items-center">
        <div>
          <p className="mb-3 text-sm font-black uppercase tracking-[.22em] text-[#0b3b25]">
            Comprar agora
          </p>
          <h2 className="text-4xl font-black uppercase leading-[.96] md:text-6xl">
            Escolha o serviço e finalize pelo link de compra.
          </h2>
          <p className="mt-6 max-w-xl text-lg font-semibold leading-8 text-[#12311f]">
            Clique no serviço desejado para contratar ou solicitar as informações antes de fechar.
          </p>
        </div>

        <div className="mx-auto w-full max-w-md rounded-[8px] border-4 border-[#090b10] bg-[#090b10] p-3 shadow-[12px_12px_0_rgba(9,11,16,.28)]">
          <div className="rounded-[8px] bg-white p-5">
            <div className="border-b-2 border-[#090b10] pb-5 text-center">
              <div className="mx-auto grid size-16 place-items-center rounded-[8px] bg-[#090b10] text-xl font-black text-[#19ff8f]">
                FD
              </div>
              <h3 className="mt-4 text-2xl font-black uppercase">Floriano Digital Studio</h3>
              <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">
                Compre serviços digitais para melhorar sua presença, venda e operação.
              </p>
            </div>

            <div className="mt-5 grid gap-3">
              {services.slice(0, 5).map((service) => (
                <a
                  key={service.id}
                  href={service.buyUrl}
                  className="flex items-center justify-between rounded-[8px] border-2 border-[#090b10] bg-[#f5f5f0] px-4 py-4 text-sm font-black uppercase transition hover:bg-[#19ff8f]"
                >
                  <span className="inline-flex items-center gap-2">
                    <service.icon size={17} /> {service.name}
                  </span>
                  <ArrowUpRight size={16} />
                </a>
              ))}

              {bioLinks.map(([label, href, Icon]) => (
                <a
                  key={label as string}
                  href={href as string}
                  className="flex items-center justify-between rounded-[8px] border-2 border-[#090b10] bg-white px-4 py-4 text-sm font-black uppercase transition hover:bg-[#19ff8f]"
                >
                  <span className="inline-flex items-center gap-2">
                    <Icon size={17} /> {label as string}
                  </span>
                  <ArrowUpRight size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FinalCTA() {
  return (
    <section id="contato" className="bg-[#090b10] px-5 py-16 text-white md:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 rounded-[8px] border-2 border-white bg-[#111827] p-6 shadow-[10px_10px_0_rgba(25,255,143,.25)] md:flex-row md:items-center md:justify-between md:p-8">
        <div>
          <Star className="mb-5 text-[#19ff8f]" size={36} />
          <h2 className="max-w-3xl text-4xl font-black uppercase leading-[.96] md:text-6xl">
            Seu negócio precisa parecer tão bom quanto o serviço que entrega.
          </h2>
        </div>
        <a
          href="#servicos"
          className="inline-flex items-center justify-center gap-2 rounded-[8px] bg-[#19ff8f] px-6 py-4 text-sm font-black uppercase tracking-wide text-[#07100b] transition hover:bg-white"
        >
          Ver serviços disponíveis <ArrowUpRight size={18} />
        </a>
      </div>
    </section>
  )
}

export default App
