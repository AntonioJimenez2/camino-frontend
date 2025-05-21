// Componente Reloj
const Reloj = ({ tiempo, color }) => {
  return (
    <div style={{ fontSize: "13rem", textAlign: "center", color: color }}>
      {tiempo}
    </div>
  );
};

// Componente App

const App = () => {
  const [hora, setHora] = React.useState(new Date().toLocaleTimeString());
  React.useEffect(() => {
    const intervalo = setInterval(() => {
      setHora(new Date().toLocaleTimeString());
    }, 1000);
  }, []);

  const saludo =
    hora.split(":")[0] < 12 ? <h2>Buenos días</h2> : <h2>Buenas tardes</h2>;

  return (
    <>
      <h1>Este es un reloj digital</h1>
      <Reloj tiempo={hora} color="#ee0" />
      {saludo}
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
