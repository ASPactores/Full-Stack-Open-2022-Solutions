const Person = ({ filteredList }) => {
  return filteredList.map((person) => (
    <p key={person.name}>
      {person.name} {person.number}
    </p>
  ));
};

export default Person;
