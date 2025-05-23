// Componente Boton
const Boton = ({ texto, onClick, type }) => {
  const colorBtn = texto === "Iniciar" ? "green" : texto === "Pausar" ? "blue" : "red"

  return (
    <button type={type} onClick={onClick} style={{ fontSize: '2rem', margin: '1rem', backgroundColor: colorBtn, color: "white" }}>
      {texto}
    </button>
  );
};

export default Boton;