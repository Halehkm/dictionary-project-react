import Synonym from "./Synonym";
import Antonym from "./Antonym";

export default function Definition(props) {
  console.log(props);
  return (
    <div style={{ border: "1px solid brown", padding: 10 }}>
      <p>{props.definition.definition}</p>

      <p>{props.definition.example}</p>

      <Synonym synonym={props.definition.synonyms} />
      <Antonym antonym={props.definition.antonyms} />
    </div>
  );
}
