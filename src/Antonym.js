export default function Antonym(props) {
  if (props.antonym) {
    return (
      <ul className="antonym">
        {props.antonym.map(function (antonym, index) {
          return <li key={index}>{antonym}</li>;
        })}
      </ul>
    );
  } else {
    return null;
  }
}
