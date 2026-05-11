import {
  ArrowUpRight,
  BadgeCheck,
  Bot,
  Brush,
  Check,
  ChevronRight,
  Code2,
  DatabaseZap,
  Headphones,
  AtSign,
  LayoutTemplate,
  Link as LinkIcon,
  Megaphone,
  MessageCircle,
  Rocket,
  ShieldCheck,
  Sparkles,
  Store,
  Wand2,
} from 'lucide-react'
import { motion } from 'framer-motion'
import { clsx } from 'clsx'

const contactUrl = '#bio'
const portfolioUrl = 'https://maarcos-floriano.github.io/my-portfolio/'
const githubUrl = 'https://github.com/maarcos-floriano'
const linkedinUrl = 'https://www.linkedin.com/in/marcos-oliveira-floriano'

const services = [
  {
    id: 'prospeccao-b2b',
    name: 'Prospecção B2B sob demanda',
    icon: DatabaseZap,
    price: 'A partir de R$ 297',
    tag: 'Entrada',
    description:
      'Pesquisa estruturada de empresas, segmentos e contatos comerciais usando criterios definidos com o cliente.',
    deliverables: ['Segmentacao por nicho', 'Planilha organizada', 'Criterios e fontes documentadas'],
    kirvanoType: 'Serviço',
  },
  {
    id: 'imagem-profissional',
    name: 'Upgrade de imagem profissional',
    icon: Sparkles,
    price: 'A partir de R$ 197',
    tag: 'Rapido',
    description:
      'Melhoria de bio, posicionamento, apresentacao visual, destaques e materiais para passar mais confianca.',
    deliverables: ['Bio comercial', 'Copy de perfil', 'Direcao visual simples'],
    kirvanoType: 'Serviço',
  },
  {
    id: 'idv-starter',
    name: 'Identidade Visual Starter',
    icon: Brush,
    price: 'A partir de R$ 697',
    tag: 'Marca',
    description:
      'Kit de identidade para negocios que precisam parecer profissionais sem esperar meses para comecar.',
    deliverables: ['Logo base', 'Paleta e tipografia', 'Aplicacoes para redes sociais'],
    kirvanoType: 'Serviço',
  },
  {
    id: 'site-express',
    name: 'Site Express',
    icon: LayoutTemplate,
    price: 'A partir de R$ 997',
    tag: 'Mais vendido',
    description:
      'Site de apresentacao profissional para negocios locais, prestadores de servico e produtos digitais.',
    deliverables: ['Landing page responsiva', 'Copy de venda', 'Publicacao e SEO base'],
    kirvanoType: 'Serviço',
    featured: true,
  },
  {
    id: 'stockzap-ai',
    name: 'StockZapAI',
    icon: Bot,
    price: 'Setup + mensalidade',
    tag: 'SaaS',
    description:
      'Automacao comercial e operacional com IA, WhatsApp, fluxos e dashboards para pequenos negocios.',
    deliverables: ['Diagnostico', 'Setup do fluxo', 'Treinamento e acompanhamento'],
    kirvanoType: 'SaaS / Serviço online',
  },
  {
    id: 'suporte-tecnico',
    name: 'Suporte tecnico remoto',
    icon: Headphones,
    price: 'A partir de R$ 97',
    tag: 'Suporte',
    description:
      'Atendimento remoto para ajustes, instalacoes, configuracoes, sites, e-mails, dominios e ferramentas.',
    deliverables: ['Atendimento remoto', 'Checklist do problema', 'Orientacao final'],
    kirvanoType: 'Serviço',
  },
  {
    id: 'automacao-ia',
    name: 'Automacao com IA',
    icon: Wand2,
    price: 'A partir de R$ 697',
    tag: 'Automacao',
    description:
      'Fluxos com IA para atendimento, organizacao, conteudo, captura de leads e rotinas internas.',
    deliverables: ['Mapeamento do fluxo', 'Automacao configurada', 'Documentacao de uso'],
    kirvanoType: 'Serviço',
  },
]

const bioLinks = [
  ['Conhecer todos os servicos', '#servicos', Store],
  ['Pedir orcamento', contactUrl, MessageCircle],
  ['Ver meu portfólio dev', portfolioUrl, Code2],
  ['LinkedIn', linkedinUrl, BadgeCheck],
  ['GitHub', githubUrl, LinkIcon],
]

