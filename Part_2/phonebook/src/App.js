import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Person from "./components/Person";
import personService from "./services/person";
import SuccessNotification from "./components/SuccessNotification";
import ErrorNotification from "./components/ErrorNotification";

const App = () => {
  const [persons, setPersons] = useState([]);

  // get data from server as a side effect
  useEffect(() => {
    personService
      .getPersons()
      .then((data) => setPersons((persons) => persons.concat(data)));
  }, []);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
    };

    const isNotDuplicate = persons.every((person) => {
      if (personObject.name === person.name) {
        return false;
      }
      return true;
    });

    if (isNotDuplicate) {
      personService.create(personObject).then((data) => {
        setPersons(persons.concat(data));
        setSuccessMessage(`Added ${data.name}`);
        setTimeout(() => {
          setSuccessMessage(null);
        }, 5000);
      });
    } else {
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        const duplicate = persons.find(
          (person) => person.name === personObject.name
        );
        personService
          .replace(duplicate, personObject)
          .then((data) => {
            setPersons(
              persons.map((person) =>
                person.id !== duplicate.id ? person : data
              )
            );
          })
          .catch(() => {
            setErrorMessage(
              `Information about ${personObject.name} has already been removed`
            );
            setTimeout(() => {
              setErrorMessage(null);
            }, 5000);
            setPersons(
              persons.filter((person) => person.name !== personObject.name)
            );
          });
      }
    }
  };

  const deletePerson = async (personName, personId) => {
    if (window.confirm(`Delete ${personName}?`)) {
      await personService.remove(personId);
      setPersons((person) =>
        person.filter((notDeleted) => notDeleted.id !== personId)
      );
    }
  };
  const handleFilter = (event) => setFilter(event.target.value);
  const handleNewName = (event) => setNewName(event.target.value);
  const handleNewNumber = (event) => setNewNumber(event.target.value);

  const filteredList = persons.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <SuccessNotification message={successMessage} />
      <ErrorNotification message={errorMessage} />
      <Filter filter={filter} handleFilter={handleFilter} />
      <h2>Add new entry</h2>
      <PersonForm
        handleSubmit={handleSubmit}
        newName={newName}
        handleNewName={handleNewName}
        newNumber={newNumber}
        handleNewNumber={handleNewNumber}
      />
      <h2>Numbers</h2>
      <Person filteredList={filteredList} deletePerson={deletePerson} />
    </div>
  );
};

export default App;
