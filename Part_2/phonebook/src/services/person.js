import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getPersons = () => axios.get(baseUrl).then((response) => response.data);

const create = (personObject) =>
  axios.post(baseUrl, personObject).then((response) => response.data);

const remove = (personId) => axios.delete(`${baseUrl}/${personId}`);

const personService = { getPersons, create, remove };

export default personService;
