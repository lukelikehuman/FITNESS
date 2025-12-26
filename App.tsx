
import React, { useState, useEffect } from 'react';
import { 
  ChevronRight, 
  Menu, 
  X,
  ArrowRight,
  MapPin,
  Phone,
  Clock,
  Sparkles
} from 'lucide-react';
import { SERVICES, PRICING, TRAINERS, ICONS } from './constants';
import AIAssistant from './components/AIAssistant';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 手動捲動函數，確保跳轉精準且能關閉選單
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // 導覽列的高度
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen selection:bg-rose-200 selection:text-rose-900 bg-[#FAF9F6]">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-lg py-4 shadow-sm' : 'bg-transparent py-8'}`}>
        <div className="container mx-auto px-8 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-rose-400 rounded-full flex items-center justify-center font-bold text-white text-lg">R</div>
            <span className="text-xl serif-title font-black tracking-wider text-stone-800">反作用力 <span className="text-rose-400">訓練空間</span></span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-10 items-center font-medium text-sm text-stone-500 tracking-widest uppercase">
            <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="hover:text-rose-400 transition-colors">品牌理念</a>
            <a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="hover:text-rose-400 transition-colors">美力服務</a>
            <a href="#trainers" onClick={(e) => scrollToSection(e, 'trainers')} className="hover:text-rose-400 transition-colors">專業團隊</a>
            <a href="#pricing" onClick={(e) => scrollToSection(e, 'pricing')} className="hover:text-rose-400 transition-colors">課程方案</a>
            <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="bg-rose-400 text-white px-8 py-3 rounded-full hover:bg-rose-500 transition-all shadow-md shadow-rose-200">預約體驗</a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-stone-800 p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-2xl p-8 flex flex-col gap-6 animate-in fade-in slide-in-from-top-4 duration-300 border-t border-stone-50">
            <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="text-lg font-medium text-stone-700">品牌理念</a>
            <a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="text-lg font-medium text-stone-700">美力服務</a>
            <a href="#trainers" onClick={(e) => scrollToSection(e, 'trainers')} className="text-lg font-medium text-stone-700">專業團隊</a>
            <a href="#pricing" onClick={(e) => scrollToSection(e, 'pricing')} className="text-lg font-medium text-stone-700">課程方案</a>
            <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="bg-rose-400 text-white text-center py-4 rounded-xl font-bold shadow-lg shadow-rose-100">預約體驗</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="about" className="relative h-screen flex items-center pt-20 overflow-hidden bg-[#F5F2EE]">
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-full z-0">
          <img 
            src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=2070&auto=format&fit=crop" 
            className="w-full h-full object-cover"
            alt="Wellness Fitness"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#F5F2EE] via-[#F5F2EE]/50 to-transparent"></div>
        </div>

        <div className="container mx-auto px-8 relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-rose-50 border border-rose-100 px-5 py-2 rounded-full text-rose-500 text-sm font-bold mb-8">
              <Sparkles className="w-4 h-4" />
              <span>妳的質感科學化訓練場館</span>
            </div>
            <h1 className="text-5xl md:text-7xl serif-title font-black text-stone-800 leading-[1.15] mb-8">
              發現內在的 <br />
              <span className="text-rose-400 italic">優雅力量</span>
            </h1>
            <p className="text-stone-500 text-lg md:text-xl max-w-lg mb-12 leading-relaxed font-light">
              反作用力訓練空間結合了「專業科學」與「美學訓練」。
              我們不只是在打造肌肉，更是在協助妳找回身體的覺知，轉化能量，讓每一天都充滿自信。
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="group bg-rose-400 text-white px-10 py-5 rounded-full font-bold flex items-center justify-center gap-3 hover:bg-rose-500 transition-all shadow-lg shadow-rose-200">
                開始妳的體驗
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="px-10 py-5 bg-white border border-stone-200 rounded-full font-bold flex items-center justify-center text-stone-600 hover:bg-stone-50 transition-all">
                了解服務內容
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-white">
        <div className="container mx-auto px-8">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-rose-400 font-bold tracking-[0.2em] uppercase mb-4 text-sm">Services</h2>
            <h3 className="text-4xl md:text-5xl serif-title font-black text-stone-800">為妳而生的訓練美學</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {SERVICES.map((service, i) => (
              <div key={i} className="group p-12 rounded-[2rem] bg-[#FAF9F6] hover:bg-white hover:soft-shadow transition-all duration-500">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 soft-shadow group-hover:scale-110 transition-transform duration-500">
                  {ICONS[service.icon as keyof typeof ICONS]}
                </div>
                <h4 className="text-2xl font-bold mb-5 text-stone-800">{service.title}</h4>
                <p className="text-stone-500 leading-relaxed mb-8 font-light">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 text-sm text-rose-400 font-bold cursor-pointer group-hover:gap-4 transition-all">
                  LEARN MORE <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trainers Section */}
      <section id="trainers" className="py-32 bg-[#FAF9F6]">
        <div className="container mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-24 gap-8">
            <div className="max-w-xl text-center md:text-left">
              <h2 className="text-rose-400 font-bold tracking-[0.2em] uppercase mb-4 text-sm">Experts</h2>
              <h3 className="text-4xl md:text-5xl serif-title font-black text-stone-800 mb-6">溫柔而堅定的專業</h3>
              <p className="text-stone-500 font-light">
                我們的教練不只是動作的糾正者，更是妳健康旅程上的引路人。
              </p>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center text-stone-400 hover:bg-white hover:text-rose-400 transition-all cursor-pointer">
                {ICONS.Instagram}
              </div>
              <div className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center text-stone-400 hover:bg-white hover:text-rose-400 transition-all cursor-pointer">
                {ICONS.Facebook}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            {TRAINERS.map((trainer, i) => (
              <div key={i} className="group bg-white rounded-[3rem] overflow-hidden soft-shadow flex flex-col">
                <div className="h-[400px] overflow-hidden">
                  <img 
                    src={trainer.image} 
                    alt={trainer.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-12">
                  <div className="text-rose-400 text-xs font-bold mb-4 uppercase tracking-[0.2em]">{trainer.specialty}</div>
                  <h4 className="text-3xl serif-title font-bold text-stone-800 mb-5">{trainer.name}</h4>
                  <p className="text-stone-500 font-light leading-relaxed italic border-l-2 border-rose-100 pl-6 py-1">
                    "{trainer.bio}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-32 bg-white">
        <div className="container mx-auto px-8">
          <div className="text-center mb-24">
            <h2 className="text-rose-400 font-bold tracking-[0.2em] uppercase mb-4 text-sm">Investment</h2>
            <h3 className="text-4xl md:text-5xl serif-title font-black text-stone-800">為妳的自信投資</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {PRICING.map((plan, i) => (
              <div key={i} className={`relative p-12 rounded-[2.5rem] flex flex-col transition-all duration-500 ${plan.recommended ? 'bg-[#FAF9F6] border-2 border-rose-200 scale-105' : 'bg-white border border-stone-100 hover:soft-shadow'}`}>
                {plan.recommended && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-rose-400 text-white px-6 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-md">
                    Popular Choice
                  </div>
                )}
                <h4 className="text-2xl font-bold mb-3 text-stone-800">{plan.name}</h4>
                <div className="text-4xl serif-title font-black mb-10 text-rose-400">{plan.price}</div>
                <div className="flex-grow space-y-5 mb-12">
                  {plan.features.map((feature, j) => (
                    <div key={j} className="flex items-center gap-4">
                      <div className="bg-rose-50 p-1 rounded-full">{ICONS.Check}</div>
                      <span className="text-stone-500 text-sm font-light">{feature}</span>
                    </div>
                  ))}
                </div>
                <button 
                  onClick={(e) => scrollToSection(e as any, 'contact')}
                  className={`w-full py-5 rounded-full font-bold tracking-widest transition-all ${plan.recommended ? 'bg-rose-400 text-white hover:bg-rose-500 shadow-lg shadow-rose-100' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'}`}
                >
                  預約報名
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-[#F5F2EE]">
        <div className="container mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <h3 className="text-5xl serif-title font-black text-stone-800 mb-8 leading-tight">讓美力，<br />成為妳的日常。</h3>
              <p className="text-stone-500 mb-16 text-lg font-light leading-relaxed">
                如果您有任何關於課程的疑問，或是想要預約參觀、諮詢，隨時歡迎與我們聯繫。妳值得遇見更好的自己。
              </p>
              
              <div className="space-y-10">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-rose-400 soft-shadow flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-stone-800 mb-1">場館位置</div>
                    <div className="text-stone-500 text-sm font-light">台北市大安區忠孝東路四段 XX 號 X 樓</div>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-rose-400 soft-shadow flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-stone-800 mb-1">聯絡專線</div>
                    <div className="text-stone-500 text-sm font-light">02-XXXX-XXXX</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-16 rounded-[3rem] soft-shadow border border-white">
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-stone-400 uppercase tracking-widest pl-1">Name</label>
                  <input type="text" className="w-full bg-[#FAF9F6] border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-rose-200 transition-all font-light" placeholder="您的姓名" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-stone-400 uppercase tracking-widest pl-1">Phone</label>
                  <input type="tel" className="w-full bg-[#FAF9F6] border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-rose-200 transition-all font-light" placeholder="聯絡電話" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-stone-400 uppercase tracking-widest pl-1">Course</label>
                  <select className="w-full bg-[#FAF9F6] border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-rose-200 transition-all appearance-none font-light">
                    <option>1對1 私人教練體驗</option>
                    <option>體態雕塑專案</option>
                    <option>孕產修復諮詢</option>
                  </select>
                </div>
                <button className="w-full bg-rose-400 text-white py-5 rounded-full font-bold hover:bg-rose-500 transition-all shadow-lg shadow-rose-100 tracking-widest uppercase">
                  預約諮詢
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <AIAssistant />

      <footer className="py-20 bg-white border-t border-stone-100">
        <div className="container mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-rose-400 rounded-full flex items-center justify-center font-bold text-white text-sm">R</div>
              <span className="serif-title font-black uppercase text-stone-800">反作用力 <span className="text-rose-400">訓練空間</span></span>
            </div>
            
            <div className="flex gap-10 text-sm text-stone-400 font-medium">
              <a href="#" className="hover:text-rose-400 transition-colors">Privacy</a>
              <a href="#" className="hover:text-rose-400 transition-colors">Terms</a>
              <a href="#" className="hover:text-rose-400 transition-colors">Facility Rules</a>
            </div>

            <div className="flex gap-6">
              <div className="text-stone-300 hover:text-rose-400 transition-all cursor-pointer">{ICONS.Instagram}</div>
              <div className="text-stone-300 hover:text-rose-400 transition-all cursor-pointer">{ICONS.Facebook}</div>
              <div className="text-stone-300 hover:text-rose-400 transition-all cursor-pointer">{ICONS.Line}</div>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-stone-50 text-center text-stone-300 text-[10px] tracking-widest uppercase">
            © 2024 反作用力訓練空間 Reaction Force Training Space. Designed for Elegance.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
