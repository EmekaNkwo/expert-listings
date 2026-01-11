# Expert Listings Dashboard

A modern, responsive dashboard application built with Next.js for managing and viewing property listings, sales data, and user information.

🌐 **Live Demo**: [https://expert-listings.vercel.app/](https://expert-listings.vercel.app/)

## 🚀 Tech Stack

- **Framework**: Next.js 16.1.1 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Charts**: Recharts
- **Font**: Euclid Circular A (Local)

## 📁 Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with font configuration
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
└── modules/               # Feature modules
    ├── dashboard/         # Main dashboard composition
    ├── header/            # Header with navigation and user info
    ├── navigation/        # Main navigation menu
    ├── sales-overview/    # Sales charts and financial metrics
    ├── property-listings/ # Property cards and carousel
    ├── listings-overview/ # Listings summary
    ├── users-overview/    # Users summary
    ├── budget-modal/      # Budget setup modal
    ├── calendar-modal/    # Calendar picker modal
    ├── welcome/           # Welcome message
    └── shared/            # Shared components and utilities
        └── components/    # Reusable UI components
```

## 🏗️ Architecture

The project follows a **module-based architecture** with clear separation of concerns:

- **Modules**: Each feature is a self-contained module with its own components, hooks, and logic
- **Components**: Presentational components focused on UI rendering
- **Hooks**: Business logic and state management
- **Shared**: Reusable components and utilities used across modules

## 🚦 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
# Create production build
npm run build

# Start production server
npm start
```

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Styling

The project uses Tailwind CSS with custom configuration:

- Custom color variables for theming
- Responsive breakpoints (sm, md, lg)
- Custom font (Euclid Circular A) loaded locally

## 📦 Dependencies

- **next**: React framework
- **react** & **react-dom**: UI library
- **recharts**: Chart library
- **tailwindcss**: Utility-first CSS framework

## 📄 License

Private project
