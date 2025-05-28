//Componentes dentro de un mismo archivo al estar usando CDN
// Componente Boton
const Boton = ({ texto, onClick, type, modo }) => {
  let colorBtn =
    texto === "Iniciar" ? "green" : texto === "Pausar" ? "blue" : "red";
    if (texto === "Concentración" || texto === "Descanso Corto" || texto === "Descanso Largo"){
      colorBtn = "#f06060";
    }
    if (texto === modo){
      colorBtn = "#6060f0"
    }
  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        fontSize: "2rem",
        margin: "1rem",
        backgroundColor: colorBtn,
        color: "white",
      }}
    >
      {texto}
    </button>
  );
};

//Componente Cronometro cuenta regresiva pomodoro

const Cronometro = ({ tiempo, activo }) => {
  const { minutos, segundos } = tiempo;
  let mins = minutos < 10 ? "0" + minutos : minutos;
  let secs = segundos < 10 ? "0" + segundos : segundos;
  return (
    <h2 style={{ fontSize: "5rem", textAlign: "center" }}>
      {mins}:{secs}
    </h2>
  );
};

// Componente ModoSeleccionado
const ModoSeleccionado = ({modo}) => {
  return (
    <h3>Actualmente estas en el modo: {modo}</h3>
  )
}

//Componente App
const App = () => {
  const [tiempo, setTiempo] = React.useState({
    minutos: 25,
    segundos: 0,
  });
  const [activo, setActivo] = React.useState(false);
  const { minutos, segundos } = tiempo;
  const [modo, setModo] = React.useState("Concentración");
  const intervaloRef = React.useRef(0);

  //useEffect
  // Efecto para manejar el cronometro pomodoro
  React.useEffect(() => {
    if (activo) {
      intervaloRef.current = setInterval(() => {
        setTiempo((prev) => {
          let { minutos, segundos} = prev;

          segundos--;
          if (segundos <= -1) {
            segundos = 59;
            minutos--;
          }

          if (minutos === -1) {
  segundos = 0;
  minutos = 0;
  clearInterval(intervaloRef.current);
  setActivo(false);
  if (modo === "Concentración") {
    setModo("Descanso Corto");
    setTiempo({ minutos: 5, segundos: 0 });
  } else {
    setModo("Concentración");
    setTiempo({ minutos: 25, segundos: 0 });
  }
  alert(`Tiempo de ${modo} terminado`);
}


          return { minutos, segundos };
        });
      }, 1000);
    }

    return () => clearInterval(intervaloRef.current);
  }, [activo]);

  //Manejo botones cronometro
  const iniciarCronometro = () => {
  if (!activo) {
    setActivo(true);
  }
};

  const pausarCronometro = () => {
    setActivo(false);
  };

  const reiniciarCronometro = () => {
    setActivo(false);
    setModo("Concentración");
    setTiempo({
      minutos: 25,
      segundos: 0
    });
  };

  //Manejo de modos
  const cambiarModo = (nuevoModo) => {
    setModo(nuevoModo);
    if (nuevoModo === "Concentración") {
      setTiempo({ minutos: 25, segundos: 0 });
    } else if (nuevoModo === "Descanso Corto") {
      setTiempo({ minutos: 5, segundos: 0 });
    } else if (nuevoModo === "Descanso Largo") {
      setTiempo({ minutos: 15, segundos: 0 });
    }
    setActivo(false);
  };

  const mensaje = activo
    ? "El cronometro esta activo"
    : "El cronometro esta detenido";

  return (
    <div>
      <hr />
      <ModoSeleccionado modo={modo} />
      <div>
        <Boton modo={modo} texto="Concentración" onClick={() => cambiarModo("Concentración")} />
        <Boton modo={modo} texto="Descanso Corto" onClick={() => cambiarModo("Descanso Corto")} />
        <Boton modo={modo} texto="Descanso Largo" onClick={() => cambiarModo("Descanso Largo")} />
          </div>
      <Cronometro tiempo={tiempo} activo={activo} />
      <p>{mensaje}</p>
      <hr />
      <Boton texto="Iniciar" onClick={iniciarCronometro} />
      <Boton texto="Pausar" onClick={pausarCronometro} />
      <Boton texto="Reiniciar" onClick={reiniciarCronometro} />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
