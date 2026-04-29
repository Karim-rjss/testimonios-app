import React from 'react';

export default function Controles({ onPrev, onNext, onRandom }) {
    return (
        <div className="controls">
            <button onClick={onPrev} className="control-btn control-btn-secondary">Anterior</button>
            <button onClick={onNext} className="control-btn control-btn-primary">Siguiente</button>
            <button onClick={onRandom} className="control-btn control-btn-secondary">Aleatorio</button>
        </div>
    );
}