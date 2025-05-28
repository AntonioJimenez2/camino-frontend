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

export default Cronometro;