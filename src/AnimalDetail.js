export default function AnimalDetail({ animal }) {
  if (!animal) {
    return <p>No Animal to Display</p>;
  } else
    return (
      <div>
        <p>Name: {animal.name}</p>
        <p>Age: {animal.age}</p>
        <p>Category: {animal.category}</p>
        <p>Location: {animal.location}</p>
      </div>
    );
}
