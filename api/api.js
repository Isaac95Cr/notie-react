import axios from '../node_modules/axios/dist/axios.min.js';

const getAll = () => alert(axios.get('http://localhost:3000/profile'));
const getAllNotes = () => axios.get('http://localhost:3000/profile/666');

export default {
  getAll,
  getAllNotes
};
