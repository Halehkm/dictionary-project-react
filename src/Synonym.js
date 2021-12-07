export default function Synonym(props) {

  if (props.synonym.length) {
    return (
      <div className="synonym heading">
        {" "}
        Synonym:
        <ul>
          {props.synonym.map(function (synonym, index) {
            return <li key={index}>{synonym}</li>;
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
