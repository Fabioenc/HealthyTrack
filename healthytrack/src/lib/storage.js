// src/lib/storage.js
const KEY = 'ht_signups';

export function loadSignups() {
  try {
    return JSON.parse(localStorage.getItem(KEY) || '[]');
  } catch {
    return [];
  }
}

export function saveSignups(list) {
  localStorage.setItem(KEY, JSON.stringify(list));
}

export function addSignup(entry) {
  const list = loadSignups();
  const item = {
    id: crypto.randomUUID(),                 // id único
    createdAt: new Date().toISOString(),     // fecha registro
    ...entry,
  };
  list.push(item);
  saveSignups(list);
  return item;
}

export function deleteSignup(id) {
  const list = loadSignups().filter(i => i.id !== id);
  saveSignups(list);
  return list;
}

export function clearSignups() {
  saveSignups([]);
}
