import { useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {
  const [count, setCount] = useState(0)

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-gradient-to-b from-blue-900 to-purple-900 text-white">
        <div className="container mx-auto px-4 py-8">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-pixel mb-4">🎮 Pixel Quest Planner</h1>
            <p className="text-xl">Transform your daily tasks into an epic adventure!</p>
          </header>

          <main className="flex flex-col items-center justify-center space-y-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-2xl">
              <h2 className="text-2xl font-pixel mb-4">Welcome, Adventurer! ⚔️</h2>
              <p className="mb-4">
                Your quest to productivity begins here. Complete tasks, level up your character,
                and unlock amazing rewards!
              </p>

              <div className="bg-game-grass/20 rounded-lg p-6 mb-4">
                <h3 className="text-lg font-pixel mb-2">Getting Started:</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Create your first task</li>
                  <li>Customize your avatar</li>
                  <li>Start your journey</li>
                  <li>Earn XP and level up!</li>
                </ul>
              </div>

              <div className="flex justify-center">
                <button
                  onClick={() => setCount((count) => count + 1)}
                  className="bg-primary-500 hover:bg-primary-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                >
                  Tasks Completed: {count}
                </button>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl">
              <h3 className="text-xl font-pixel mb-4">🎯 Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-game-sky/20 p-4 rounded">
                  <h4 className="font-bold mb-2">📋 Task Management</h4>
                  <p className="text-sm">Create, organize, and track your tasks</p>
                </div>
                <div className="bg-game-grass/20 p-4 rounded">
                  <h4 className="font-bold mb-2">🏃 Character Progression</h4>
                  <p className="text-sm">Level up and customize your avatar</p>
                </div>
                <div className="bg-game-ground/20 p-4 rounded">
                  <h4 className="font-bold mb-2">🗺️ Journey System</h4>
                  <p className="text-sm">Explore beautiful pixel worlds</p>
                </div>
                <div className="bg-game-water/20 p-4 rounded">
                  <h4 className="font-bold mb-2">🏆 Achievements</h4>
                  <p className="text-sm">Unlock rewards and badges</p>
                </div>
              </div>
            </div>
          </main>

          <footer className="text-center mt-12 text-sm opacity-75">
            <p>Built with React, TypeScript, and Phaser.js</p>
          </footer>
        </div>
      </div>
    </QueryClientProvider>
  )
}

export default App
