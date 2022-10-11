import React from "react";
import img from "./two.jpg";

import "./Text&Img.css";

export const TextImg = () => {
  return (
    <div className="contenedor__textImg">
      <img src={img} alt="cerveza" className="imagen" />
      <div className="titulo-text">
        <h1 className="titulo">poema dedicado a la cerveza..</h1>

        <h1 className="text">
          Nace de lupulo y cebada, y vive en una botella encerrada, puede ser
          morena o dorada, puede ser de trigo o cereza, para ser sincero sin
          rodeo digo, buena amiga es la cerveza. Siempre fresca y helada, bajo
          el sol te acompaña, siempre suave y espumosa y siempre tan amorosa, es
          que siempre hace bien a la cabeza, en los dias de verano, abrir una
          buena cerveza. Nada te hace mas libre, nada te acerca mas a tu gente
          que en las tardes de pereza, tomarse una buena cerveza. Es que en
          simple conclusion todos disfrutamos de su sabor, ya sea en pena o en
          amor, ya sea en la mesa o junto al fogon, ya sea en la riqueza o la
          pobreza, todos disfrutan de una buena cerveza.
        </h1>
      </div>
    </div>
  );
};
