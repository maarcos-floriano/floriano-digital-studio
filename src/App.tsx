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
  Megaphone,
  MessageCircle,
  MousePointerClick,
  ShieldCheck,
  Store,
  Wand2,
  Zap,
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
    name: 'Prospecção B2B',
    icon: DatabaseZap,
    price: 'R$ 297+',
    label: 'Pesquisa comercial',
    description:
      'Pesquisa sob demanda de empresas, nichos e oportunidades para iniciar campanhas de venda com mais criterio.',
    bullets: ['Segmentacao por nicho', 'Planilha organizada', 'Fontes e criterios documentados'],
  },
  {
    id: 'imagem-profissional',
    name: 'Imagem profissional',
    icon: BadgeCheck,
    price: 'R$ 197+',
    label: 'Perfil e posicionamento',
    description:
      'Ajuste de bio, apresentacao, destaques, tom de voz e estrutura visual para transmitir mais confianca.',
    bullets: ['Bio comercial', 'Copy de apresentacao', 'Direcao visual simples'],
  },
  {
    id: 'idv-starter',
    name: 'ID Visual Starter',
    icon: Brush,
    price: 'R$ 697+',
    label: 'Marca inicial',
    description:
      'Kit visual para pequenos negocios que precisam sair do improviso e parecer profissionais rapidamente.',
    bullets: ['Logo base', 'Paleta e tipografia', 'Aplicacoes para redes sociais'],
  },
  {
    id: 'site-express',
    name: 'Site Express',
    icon: LayoutTemplate,
    price: 'R$ 997+',
    label: 'Mais vendido',
    description:
      'Landing page objetiva para apresentar oferta, gerar contato e colocar sua empresa no ar com acabamento.',
    bullets: ['Pagina responsiva', 'Copy de venda', 'Publicacao e SEO base'],
    featured: true,
  },
  {
    id: 'stockzap-ai',
    name: 'StockZapAI',
    icon: Bot,
    price: 'Setup + mensal',
    label: 'Automacao comercial',
    description:
      'Fluxos com IA, WhatsApp, dashboard e rotinas comerciais para negocios que precisam atender melhor.',
    bullets: ['Diagnostico', 'Setup do fluxo', 'Treinamento inicial'],
  },
  {
    id: 'suporte-tecnico',
    name: 'Suporte remoto',
    icon: Headphones,
    price: 'R$ 97+',
    label: 'Resolucao rapida',
    description:
      'Atendimento remoto para sites, dominios, ferramentas, e-mails, configuracoes e problemas digitais.',
    bullets: ['Atendimento remoto', 'Checklist do problema', 'Orientacao final'],
  },
  {
    id: 'automacao-ia',
    name: 'Automacao com IA',
    icon: Wand2,
    price: 'R$ 697+',
    label: 'Fluxos inteligentes',
    description:
      'Automacoes para atendimento, conteudo, captura de leads e rotinas internas usando IA e integracoes.',
    bullets: ['Mapeamento do fluxo', 'Automacao configurada', 'Documentacao de uso'],
  },
]

const bioLinks = [
  ['Ver todos os servicos', '#servicos', Store],
  ['Solicitar orcamento', contactUrl, MessageCircle],
  ['Portfolio de desenvolvimento', portfolioUrl, Code2],
  ['LinkedIn do Marcos', linkedinUrl, BadgeCheck],
  ['GitHub do Marcos', githubUrl, LinkIcon],
]

