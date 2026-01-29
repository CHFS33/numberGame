import React from 'react';
import '../styles/App.css'; // Ensure we can access styles if needed, though we will pass styles or use CSS modules ideally.
// We'll stick to App.css or inline styles for now as per plan.

const NumberCard = ({ number, onClick, disabled }) => {
    return (
        <button
            className="number-card"
            onClick={() => onClick(number)}
            disabled={disabled}
            style={{
                backgroundColor: 'var(--light-color)',
                border: '4px solid var(--secondary-color)',
                borderRadius: '16px',
                padding: '2rem',
                fontSize: '4rem',
                fontWeight: 'bold',
                color: 'var(--dark-color)',
                boxShadow: '0 8px 0 var(--dark-color)',
                transition: 'transform 0.1s',
                minWidth: '120px',
                minHeight: '160px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '10px'
            }}
            onMouseDown={(e) => !disabled && (e.currentTarget.style.transform = 'translateY(4px)')}
            onMouseUp={(e) => !disabled && (e.currentTarget.style.transform = 'translateY(0)')}
            onMouseLeave={(e) => !disabled && (e.currentTarget.style.transform = 'translateY(0)')}
        >
            {number}
        </button>
    );
};

export default NumberCard;
