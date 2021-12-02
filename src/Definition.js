import Synonym from "./Synonym";
import Antonym from "./Antonym";

export default function Definition(props) {
  return (
    <div style={{ border: "1px solid brown", padding: 10 }}>
      <p>Definition</p>
      <pre>{JSON.stringify(props, null, 2)}</pre>
      <Synonym synonym={props.definition.synonyms} />
      <Antonym antonym={props.definition.antonyms} />
    </div>
  );
}