function App() {
  return (
    <main className="min-h-screen bg-[#f7f3ea] text-[#111827]">
      <Hero />
      <Services />
      <KirvanoPlan />
      <BioHub />
      <FinalCTA />
    </main>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0f172a] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(20,184,166,.38),transparent_32%),radial-gradient(circle_at_85%_25%,rgba(250,204,21,.22),transparent_30%)]" />
      <div className="relative mx-auto grid min-h-[92svh] max-w-7xl grid-cols-1 gap-12 px-5 py-6 md:grid-cols-[1.02fr_.98fr] md:px-8 lg:px-10">
        <header className="fixed left-1/2 top-4 z-30 flex w-[calc(100%-32px)] max-w-6xl -translate-x-1/2 items-center justify-between rounded-full border border-white/10 bg-white/8 px-4 py-3 backdrop-blur-xl">
          <a href="#top" className="flex items-center gap-2 text-sm font-semibold">
            <span className="grid size-9 place-items-center rounded-full bg-white text-[#0f172a]">
              FD
            </span>
            Floriano Digital Studio
          </a>
          <nav className="hidden gap-6 text-sm text-white/66 md:flex">
            <a href="#servicos">Servicos</a>
            <a href="#kirvano">Kirvano</a>
            <a href="#bio">Bio</a>
          </nav>
          <a
            href={contactUrl}
            className="grid size-10 place-items-center rounded-full bg-[#d7ff63] text-[#0f172a]"
            aria-label="Chamar no WhatsApp"
            title="WhatsApp"
          >
            <MessageCircle size={19} />
          </a>
        </header>

        <motion.div
          id="top"
          className="flex flex-col justify-end pb-6 pt-32 md:pb-14"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
        >
          <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/12 bg-white/8 px-3 py-2 text-sm text-white/72">
            <span className="size-2 rounded-full bg-[#d7ff63]" />
            Servicos digitais para vender, automatizar e parecer profissional
          </div>
          <h1 className="max-w-4xl text-[clamp(3.2rem,8vw,8.4rem)] font-semibold leading-[.88] tracking-normal">
            Do visual ao checkout. Tudo pronto para vender.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/68 md:text-xl">
            Sites, identidade visual, prospeccao B2B, StockZapAI, automacoes com IA e suporte tecnico
            para pequenos negocios que precisam sair do improviso e operar com mais clareza.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#servicos"
              className="inline-flex items-center gap-2 rounded-full bg-[#d7ff63] px-5 py-3 text-sm font-semibold text-[#0f172a] transition hover:-translate-y-0.5"
            >
              Ver servicos <ChevronRight size={17} />
            </a>
            <a
              href="#bio"
              className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
            >
              Link da bio <AtSign size={17} />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="flex items-end pb-6 md:pb-14"
          initial={{ opacity: 0, y: 28, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.85, delay: 0.1 }}
        >
          <div className="w-full rounded-[8px] border border-white/12 bg-white/10 p-3 shadow-[0_40px_120px_rgba(0,0,0,.35)] backdrop-blur">
            <div className="rounded-[8px] bg-[#f8fafc] p-5 text-[#0f172a]">
              <div className="mb-7 flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">Painel comercial</p>
                  <p className="text-xl font-semibold">Esteira de ofertas</p>
                </div>
                <Rocket className="text-teal-600" size={34} />
              </div>
              <div className="grid grid-cols-2 gap-3">
                {services.slice(0, 4).map((service) => (
                  <div
                    key={service.id}
                    className={clsx(
                      'rounded-[8px] border border-slate-200 p-4',
                      service.featured ? 'bg-[#d7ff63]' : 'bg-white',
                    )}
                  >
                    <service.icon className="mb-7" size={24} />
                    <p className="font-semibold">{service.name}</p>
                    <p className="mt-1 text-sm text-slate-500">{service.price}</p>
                  </div>
                ))}
              </div>
              <div className="mt-3 rounded-[8px] bg-[#0f172a] p-4 text-white">
                <div className="mb-5 flex items-center justify-between">
                  <span className="font-semibold">Funil</span>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs">Instagram → Site → Kirvano</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center text-sm">
                  <span className="rounded bg-white/10 py-3">Bio</span>
                  <span className="rounded bg-white/10 py-3">Oferta</span>
                  <span className="rounded bg-[#d7ff63] py-3 font-semibold text-[#0f172a]">Checkout</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section id="servicos" className="px-5 py-20 md:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-6 md:grid-cols-[.9fr_1.1fr] md:items-end">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[.18em] text-teal-700">
              Catalogo de servicos
            </p>
            <h2 className="text-4xl font-semibold leading-tight md:text-6xl">
              Ofertas organizadas para vender no direct, no site e na Kirvano.
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-8 text-slate-600">
            Cada servico tem uma promessa clara, entrega objetiva e pode virar produto de checkout
            unico ou recorrente.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={service.id}
              className={clsx(
                'flex min-h-[390px] flex-col justify-between rounded-[8px] border p-5 shadow-[0_20px_80px_rgba(15,23,42,.07)]',
                service.featured
                  ? 'border-[#0f172a] bg-[#0f172a] text-white'
                  : 'border-black/10 bg-white text-[#111827]',
              )}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: index * 0.04 }}
            >
              <div>
                <div className="mb-8 flex items-start justify-between">
                  <span
                    className={clsx(
                      'rounded-full px-3 py-1 text-xs font-semibold',
                      service.featured ? 'bg-[#d7ff63] text-[#0f172a]' : 'bg-slate-100 text-slate-600',
                    )}
                  >
                    {service.tag}
                  </span>
                  <service.icon className={service.featured ? 'text-[#d7ff63]' : 'text-teal-700'} size={32} />
                </div>
                <h3 className="text-2xl font-semibold">{service.name}</h3>
                <p className={clsx('mt-3 leading-7', service.featured ? 'text-white/64' : 'text-slate-600')}>
                  {service.description}
                </p>
              </div>
              <div>
                <p className="mt-7 text-2xl font-semibold">{service.price}</p>
                <div className="mt-5 space-y-2">
                  {service.deliverables.map((item) => (
                    <p key={item} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 shrink-0 text-teal-500" size={16} />
                      <span className={service.featured ? 'text-white/72' : 'text-slate-600'}>{item}</span>
                    </p>
                  ))}
                </div>
                <a
                href={contactUrl}
                  className={clsx(
                    'mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-semibold',
                    service.featured ? 'bg-[#d7ff63] text-[#0f172a]' : 'bg-[#0f172a] text-white',
                  )}
                >
                  Quero esse servico <ArrowUpRight size={17} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

