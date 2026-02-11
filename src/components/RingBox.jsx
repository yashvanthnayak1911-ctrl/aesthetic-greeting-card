import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GiDiamondRing } from 'react-icons/gi';

const RingBox = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                perspective: '1000px',
                marginTop: '1rem',
                cursor: 'pointer',
                marginBottom: '1rem',
                minHeight: '140px' // Ensure enough space
            }}
            onClick={(e) => {
                e.stopPropagation(); // Prevent page turn if accidentally clicking overlay
                setIsOpen(!isOpen);
                if (navigator.vibrate) navigator.vibrate(100);
            }}
        >
            <div style={{ position: 'relative', width: '80px', height: '80px' }}>

                {/* The Ring */}
                <motion.div
                    initial={{ y: 0, opacity: 0, scale: 0.5 }}
                    animate={isOpen ? { y: -40, opacity: 1, scale: 1.2 } : { y: 0, opacity: 0, scale: 0.5 }}
                    transition={{ delay: 0.1, duration: 0.5, type: 'spring' }}
                    style={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        top: '15px',
                        margin: 'auto',
                        textAlign: 'center',
                        zIndex: 1,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <GiDiamondRing
                        size={60}
                        color="#FFD700"
                        style={{
                            filter: 'drop-shadow(0 0 5px rgba(255, 215, 0, 0.8)) drop-shadow(0 0 10px rgba(255, 255, 255, 0.5))'
                        }}
                    />
                </motion.div>

                {/* Box Lid (Top Part) */}
                <motion.div
                    initial={{ rotateX: 0 }}
                    animate={isOpen ? { rotateX: 120 } : { rotateX: 0 }}
                    transition={{ duration: 0.5 }}
                    style={{
                        position: 'absolute',
                        top: 20, // Sit on top of bottom part
                        width: '100%',
                        height: '30px',
                        backgroundColor: '#800000',
                        borderRadius: '10px 10px 0 0',
                        transformOrigin: 'bottom',
                        zIndex: 10,
                        border: '2px solid #500000',
                        borderBottom: 'none',
                        background: 'linear-gradient(135deg, #a00000 0%, #700000 100%)',
                        boxShadow: '0 -2px 5px rgba(0,0,0,0.2)'
                    }}
                >
                    {/* Gold trim on lid */}
                    <div style={{ width: '100%', height: '3px', background: '#FFD700', marginTop: '20px', opacity: 0.8 }}></div>
                </motion.div>

                {/* Box Bottom (Base) */}
                <div style={{
                    position: 'absolute',
                    bottom: 0,
                    width: '100%',
                    height: '30px',
                    backgroundColor: '#800000',
                    borderRadius: '0 0 10px 10px',
                    zIndex: 5,
                    border: '2px solid #500000',
                    borderTop: 'none',
                    background: 'linear-gradient(135deg, #800000 0%, #500000 100%)',
                    boxShadow: '0 5px 15px rgba(0,0,0,0.4)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <div style={{ width: '100%', height: '3px', background: '#FFD700', marginBottom: '10px', opacity: 0.8 }}></div>
                </div>
            </div>

            {/* Click hint */}
            {!isOpen && (
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    style={{
                        marginTop: '10px',
                        textAlign: 'center',
                        fontSize: '0.8rem',
                        color: '#8d6e63',
                        fontFamily: 'Montserrat, sans-serif',
                        fontWeight: 'bold'
                    }}
                >
                    Tap to open <br /> (for a surprise)
                </motion.p>
            )}
        </div>
    );
};

export default RingBox;
