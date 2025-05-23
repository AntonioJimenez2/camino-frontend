// Componente Input
const Input = ({ setContador }) => {
  return (
    <form>
      <h2>Escribe un número</h2>
      <input
        type="number"
        placeholder="Escribe un número"
        onChange={(e) => {
          const valor = parseInt(e.target.value);
          if (!isNaN(valor) && valor > 0) {
            setContador(valor);
          } else {
            setContador(0);
          }
        }}
      />
    </form>
  );
};

export default Input;
