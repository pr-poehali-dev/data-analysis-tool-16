import { Heart, Sparkles, ShieldCheck, Star, Plus, Minus, Mail } from "lucide-react"
import Icon from "@/components/ui/icon"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface FAQ {
  question: string
  answer: string
}

const Index = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqs: FAQ[] = [
    {
      question: "Как понять, что мне нужен коучинг, а не психотерапия?",
      answer:
        "Коучинг подходит, если вы чувствуете, что «застряли» на месте, не видите направления или хотите перейти на новый уровень. Психотерапия — если есть глубокие травмы или клинические состояния. За 14 лет практики я точно помогу определить, что нужно именно вам — на первой бесплатной консультации.",
    },
    {
      question: "Сколько сессий нужно для результата?",
      answer:
        "Первые изменения ощутимы уже после 2–3 сессий. Для устойчивого результата — постановки целей и выхода из кризиса — обычно достаточно 8–12 встреч. Мы работаем в вашем темпе, и вы сами чувствуете, когда готовы двигаться дальше самостоятельно.",
    },
    {
      question: "Как проходит первая встреча?",
      answer:
        "Первая консультация бесплатна и занимает 30 минут. Мы разбираемся, где вы сейчас, чего хотите достичь и подходим ли мы друг другу. Без давления и обязательств — только честный разговор.",
    },
    {
      question: "Можно ли работать онлайн?",
      answer:
        "Да, все сессии проходят онлайн — Zoom или Google Meet. Это удобно, конфиденциально и не менее эффективно, чем очные встречи. Вы можете находиться в любой точке мира.",
    },
  ]

  return (
    <div className="min-h-screen bg-[#0D0B14] text-white">
      {/* Hero Section */}
      <div className="relative min-h-screen">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(https://cdn.poehali.dev/projects/b5a6f787-abfa-4359-9b1f-e6b33097a95a/files/ea4feb38-6bbc-419b-89a1-f8562ca746c8.jpg)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-[#0D0B14]" />
        </div>

        {/* Navigation */}
        <nav className="relative z-10 flex items-center justify-between p-6">
          {/* Logo */}
          <div className="flex items-center gap-2 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <Heart className="w-5 h-5 text-rose-300" />
            <span className="font-medium">Ирина Зебницкая</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {["Обо мне", "Как я работаю", "Результаты", "Вопросы", "Контакт"].map((item) => (
              <a
                key={item}
                href="#"
                className="px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full hover:bg-black/50 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <Button className="bg-white text-black hover:bg-white/90 rounded-full px-6">Записаться</Button>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-6 text-center">
          {/* Badge */}
          <div className="mb-6 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <span className="text-sm font-medium">14 лет практики · Психолог-коуч</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6 text-balance leading-tight">
            Всё есть, а внутри —<br />
            <span className="text-rose-300">пустота и усталость</span>.<br />
            Это знакомо?
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/85 max-w-3xl mb-12 leading-relaxed text-pretty">
            Семья, работа, дом — вы справляетесь со всем. Но где-то потеряли себя и уже не помните, чего хотите именно вы. Я помогаю это найти.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button size="lg" className="bg-white text-black hover:bg-white/90 rounded-full px-8 py-4 text-lg">
              Записаться на бесплатную консультацию
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-black/40 ring-1 ring-white/20 backdrop-blur border-0 text-white hover:bg-black/50 rounded-full px-8 py-4 text-lg"
            >
              Узнать больше обо мне
            </Button>
          </div>

          {/* Footer Note */}
          <div className="flex items-center gap-2 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <Icon name="Lock" size={16} />
            <span className="text-sm font-medium">Первая консультация — бесплатно и без обязательств</span>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {/* Опыт */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Star className="w-6 h-6 text-rose-300" />
              </div>
              <h3 className="text-xl font-semibold mb-4">14 лет практики</h3>
              <p className="text-white/80 leading-relaxed">Сотни женщин прошли через кризис и нашли себя заново.</p>
            </div>

            {/* Личный подход */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <ShieldCheck className="w-6 h-6 text-rose-300" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Полная конфиденциальность</h3>
              <p className="text-white/80 leading-relaxed">Безопасное пространство, где можно говорить обо всём.</p>
            </div>

            {/* Методика */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Sparkles className="w-6 h-6 text-rose-300" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Работающие методики</h3>
              <p className="text-white/80 leading-relaxed">Научно обоснованные инструменты: коучинг, психология ресурсов.</p>
            </div>

            {/* Онлайн */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Icon name="Video" size={24} className="text-rose-300" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Работаю онлайн</h3>
              <p className="text-white/80 leading-relaxed">Сессии из любой точки мира, в удобное для вас время.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section — Как мы работаем */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Ваш путь к себе</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto text-pretty">
                Четыре шага от «я не знаю, кто я сейчас» до уверенной женщины, которая знает, чего хочет.
              </p>
            </div>

            {/* Journey Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-rose-300/60 mb-4">01.</div>
                  <h3 className="text-xl font-semibold mb-4">Диагностика</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Вместе исследуем, где вы сейчас, что вас тяготит и какие ресурсы уже есть внутри.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-rose-300/60 mb-4">02.</div>
                  <h3 className="text-xl font-semibold mb-4">Постановка целей</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Формулируем, чего вы по-настоящему хотите — не «надо», а «хочу». Ваши цели, ваш путь.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-rose-300/60 mb-4">03.</div>
                  <h3 className="text-xl font-semibold mb-4">Поиск ресурсов</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Открываем внутренние силы, о которых вы, возможно, забыли. Работаем с ограничивающими убеждениями.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-rose-300/60 mb-4">04.</div>
                  <h3 className="text-xl font-semibold mb-4">Действие и результат</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Вы выходите в жизнь с ясностью, уверенностью и конкретным планом. Я остаюсь рядом на этом пути.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-white/90 rounded-full px-12 py-4 text-lg font-semibold"
              >
                Начать бесплатную консультацию
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left Column */}
              <div>
                <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
                  Частые вопросы
                </h2>
                <p className="text-xl text-white/80 leading-relaxed text-pretty">
                  Всё, что важно знать перед первой встречей. Если не нашли ответ — напишите мне напрямую.
                </p>
              </div>

              {/* Right Column - FAQ Accordion */}
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                    >
                      <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
                      {openFaq === index ? (
                        <Minus className="w-5 h-5 flex-shrink-0 text-rose-300" />
                      ) : (
                        <Plus className="w-5 h-5 flex-shrink-0" />
                      )}
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-6">
                        <p className="text-white/80 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-12">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Напишите мне</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left Column - Contact Form */}
              <div className="rounded-2xl bg-white/95 text-black p-8 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">Записаться на консультацию</h3>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Имя
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-400 focus:border-transparent"
                      placeholder="Как вас зовут?"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-400 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Что вас беспокоит?
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-400 focus:border-transparent resize-none"
                      placeholder="Расскажите немного о себе и своём запросе..."
                    />
                  </div>
                  <Button className="w-full bg-[#0D0B14] text-white hover:bg-black/80 rounded-lg py-3 font-normal text-base">
                    Отправить сообщение
                  </Button>
                </form>
              </div>

              {/* Right Column - Contact Info */}
              <div className="space-y-8">
                <div>
                  <p className="text-xl text-white/90 leading-relaxed text-pretty">
                    Первый шаг — всегда самый важный. Напишите мне, и мы вместе разберёмся, как я могу помочь именно вам. Отвечаю в течение одного рабочего дня.
                  </p>
                </div>

                {/* Profile Card */}
                <div className="rounded-2xl bg-white/95 text-black p-6 shadow-2xl">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face"
                      alt="Психолог-коуч"
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="text-lg font-semibold">Ирина Зебницкая</h4>
                      <p className="text-gray-600">Психолог-коуч · 14 лет практики</p>
                    </div>
                  </div>
                  <Button className="w-full bg-[#0D0B14] text-white hover:bg-black/80 rounded-lg flex items-center justify-center gap-2">
                    <Mail className="w-4 h-4" />
                    Написать напрямую
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/[0.03] backdrop-blur-2xl ring-1 ring-white/10 p-12">
            {/* Main Footer Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
              {/* Brand Section */}
              <div className="lg:col-span-2">
                <div className="flex items-center gap-2 mb-6">
                  <Heart className="w-6 h-6 text-rose-300" />
                  <span className="text-xl font-semibold">Ирина Зебницкая</span>
                </div>
                <p className="text-white/80 leading-relaxed text-pretty">
                  Психолог-коуч с 14-летним опытом. Помогаю женщинам в период кризиса 40 лет найти себя, свои ресурсы и путь к наполненной жизни.
                </p>
              </div>

              {/* Services Links */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6">УСЛУГИ</h3>
                <ul className="space-y-3">
                  {["Индивидуальный коучинг", "Постановка целей", "Работа с кризисом", "Онлайн-сессии"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* About Links */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6">ОБО МНЕ</h3>
                <ul className="space-y-3">
                  {["Моя история", "Образование", "Метод работы", "Отзывы"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support Links */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6">ПОДДЕРЖКА</h3>
                <ul className="space-y-3">
                  {["Частые вопросы", "Контакты", "Конфиденциальность", "Условия работы"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="border-t border-white/10 pt-12 mb-12">
              <div className="max-w-md">
                <h3 className="text-lg font-semibold mb-2">Полезная рассылка</h3>
                <p className="text-white/60 text-sm mb-4">Практики, инсайты и поддержка — раз в неделю на вашу почту.</p>
                <div className="flex gap-3">
                  <input
                    type="email"
                    placeholder="Введите ваш email"
                    className="flex-1 px-4 py-3 rounded-lg bg-white/5 ring-1 ring-white/20 backdrop-blur border-0 text-white placeholder:text-white/50 focus:ring-2 focus:ring-white/30 focus:outline-none"
                  />
                  <Button className="bg-white text-black hover:bg-white/90 rounded-lg px-6 h-[50px]">Подписаться</Button>
                </div>
              </div>
            </div>

            {/* Sub-footer */}
            <div className="border-t border-white/10 pt-8">
              <p className="text-white/60 text-sm text-center">© 2025 Ирина Зебницкая · Психолог-коуч</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index