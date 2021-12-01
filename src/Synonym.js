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
}
