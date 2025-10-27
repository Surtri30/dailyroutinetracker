const API = {
  async getRoutines() {
    const res = await fetch('/api/routines');
    return await res.json();
  },
  async addRoutine(name) {
    const res = await fetch('/api/routines', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name })
    });
    return await res.json();
  },
  async toggleRoutine(id) {
    const res = await fetch(`/api/routines/${id}`, { method: 'PUT' });
    return await res.json();
  },
  async deleteRoutine(id) {
    const res = await fetch(`/api/routines/${id}`, { method: 'DELETE' });
    return await res.json();
  }
};