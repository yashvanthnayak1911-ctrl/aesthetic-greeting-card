import React from 'react';
import { motion } from 'framer-motion';

const Page = ({ children, pageNumber, totalPages }) => {
    return (
        <div
            className="page"
            style={{
                width: '100%',
                height: '100%',
                backgroundColor: '#fdfbf7', // Paper color
                backgroundImage: 'linear-gradient(#e1e1e1 1px, transparent 1px)', // Ruled lines
                backgroundSize: '100% 1.5rem', // Match line height
                borderRadius: '5px 15px 15px 5px',
                boxShadow: 'inset 10px 0 20px rgba(0,0,0,0.05), 2px 2px 5px rgba(0,0,0,0.1)',
                padding: '2rem 3rem',
                boxSizing: 'border-box',
                overflowY: 'auto', // Allow scrolling for overflow content
                position: 'relative',
                display: 'flex',
                flexDirection: 'column'
            }}
        >
            {/* hello */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: '2rem',
                bottom: 0,
                width: '2px',
                backgroundColor: 'rgba(255, 100, 100, 0.3)', // Margin line
                zIndex: 0
            }} />

            <div style={{ zIndex: 1, height: '100%', width: '100%' }}>
                {children}
            </div>

            <div style={{
                position: 'absolute',
                bottom: '1rem',
                right: '2rem',
                fontSize: '0.8rem',
                color: '#aaa'
            }}>
                {pageNumber} / {totalPages}
            </div>
        </div>
    );
};

export default Page;
