import React from 'react';
import { motion } from 'framer-motion';

const Cover = ({ onOpen }) => {
    return (
        <motion.div
            className="cover"
            initial={{ rotateY: 0 }}
            exit={{ rotateY: -180, transition: { duration: 0.8 } }}
            onClick={onOpen}
            style={{
                width: '100%',
                height: '100%',
                // Glassmorphism Base
                backgroundColor: '#2a2a2a',
                borderRadius: '10px 20px 20px 10px',
                // Image background
                backgroundImage: `url('/cov.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                // Border and Shadow
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37), inset 0 0 10px rgba(255,255,255,0.05)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                position: 'absolute',
                top: 0,
                left: 0,
                perspective: '1000px',
                transformOrigin: 'left',
            }}
        >
            {/* Decorative inner frame with strong blur for text readability */}
            <div style={{
                position: 'relative', // Added for absolute positioning of child
                width: '80%',
                height: '80%',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                alignItems: 'flex-end', // Right align
                borderRadius: '5px',
                background: 'rgba(0, 0, 0, 0.2)',
                padding: '2rem', // Standard padding for corner
            }}>
                <h1 style={{
                    background: 'linear-gradient(to right, #FFF7D6, #FFD700, #FFEA00, #FFF7D6)', // Brighter, cleaner gold
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    color: '#FFD700', // Brighter fallback
                    margin: '0 0 10px 0',
                    fontSize: '3rem',
                    lineHeight: '1',
                    textAlign: 'right', // Right align
                    fontWeight: '400', // Slightly thicker for visibility
                    fontFamily: 'Cormorant Garamond, serif',
                    letterSpacing: '1px',
                    filter: 'drop-shadow(0 0 8px rgba(255, 215, 0, 0.5)) drop-shadow(0 2px 2px rgba(0,0,0,0.8))', // Glow + Shadow
                }}>Happy<br />Valentine<br />Sparrow</h1>

                <p style={{
                    position: 'relative',
                    color: 'rgba(255, 255, 255, 0.6)',
                    margin: 0,
                    fontSize: '0.7rem',
                    letterSpacing: '3px',
                    textTransform: 'uppercase',
                    textAlign: 'right', // Right align
                    width: '100%'
                }}>Tap to Open</p>
            </div>
        </motion.div>
    );
};

export default Cover;
