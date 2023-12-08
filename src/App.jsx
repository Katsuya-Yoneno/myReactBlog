import { useCallback } from 'react'
import Particles from 'react-particles'
import { loadSlim } from 'tsparticles-slim'
import Bio from './Bio'
import TimeLine from './TimeLine'
import './App.css'

const App = () => {
    const particlesInit = useCallback(async (engine) => {
        console.log(engine)
        await loadSlim(engine)
    }, [])

    const particlesLoaded = useCallback(async (container) => {
        console.log(container)
    }, [])

    return (
        <>
            <div className="relative">
                <Particles
                    id="tsparticles"
                    init={particlesInit}
                    loaded={particlesLoaded}
                    options={{
                        background: {
                            color: {
                                value: '#171215',
                            },
                        },
                        fpsLimit: 120,
                        interactivity: {
                            events: {
                                onClick: {
                                    enable: true,
                                    mode: 'push',
                                },
                                onHover: {
                                    enable: true,
                                    mode: 'repulse',
                                },
                                resize: true,
                            },
                            modes: {
                                push: {
                                    quantity: 4,
                                },
                                repulse: {
                                    distance: 200,
                                    duration: 0.4,
                                },
                            },
                        },
                        particles: {
                            color: {
                                value: '#ffffff',
                            },
                            links: {
                                color: '#ffffff',
                                distance: 150,
                                enable: true,
                                opacity: 0.5,
                                width: 1,
                            },
                            move: {
                                direction: 'none',
                                enable: true,
                                outModes: {
                                    default: 'bounce',
                                },
                                random: false,
                                speed: 5,
                                straight: false,
                            },
                            number: {
                                density: {
                                    enable: true,
                                    area: 1500,
                                },
                                value: 100,
                            },
                            opacity: {
                                value: 0.7,
                            },
                            shape: {
                                type: 'circle',
                            },
                            size: {
                                value: { min: 1, max: 5 },
                            },
                        },
                        detectRetina: true,
                    }}
                />
            </div>
            <div className="flex justify-center">
                <div className="flex-none md:mt-20 md:mr-20 md:w-96 sm:w-80 w-64">
                    <Bio />
                </div>
                <div className="flex-none md:mt-20 md:mr-20 md:w-80 sm:w-96 w-64">
                    <TimeLine />
                </div>
            </div>
        </>
    )
}

export default App
