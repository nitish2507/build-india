# Build India Systems Marketing Site

Production-ready marketing site for a firm partnering with Indian Central & State Governments and PSUs to design and deploy data, AI, and digital systems.

## Tech Stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- lucide-react icons

## Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Project Structure

```
app/
  api/lead/route.ts
  case-studies/page.tsx
  contact/page.tsx
  how-we-work/page.tsx
  solutions/page.tsx
  partners/page.tsx
  globals.css
  layout.tsx
  page.tsx
components/
  Button.tsx
  ContactForm.tsx
  Footer.tsx
  Header.tsx
  MotionFade.tsx
lib/
  analytics.ts
  content.ts
```

## Notes
- `/api/lead` logs lead submissions server-side.
- `lib/analytics.ts` provides a lightweight analytics stub.
