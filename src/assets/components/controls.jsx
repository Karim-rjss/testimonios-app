//controles
//muestra todos los componentes de navegacion
import React from 'react';

export default function Controles({onPrev, onNext, onRandom}){
    return (
        <div className="controls">
            <button onClick={onPrev} className="control-btn">Anterior</button>
            <button onClick={onNext} className="control-btn">Siguiente</button>
            <button onClick={onRandom} className="control-btn">Aleatorio</button>
        </div>
    );
}