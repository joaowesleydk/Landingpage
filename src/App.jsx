import { useState, useEffect } from 'react'

function App() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const saboresTrufas = [
    { nome: 'Coco', img: '/trufas.jpeg' },
    { nome: 'Brigadeiro', img: '/trufas.jpeg' },
    { nome: 'Cereja', img: '/trufas.jpeg' },
    { nome: 'Morango', img: '/trufas.jpeg' },
    { nome: 'Limão', img: '/trufas.jpeg' },
    { nome: 'Maracujá', img: '/trufas.jpeg' }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % saboresTrufas.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % saboresTrufas.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + saboresTrufas.length) % saboresTrufas.length)
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-amber-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-amber-900 rounded-lg flex items-center justify-center text-white text-xl">🍫</div>
            <h1 className="text-xl font-semibold text-gray-900">Delícias de Chocolate</h1>
          </div>
          <a 
            href="https://wa.me/5535998587743" 
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 rounded-lg font-medium transition-all flex items-center gap-2 text-sm"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Fazer Pedido
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
          Chocolates Artesanais
        </h2>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          Strogonoff, Trufas e Ovos de Páscoa feitos com ingredientes selecionados e muito carinho
        </p>
        <div className="inline-flex items-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-lg text-base font-medium">
          <span className="text-gray-400">A partir de</span>
          <span className="text-2xl font-bold">R$ 6,00</span>
        </div>
      </section>

      {/* Produtos em Destaque */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Strogonoff */}
          <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all">
            <div className="h-80 overflow-hidden">
              <img 
                src="/strogonoff.jpeg" 
                alt="Strogonoff de Chocolate" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Strogonoff de Chocolate</h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">Camadas de creme de chocolate, cobertura suave e castanhas trituradas</p>
              <div className="flex justify-between items-center">
                <span className="text-3xl font-bold text-gray-900">R$ 15,99</span>
                <a 
                  href="https://wa.me/5535998587743?text=Quero%20encomendar%20Strogonoff%20de%20Chocolate" 
                  className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2.5 rounded-lg font-medium transition-all text-sm"
                >
                  Encomendar
                </a>
              </div>
            </div>
          </div>

          {/* Trufas com Carousel */}
          <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all">
            <div className="h-80 overflow-hidden relative group">
              <img 
                src={saboresTrufas[currentSlide].img}
                alt={`Trufa de ${saboresTrufas[currentSlide].nome}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="text-white font-semibold text-xl p-4">{saboresTrufas[currentSlide].nome}</div>
              </div>
              <button 
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              >
                ‹
              </button>
              <button 
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              >
                ›
              </button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {saboresTrufas.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentSlide ? 'bg-white w-6' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Trufas Artesanais</h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">6 sabores irresistíveis: Coco, Brigadeiro, Cereja, Morango, Limão e Maracujá</p>
              <div className="flex justify-between items-center">
                <span className="text-3xl font-bold text-gray-900">R$ 6,00</span>
                <a 
                  href="https://wa.me/5535998587743?text=Quero%20encomendar%20Trufas" 
                  className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2.5 rounded-lg font-medium transition-all text-sm"
                >
                  Encomendar
                </a>
              </div>
            </div>
          </div>

          {/* Ovos de Páscoa */}
          <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all">
            <div className="h-80 bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center">
              <span className="text-9xl">🥚</span>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Ovos de Páscoa</h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">Chocolate premium com recheios especiais e decoração artesanal</p>
              <div className="flex justify-between items-center">
                <span className="text-xl font-semibold text-gray-900">Sob encomenda</span>
                <a 
                  href="https://wa.me/5535998587743?text=Quero%20saber%20sobre%20Ovos%20de%20P%C3%A1scoa" 
                  className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2.5 rounded-lg font-medium transition-all text-sm"
                >
                  Consultar
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section className="bg-gray-900 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Qualidade e Sabor em Cada Pedaço</h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-10">
            Cada produto é cuidadosamente preparado com ingredientes premium e muito carinho. 
            Nosso compromisso é levar até você a melhor experiência em chocolates artesanais.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl mb-3">🍫</div>
              <h3 className="font-semibold mb-2">Chocolate Premium</h3>
              <p className="text-sm text-gray-400">Ingredientes selecionados</p>
            </div>
            <div>
              <div className="text-4xl mb-3">👩‍🍳</div>
              <h3 className="font-semibold mb-2">Feito Artesanalmente</h3>
              <p className="text-sm text-gray-400">Com dedicação e carinho</p>
            </div>
            <div>
              <div className="text-4xl mb-3">⭐</div>
              <h3 className="font-semibold mb-2">Qualidade Garantida</h3>
              <p className="text-sm text-gray-400">Satisfação em cada pedido</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Faça Seu Pedido
        </h2>
        <p className="text-lg text-gray-600 mb-10">
          Entre em contato pelo WhatsApp ou Instagram e encomende suas delícias!
        </p>
        <a 
          href="https://wa.me/5535998587743" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
        >
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          35 99858-7743
        </a>
        <div className="mt-6">
          <a 
            href="https://instagram.com/kindgiovanna" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 font-medium transition-all"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            @kindgiovanna
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 text-center py-8 border-t border-gray-800">
        <p className="text-sm">© 2026 - Delícias de Chocolate</p>
        <p className="mt-2 text-sm">Feito com 🤎 e muito chocolate</p>
      </footer>
    </div>
  )
}

export default App
