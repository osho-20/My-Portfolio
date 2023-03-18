import React, { useCallback } from 'react'
import Particles from "react-particles";
import { loadFull } from "tsparticles";
export default function Particle() {
    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
    }, []);
    return (
        <div>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    background: {
                        color: {
                            value: "#11111",
                        },
                    },
                    fpsLimit: 120,
                    interactivity: {
                        detectsOn: "window",
                        events: {
                            onClick: {
                                enable: false,
                                mode: "push"
                            },
                            onDiv: {
                                selectors: "#repulse-div",
                                enable: false,
                                mode: "repulse",
                                type: "circle"
                            },
                            onHover: {
                                enable: true,
                                mode: "bubble",
                                parallax: {
                                    enable: false,
                                    force: 2,
                                    smooth: 10
                                }
                            },
                            resize: {
                                delay: 0.5,
                                enable: true
                            }
                        },
                        modes: {
                            attract: {
                                distance: 200,
                                duration: 0.4,
                                easing: "ease-out-quad",
                                factor: 1,
                                maxSpeed: 50,
                                speed: 1
                            },
                            bounce: {
                                distance: 200
                            },
                            bubble: {
                                distance: 40,
                                duration: 2,
                                mix: false,
                                opacity: 8,
                                size: 6,
                                divs: {
                                    distance: 200,
                                    duration: 0.4,
                                    mix: false,
                                }
                            },
                            connect: {
                                distance: 80,
                                links: {
                                    opacity: 0.5
                                },
                                radius: 60
                            },
                            grab: {
                                distance: 400,
                                links: {
                                    blink: false,
                                    consent: false,
                                    opacity: 1
                                }
                            },
                            push: {
                                default: true,
                                quantity: 4
                            },
                            remove: {
                                quantity: 2
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                                factor: 100,
                                speed: 1,
                                maxSpeed: 50,
                                easing: "ease-out-quad",
                                divs: {
                                    distance: 200,
                                    duration: 0.4,
                                    factor: 100,
                                    speed: 1,
                                    maxSpeed: 50,
                                    easing: "ease-out-quad",
                                }
                            },
                            slow: {
                                factor: 1,
                                radius: 0
                            },
                            trail: {
                                delay: 1,
                                pauseOnStop: false,
                                quantity: 1
                            },
                            light: {
                                area: {
                                    gradient: {
                                        start: {
                                            value: "#ffffff"
                                        },
                                        stop: {
                                            value: "#000000"
                                        }
                                    },
                                    radius: 1000
                                },
                                shadow: {
                                    color: {
                                        value: "#000000"
                                    },
                                    length: 2000
                                }
                            }
                        }
                    },
                    particles: {
                        bounce: {
                            horizontal: {
                                random: {
                                    enable: false,
                                    minimumValue: 0.1
                                },
                                value: 1
                            },
                            vertical: {
                                random: {
                                    enable: false,
                                    minimumValue: 0.1
                                },
                                value: 1
                            }
                        },
                        collisions: {
                            absorb: {
                                speed: 2
                            },
                            bounce: {
                                horizontal: {
                                    random: {
                                        enable: false,
                                        minimumValue: 0.1
                                    },
                                    value: 1
                                },
                                vertical: {
                                    random: {
                                        enable: false,
                                        minimumValue: 0.1
                                    },
                                    value: 1
                                }
                            },
                            enable: false,
                            mode: "bounce",
                            overlap: {
                                enable: true,
                                retries: 0
                            }
                        },
                        color: {
                            value: "#ffffff",
                            animation: {
                                h: {
                                    count: 0,
                                    enable: false,
                                    offset: 0,
                                    speed: 1,
                                    decay: 0,
                                    sync: true
                                },
                                s: {
                                    count: 0,
                                    enable: false,
                                    offset: 0,
                                    speed: 1,
                                    decay: 0,
                                    sync: true
                                },
                                l: {
                                    count: 0,
                                    enable: false,
                                    offset: 0,
                                    speed: 1,
                                    decay: 0,
                                    sync: true
                                }
                            }
                        },
                        move: {
                            angle: {
                                offset: 0,
                                value: 90
                            },
                            attract: {
                                distance: 200,
                                enable: false,
                                rotate: {
                                    x: 600,
                                    y: 1200
                                }
                            },
                            center: {
                                x: 50,
                                y: 50,
                                mode: "percent",
                                radius: 0
                            },
                            decay: 0,
                            distance: {},
                            direction: "none",
                            drift: 0,
                            enable: true,
                            gravity: {
                                acceleration: 9.81,
                                enable: false,
                                inverse: false,
                                maxSpeed: 50
                            },
                            path: {
                                clamp: true,
                                delay: {
                                    random: {
                                        enable: false,
                                        minimumValue: 0
                                    },
                                    value: 0
                                },
                                enable: false,
                                options: {}
                            },
                            outModes: {
                                default: "bounce",
                                bottom: "bounce",
                                left: "bounce",
                                right: "bounce",
                                top: "bounce"
                            },
                            random: false,
                            size: true,
                            speed: 5,
                            spin: {
                                acceleration: 0,
                                enable: false
                            },
                            straight: false,
                            trail: {
                                enable: false,
                                length: 10,
                            },
                            vibrate: true,
                            warp: false
                        },
                        number: {
                            density: {
                                enable: false,
                                width: 1920,
                                height: 1080
                            },
                            limit: 0,
                            value: 50
                        },
                        opacity: {
                            random: {
                                enable: true,
                                minimumValue: 0.9
                            },
                            value: {
                                min: 0.05,
                                max: 0.4
                            },
                            animation: {
                                count: 0,
                                enable: true,
                                speed: 2,
                                decay: 0,
                                sync: false,
                                destroy: "none",
                                startValue: "random",
                                minimumValue: 0.05
                            }
                        },
                        reduceDuplicates: true,
                        shadow: {
                            blur: 0,
                            color: {
                                value: "#11111"
                            },
                            enable: true,
                            offset: {
                                x: 1,
                                y: 1
                            }
                        },
                        shape: {
                            options: {},
                            type: "circle"
                        },
                        size: {
                            random: {
                                enable: true,
                                minimumValue: 1
                            },
                            value: { min: 2, max: 4 },
                            animation: {
                                count: 1000,
                                enable: true,
                                speed: 40,
                                decay: 0,
                                sync: true,
                                destroy: 100,
                                startValue: "random",
                                minimumValue: 0.1
                            }
                        },
                        stroke: {
                            width: 0
                        },
                        zIndex: {
                            random: {
                                enable: true,
                                minimumValue: 0
                            },
                            value: 0,
                            opacityRate: 1,
                            sizeRate: 1,
                            velocityRate: 1
                        },
                        life: {
                            count: 0,
                            delay: {
                                random: {
                                    enable: false,
                                    minimumValue: 0
                                },
                                value: 0,
                                sync: false
                            },
                            duration: {
                                random: {
                                    enable: false,
                                    minimumValue: 0.0001
                                },
                                value: 0,
                                sync: false
                            }
                        },
                        rotate: {
                            random: {
                                enable: false,
                                minimumValue: 0
                            },
                            value: 0,
                            animation: {
                                enable: false,
                                speed: 0,
                                decay: 0,
                                sync: false
                            },
                            direction: "clockwise",
                            path: false
                        },
                        destroy: {
                            bounds: {},
                            mode: "none",
                            split: {
                                count: 1,
                                factor: {
                                    random: {
                                        enable: false,
                                        minimumValue: 0
                                    },
                                    value: 3
                                },
                                rate: {
                                    random: {
                                        enable: false,
                                        minimumValue: 0
                                    },
                                    value: {
                                        min: 4,
                                        max: 9
                                    }
                                },
                                sizeOffset: true
                            }
                        },
                        roll: {
                            darken: {
                                enable: false,
                                value: 0
                            },
                            enable: false,
                            enlighten: {
                                enable: false,
                                value: 0
                            },
                            mode: "vertical",
                            speed: 25
                        },
                        tilt: {
                            random: {
                                enable: false,
                                minimumValue: 0
                            },
                            value: 0,
                            animation: {
                                enable: false,
                                speed: 0,
                                decay: 0,
                                sync: false
                            },
                            direction: "clockwise",
                            enable: false
                        },
                        twinkle: {
                            lines: {
                                enable: false,
                                frequency: 0.05,
                                opacity: 1
                            },
                            particles: {
                                enable: false,
                                frequency: 0.05,
                                opacity: 1
                            }
                        },
                        wobble: {
                            distance: 5,
                            enable: false,
                            speed: {
                                angle: 50,
                                move: 10
                            }
                        },
                        orbit: {
                            animation: {
                                count: 0,
                                enable: false,
                                speed: 1,
                                decay: 0,
                                sync: false
                            },
                            enable: false,
                            opacity: 1,
                            rotation: {
                                random: {
                                    enable: false,
                                    minimumValue: 0
                                },
                                value: 45
                            },
                            width: 1
                        },
                        links: {
                            blink: false,
                            color: {
                                value: "#ffffff"
                            },
                            consent: false,
                            distance: 30,
                            enable: true,
                            frequency: 1,
                            opacity: 0.4,
                            shadow: {
                                blur: 5,
                                color: {
                                    value: "#000"
                                },
                                enable: false
                            },
                            triangles: {
                                enable: false,
                                frequency: 1
                            },
                            width: 1,
                            warp: false
                        },
                        repulse: {
                            random: {
                                enable: false,
                                minimumValue: 0
                            },
                            value: 0,
                            enabled: false,
                            distance: 1,
                            duration: 1,
                            factor: 1,
                            speed: 1
                        }
                    },

                    detectRetina: true,
                }}
            />
        </div>
    )
}