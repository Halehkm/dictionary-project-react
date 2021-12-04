import Definition from "./Definition";

export default function Meaning(props) {
  return (
    <div className="Meaning">
        <h4 className="header">{props.meaning.partOfSpeech}</h4>
      <section>
      {props.meaning.definitions.map(function (definition, index) {
          return <Definition key={index} definition={definition} />;
        })}
        </section>
    </div>
  );
}
