import {clients} from './data.js'
const pts=[['Zuverlässige Terminplanung','Feste Termine, abgestimmte Gewerke, keine Leerlaufzeiten.'],['Ein Ansprechpartner','Eine Stelle für alle Rückfragen, statt vieler Firmen.'],['Gebündelte Leistungen','Entrümpelung, Reinigung und Malerarbeiten in einem Auftrag.']]
export default function Business(){return(
<section id="gewerbe" className="bg-navy py-24 text-white"><div className="mx-auto max-w-6xl px-5"><h2 className="text-4xl text-white md:text-5xl">Für gewerbliche Kunden</h2>
<p className="mt-3 max-w-2xl text-slate-300">Wir bereiten Ihre Immobilien für die nächste Vermietung oder den Verkauf vor.</p>
<ul className="my-8 flex flex-wrap gap-3">{clients.map(c=><li key={c} className="border border-gold/60 px-4 py-2 text-[#f0e4cc]">{c}</li>)}</ul>
<div className="grid gap-6 md:grid-cols-3">{pts.map(([t,d])=><div key={t} className="border-l-2 border-gold pl-4 text-slate-300"><b className="block text-white">{t}</b>{d}</div>)}</div>
<a href="#kontakt" className="btn btn-gold mt-10">Jetzt unverbindliches Angebot anfordern</a></div></section>)}
