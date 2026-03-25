# 🚀 George Luis Mihalache - Portfolio

Portfolio personale sviluppato con React, Tailwind CSS e Framer Motion.

![Portfolio Preview](https://via.placeholder.com/1200x630/0a0a0a/6366f1?text=Portfolio+Preview)

## ✨ Caratteristiche

- **Design Moderno**: Interfaccia dark mode elegante e professionale
- **Animazioni Smooth**: Transizioni fluide con Framer Motion
- **Responsive**: Ottimizzato per mobile, tablet e desktop
- **Dark/Light Mode**: Toggle tema con persistenza localStorage
- **Single Page Application**: Navigazione smooth scroll tra le sezioni
- **Performance**: Ottimizzato per Lighthouse score >90

## 🛠️ Tech Stack

- **Frontend**: React 18
- **Styling**: Tailwind CSS
- **Animazioni**: Framer Motion
- **Icone**: react-icons
- **Build Tool**: Vite
- **Fonts**: Inter, JetBrains Mono (Google Fonts)

## 📁 Struttura del Progetto

```
portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Navbar con glassmorphism
│   │   ├── Hero.jsx          # Sezione hero con typing effect
│   │   ├── About.jsx         # Chi sono con statistiche
│   │   ├── Skills.jsx        # Skills con barre progresso
│   │   ├── Projects.jsx      # Portfolio progetti
│   │   ├── Contact.jsx       # Form contatti e social
│   │   └── Footer.jsx        # Footer con crediti
│   ├── hooks/
│   │   ├── useScrollSpy.js   # Traccia sezione attiva
│   │   └── useIntersection.js # Animazioni al scroll
│   ├── data/
│   │   └── projects.js       # Dati progetti e skills
│   ├── App.jsx               # Componente principale
│   ├── main.jsx              # Entry point
│   └── index.css             # Stili globali
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## 🚀 Installazione e Avvio

### Prerequisiti

- Node.js >= 18.0.0
- npm o yarn

### Installazione

```bash
# Clona il repository
git clone https://github.com/yourusername/portfolio.git

# Entra nella directory del progetto
cd portfolio

# Installa le dipendenze
npm install
```

### Avvio Development Server

```bash
npm run dev
```

Il sito sarà disponibile su `http://localhost:5173`

### Build per Produzione

```bash
npm run build
```

I file di build saranno nella cartella `dist/`

## 🎨 Personalizzazione

### Dati Personali

Modifica i seguenti file per personalizzare il portfolio:

1. **Informazioni personali**: `src/data/projects.js`
2. **Testi delle sezioni**: Componenti in `src/components/`
3. **Link social**: `src/components/Contact.jsx` e `src/components/Footer.jsx`
4. **CV**: Aggiorna il link nel bottone "Scarica CV" in `src/components/Hero.jsx`

### Colori e Tema

Personalizza la palette colori in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    500: '#6366f1', // Colore principale
    // ... altre sfumature
  }
}
```

### Placeholder

Tutti i testi segnaposto sono marcati con `[DA SOSTITUIRE]` per facilitare la personalizzazione.

## 📱 Sezioni

| Sezione      | Descrizione                           |
| ------------ | ------------------------------------- |
| **Hero**     | Presentazione con typing effect e CTA |
| **About**    | Bio personale con statistiche animate |
| **Skills**   | Competenze con barre progresso        |
| **Projects** | Portfolio con griglia progetti        |
| **Contact**  | Form contatti e link social           |
| **Footer**   | Crediti e link                        |

## 🔧 Configurazione

### Dark Mode

Il dark mode è impostato di default. Per cambiare:

```javascript
// In src/App.jsx
localStorage.setItem("theme", "light");
```

### SEO

Aggiorna i meta tag in `index.html`:

```html
<title>Il Tuo Nome - Frontend Developer</title>
<meta name="description" content="La tua descrizione" />
```

## 📄 Licenza

Questo progetto è open source e disponibile sotto licenza MIT.

## 👨‍💻 Autore

**George Luis Mihalache**

- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- Email: your@email.com

## 🙏 Ringraziamenti

- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Vite](https://vitejs.dev/)

---

⭐ Se ti piace questo progetto, lascia una stella su GitHub!
