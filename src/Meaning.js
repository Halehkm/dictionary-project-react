import Definition from "./Definition";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      {/* <p>{props.meaning.definitions[0].definition}</p>
      <p>{props.meaning.definitions[0].example}</p> */}

      {props.meaning.definitions.map(function (definition, index) {
        return <Definition key={index} definition={definition} />;
      })}
    </div>
  );
}
