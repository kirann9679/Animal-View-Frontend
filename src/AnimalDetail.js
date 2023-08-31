import Card from "react-bootstrap/Card";

export default function AnimalDetail({ animal }) {
  if (!animal) {
    return <p>No Animal to Display</p>;
  }
  // else
  // return (
  //   <div className="Get">
  //     <p>Name: {animal.name}</p>
  //     <p>Age: {animal.age}</p>
  //     <p>Category: {animal.category}</p>
  //     <p>Location: {animal.location}</p>
  //   </div>
  // );
  else
    return (
      <Card
        border="dark"
        bg="secondary"
        text="light"
        style={{ width: "91rem" }}
        className="mb-2"
      >
        <Card.Header></Card.Header>
        <Card.Body>
          <Card.Title>Name:{animal.name}</Card.Title>
          <Card.Text>Age:{animal.age}</Card.Text>
          <Card.Text>Category:{animal.category}</Card.Text>
          <Card.Text>Location:{animal.location}</Card.Text>
        </Card.Body>
        <Card.Footer></Card.Footer>
      </Card>
    );
}
