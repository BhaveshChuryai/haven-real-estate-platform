# 🔥 HAVEN GROUP – Real Estate Platform

A premium Angular-based real estate requirement platform.

---

## 🚀 Quick Start

### Prerequisites
- Node.js v16+ → https://nodejs.org
- Angular CLI → `npm install -g @angular/cli`

### Installation & Run

```bash
# 1. Extract the ZIP and open the folder
cd haven-group

# 2. Install dependencies
npm install

# 3. Start development server
ng serve

# 4. Open browser
# Visit: http://localhost:4200
```

---

## 🎬 Adding Your Hero Video

Place your video file here:
```
src/assets/hero-video.mp4
```

The `<video>` tag in `hero.component.html` already points to this path.
Supported formats: `.mp4` (recommended), `.webm`

---

## 📁 Project Structure

```
haven-group/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── header/          ← Fixed nav, scroll effect
│   │   │   ├── hero/            ← Full-screen video section
│   │   │   ├── requirements/    ← Dynamic forms (Land/Commercial/Residential)
│   │   │   ├── land/            ← SVG plot map + land info
│   │   │   ├── projects/        ← Project cards from service
│   │   │   ├── about/           ← Founders + mission
│   │   │   ├── contact/         ← Contact info + site visit form
│   │   │   └── footer/          ← Links + copyright
│   │   ├── services/
│   │   │   ├── lead.service.ts      ← Stores & manages form submissions
│   │   │   └── project.service.ts   ← Serves project & plot data as JSON
│   │   ├── models/
│   │   │   ├── lead.model.ts        ← Lead interface (TypeScript)
│   │   │   └── project.model.ts     ← Project & LandPlot interfaces
│   │   ├── app.module.ts            ← ReactiveFormsModule + HttpClientModule
│   │   └── app-routing.module.ts    ← Angular Routing
│   ├── styles.css                   ← Global styles + CSS variables
│   └── index.html
├── angular.json
├── package.json
├── tsconfig.json
└── tsconfig.app.json
```

---

## ⚙️ Angular Features Used

| Feature | Usage |
|---|---|
| **Reactive Forms** | All 3 enquiry forms + contact form |
| **FormBuilder** | Building FormGroups with Validators |
| **Validators** | Required, pattern (phone), minLength |
| **HttpClient** | API-ready lead submission |
| **BehaviorSubject** | Live lead list updates |
| **NgFor / NgIf** | Dynamic rendering of forms, cards, leads |
| **HostListener** | Scroll detection for header effect |
| **Services** | LeadService, ProjectService |
| **Routing** | AppRoutingModule configured |
| **TypeScript Models** | Lead, Project, LandPlot interfaces |

---

## 🔌 Connecting a Real Backend

In `lead.service.ts`, replace:
```typescript
private apiUrl = 'https://api.havengroup.in/leads';
```
With your actual API endpoint. The service already calls `HttpClient.post()`.

---

## 🏗️ Build for Production

```bash
ng build --configuration production
```
Output will be in `dist/haven-group/`

---

## 📞 Contact

- Anisha Churyai — 93243 92300
- Bhavesh Churyai — 74995 64957
- anishachuryai01082020@gmail.com
- ombhaveshchuryai@gmail.com
