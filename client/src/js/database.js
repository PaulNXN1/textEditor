// Code provided - which below shows the database importing 

import { openDB } from 'idb';

// This is code showing how the database is created  



const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });



// TODO - for the student : Add logic to a method that accepts some content and adds it to the database

export const putDb = async (content) => {

 

  const jateDb = await openDB('jate', 1);
  const text = jateDb.transaction('jate', 'readwrite');
  const store = text.objectStore('jate');
  const requestUpdate = store.put({ id: 1, value: content });
  const finalResult = await requestUpdate;

  // Console log confirmation message //

  console.log('Super - all data saved.', finalResult);

}

// TODO - for the student : Add logic for a method that gets all the content from the database
export const getDb = async () => {


  const jateDb = await openDB('jate', 1);
  const text = jateDb.transaction('jate', 'readonly');
  const store = text.objectStore('jate');
  const requestUpdate = store.getAllKeys();
  const finalResult = await requestUpdate;
  console.log('result.value', finalResult.value);


  return finalResult.value;
};


// Callback / running f(x)

initdb();