const fs = require('fs');
const file = require('./data.json')

if(process.argv[2] === 'read') {
  for(let key in file.notes) {
    console.log(`${key}: ${file.notes[key]}`)
  }
} else if(process.argv[2] === 'create') {
  const userInput = process.argv[3];
  file.notes[file.nextId] = userInput;
  file.nextId++;
  const addNote = JSON.stringify(file, null, 2);
  fs.writeFile('./data.json', addNote, 'utf8', err => {
    if(err) throw err;
  });
} else if(process.argv[2] === 'update'){
  file.notes[process.argv[3]] = process.argv[4];
  const editNote = JSON.stringify(file, null, 2);
  fs.writeFile('./data.json', editNote, 'utf8', err => {
    if(err) throw err;
  });
} else if(process.argv[2] === 'delete') {
    delete file.notes[process.argv[3]]
    const deleteNote = JSON.stringify(file, null, 2);
    fs.writeFile('./data.json', deleteNote, 'utf8', err => {
    if(err) throw err;
  });
} else {
    console.log('Input read, update, create, or delete')
};
