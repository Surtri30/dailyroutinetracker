let routines = [];

async function loadRoutines() {
  routines = await API.getRoutines();
  UI.render(routines);
}

document.getElementById('add-task').addEventListener('click', async () => {
  const input = document.getElementById('task-input');
  const name = input.value.trim();
  if (!name) return;

  await API.addRoutine(name);
  input.value = '';
  loadRoutines();
});

async function toggle(id) {
  await API.toggleRoutine(id);
  loadRoutines();
}

async function remove(id) {
  await API.deleteRoutine(id);
  loadRoutines();
}

loadRoutines();