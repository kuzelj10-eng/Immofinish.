import ber from './ber.jpg'
import {steps} from './data.js'
export default function Process(){return(
<section id="komplettservice" className="bg-mist py-24"><div className="mx-auto max-w-6xl px-5">
<h2 className="text-4xl md:text-5xl">Ein Ansprechpartner. Alle Leistungen. Ein fertiges Ergebnis.</h2>
<p className="mt-3 max-w-2xl text-slate-500">Sie müssen keine Entrümpler, Reinigungsfirmen und Maler einzeln suchen und koordinieren. Wir planen die Abläufe, stimmen die Termine aufeinander ab und übergeben Ihnen die fertige Immobilie.</p>
<img src={ber} alt="Besichtigung und Beratung vor Ort" loading="lazy" className="mt-9 max-h-[420px] w-full border-b-4 border-gold object-cover"/><ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">{steps.map(([t,d],i)=><li key={t} className="border-t-[3px] border-gold bg-white p-6"><span className="block font-serif text-4xl text-gold">0{i+1}</span><b className="text-navy">{t}</b><p className="mt-1 text-sm">{d}</p></li>)}</ol></div></section>)}
