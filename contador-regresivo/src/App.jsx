// Componente Contador
const Contador = ({ tiempo, activo }) => {
  const color = activo ? "green" : "red";
  const estilo = {
    fontSize: "13rem",
    textAlign: "center",
    transition: "color 0.5s ease-in-out",
  };
  return <div style={{ ...estilo, color: color }}>{tiempo}</div>;
};

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

// Componente Input
const Input = ({ setContador }) => {
  return (
    <form>
      <h2>Escribe un número</h2>
      <input
        type="number"
        placeholder="Escribe un número"
        onChange={(e) => {
          const valor = parseInt(e.target.value);
          if (!isNaN(valor) && valor > 0) {
            setContador(valor);
          } else {
            setContador(0);
          }
        }}
      />
    </form>
  );
};

//*************************//

// Componente App

const App = () => {
  const [contador, setContador] = React.useState(0);
  const [activo, setActivo] = React.useState(false);

  // Efecto para manejar el Contador-regresivo
  React.useEffect(() => {
    let intervalo = null;

    if (activo && contador > 0) {
      intervalo = setInterval(() => {
        setContador((prev) => {
          if (prev <= 1) {
            clearInterval(intervalo);
            setActivo(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      clearInterval(intervalo);
      setActivo(false);
    }

    // Limpieza del contador al desmontar el componente o al cambiar `activo`
    return () => clearInterval(intervalo);
  }, [activo, contador]);

  //Manejo botones
  const iniciarContador = () => {
    setActivo(true);
  };

  const pausarContador = () => {
    setActivo(false);
  };

  const reiniciarContador = () => {
    setActivo(false);
    setContador(0);
  };

  const mensaje = activo
    ? "El Contador está activo"
    : "El Contador está detenido";
  return (
    <>
      <h1>Este es un Contador</h1>
      <Input setContador={setContador} />
      <Contador tiempo={contador} activo={activo} />
      <p>{mensaje}</p>
      <hr />
      <Boton texto="Iniciar" onClick={iniciarContador} />
      <Boton texto="Pausar" onClick={pausarContador} />
      <Boton texto="Reiniciar" onClick={reiniciarContador} />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
