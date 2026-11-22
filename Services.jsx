import ent from './ent.jpg'
import hh from './hh.jpg'
import rein from './rein.jpg'
import mal from './mal.jpg'
import auf from './auf.jpg'
const IMGS={entruempelung:ent,haushaltsaufloesung:hh,grundreinigung:rein,malerarbeiten:mal,aufbereitung:auf}
import {services} from './data.js'
const tints=['#cfd7e2','#e6dfd0','#d5e3ea','#ece6da','#d9dee6']
export function ServiceStrip(){return(<div className="border-t border-gold/40 bg-navy"><ul className="mx-auto flex max-w-6xl flex-wrap">{services.map(s=><li key={s.id} className="flex-1 basis-44 border-l border-white/10 p-5 text-center"><a href={`#${s.id}`} className="font-serif text-xl text-white hover:text-gold">{s.title}</a></li>)}</ul></div>)}
export default function Services(){return(
<section id="leistungen" className="py-24"><div className="mx-auto max-w-6xl px-5"><h2 className="text-4xl md:text-5xl">Unsere Leistungen</h2>
<p className="mt-3 max-w-2xl text-slate-500">Jede Leistung können Sie einzeln buchen – oder alle zusammen als fertiges Ergebnis.</p>
{services.map((s,i)=><div key={s.id} id={s.id} className="mt-16 grid items-center gap-8 md:grid-cols-2 md:gap-14">
<div className={`aspect-[4/3] overflow-hidden border-b-4 border-gold ${i%2?'md:order-2':''}`}><img src={IMGS[s.id]} alt={s.title} loading="lazy" className="h-full w-full object-cover"/></div>
<div><h3 className="text-3xl">{s.title}</h3><p className="mt-3 text-slate-500">{s.text}</p><a href="#kontakt" className="mt-4 inline-block border-b-2 border-gold font-semibold text-navy">Angebot für {s.title} anfragen</a></div></div>)}
</div></section>)}
