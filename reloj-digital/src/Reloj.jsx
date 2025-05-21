// Componente Reloj
const Reloj = ({tiempo, color}) => {
  return (
    <div style={{ fontSize: '13rem', textAlign: 'center', color: color }}>
      {tiempo}
    </div>
  );
};

export default Reloj;