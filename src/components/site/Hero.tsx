// @ts-nocheck
import { motion } from 'framer-motion'
import { ArrowRight, MapPin } from 'lucide-react'
import { WHATSAPP_URL } from '@/lib/site/constants'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Seção principal"
    >
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Gradient blob */}
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-[#FF5C00] opacity-[0.06] blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-[#FFB347] opacity-[0.04] blur-[100px]" />

        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,92,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,92,0,0.5) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />

        {/* Diagonal accent line */}
        <div className="absolute top-0 right-[20%] w-px h-full bg-gradient-to-b from-transparent via-[rgba(255,92,0,0.2)] to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            {/* Badge */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.1}
              className="inline-flex items-center gap-2 bg-[rgba(255,92,0,0.1)] border border-[rgba(255,92,0,0.2)] text-[#FF5C00] text-xs font-semibold px-4 py-2 rounded-full mb-6"
            >
              <MapPin size={12} aria-hidden="true" />
              Bom Jesus do Itabapoana e região
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.2}
              className="font-display text-6xl sm:text-7xl lg:text-8xl leading-none text-white mb-6"
            >
              SUA EMPRESA{' '}
              <span className="font-italic-serif text-[#FF5C00] text-glow font-normal text-5xl sm:text-6xl lg:text-7xl">
                presente.
              </span>
              <br />
              TODO DIA.{' '}
              <span className="text-[#A0A0B0]">NAS</span>
              <br />
              REDES CERTAS.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.35}
              className="text-[#A0A0B0] text-lg leading-relaxed mb-8 max-w-md"
            >
              Gestão completa de Social Media para empresas da região. Posts, stories e estratégia —
              a gente cuida de tudo enquanto você cuida do seu negócio.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.5}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 bg-[#FF5C00] hover:bg-[#FF7A2E] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,92,0,0.4)] text-base"
                aria-label="Começar agora pelo WhatsApp"
              >
                <WhatsAppIcon />
                Quero começar agora
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>
              <a
                href="#servicos"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#servicos')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="inline-flex items-center justify-center gap-2 border border-[rgba(255,255,255,0.1)] text-white hover:border-[rgba(255,92,0,0.4)] hover:text-[#FF5C00] font-semibold px-8 py-4 rounded-full transition-all duration-300 text-base"
              >
                Ver serviços
              </a>
            </motion.div>

            {/* Social proof */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.6}
              className="flex items-center gap-3"
            >
              <div className="flex -space-x-2" aria-hidden="true">
                {['F', 'M', 'P'].map((l, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FF5C00] to-[#FFB347] border-2 border-[#0A0A0F] flex items-center justify-center text-white text-xs font-bold"
                  >
                    {l}
                  </div>
                ))}
              </div>
              <p className="text-[#A0A0B0] text-sm">
                <span className="text-white font-semibold">+50 empresas</span> locais já confiam na
                Condé Tech
              </p>
            </motion.div>
          </div>

          {/* Right — Phone mockup */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center lg:justify-end"
            aria-hidden="true"
          >
            <PhoneMockup />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-[#A0A0B0] text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-8 bg-gradient-to-b from-[#FF5C00] to-transparent"
        />
      </motion.div>
    </section>
  )
}

function PhoneMockup() {
  const posts = [
    { color: '#FF5C00', label: 'PROMOÇÃO', text: 'Desconto especial para novos clientes!' },
    { color: '#FFB347', label: 'DICA', text: 'Como cuidar melhor do seu espaço' },
    { color: '#FF5C00', label: 'RESULTADO', text: 'Mais de 100 clientes satisfeitos' },
  ]

  return (
    <div className="relative w-72 sm:w-80">
      {/* Glow behind phone */}
      <div className="absolute inset-0 bg-[#FF5C00] opacity-20 blur-[60px] rounded-full" />

      {/* Phone frame */}
      <div className="relative bg-[#13131A] rounded-[3rem] border-2 border-[rgba(255,92,0,0.2)] shadow-2xl overflow-hidden p-3">
        {/* Notch */}
        <div className="bg-[#0A0A0F] rounded-[2.5rem] overflow-hidden">
          <div className="flex justify-center pt-3 pb-2">
            <div className="w-24 h-6 bg-[#0A0A0F] rounded-full border border-[rgba(255,255,255,0.05)]" />
          </div>

          {/* Status bar area */}
          <div className="px-4 pb-2 flex justify-between items-center">
            <span className="text-white text-xs font-semibold">9:41</span>
            <div className="flex items-center gap-1">
              <div className="w-3 h-2 border border-white rounded-sm opacity-70 relative">
                <div className="absolute inset-0.5 bg-white rounded-sm" />
              </div>
            </div>
          </div>

          {/* Instagram-like header */}
          <div className="px-4 py-2 flex items-center justify-between border-b border-[rgba(255,255,255,0.05)]">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#FF5C00] to-[#FFB347] flex items-center justify-center text-white text-xs font-bold">
                CT
              </div>
              <div>
                <p className="text-white text-xs font-semibold">condétech</p>
                <p className="text-[#A0A0B0] text-[10px]">Bom Jesus do Itabapoana</p>
              </div>
            </div>
            <div className="w-5 h-5 flex flex-col justify-center gap-0.5" aria-hidden="true">
              <div className="w-full h-0.5 bg-white rounded opacity-70" />
              <div className="w-3/4 h-0.5 bg-white rounded opacity-70" />
              <div className="w-full h-0.5 bg-white rounded opacity-70" />
            </div>
          </div>

          {/* Posts feed */}
          <div className="space-y-0">
            {posts.map((post, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.15 }}
                className="relative"
              >
                <div
                  className="h-40 flex flex-col items-center justify-center px-4 text-center"
                  style={{
                    background: `linear-gradient(135deg, ${post.color}22, ${post.color}08)`,
                    borderBottom: '1px solid rgba(255,255,255,0.04)',
                  }}
                >
                  <span
                    className="font-display text-3xl mb-1"
                    style={{ color: post.color }}
                  >
                    {post.label}
                  </span>
                  <p className="text-white text-xs opacity-80">{post.text}</p>
                  <div className="absolute bottom-2 right-3 flex items-center gap-2">
                    <span className="text-[#A0A0B0] text-[10px]">❤ {12 + i * 7}</span>
                    <span className="text-[#A0A0B0] text-[10px]">💬 {3 + i}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="px-4 py-3 flex justify-around border-t border-[rgba(255,255,255,0.05)]">
            {['🏠', '🔍', '➕', '❤️', '👤'].map((icon, i) => (
              <span key={i} className="text-sm opacity-70">
                {icon}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Floating notification */}
      <motion.div
        initial={{ opacity: 0, x: 40, scale: 0.8 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ delay: 1.2, type: 'spring' }}
        className="absolute -right-4 top-16 bg-[#13131A] border border-[rgba(255,92,0,0.3)] rounded-2xl px-4 py-3 shadow-xl w-44"
        aria-hidden="true"
      >
        <p className="text-[#FF5C00] text-xs font-semibold mb-0.5">+380 curtidas hoje</p>
        <p className="text-[#A0A0B0] text-[10px]">Seu post está bombando 🔥</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -40, scale: 0.8 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ delay: 1.4, type: 'spring' }}
        className="absolute -left-4 bottom-24 bg-[#13131A] border border-[rgba(255,92,0,0.3)] rounded-2xl px-4 py-3 shadow-xl w-40"
        aria-hidden="true"
      >
        <p className="text-[#FFB347] text-xs font-semibold mb-0.5">Story publicado ✓</p>
        <p className="text-[#A0A0B0] text-[10px]">12 visualizações</p>
      </motion.div>
    </div>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}
