import Synonym from "./Synonym";

/* import Accordion from "react-bootstrap/Accordion"; */

export default function Definition(props) {
  return (
    <>
      <div className="heading"> Definition:</div>
      <p>{props.definition.definition}</p>
      <div className="heading"> Example:</div>
      <p>{props.definition.example}</p>
      <div className="heading">
        <Synonym synonym={props.definition.synonyms} />
      </div>
     
    </>
    /* <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header className="header">Definition</Accordion.Header>
        <Accordion.Body>
          <p>{props.definition.definition}</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Example</Accordion.Header>
        <Accordion.Body>
          <p>{props.definition.example}</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Synonyms</Accordion.Header>
        <Accordion.Body>
          <Synonym synonym={props.definition.synonyms} />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Antonyms</Accordion.Header>
        <Accordion.Body>
          <Antonym antonym={props.definition.antonyms} />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion> */
  );
}
