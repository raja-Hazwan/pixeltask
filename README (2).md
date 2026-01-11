# 🎮 Pixel Quest Planner

> Transform your daily tasks into an epic pixel-art adventure!

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

## 🌟 Overview

Pixel Quest Planner is a gamified task management application where completing real-life tasks advances your pixel character through a beautiful journey. Watch your avatar level up, unlock rewards, and build streaks as you conquer your daily goals!

## ✨ Core Features

### 🎯 Task Management
- Create, edit, and organize daily tasks
- Set priorities, due dates, and estimated durations
- Categorize tasks (Work, Personal, Learning, Health, Creative)
- Add subtasks and attachments
- Recurring task support

### 🏃 Character Progression
- Customizable pixel-art avatar
- Level up through task completion
- Unlock cosmetic items and accessories
- Character stats: Productivity, Consistency, Focus
- Multiple character classes based on task types

### 🗺️ Journey System
- Visual map showing daily progress
- Complete tasks to move character forward
- Unlock new biomes and regions weekly/monthly
- Beautiful pixel-art worlds to explore
- Checkpoint system for daily goals

### 🏆 Rewards & Achievements
- XP and leveling system
- Earn coins for completing tasks
- Unlock pets and companions
- Achievement badges
- Streak bonuses and multipliers
- Monthly boss battles

### 📊 Analytics & Insights
- Daily/weekly/monthly productivity reports
- Time tracking per category
- Completion rate analysis
- Streak tracking
- Goal progress visualization

### 🎨 Customization
- Avatar customization (clothes, accessories, colors)
- Home base building and decoration
- Pet collection and care
- Unlockable themes and tilesets

## 🛠️ Technology Stack

### Frontend
- **Framework:** React 18 with TypeScript
- **Game Engine:** Phaser.js 3.60+
- **Styling:** TailwindCSS 3.x
- **State Management:** React Query + Zustand
- **Build Tool:** Vite
- **Animation:** Framer Motion

### Backend
- **Runtime:** Node.js 18+ with Express
- **Language:** TypeScript
- **Database:** PostgreSQL 15+
- **ORM:** Prisma 5.x
- **Authentication:** JWT + bcrypt
- **Real-time:** Socket.io
- **Validation:** Zod

### Infrastructure
- **Caching:** Redis
- **File Storage:** AWS S3 / Local (development)
- **Deployment:** Docker + Docker Compose
- **CI/CD:** GitHub Actions
- **Monitoring:** (Future: Sentry, LogRocket)

## 📋 Project Structure

```
pixel-quest-planner/
├── frontend/                 # React + Phaser game client
│   ├── src/
│   │   ├── components/       # React UI components
│   │   ├── game/            # Phaser game logic
│   │   │   ├── engine/      # Core game engine
│   │   │   ├── sprites/     # Sprite management
│   │   │   ├── scenes/      # Game scenes
│   │   │   └── systems/     # Game systems (XP, inventory, etc.)
│   │   ├── ui/              # UI-specific components
│   │   ├── hooks/           # Custom React hooks
│   │   ├── stores/          # State management
│   │   └── utils/           # Utility functions
│   └── public/
│       └── assets/          # Game assets (sprites, audio, fonts)
│
├── backend/                  # Express API server
│   ├── src/
│   │   ├── routes/          # API routes
│   │   ├── controllers/     # Route controllers
│   │   ├── services/        # Business logic
│   │   ├── models/          # Data models
│   │   ├── middleware/      # Express middleware
│   │   ├── utils/           # Utility functions
│   │   └── server.ts        # Server entry point
│   └── prisma/
│       └── schema.prisma    # Database schema
│
├── docs/                     # Documentation
│   ├── ARCHITECTURE.md      # System architecture
│   ├── API.md              # API documentation
│   ├── GAME_MECHANICS.md   # Game design & mechanics
│   ├── DATABASE.md         # Database schema details
│   └── DEPLOYMENT.md       # Deployment guide
│
└── docker/                   # Docker configuration
    ├── docker-compose.yml
    ├── Dockerfile.frontend
    └── Dockerfile.backend
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn
- PostgreSQL 15+
- Redis (optional, for caching)
- Git

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/pixel-quest-planner.git
cd pixel-quest-planner
```

2. **Backend Setup**
```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your database credentials
npx prisma migrate dev
npm run dev
```

3. **Frontend Setup**
```bash
cd frontend
npm install
cp .env.example .env
# Edit .env with API URL
npm run dev
```

4. **Access the application**
- Frontend: http://localhost:5173
- Backend API: http://localhost:3000

## 📚 Documentation

- [System Architecture](docs/ARCHITECTURE.md) - High-level system design
- [API Documentation](docs/API.md) - Complete API reference
- [Game Mechanics](docs/GAME_MECHANICS.md) - Game rules and formulas
- [Database Schema](docs/DATABASE.md) - Database design
- [Deployment Guide](docs/DEPLOYMENT.md) - How to deploy

## 🗓️ Development Roadmap

### Phase 1: MVP Foundation (Weeks 1-4)
- [x] Project setup and documentation
- [ ] Backend API with authentication
- [ ] Basic task CRUD operations
- [ ] Database schema implementation
- [ ] Simple frontend UI

### Phase 2: Core Task System (Weeks 5-7)
- [ ] Task categories and priorities
- [ ] Recurring tasks
- [ ] Subtasks and attachments
- [ ] Task filtering and search
- [ ] Basic analytics

### Phase 3: Game Engine (Weeks 8-11)
- [ ] Phaser.js integration
- [ ] Character sprite system
- [ ] World map rendering
- [ ] Character movement
- [ ] Animation system

### Phase 4: Gamification (Weeks 12-15)
- [ ] XP and leveling system
- [ ] Reward system
- [ ] Achievement system
- [ ] Inventory management
- [ ] Pet companions

### Phase 5: Advanced Features (Weeks 16-20)
- [ ] Home base building
- [ ] Multiplayer/social features
- [ ] Advanced analytics
- [ ] Mobile responsiveness
- [ ] Notification system

### Phase 6: Polish & Launch (Weeks 21-24)
- [ ] Performance optimization
- [ ] Bug fixes and testing
- [ ] User onboarding flow
- [ ] Documentation completion
- [ ] Production deployment

## 🎮 Game Mechanics Summary

### XP Formula
```
Base XP = estimated_time_minutes * 10
Priority Multiplier = 1.5x (High), 1.2x (Medium), 1.0x (Low)
Streak Bonus = +10% per 7-day streak maintained
Total XP = Base XP × Priority Multiplier × (1 + Streak Bonus)
```

### Leveling System
```
XP Required for Next Level = current_level × 100 + 50
Level 1 → 2: 150 XP
Level 2 → 3: 250 XP
Level 3 → 4: 350 XP
```

### Journey Distance
```
Distance per Task = (task_duration_minutes / 10) × difficulty_multiplier
Daily Goal = 100 distance units
Weekly Goal = 700 distance units
```

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guidelines](CONTRIBUTING.md) first.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- Your Name - Initial work

## 🙏 Acknowledgments

- Inspired by productivity apps like Habitica and Todoist
- Pixel art community for design inspiration
- Phaser.js community for game development resources

## 📧 Contact

- Project Link: https://github.com/yourusername/pixel-quest-planner
- Issues: https://github.com/yourusername/pixel-quest-planner/issues

---

**Start your productivity quest today! 🎮✨**
