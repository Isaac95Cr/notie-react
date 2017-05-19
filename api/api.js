import db from './db.json';

const getAll = () => db;
const getAllNotes = () => db.notes;

export default {
  getAll,
  getAllNotes
};
