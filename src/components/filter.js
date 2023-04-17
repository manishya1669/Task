import React from 'react';
import { useState } from 'react';

function Filter() {
  const [query, setQuery] = useState('');
  const items = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Orange' },
    { id: 4, name: 'Pineapple' }
  ];
  const filteredItems = items.filter(
    item => item.name.toLowerCase().includes()
  );query.toLowerCase()

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={event => setQuery(event.target.value)}
      />
      <ul>
        {filteredItems.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}



export default Filter;