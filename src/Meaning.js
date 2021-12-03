import Definition from "./Definition";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>

      {props.meaning.definitions.map(function (definition, index) {
        return <Definition key={index} definition={definition} />;
      })}
    </div>
  );
}
