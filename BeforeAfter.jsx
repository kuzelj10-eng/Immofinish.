import hh from './hh.jpg'
import wn from './wn.jpg'
import kv from './kv.jpg'
import kn from './kn.jpg'
import wv from './wv.jpg'
import wnn from './wnn.jpg'
const P={hh,wn,kv,kn,wv,wnn}
import {useState} from 'react'
const scenes=[{name:'Wohnung',b:'hh',a:'wn'},{name:'Küche',b:'kv',a:'kn'},{name:'Wände',b:'wv',a:'wnn'}]
const Im=({k})=><image href={P[k]} width="800" height="450" preserveAspectRatio="xMidYMid slice"/>
export default function BeforeAfter(){const[i,setI]=useState(0);const[v,setV]=useState(50);const s=scenes[i];return(
<section id="vorher-nachher" className="py-24"><div className="mx-auto max-w-4xl px-5 text-center"><h2 className="text-4xl md:text-5xl">Vorher und nachher</h2>
<p className="mt-3 text-slate-500">Ziehen Sie den Regler und sehen Sie, wie sich ein Raum verändert.</p>
<div className="mt-6 flex flex-wrap justify-center gap-2">{scenes.map((x,j)=><button key={x.name} aria-pressed={i===j} onClick={()=>setI(j)} className={`border border-navy px-4 py-2 ${i===j?'bg-navy text-white':'bg-white text-navy'}`}>{x.name}</button>)}</div>
<div className="relative mt-6 aspect-video select-none overflow-hidden bg-slate-200">
<svg viewBox="0 0 800 450" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full"><Im k={s.b}/></svg>
<svg viewBox="0 0 800 450" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full" style={{clipPath:`inset(0 0 0 ${v}%)`}}><Im k={s.a}/></svg>
<span className="absolute bottom-3 left-3 bg-navy/85 px-3 py-1 text-xs text-white">Vorher</span><span className="absolute bottom-3 right-3 bg-navy/85 px-3 py-1 text-xs text-white">Nachher</span>
<div className="pointer-events-none absolute inset-y-0 w-[3px] bg-gold" style={{left:`${v}%`}}/>
<input type="range" min="0" max="100" value={v} onChange={e=>setV(+e.target.value)} aria-label="Vorher-Nachher-Regler" className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"/></div>
<p className="mt-3 text-sm text-slate-500">Illustrative Beispiele – keine echten Kundenprojekte.</p></div></section>)}
