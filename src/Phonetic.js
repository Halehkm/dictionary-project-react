import ReactAudioPlayer from "react-audio-player";

export default function Phonetic(props) {
  return (
    <>
      {props.phonetics.audio && (
        <ReactAudioPlayer
          className="react-audio-player AudioPlayer"
          controls=""
          id=""
          preload="metadata"
          src={props.phonetics.audio}
          title={props.phonetics.audio}
        />
      )}

      <div className="Phonetic">{props.phonetics.text}</div>
    </>
  );
}
