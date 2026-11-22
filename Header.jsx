import icon from './icon.png'
import {useState} from 'react'
import {Menu,X} from 'lucide-react'
import {nav} from './data.js'
export default function Header(){const[open,setOpen]=useState(false);return(
<header className="fixed inset-x-0 top-0 z-20 bg-white/95 shadow-sm backdrop-blur"><div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
<a href="#top" className="flex items-center gap-3 text-navy" aria-label="IMMOFINISH Startseite"><img src={icon} alt="" className="h-10"/><span className="font-serif text-2xl tracking-[.14em]">IMMOFINISH</span></a>
<button className="text-navy md:hidden" aria-label="Menü" aria-expanded={open} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
<nav className={`${open?'flex':'hidden'} absolute left-0 right-0 top-16 flex-col gap-4 bg-white p-5 md:static md:flex md:flex-row md:items-center md:gap-7 md:bg-transparent md:p-0`}>
{nav.map(([l,id])=><a key={id} href={`#${id}`} onClick={()=>setOpen(false)} className="text-sm text-navy hover:text-gold">{l}</a>)}
<a href="#kontakt" onClick={()=>setOpen(false)} className="btn btn-gold !px-5 !py-2.5 text-sm">Angebot anfordern</a></nav></div></header>)}
