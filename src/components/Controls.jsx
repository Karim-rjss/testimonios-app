import React from 'react';

export default function Controles({ onPrev, onNext, onRandom }) {
    return (
        <div className="controls">
            <button onClick={onPrev} className="control-btn control-btn-secondary" aria-label="Anterior">Anterior</button>
            <button onClick={onNext} className="control-btn control-btn-primary" aria-label="Siguiente">Siguiente</button>
            <button onClick={onRandom} className="control-btn control-btn-secondary" aria-label="Aleatorio">Aleatorio</button>
        </div>
    );
}