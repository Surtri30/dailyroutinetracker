const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const dataPath = path.join(__dirname, '../data/routines.json');

// Helper: read/write JSON
function readData() {
  const data = fs.readFileSync(dataPath, 'utf8');
  return JSON.parse(data || '[]');
}
function writeData(data) {
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
}

// GET all routines
router.get('/', (req, res) => {
  const routines = readData();
  res.json(routines);
});

// POST new routine
router.post('/', (req, res) => {
  const routines = readData();
  const newRoutine = {
    id: Date.now(),
    name: req.body.name,
    completed: false
  };
  routines.push(newRoutine);
  writeData(routines);
  res.status(201).json(newRoutine);
});

// PUT (toggle complete)
router.put('/:id', (req, res) => {
  const routines = readData();
  const id = parseInt(req.params.id);
  const routine = routines.find(r => r.id === id);
  if (!routine) return res.status(404).json({ message: 'Not found' });
  
  routine.completed = !routine.completed;
  writeData(routines);
  res.json(routine);
});

// DELETE
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  let routines = readData();
  routines = routines.filter(r => r.id !== id);
  writeData(routines);
  res.json({ message: 'Deleted successfully' });
});

module.exports = router;