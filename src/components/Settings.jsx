import React from 'react';
import { Settings as SettingsIcon, Check } from 'lucide-react';

const Settings = ({ settings, setSettings }) => {
    return (
        <div className="settings-panel" style={{
            marginTop: '40px',
            padding: '20px',
            backgroundColor: 'white',
            borderRadius: '20px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            maxWidth: '500px',
            width: '90%'
        }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--dark-color)' }}>
                <SettingsIcon /> Parents Corner
            </h3>

            <div style={{ marginBottom: '20px', textAlign: 'left' }}>
                <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>Max Number:</p>
                <div style={{ display: 'flex', gap: '10px' }}>
                    {[10, 20, 100].map(num => (
                        <button
                            key={num}
                            onClick={() => setSettings(s => ({ ...s, maxNumber: num }))}
                            style={{
                                padding: '10px 20px',
                                borderRadius: '8px',
                                backgroundColor: settings.maxNumber === num ? 'var(--secondary-color)' : '#eee',
                                color: settings.maxNumber === num ? 'white' : 'var(--dark-color)',
                                fontWeight: 'bold'
                            }}
                        >
                            {num}
                        </button>
                    ))}
                </div>
            </div>

            <div style={{ textAlign: 'left' }}>
                <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>How many numbers?</p>
                <div style={{ display: 'flex', gap: '10px' }}>
                    {[2, 3, 5].map(cnt => (
                        <button
                            key={cnt}
                            onClick={() => setSettings(s => ({ ...s, optionCount: cnt }))}
                            style={{
                                padding: '10px 20px',
                                borderRadius: '8px',
                                backgroundColor: settings.optionCount === cnt ? 'var(--secondary-color)' : '#eee',
                                color: settings.optionCount === cnt ? 'white' : 'var(--dark-color)',
                                fontWeight: 'bold'
                            }}
                        >
                            {cnt}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Settings;
