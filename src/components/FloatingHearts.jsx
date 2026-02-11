import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';

const FloatingHearts = () => {
    const [dimensions, setDimensions] = useState({ width: 1000, height: 1000 });

    useEffect(() => {
        setDimensions({ width: window.innerWidth, height: window.innerHeight });

        const handleResize = () => {
            setDimensions({ width: window.innerWidth, height: window.innerHeight });
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Create hearts that orbit the center
    const hearts = Array.from({ length: 100 }).map((_, i) => {
        // Orbit radius based on screen size (from close to center to far out)
        const maxRadius = Math.max(dimensions.width, dimensions.height) * 0.8;
        const radius = 100 + Math.random() * maxRadius;


        // Red-only Color Palette
        const colors = ['#ff0000', '#cc0000', '#990000', '#ff3333', '#e60000'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];

        return {
            id: i,
            // Scale/Size - slightly more variation for depth
            scale: 0.5 + Math.random() * 2.5,
            // Animation speed - Slower for "aesthetic" feel
            duration: 40 + Math.random() * 60,
            // Orbit radius
            radius: radius,
            // Delay to start at random positions along the orbit
            delay: -Math.random() * 100,
            color: randomColor,
            // Direction: some clockwise, some counter-clockwise for chaos
            direction: Math.random() > 0.4 ? 1 : -1
        };
    });

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: -1,
            overflow: 'hidden',
            background: '#1a1a1a',
            perspective: '1000px'
        }}>
            {/* Center point for all orbits */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: 0,
                height: 0
            }}>
                {hearts.map((heart) => (
                    <motion.div
                        key={heart.id}
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: 0,
                            height: 0,
                        }}
                        animate={{ rotate: 360 * heart.direction }}
                        transition={{
                            duration: heart.duration,
                            repeat: Infinity,
                            ease: "linear",
                            delay: heart.delay
                        }}
                    >
                        {/* The heart offset from the center of rotation */}
                        <div style={{
                            transform: `translate(${heart.radius}px, 0)`,
                        }}>
                            <motion.div
                                // Counter-rotate to keep heart upright
                                animate={{ rotate: -360 * heart.direction }}
                                transition={{
                                    duration: heart.duration,
                                    repeat: Infinity,
                                    ease: "linear",
                                    delay: heart.delay
                                }}
                                style={{
                                    color: heart.color,
                                    fontSize: `${heart.scale}rem`,
                                    opacity: 0.6 + Math.random() * 0.4, // Varied opacity for depth
                                    filter: 'drop-shadow(0 0 8px currentColor)', // Softer glow
                                }}
                            >
                                <FaHeart />
                            </motion.div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default FloatingHearts;
