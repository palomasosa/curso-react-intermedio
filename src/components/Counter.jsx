import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch";
import { usePokemon } from "../hooks/usePokemon";
function Counter() {
  const { counter, increment, decrement } = useCounter(1, 1);
  const {pokemon} = usePokemon(counter);
  const [obj] = useFetch("https://rickandmortyapi.com/api/character/1")
  return (
    <>
      <button onClick={increment}>+</button>
      <p>{counter}</p>
      <button onClick={decrement}>-</button>

      <p style={{ color: "black" }}>{pokemon?.name}</p>
      <img src={pokemon?.sprites.front_default} width={200} height={200} />
      <p>{obj?.name}</p>
    </>
  );
}
export default Counter;