function App() {
  return (
    <main className="min-h-screen bg-[#090b10] text-white">
      <Hero />
      <OfferStrip />
      <Services />
      <KirvanoPlan />
      <BioHub />
      <FinalCTA />
    </main>
  )
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-white/10 bg-[#090b10]">
      <div className="absolute left-0 top-0 h-full w-2 bg-[#19ff8f]" />
      <div className="mx-auto min-h-[92svh] max-w-7xl px-5 py-5 md:px-8 lg:px-10">
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
            <a href="#servicos" className="hover:text-white">Servicos</a>
            <a href="#kirvano" className="hover:text-white">Kirvano</a>
            <a href="#bio" className="hover:text-white">Link da bio</a>
          </nav>

          <a
            href="#bio"
            className="inline-flex items-center gap-2 rounded-[8px] bg-white px-4 py-3 text-sm font-black text-[#090b10] transition hover:bg-[#19ff8f]"
          >
            Falar agora <MessageCircle size={17} />
          </a>
        </header>

        <div className="grid gap-10 py-16 md:grid-cols-[1.06fr_.94fr] md:py-24 lg:py-28">
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-[8px] border border-[#19ff8f]/40 bg-[#19ff8f]/10 px-3 py-2 text-sm font-bold text-[#19ff8f]">
              <Zap size={16} />
              Sites, IA, marca e vendas no mesmo plano
            </div>

            <h1 className="max-w-5xl text-[clamp(3rem,8vw,7.7rem)] font-black uppercase leading-[.88] tracking-normal">
              Sua operacao digital pronta para vender.
            </h1>

            <p className="mt-7 max-w-2xl text-lg font-medium leading-8 text-white/74 md:text-xl">
              Criamos presenca digital, paginas de venda, automacoes, prospeccao B2B, identidade
              visual e suporte tecnico para pequenos negocios que querem parar de improvisar.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#servicos"
                className="inline-flex items-center gap-2 rounded-[8px] bg-[#19ff8f] px-5 py-4 text-sm font-black uppercase tracking-wide text-[#07100b] transition hover:-translate-y-0.5"
              >
                Ver catalogo de servicos <ArrowUpRight size={18} />
              </a>
              <a
                href="#kirvano"
                className="inline-flex items-center gap-2 rounded-[8px] border border-white/18 px-5 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-[#090b10]"
              >
                Ver plano de checkout <MousePointerClick size={18} />
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
                <div className="flex items-center justify-between border-b-2 border-[#090b10] bg-[#19ff8f] p-4">
                  <p className="font-black uppercase tracking-wide">Sistema comercial</p>
                  <span className="rounded-[6px] bg-[#090b10] px-3 py-1 text-xs font-black text-white">
                    Online
                  </span>
                </div>

                <div className="grid gap-3 p-4">
                  {['Instagram', 'Site de servicos', 'Checkout Kirvano', 'Entrega'].map((item, index) => (
                    <div key={item} className="grid grid-cols-[42px_1fr] items-center gap-3">
                      <span className="grid size-10 place-items-center rounded-[8px] bg-[#090b10] text-sm font-black text-white">
                        {index + 1}
                      </span>
                      <div className="rounded-[8px] border-2 border-[#090b10] bg-[#f5f5f0] p-3 font-black">
                        {item}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 border-t-2 border-[#090b10]">
                  <div className="border-r-2 border-[#090b10] p-4">
                    <p className="text-4xl font-black">7</p>
                    <p className="mt-1 text-sm font-bold text-slate-600">ofertas iniciais</p>
                  </div>
                  <div className="bg-[#111827] p-4 text-white">
                    <p className="text-4xl font-black">IA</p>
                    <p className="mt-1 text-sm font-bold text-white/70">como acelerador</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function OfferStrip() {
  return (
    <section className="border-b border-white/10 bg-[#111827] px-5 py-4 md:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-3 text-sm font-black uppercase tracking-wide">
        {['Site Express', 'StockZapAI', 'ID Visual', 'Suporte remoto', 'Automacao IA', 'Prospecção B2B'].map((item) => (
          <span key={item} className="rounded-[8px] border border-white/12 bg-white/5 px-4 py-2 text-white/82">
            {item}
          </span>
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
              Catalogo comercial
            </p>
            <h2 className="text-4xl font-black uppercase leading-[.96] md:text-6xl">
              Escolha a oferta, feche no checkout, entregue com processo.
            </h2>
          </div>
          <p className="max-w-xl text-lg font-medium leading-8 text-slate-700">
            A nova IDV do projeto e mais direta: alto contraste, linguagem de venda, pacotes claros e
            chamadas explicitas para orcamento ou checkout.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={service.id}
              className={clsx(
                'flex min-h-[430px] flex-col justify-between rounded-[8px] border-2 p-5 shadow-[8px_8px_0_rgba(9,11,16,.18)]',
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
                <p className="mt-4 text-base font-medium leading-7 text-slate-700">{service.description}</p>
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
                  href={contactUrl}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-[8px] bg-[#090b10] px-4 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-[#0f766e]"
                >
                  Solicitar orcamento <ArrowUpRight size={17} />
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
    <section id="kirvano" className="bg-[#090b10] px-5 py-20 text-white md:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <p className="mb-3 text-sm font-black uppercase tracking-[.22em] text-[#19ff8f]">
            Esteira Kirvano
          </p>
          <h2 className="text-4xl font-black uppercase leading-[.96] md:text-6xl">
            Produtos separados para vender sem bagunca.
          </h2>
          <p className="mt-6 text-lg font-medium leading-8 text-white/70">
            O site apresenta as ofertas. A Kirvano entra como checkout. O Instagram manda trafego para
            a bio. Depois cada servico pode ganhar link proprio de compra.
          </p>
        </div>

        <div className="rounded-[8px] border-2 border-white bg-white text-[#090b10]">
          <div className="grid grid-cols-[1.2fr_.7fr_.7fr] border-b-2 border-[#090b10] bg-[#19ff8f] p-4 text-sm font-black uppercase">
            <span>Produto</span>
            <span>Tipo</span>
            <span>Preco</span>
          </div>
          {services.map((service) => (
            <div key={service.id} className="grid gap-3 border-b-2 border-[#090b10] p-4 last:border-b-0 md:grid-cols-[1.2fr_.7fr_.7fr] md:items-center">
              <div>
                <p className="font-black uppercase">{service.name}</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-wide text-slate-500">{service.id}</p>
              </div>
              <p className="font-bold text-slate-700">{service.id === 'stockzap-ai' ? 'SaaS' : 'Servico'}</p>
              <p className="font-black">{service.price}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-7xl rounded-[8px] border border-[#19ff8f]/40 bg-[#19ff8f]/10 p-4">
        <p className="flex items-start gap-2 text-sm font-semibold leading-6 text-white/78">
          <ShieldCheck className="mt-0.5 shrink-0 text-[#19ff8f]" size={18} />
          Prospecção B2B deve ser vendida como pesquisa sob demanda, com criterios e fontes, evitando
          promessa de bases pessoais sem origem ou qualquer oferta que pareça violar LGPD.
        </p>
      </div>
    </section>
  )
}

function BioHub() {
  return (
    <section id="bio" className="bg-[#19ff8f] px-5 py-20 text-[#090b10] md:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[.92fr_1.08fr] md:items-center">
        <div>
          <p className="mb-3 text-sm font-black uppercase tracking-[.22em] text-[#0b3b25]">
            Link da bio
          </p>
          <h2 className="text-4xl font-black uppercase leading-[.96] md:text-6xl">
            Um hub simples para colocar no Instagram.
          </h2>
          <p className="mt-6 max-w-xl text-lg font-semibold leading-8 text-[#12311f]">
            Use esta secao como link principal enquanto os checkouts da Kirvano entram no ar. Depois,
            cada botao pode apontar para uma oferta especifica.
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
                Sites, IA, automacao, suporte e presenca digital para negocios.
              </p>
            </div>

            <div className="mt-5 grid gap-3">
              {bioLinks.map(([label, href, Icon]) => (
                <a
                  key={label as string}
                  href={href as string}
                  className="flex items-center justify-between rounded-[8px] border-2 border-[#090b10] bg-[#f5f5f0] px-4 py-4 text-sm font-black uppercase transition hover:bg-[#19ff8f]"
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
    <section className="bg-white px-5 py-16 text-[#090b10] md:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 rounded-[8px] border-2 border-[#090b10] bg-[#f5f5f0] p-6 shadow-[10px_10px_0_rgba(9,11,16,.18)] md:flex-row md:items-center md:justify-between md:p-8">
        <div>
          <Megaphone className="mb-5 text-[#0f766e]" size={36} />
          <h2 className="max-w-3xl text-4xl font-black uppercase leading-[.96] md:text-6xl">
            Proximo passo: conectar WhatsApp e checkouts reais.
          </h2>
        </div>
        <a
          href="#bio"
          className="inline-flex items-center justify-center gap-2 rounded-[8px] bg-[#090b10] px-6 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-[#0f766e]"
        >
          Ir para links de contato <ArrowUpRight size={18} />
        </a>
      </div>
    </section>
  )
}

export default App
