import icon from './icon.png'
import {services} from './data.js'
const Ph=({children})=><span className="border border-dashed border-gold px-1.5">{children}</span>
export default function Footer(){return(
<footer className="bg-[#0b1a2d] px-5 pb-8 pt-14 text-sm text-slate-400"><div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
<div><img src={icon} alt="" className="h-11 bg-white p-1.5"/><b className="mt-2 block tracking-[.14em] text-white">IMMOFINISH</b><p className="mt-2">Wir machen Immobilien wieder bereit. Entrümpelung, Reinigung und Aufbereitung aus einer Hand.</p></div>
<div><h4 className="mb-2 text-white">Leistungen</h4>{services.map(s=><a key={s.id} href={`#${s.id}`} className="block py-0.5 hover:text-gold">{s.title}</a>)}</div>
<div><h4 className="mb-2 text-white">Kontakt</h4><Ph>[Telefon folgt]</Ph><br/><Ph>[E-Mail folgt]</Ph><br/><a href="#kontakt" className="mt-3 block hover:text-gold">Angebot anfordern</a></div>
<div><h4 className="mb-2 text-white">Einsatzgebiet</h4>Augsburg und Umgebung<br/><br/><Ph>[Impressum folgt]</Ph><br/><Ph>[Datenschutz folgt]</Ph></div></div>
<div className="mx-auto mt-10 max-w-6xl border-t border-white/10 pt-5">© IMMOFINISH</div></footer>)}
