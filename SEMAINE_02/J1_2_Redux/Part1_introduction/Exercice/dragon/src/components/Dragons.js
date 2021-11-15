import { useSelector } from "react-redux";
import Dragon from "./Dragon";

const Dragons = () => {
  const { dragons } = useSelector((state) => state.dragon);

  console.log(dragons);

  if (dragons.length > 0)
    return (
      <>
        {dragons.map((dragon, i) => (
          <Dragon key={i} dragon={dragon} />
        ))}
      </>
    );

  return <p>Désolé il n'y a pas de dragon pour l'instant.</p>;
};

export default Dragons;
