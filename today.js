const original = {
  name: 'Kushagra',
  skills: {
    frontend: 'React',
    backend: 'Node.js'
  }
};

// Shallow copy using spread (...)
const shallowCopy = { ...original };

shallowCopy.name = 'Raaj';  // ✅ Changes only in copy
shallowCopy.skills.backend = 'Express';  // ❌ Affects original too

console.log(original.skills.backend);  // Output: 'Express'

const old = {
  name: 'Kushagra',
  skills: {
    frontend: 'React',
    backend: 'Node.js'
  }
};

// Deep copy using JSON methods
const deepCopy = JSON.parse(JSON.stringify(original));

deepCopy.skills.backend = 'Express';

console.log(original.skills.backend);  // Output: 'Node.js' ✅ original is safe
