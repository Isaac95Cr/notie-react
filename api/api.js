import axios from '../node_modules/axios/dist/axios.min.js';

const getAll = () => alert(axios.get('http://localhost:3000/api/user/666'));
const getAllNotes = () => axios.get('http://localhost:3000/api/notes');
const getAllNoteBooks = () => axios.get('http://localhost:3000/api/notebooks');
const getAllTags = () => axios.get('http://localhost:3000/api/tags');
const saveNote = note => axios.post('http://localhost:3000/api/notes', note);

export default {
  getAll,
  getAllNotes,
  getAllNoteBooks,
  getAllTags,
  saveNote
};
