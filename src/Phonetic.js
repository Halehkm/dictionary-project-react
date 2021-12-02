export default function Phonetic(props) {
  console.log(props);

  return <div className="Phonetic">{props.phonetics.text}</div>;
}
