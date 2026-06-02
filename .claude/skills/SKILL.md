# Frontend Design Skill

## Typography
- Scale: 12/14/16/20/24/32/48/64px only
- Headings: font-bold, tight letter-spacing, large size contrast vs body
- Body: font-normal, relaxed line-height, max-width 65ch for readability
- Never use more than 2 font families

## Spacing
- Base unit: 8px. Always use multiples: 8, 16, 24, 32, 48, 64, 96px
- Section padding: py-24 on desktop, py-16 on mobile
- Generous whitespace between sections — breathing room > cramped layouts

## Colors
- 3 tokens only: primary (brand), neutral (text/bg), accent (highlights)
- Stick to Tailwind's built-in palette
- Dark mode friendly: use neutral-900 backgrounds, neutral-100 text
- Never use random hex codes

## Animations (Framer Motion)
- All sections fade-up on scroll: opacity 0→1, y 40→0, viewport once:true
- Cards: staggered reveals with staggerChildren 0.1
- Buttons: whileHover scale 1.02, whileTap scale 0.98
- Page transitions: smooth, under 400ms
- Never animate things that don't need it

## Components
- Every button needs hover + active + focus states
- Cards: subtle shadow, rounded-2xl, hover lift effect
- Navbar: sticky, blur backdrop, hides on scroll down, shows on scroll up
- Mobile-first always — design for 375px first

## Principles
- Avoid generic AI aesthetic at all costs
- Less is more — remove anything that doesn't serve a purpose
- Consistency over creativity — use the system, don't break it
- Lighthouse score 90+ is a requirement, not a goal
