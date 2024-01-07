import { useCallback, useState, useEffect } from 'react'
import BackGround from './common/Particles'
import Profile from './profile/profile'
import './App.css'

const App = () => {
    const [currentView, setCurrentView] = useState('profile')

    return (
        <>
            <BackGround />
            <div className="relative">
                <div className="z-10 my-3">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-5 mx-2 rounded"
                        onClick={() => {
                            setCurrentView('profile')
                        }}
                    >
                        Profile
                    </button>
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-5 mx-2 rounded"
                        onClick={() => {
                            setCurrentView('blog')
                        }}
                    >
                        blog
                    </button>
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-5 mx-2 rounded"
                        onClick={() => {
                            setCurrentView('fun')
                        }}
                    >
                        fun
                    </button>
                </div>
                <div>
                    {currentView === 'profile' ? (
                        <Profile />
                    ) : currentView === 'blog' ? (
                        <Blog />
                    ) : currentView === 'fun' ? (
                        <Fun />
                    ) : (
                        <>etc</>
                    )}
                </div>
            </div>
        </>
    )
}

export default App
