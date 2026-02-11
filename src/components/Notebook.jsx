import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Cover from './Cover';
import Page from './Page';
import { FaHeart } from 'react-icons/fa';
import RingBox from './RingBox';

const Notebook = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [pageIndex, setPageIndex] = useState(0);

    const pages = [
        {
            content: (
                <div style={{ textAlign: 'left', marginTop: '1rem', paddingLeft: '0' }}>
                    <h2 style={{ fontFamily: 'Dancing Script, cursive', fontSize: '3.70rem', marginBottom: '0.2rem', lineHeight: '1', color: '#5d4037' }}>Dear Love <FaHeart style={{ color: 'red', fontSize: '1.5rem', marginLeft: '5px', verticalAlign: 'middle' }} />,</h2>
                    <p style={noteStyle}>

                        A HAPPY VALENTINE'S DAY BABY..!!!.
                        <br />

                        <br />
                        Today is a day where I feel grateful for so many things, and most of all, for you. As I start writing this, my heart goes back to 2022 — the day I met you for the very first time. From that moment itself, you have given me the feeling that you are the one. That feeling was something I had never truly received from anyone before, and for that alone, I will always be thankful to you.
                    </p>
                    <p style={noteStyle}>
                        Thank you for taking care of me and everything related to me, sometimes even more than my own parents. Your care, your concern, and your constant presence mean more to me than words can ever express.
                    </p>
                </div>
            )
        },
        {
            content: (
                <div style={{ textAlign: 'left', fontSize: '1rem', marginTop: '0', paddingLeft: '1rem' }}>
                    <p style={noteStyle}>
                        Thank you for loving me the way you do — through your care, your calls, your kisses, your hugs, your cuddles, and every little thing you do for me. Each of these may seem small, but together they create a love that is beyond measure. If I had to weigh your love, it would go beyond tonnes, because that is how much love you have given me and credited into my life every single day for the past one year.
                    </p>
                    <p style={noteStyle}>

                    </p>
                    <p style={noteStyle}>
                        Once again, a very Happy Valentine’s Day, my love. I hope our love only doubles, grows stronger, and continues to create countless beautiful memories together. I’m grateful for you, today and always .i love you
                    </p>
                    <RingBox />
                </div>
            )
        },
        {
            content: (
                <div style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <div style={{
                        background: 'white',
                        padding: '15px 15px 40px 15px',
                        boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
                        transform: 'rotate(-3deg)',
                        maxWidth: '280px'
                    }}>
                        <img
                            src="/us.jpg"
                            alt="Us"
                            style={{
                                width: '100%',
                                height: 'auto',
                                display: 'block',
                                filter: 'sepia(0.1)'
                            }}
                        />
                        <div style={{
                            fontFamily: 'Dancing Script, cursive',
                            fontSize: '1.5rem',
                            color: '#555',
                            textAlign: 'center',
                            marginTop: '10px'
                        }}>
                            Love you forever ❤️
                        </div>
                    </div>
                </div>
            )
        }
    ];

    const turnPage = (direction) => {
        // Haptic feedback
        if (navigator.vibrate) navigator.vibrate(100);

        if (direction === 'next') {
            if (pageIndex < pages.length - 1) setPageIndex(pageIndex + 1);
        } else {
            if (pageIndex > 0) setPageIndex(pageIndex - 1);
            else setIsOpen(false); // Close notebook if going back from first page
        }
    };

    return (
        <div style={{
            position: 'relative',
            width: '400px',
            height: '600px',
            perspective: '1500px'
        }}>
            <AnimatePresence mode="wait">
                {!isOpen ? (
                    <Cover key="cover" onOpen={() => setIsOpen(true)} />
                ) : (
                    <motion.div
                        key="notebook-open"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        style={{ width: '100%', height: '100%', position: 'relative' }}
                    >
                        {/* Back Cover / Binding effect for open book */}
                        <div style={{
                            position: 'absolute',
                            left: '-10px',
                            top: '5px',
                            bottom: '5px',
                            width: '20px',
                            backgroundColor: '#5d4037',
                            borderRadius: '5px 0 0 5px',
                            zIndex: 0
                        }} />

                        <Page pageNumber={pageIndex + 1} totalPages={pages.length}>
                            {pages[pageIndex].content}
                        </Page>

                        {/* Navigation Controls */}
                        <div style={{
                            position: 'absolute',
                            bottom: '-50px',
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'space-between',
                            padding: '0 2rem'
                        }}>
                            <motion.button
                                onClick={() => turnPage('prev')}
                                style={navButtonStyle}
                                whileTap={{ scale: 0.9 }}
                            >
                                Previous
                            </motion.button>
                            {pageIndex < pages.length - 1 && (
                                <motion.button
                                    onClick={() => turnPage('next')}
                                    style={navButtonStyle}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    Next
                                </motion.button>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const navButtonStyle = {
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(5px)',
    WebkitBackdropFilter: 'blur(5px)',
    border: '1px solid rgba(255, 255, 255, 0.5)',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '0.9rem',
    cursor: 'pointer',
    color: 'white',
    fontWeight: 'bold',
    padding: '0.5rem 1rem',
    borderRadius: '30px',
    transition: 'all 0.3s ease',
    textShadow: '0 2px 4px rgba(0,0,0,0.5)',
    letterSpacing: '1px'
};

const noteStyle = {
    lineHeight: '1.5rem', // Match the notebook line height
    fontSize: '1.10rem',
    color: '#333',
    fontFamily: 'Dancing Script, cursive', // Handwritten font
    marginBottom: '0' // No extra margin to keep alignment
};

export default Notebook;
