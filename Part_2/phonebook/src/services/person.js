import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getPersons = () => axios.get(baseUrl).then((response) => response.data);

const create = (personObject) =>
  axios.post(baseUrl, personObject).then((response) => response.data);

const remove = (personId) => axios.delete(`${baseUrl}/${personId}`);

const replace = (duplicate, personObject) =>
  axios
    .put(`${baseUrl}/${duplicate.id}`, personObject)
    .then((response) => response.data);

const personService = { getPersons, create, remove, replace };

export default personService;
