import Definition from "./Definition";

export default function Meaning(props) {
  return (
    <div
      className="Meaning"
      style={{ border: "1px solid green", padding: 10, marginBottom: 10 }}
    >
      <p>Meaning</p>
      <pre>{JSON.stringify(props, null, 2)}</pre>
      {props.meaning.definitions.map(function (definition, index) {
        return <Definition key={index} definition={definition} />;
      })}
    </div>
  );
}
