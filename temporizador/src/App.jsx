// Componente Temporizador
const Temporizador = ({tiempo, activo}) => {
  const color = activo ? "green" : "red";
  const estilo = {
    fontSize: '13rem',
    textAlign: 'center',
    transition: 'color 0.5s ease-in-out'
  };
  return (
    <div style={{ ...estilo, color: color }}>
      {tiempo}
    </div>
  );
};

// Componente Boton
const Boton = ({ texto, onClick }) => {
  const colorBtn = texto === "Iniciar" ? "green" : texto === "Pausar" ? "blue" : "red"

  return (
    <button onClick={onClick} style={{ fontSize: '2rem', margin: '1rem', backgroundColor: colorBtn, color: "white" }}>
      {texto}
    </button>
  );
};

// Componente App

const App = () => {
  const [tiempo, setTiempo] = React.useState(0);
  const [activo, setActivo] = React.useState(false);

  // Efecto para manejar el temporizador
React.useEffect(() => {
  let intervalo = null;

  if (activo) {
    intervalo = setInterval(() => {
      setTiempo((prevTiempo) => prevTiempo + 1);
    }, 1000);
  } else {
    clearInterval(intervalo);
  }
  
  // Limpieza del intervalo al desmontar el componente o al cambiar `activo`
  return () => clearInterval(intervalo);
}, [activo]);

  //Manejo botones
const iniciarTemporizador = () => {
  setActivo(true);
}

const pausarTemporizador = () =>{
  setActivo(false);
}

const reiniciarTemporizador = () => {
  setActivo(false);
  setTiempo(0);
}



const mensaje = activo ? "El temporizador está activo" : "El temporizador está detenido";
  return (
    <>
      <h1>Este es un Temporizador</h1>
      <Temporizador tiempo={tiempo} activo={activo} />
      <p>{mensaje}</p><hr />
      <Boton texto="Iniciar" onClick={iniciarTemporizador} />
      <Boton texto="Pausar" onClick={pausarTemporizador} />
      <Boton texto="Reiniciar" onClick={reiniciarTemporizador} />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
