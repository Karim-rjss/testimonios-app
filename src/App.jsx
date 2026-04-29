import React, { useState, useEffect, useRef } from 'react';
import testimonios from './data';
import Testimonial from "./components/Testimonial";
import Controls from "./components/Controls";
import "./styles.css";

export default function App() {
  //guarda el indice del testimonio actual
  const [index, setIndex] = useState(0);

  //total de testimonios
  const length = testimonios.length;

  //referencia para el intervalo automatico
  const autoRef = useRef(null);

  //funcion para mostrar el siguiente testimonio
  const siguiente = () => setIndex((prev) => (prev + 1) % length);
  //funcion para mostrar el testimonio anterior
  const anterior = () => setIndex((prev) => (prev - 1 + length) % length);
  //funcion para mostrar un testimonio aleatorio (dif. al actual)
  const aleatorio = () => {
    let randIndex;
    do {
      randIndex = Math.floor(Math.random() * length);
    } while (randIndex === index); //evita repetir el mismo testimonio
    setIndex(randIndex);
  };

  //useEffect para configurar el intervalo automatico
  useEffect(() => {
    autoRef.current = setInterval(() => {
      setIndex(i => (i + 1) % length);
    }, 5000); //cambia cada 5 segundos

    //limpiar el intervalo al desmontar el componente
    return () => clearInterval(autoRef.current);
  }, [length]);

  const handleUserAction = (action) => {
    clearInterval(autoRef.current); //reinicia el intervalo al interactuar
    action(); //ejecuta la accion del usuario
    autoRef.current = setInterval(() => {
      setIndex(i => (i + 1) % length);
    }, 5000); //reinicia el intervalo despues de la accion
  };

  return (
    <main className="app">
      <h1>Testimonios</h1>

      {/* Tarjeta del testimonio actual */}
      <div className="card-wrapper">
        <Testimonial key={index} item={testimonios[index]} />
      </div>

      {/* botones de control */}
      <Controls
        onPrev={() => handleUserAction(anterior)}
        onNext={() => handleUserAction(siguiente)}
        onRandom={() => handleUserAction(aleatorio)}
      />

      {/* contador de testimonios */}
      <p className="counter">{index + 1} / {length}</p>
    </main>
  );
}

