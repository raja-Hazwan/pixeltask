# 🎮 Pixel Quest Planner

> Transform your daily tasks into an epic pixel-art adventure!11

A gamified task management application where completing real-life tasks advances your pixel character through a beautiful journey.
more  waa testing

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npma
- PostgreSQL 15+
- Redis (optional, for caching) fow better performance
- Git test more ofterefd
ee
### Installation

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd pixeltask
```

2. **Install dependencies**
```bash
npm run install:all
```

3. **Setup Backend**
```bash
cd backend
cp .env.example .env
# Edit .env with your database credentials
```

4. **Setup Database**
```bash
cd backend
npx prisma migrate dev --name init
npx prisma generate
```

5. **Setup Frontend**
```bash
cd frontend
cp .env.example .env
# Edit .env with API URL (default: http://localhost:3000)
```

### Running the Application

#### Development Mode

**Option 1: Run both services together**
```bash
npm run dev
```

**Option 2: Run services separately**

Terminal 1 (Backend):
```bash
npm run dev:backend
```

Terminal 2 (Frontend):
```bash
npm run dev:frontend
```

#### Using Docker

```bash
npm run docker:up
```

### Access the Application

- **Frontend:** http://localhost:5173
- **Backend API:** http://localhost:3000
- **API Health Check:** http://localhost:3000/health

## 📁 Project Structure

```
pixeltask/
├── backend/              # Express + TypeScript API
│   ├── src/
│   │   ├── routes/      # API routes
│   │   ├── controllers/ # Route controllers
│   │   ├── services/    # Business logic
│   │   ├── models/      # Data models
│   │   ├── middleware/  # Express middleware
│   │   └── utils/       # Utility functions
│   └── prisma/          # Database schema
│
├── frontend/            # React + Phaser game
│   ├── src/
│   │   ├── components/  # React UI components
│   │   ├── game/        # Phaser game logic
│   │   ├── ui/          # UI components
│   │   ├── hooks/       # Custom React hooks
│   │   ├── stores/      # State management (Zustand)
│   │   └── utils/       # Utility functions
│   └── public/assets/   # Game assets
│
└── docker/              # Docker configuration
```

## 🛠️ Technology Stack

### Frontend
- **React 18** with TypeScript
- **Phaser.js 3.60+** for game engine
- **TailwindCSS** for styling
- **Zustand** for state management
- **React Query** for data fetching
- **Vite** as build tool

### Backend
- **Node.js 18+** with Express
- **TypeScript**
- **PostgreSQL 15+** database
- **Prisma ORM**
- **JWT** authentication
- **Socket.io** for real-time features

## 📝 Available Scripts

### Root Level
- `npm run install:all` - Install all dependencies
- `npm run dev` - Run both frontend and backend
- `npm run build` - Build both projects
- `npm run docker:up` - Start with Docker
- `npm run docker:down` - Stop Docker containers

### Backend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run prisma:generate` - Generate Prisma client
- `npm run prisma:migrate` - Run database migrations
- `npm run prisma:studio` - Open Prisma Studio

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🎮 Features

- ✅ Task management with categories and priorities
- ✅ Character progression and leveling system
- ✅ XP and reward system
- ✅ Pixel-art game integration
- ✅ Real-time updates with Socket.io
- ⏳ Journey map (coming soon)
- ⏳ Achievement system (coming soon)
- ⏳ Pet companions (coming soon)

## 🔧 Development

### Database Migrations

Create a new migration:
```bash
cd backend
npx prisma migrate dev --name your_migration_name
```

Reset database:
```bash
npx prisma migrate reset
```

### Environment Variables

See `.env.example` files in both `backend` and `frontend` directories for required environment variables.

## 📄 License

MIT License - see LICENSE file for details

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

**Start your productivity quest today! 🎮✨**