function KirvanoPlan() {
  return (
    <section id="kirvano" className="bg-white px-5 py-20 md:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[.18em] text-teal-700">
            Plano Kirvano
          </p>
          <h2 className="text-4xl font-semibold leading-tight md:text-6xl">
            Produtos prontos para virar checkout.
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            A plataforma aceita cadastro de servicos digitais, produtos digitais, cursos e SaaS. Para
            prospeccao, vamos manter uma oferta consultiva e sob demanda, com foco em pesquisa B2B
            documentada e respeito a LGPD.
          </p>
        </div>
        <div className="rounded-[8px] border border-black/10 bg-[#f7f3ea] p-5">
          <div className="grid gap-3">
            {services.map((service) => (
              <div key={service.id} className="grid gap-4 rounded-[8px] bg-white p-4 md:grid-cols-[1fr_.8fr_.6fr] md:items-center">
                <div>
                  <p className="font-semibold">{service.name}</p>
                  <p className="mt-1 text-sm text-slate-500">{service.id}</p>
                </div>
                <p className="text-sm text-slate-600">{service.kirvanoType}</p>
                <p className="text-sm font-semibold">{service.price}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 rounded-[8px] bg-[#0f172a] p-4 text-white">
            <p className="flex items-start gap-2 text-sm leading-6 text-white/72">
              <ShieldCheck className="mt-0.5 shrink-0 text-[#d7ff63]" size={18} />
              Cadastro final na Kirvano precisa da sua conta logada, dados de vendedor, politica de
              reembolso, suporte e meios de pagamento. O conteudo comercial ja fica preparado.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function BioHub() {
  return (
    <section id="bio" className="bg-[#e8f1ec] px-5 py-20 md:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[.9fr_1.1fr] md:items-center">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[.18em] text-teal-700">
            Link da bio
          </p>
          <h2 className="text-4xl font-semibold leading-tight md:text-6xl">
            Uma pagina simples para colocar no Instagram agora.
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Enquanto os checkouts entram no ar, a bio pode mandar as pessoas para uma central com
            servicos, WhatsApp, portfolio, LinkedIn e GitHub.
          </p>
        </div>
        <div className="mx-auto w-full max-w-md rounded-[28px] border-[10px] border-[#0f172a] bg-[#0f172a] p-3 shadow-[0_35px_120px_rgba(15,23,42,.28)]">
          <div className="rounded-[18px] bg-[#f8fafc] p-5">
            <div className="text-center">
              <div className="mx-auto grid size-16 place-items-center rounded-full bg-[#0f172a] text-lg font-semibold text-white">
                FD
              </div>
              <h3 className="mt-4 text-xl font-semibold">Floriano Digital Studio</h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Sites, IA, automacao, suporte e presenca digital para negocios.
              </p>
            </div>
            <div className="mt-6 grid gap-3">
              {bioLinks.map(([label, href, Icon]) => (
                <a
                  key={label as string}
                  href={href as string}
                  className="flex items-center justify-between rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-semibold"
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
    <section className="bg-[#0f172a] px-5 py-16 text-white md:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <Megaphone className="mb-5 text-[#d7ff63]" size={32} />
          <h2 className="max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
            Proximo passo: ligar checkout, WhatsApp e Instagram.
          </h2>
        </div>
        <a
          href={contactUrl}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d7ff63] px-6 py-4 font-semibold text-[#0f172a]"
        >
          Chamar no WhatsApp <ArrowUpRight size={18} />
        </a>
      </div>
    </section>
  )
}

export default App
