# Chad Michael Bruce — Senior Attorney Website

A luxury, dark-themed law firm website built with **Next.js 14**, **Tailwind CSS**, and **Material UI**.

---

## Dependencies & Installation Commands

### 1. Create Next.js app (if starting fresh)
```bash
npx create-next-app@14 chad-bruce-law --no-typescript --eslint --no-tailwind --no-src-dir --no-app
cd chad-bruce-law
```

### 2. Install Tailwind CSS + PostCSS
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 3. Install Material UI + Emotion (peer deps)
```bash
npm install @mui/material @mui/icons-material @emotion/react @emotion/styled
```

### 4. Install Framer Motion (animations)
```bash
npm install framer-motion
```

### 5. Install React Scroll (smooth in-page navigation)
```bash
npm install react-scroll
```

### 6. Install React Intersection Observer (scroll-triggered animations)
```bash
npm install react-intersection-observer
```

### 7. Install React CountUp (animated stat numbers)
```bash
npm install react-countup
```

### 8. Install React Icons (supplemental icon set)
```bash
npm install react-icons
```

### 9. Install clsx (conditional classNames utility)
```bash
npm install clsx
```

---

## Or install everything at once:
```bash
npm install @mui/material @mui/icons-material @emotion/react @emotion/styled framer-motion react-scroll react-intersection-observer react-countup react-icons clsx
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

---

## Running the Project

```bash
# Development
npm run dev

# Production build
npm run build
npm start
```

Open [http://localhost:3000](http://localhost:3000)

---

## Project Structure

```
chad-bruce-law/
├── components/
│   ├── Navbar.jsx          # Fixed nav with mobile drawer
│   ├── Hero.jsx            # Full-screen hero with stats strip
│   ├── About.jsx           # Bio, credentials, portrait
│   ├── PracticeAreas.jsx   # 4 practice area cards
│   ├── Experience.jsx      # Career timeline
│   ├── Testimonials.jsx    # Carousel testimonials
│   ├── Contact.jsx         # MUI form + contact info
│   └── Footer.jsx          # Links, socials, legal notice
├── pages/
│   ├── _app.jsx            # MUI ThemeProvider wrapper
│   └── index.jsx           # Page composition
├── styles/
│   ├── globals.css         # Tailwind + custom CSS
│   └── theme.js            # MUI dark theme
├── tailwind.config.js
├── postcss.config.js
└── next.config.js
```

---

## Design Notes
- **Color palette**: Deep ink (`#0e1116`) + antique gold (`#c9a84c`) + parchment (`#f5f0e8`)
- **Fonts**: Cormorant Garamond (display) · Jost (body) · DM Mono (labels)
- **Aesthetic**: Luxury legal — editorial, refined, dark
- **Animations**: Framer Motion scroll-triggered reveals + micro-interactions
