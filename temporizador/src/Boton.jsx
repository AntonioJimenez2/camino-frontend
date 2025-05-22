// Componente Boton
const Boton = ({ texto, onClick }) => {
  const colorBtn = texto === "Iniciar" ? "green" : texto === "Pausar" ? "blue" : "red"

  return (
    <button onClick={onClick} style={{ fontSize: '2rem', margin: '1rem', backgroundColor: colorBtn, color: "white" }}>
      {texto}
    </button>
  );
};

export default Boton;