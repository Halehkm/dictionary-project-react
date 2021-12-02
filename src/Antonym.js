export default function Antonym(props) {
  // if (props.antonym) {
  //   return (
  //     <ul className="antonym">
  //       {props.antonym.map(function (antonym, index) {
  //         return <li key={index}>{antonym}</li>;
  //       })}
  //     </ul>
  //   );
  // } else {
  //   return null;
  // }
  return (
    <div style={{ border: "1px solid blue", padding: 10 }}>
      <p>Antonym</p>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
  );
}
