# Gantavya 🤖

**Gantavya** is the official event management and registration platform for SRMCEM Robotics Club's annual tech fest. Built with modern web technologies, it provides a seamless experience for event registration, team management, and admin operations.

## ✨ Features

### Public Features
- 🎯 Browse and explore robotics & tech events
- 📝 Team registration with multi-member support
- 💳 Payment integration with Razorpay
- 📱 Fully responsive design with stunning animations
- 🎨 Futuristic cyberpunk-inspired UI

### Admin Dashboard
- 📊 Real-time KPIs and analytics
- 🗓️ Event management (CRUD operations)
- 👥 Team management and tracking
- 💰 Payment status monitoring
- 📋 Rules management with Markdown support

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Database:** Supabase (PostgreSQL)
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui, Radix UI
- **Animations:** GSAP, Framer Motion
- **3D Graphics:** Three.js, React Three Fiber
- **Payments:** Razorpay
- **Authentication:** Custom auth with bcrypt

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-repo/gantavya.git
   cd gantavya
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
   RAZORPAY_KEY_ID=your_razorpay_key
   RAZORPAY_KEY_SECRET=your_razorpay_secret
   ```

4. **Run database migrations**
   
   Apply the SQL migrations from `supabase/migrations/` to your Supabase project.

5. **Start the development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the app.

## 📁 Project Structure

```
src/
├── app/
│   ├── (home)/          # Public homepage
│   ├── admin/           # Admin dashboard
│   │   ├── events/      # Event management
│   │   ├── payments/    # Payment tracking
│   │   └── teams/       # Team management
│   ├── api/             # API routes
│   ├── events/[slug]/   # Event detail pages
│   └── login/           # Admin login
├── components/
│   ├── blocks/          # Page sections
│   ├── layout/          # Navbar, Footer, etc.
│   ├── register/        # Registration forms
│   └── ui/              # Reusable UI components
├── lib/                 # Utilities & Supabase client
└── utils/               # Helper functions
```

## 🚀 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## 🔐 Admin Access

1. Navigate to `/create-admin` to create the first admin account (requires access code)
2. Login at `/login` with your credentials
3. Access the dashboard at `/admin`

## 📄 License

This project is proprietary software for SRMCEM Robotics Club.

## 🤝 Contributing

For internal team members only. Please follow the established code style and create pull requests for any changes.

---

**Built with ❤️ by Pratyush Tiwari**