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

export default Temporizador;