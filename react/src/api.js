const API_URL = 'http://docker.ullagallubuffellomilk.store:8080/api/entries';

export const fetchEntries = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error('Failed to fetch entries');
  return response.json();
};

export const addEntry = async (entry) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(entry),
  });
  if (!response.ok) throw new Error('Failed to add entry');
};

export const deleteEntry = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
  if (!response.ok) throw new Error('Failed to delete entry');
};
