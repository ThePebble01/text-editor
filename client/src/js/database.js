import { openDB } from "idb";

const initdb = async () =>
  openDB("jate", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });

export const putDb = async (content) => {
  const jateDb = await openDB("jate", 1);
  const store = jateDb.transaction("jate", "readwrite").objectStore("jate");
  const request = store.put({ id: 1, text: content });
  await request;
};

export const getDb = async () => {
  const jateDb = await openDB("jate", 1);
  const store = jateDb.transaction("jate", "readonly").objectStore("jate");
  const request = store.getAll();
  const result = await request;
  if (result && result[0]) {
    return result[0].text;
  }
  return undefined;
};

initdb();
