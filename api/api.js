import axios from '../node_modules/axios/dist/axios.min.js';

const getAll = () => axios.get('http://localhost:3000/api/user/666');
const getAllNotes = () => axios.get('http://localhost:3000/api/notes');
const getAllNoteBooks = () => axios.get('http://localhost:3000/api/notebooks');
const getAllTags = () => axios.get('http://localhost:3000/api/tags');

export default {
  getAll,
  getAllNotes,
  getAllNoteBooks,
  getAllTags
};
