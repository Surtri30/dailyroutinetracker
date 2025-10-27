const UI = {
  render(routines) {
    const list = document.getElementById('routine-list');
    list.innerHTML = '';

    routines.forEach(routine => {
      const li = document.createElement('li');
      li.className = routine.completed ? 'completed' : '';
      li.innerHTML = `
        <span>${routine.name}</span>
        <div>
          <button onclick="toggle(${routine.id})">✔</button>
          <button onclick="remove(${routine.id})">🗑</button>
        </div>
      `;
      list.appendChild(li);
    });
  }
};