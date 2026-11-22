# IMMOFINISH – Website

> Flache Struktur: alle Dateien liegen im Hauptordner (für Upload per Handy). Bilder werden per import eingebunden.

React + Vite + Tailwind CSS + Lucide Icons. One-Pager für IMMOFINISH (Augsburg).

## Lokal starten
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # Produktions-Build nach dist/
npm run preview
```

## Auf GitHub hochladen
```bash
git init && git add . && git commit -m "IMMOFINISH Website"
git branch -M main
git remote add origin https://github.com/<dein-name>/immofinish.git
git push -u origin main
```

## Deployment auf Vercel
1. Auf vercel.com einloggen und **Add New → Project** wählen.
2. Das GitHub-Repository `immofinish` importieren.
3. Framework: **Vite** (wird erkannt), Build Command `npm run build`, Output `dist`.
4. **Deploy** klicken. Eigene Domain unter *Settings → Domains* hinzufügen.

## Offene Punkte vor dem Livegang
- Platzhalter ersetzen: Telefon, E-Mail, WhatsApp, Impressum, Datenschutz (Pflicht in Deutschland).
- Illustrationen durch echte Fotos ersetzen (`public/` + `<img>`), Vorher/Nachher nur mit echten, freigegebenen Projekten.
- Kontaktformular ist eine **Demo** und sendet nichts. Backend anbinden (z. B. Formspree, Resend oder eigene API).
- Inhalte: `src/data.js` (Leistungen, Schritte) und `src/components/`.
