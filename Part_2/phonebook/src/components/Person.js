const Person = ({ filteredList, deletePerson }) => {
  return filteredList.map((person) => {
    return (
      <p key={person.id}>
        {person.name} {person.number}{" "}
        <button onClick={() => deletePerson(person.name, person.id)}>
          Delete
        </button>
      </p>
    );
  });
};

export default Person;
