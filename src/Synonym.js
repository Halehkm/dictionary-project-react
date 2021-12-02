export default function Synonym(props) {
  if (props.synonym) {
    return (
      <ul className="synonym">
        {props.synonym.map(function (synonym, index) {
          return <li key={index}>{synonym}</li>;
        })}
      </ul>
    );
  } else {
    return null;
  }
  /* return (
    <div style={{ border: "1px solid red", padding: 10 }}>
      <p>Synonym</p>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
  ); */
}
