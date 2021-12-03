import Synonym from "./Synonym";
import Antonym from "./Antonym";
import Accordion from "react-bootstrap/Accordion";
import "./Accordion.scss";

export default function Definition(props) {
  return (
    <Accordion>
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
    </Accordion>
  );
}
