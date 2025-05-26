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

export default Cronometro;