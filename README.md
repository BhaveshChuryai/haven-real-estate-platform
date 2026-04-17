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
🔥 HAVEN GROUP REAL ESTATE PLATFORM

📄 Complete Project Summary

⸻

🎯 PROJECT OVERVIEW

Project Title:
HAVEN GROUP – Dynamic Real Estate Requirement Platform

Technology Used:
	•	Angular
	•	TypeScript
	•	HTML & CSS
	•	Angular Reactive Forms
	•	Angular HttpClient

Project Type:
Dynamic Web Application (Prototype)

⸻

🧠 PROJECT OBJECTIVE

To develop a modern Angular-based real estate platform that focuses on collecting user requirements instead of just listing properties.

The system allows users to:
	•	Enter their property needs
	•	Specify budget, location, and type
	•	Submit their interest

The platform then stores this information, enabling the company to match suitable properties with user requirements.

⸻

💡 PROJECT CONCEPT

Unlike traditional real estate websites that only display listings, this platform is designed as a:

👉 Requirement-Based Property System

Users do not search endlessly — instead:
	•	They tell their requirements
	•	The company analyzes them
	•	Suitable properties are suggested manually

This approach reflects real-world real estate business operations.

⸻

🎨 BRAND IDENTITY
	•	Theme: Black & Gold
	•	Style: Luxury, Modern, Professional
	•	Focus: Trust, Investment, Premium Experience

WEBSITE STRUCTURE

The application is designed as a single-page structured website with the following flow:

Header → Hero → Requirement Section → Dynamic Form → Land Section → Projects → About → Contact

HEADER
	•	HAVEN GROUP Logo
	•	Navigation Menu:
	•	Home
	•	Land
	•	Projects
	•	About
	•	Contact
	•	Call-to-action button:
👉 “Book Site Visit”

⸻

🎬 HERO SECTION
	•	Full-screen promotional video
	•	Overlay text and branding
	•	Call-to-action button:
👉 “Explore Projects”

⸻

🧠 MAIN FEATURE (CORE SECTION)

🔥 “Tell Us What You’re Looking For”

This is the most important section of the project.

Users are presented with options:
	•	Land
	•	Commercial
	•	Residential

Based on selection, a dynamic form is displayed.

⸻

🧩 DYNAMIC FORM SYSTEM

The form adapts based on user selection.

⸻

🏞️ LAND FORM

Fields:
	•	Name
	•	Phone Number
	•	Acres Required
	•	Budget
	•	Location
	•	Purpose (Investment / Farmhouse)
	•	Message

⸻

🏢 COMMERCIAL FORM

Fields:
	•	Name
	•	Phone Number
	•	Property Type (Shop / Office)
	•	Budget
	•	Location
	•	Business Type
	•	Message

⸻

🏠 RESIDENTIAL FORM

Fields:
	•	Name
	•	Phone Number
	•	Configuration (1BHK / 2BHK etc.)
	•	Budget
	•	Location
	•	Purpose (Family / Investment)
	•	Message

⸻

📊 FORM FUNCTIONALITY
	•	Built using Angular Reactive Forms
	•	Includes validation for required fields
	•	Submit button disabled if invalid
	•	On submission:
	•	Data is stored locally
	•	Displayed dynamically in list format

Data flow User Input → Angular Form → Service → Store Data → Display Output
