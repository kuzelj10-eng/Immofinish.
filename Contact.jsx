import {useState} from 'react'
import {services} from './data.js'
const Ph=({children})=><span className="border border-dashed border-gold bg-amber-50 px-1.5">{children}</span>
const inp="w-full border border-slate-300 bg-white p-3"
export default function Contact(){const[done,setDone]=useState(false);const[err,setErr]=useState('')
const submit=e=>{e.preventDefault();const f=e.target;if(!f.name.value.trim()||!f.phone.value.trim()||!/\S+@\S+\.\S+/.test(f.email.value)){setErr('Bitte Name, Telefonnummer und eine gültige E-Mail-Adresse angeben.');return}setErr('');setDone(true)}
return(<section id="kontakt" className="bg-mist py-24"><div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[1fr_1.2fr]">
<div><h2 className="text-4xl md:text-5xl">Angebot anfordern</h2><p className="mt-3 text-slate-500">Beschreiben Sie uns Ihr Objekt. Wir melden uns mit einem unverbindlichen Angebot.</p>
<p className="mt-6"><b>Einsatzgebiet:</b> Augsburg und Umgebung</p><p className="mt-2 leading-8"><b>Telefon:</b> <Ph>[Telefonnummer folgt]</Ph><br/><b>E-Mail:</b> <Ph>[E-Mail-Adresse folgt]</Ph><br/><b>WhatsApp:</b> <Ph>[WhatsApp-Nummer folgt]</Ph></p></div>
<form onSubmit={submit} noValidate className="border-t-4 border-gold bg-white p-7 shadow-xl"><p className="mb-5 border border-gold bg-amber-50 p-3 text-sm"><b>Demo:</b> Ohne Backend werden keine echten Anfragen versendet oder gespeichert.</p>
<div className="grid gap-4 sm:grid-cols-2">
<label>Name *<input name="name" className={inp}/></label><label>Telefonnummer *<input name="phone" type="tel" className={inp}/></label>
<label>E-Mail *<input name="email" type="email" className={inp}/></label><label>Objektadresse<input name="address" className={inp}/></label>
<label>Art der Immobilie<select name="type" className={inp}><option>Wohnung</option><option>Haus</option><option>Keller / Garage</option><option>Gewerbeobjekt</option></select></label><label>Wohnfläche (m²)<input name="area" className={inp}/></label>
<fieldset className="sm:col-span-2"><legend className="mb-1">Gewünschte Leistungen</legend>{services.map(s=><label key={s.id} className="mr-4 inline-flex items-center gap-2"><input type="checkbox" name="svc"/>{s.title}</label>)}</fieldset>
<label className="sm:col-span-2">Beschreibung des Auftrags<textarea name="desc" rows="4" className={inp}/></label>
<label className="sm:col-span-2">Fotos (optional)<input type="file" accept="image/*" multiple className={inp}/></label>
<label className="sm:col-span-2"><input type="checkbox" name="cb"/> Bitte rufen Sie mich zurück</label>
{err&&<p role="alert" className="text-red-700 sm:col-span-2">{err}</p>}
<button type="submit" className="btn btn-dark sm:col-span-2">Jetzt unverbindliches Angebot anfordern</button></div>
{done&&<p role="status" className="mt-5 bg-navy p-4 text-white">Vielen Dank! In der Demo wurde nichts versendet. Mit einem Backend würde Ihre Anfrage jetzt bei uns eingehen.</p>}</form></div></section>)}
