// Componente Boton
const Boton = ({ texto, onClick, type, modo }) => {
  let colorBtn =
    texto === "Iniciar" ? "green" : texto === "Pausar" ? "blue" : "red";
    if (texto === "Concentración" || texto === "Descanso Corto" || texto === "Descanso Largo"){
      colorBtn = "#f06060";
    }
    if (texto === modo){
      colorBtn = "#6060f0"
    }
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

export default Boton;
