//testimonial

import React from 'react'

export default function Testimonial({item}){
    const {nombre, cargo, texto, foto} = item;

    return (
        <article className="testimonial-tarjeta">
            <img src={foto} alt={nombre} className="testimonial-foto" />
            <h3 className="testimonial-nombre">{nombre}</h3>
            <p className="testimonial-cargo">{cargo}</p>
            <p className="testimonial-texto">"{texto}"</p>
        </article>
    );
}