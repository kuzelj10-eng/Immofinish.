import hero from './hero.jpg'
export default function Hero(){return(
<div id="top" className="relative flex min-h-screen items-center overflow-hidden bg-navy pb-16 pt-28 text-white">
<img src={hero} alt="Frisch renovierte Altbauwohnung" className="absolute inset-0 h-full w-full object-cover"/>
<div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/30"/>
<div className="rise relative mx-auto max-w-6xl px-5"><h1 className="max-w-[11em] text-5xl text-white md:text-7xl">Aus einer Immobilie wird wieder ein Zuhause.</h1>
<p className="mt-6 max-w-xl text-lg text-slate-300">Von der Entrümpelung bis zur fertigen Immobilienaufbereitung. Wir kümmern uns um alles – zuverlässig, professionell und aus einer Hand.</p>
<div className="mt-8 flex flex-wrap gap-4"><a href="#kontakt" className="btn btn-gold">Kostenloses Angebot anfordern</a><a href="#leistungen" className="btn btn-line">Unsere Leistungen entdecken</a></div></div></div>)}
