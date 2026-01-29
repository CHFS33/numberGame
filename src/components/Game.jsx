import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Trophy, Frown, ArrowLeft } from 'lucide-react';
import NumberCard from './NumberCard';

const Game = ({ settings, onExit }) => {
    const [options, setOptions] = useState([]);
    const [message, setMessage] = useState('');
    const [score, setScore] = useState(0);
    const [hasAnswered, setHasAnswered] = useState(false);

    // Generate numbers on mount or reset
    const generateNumbers = () => {
        const newOptions = new Set();
        // Safety check to avoid infinite loop if range is smaller than count
        const safeMax = Math.max(settings.maxNumber, settings.optionCount);

        while (newOptions.size < settings.optionCount) {
            const num = Math.floor(Math.random() * safeMax) + 1;
            newOptions.add(num);
        }
        setOptions(Array.from(newOptions));
        setMessage('');
        setHasAnswered(false);
    };

    useEffect(() => {
        generateNumbers();
    }, [settings]);

    const checkAnswer = (selectedNumber) => {
        if (hasAnswered) return;

        const target = settings.mode === 'bigger'
            ? Math.max(...options)
            : Math.min(...options);

        if (selectedNumber === target) {
            setScore(s => s + 1);
            setMessage('CORRECT! 🎉');
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
            setTimeout(generateNumbers, 2000); // Next round after 2s
            setHasAnswered(true);
        } else {
            setMessage('Try Again! 🤔');
            // No penalty, just encouragement
        }
    };

    return (
        <div className="game-container" style={{ textAlign: 'center', padding: '20px' }}>
            <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
                <button
                    onClick={onExit}
                    style={{
                        background: 'none',
                        fontSize: '1.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px'
                    }}
                >
                    <ArrowLeft /> Back
                </button>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary-color)' }}>
                    Score: {score}
                </div>
            </header>

            <h2 style={{ fontSize: '2.5rem', marginBottom: '40px' }}>
                Which is <span style={{ color: 'var(--primary-color)' }}>{settings.mode === 'bigger' ? 'BIGGEST' : 'SMALLEST'}</span>?
            </h2>

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '20px',
                flexWrap: 'wrap',
                marginBottom: '40px'
            }}>
                {options.map((num) => (
                    <NumberCard
                        key={num}
                        number={num}
                        onClick={checkAnswer}
                        disabled={hasAnswered && num !== (settings.mode === 'bigger' ? Math.max(...options) : Math.min(...options))}
                    />
                ))}
            </div>

            <div style={{ height: '50px', fontSize: '2rem', fontWeight: 'bold' }}>
                {message}
            </div>
        </div>
    );
};

export default Game;
