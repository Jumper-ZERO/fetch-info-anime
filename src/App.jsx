import React, { useState, useEffect } from "react";
import traerDatos from "./data";
import Card from "./Card";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [card, setCard] = useState(0);
  const [x, setX] = useState(0);

  const next = () => {
    if (card === data.length - 1) {
      setCard(0);
    } else {
      setCard(card + 1);
    }
  };
  const after = () => {
    if (card === 0) {
      setCard(data.length - 1);
    } else {
      setCard(card - 1);
    }
  };

  const start = (e) => setX(e.targetTouches[0].pageX);
  const end = (e) => {
    let valor = x - e.changedTouches[0].pageX;
    if (Math.abs(valor) > 200) {
      if (0 < valor) {
        next();
      } else {
        after();
      }
    }
  };

  useEffect(() => {
    traerDatos(setLoading, setData);
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto">
        <h1>No hay nada esta cargando</h1>
      </div>
    );
  }

  return (
    <div
      className="conteiner flex justify-center items-center lg:h-screen"
      onTouchStart={(e) => start(e)}
      onTouchEnd={(e) => end(e)}
    >
      <Card
        title={data[card].title}
        title_japanese={data[card].title_japanese}
        images={data[card].images}
        synopsis={data[card].synopsis}
        score={data[card].score}
        date={new Intl.DateTimeFormat("es-pe").format(
          new Date(data[card].aired.from)
        )}
        next={next}
        after={after}
        key={data[card].mal_id}
      />
    </div>
  );
}

export default App;
