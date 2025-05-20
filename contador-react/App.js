const App = () => {
  const [contador, setContador] = React.useState(0);

  React.useEffect(() => {
    document.title = `Contador: ${contador}`;
  }, [contador]);

  const incrementar = () => setContador(contador + 1);
  const reiniciar = () => setContador(0);
  const decrementar = () => setContador(contador - 1);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Contador: {contador}</h1>
      {contador % 5 === 0 && contador !== 0 ? (
        <p>¡Llegaste a un múltiplo de 5!</p>
      ) : <p>Sigue contando!</p>}
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={decrementar}>Decrementar</button><hr />
      <button onClick={reiniciar} style={{ marginLeft: "10px", backgroundColor: "#fff", color: "blue" }} >Reiniciar</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
