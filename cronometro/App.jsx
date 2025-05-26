//Componentes dentro de un mismo archivo al estar usando CDN
// Componente Boton
const Boton = ({ texto, onClick, type }) => {
  const colorBtn =
    texto === "Iniciar" ? "green" : texto === "Pausar" ? "blue" : "red";

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

//Componente Cronometro

const Cronometro = ({ tiempo, activo }) => {
  const { minutos, segundos, centecimas } = tiempo;
  let mins = minutos < 10 ? "0" + minutos : minutos;
  let secs = segundos < 10 ? "0" + segundos : segundos;
  let cents = centecimas < 10 ? "0" + centecimas : centecimas;
  return (
    <h2 style={{ fontSize: "5rem", textAlign: "center" }}>
      {mins}:{secs}:{cents}
    </h2>
  );
};

//Componente App
const App = () => {
  const [tiempo, setTiempo] = React.useState({
    minutos: 0,
    segundos: 0,
    centecimas: 0,
  });
  const [activo, setActivo] = React.useState(false);
  const { minutos, segundos, centecimas } = tiempo;
  const intervaloRef = React.useRef(0);

  //useEffect
  // Efecto para manejar el cronometro
  React.useEffect(() => {
    if (activo) {
      intervaloRef.current = setInterval(() => {
        setTiempo((prev) => {
          let { minutos, segundos, centecimas } = prev;

          centecimas++;
          if (centecimas >= 100) {
            centecimas = 0;
            segundos++;
          }

          if (segundos >= 60) {
            segundos = 0;
            minutos++;
          }

          return { minutos, segundos, centecimas };
        });
      }, 10);
    }

    return () => clearInterval(intervaloRef.current);
  }, [activo]);

  //Manejo botones
  const iniciarCronometro = () => {
    setActivo(true);
  };

  const pausarCronometro = () => {
    setActivo(false);
  };

  const reiniciarCronometro = () => {
    setActivo(false);
    setTiempo({
      minutos: 0,
      segundos: 0,
      centecimas: 0,
    });
  };

  const mensaje = activo
    ? "El cronometro esta activo"
    : "El cronometro esta detenido";

  return (
    <div>
      <hr />
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
