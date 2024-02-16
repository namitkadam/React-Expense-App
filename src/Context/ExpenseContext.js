import { useState, useEffect, createContext } from "react";

export const ExpenseContext = createContext();

export function ExpenseProvider(props) {
  const [expenses, setExpenses] = useState([]);
  const [indexDB, setIndexDB] = useState(null);
  const [getSingleDataDB, setGetSingleDataDb] = useState(false);

  useEffect(() => {
    const indxDB = indexedDB.open("expense-Database", 1);
    indxDB.onupgradeneeded = () => {
      let res = indxDB.result;
      const objectStore = res.createObjectStore("data");
      objectStore.createIndex("id", "id", { unique: true });
    };
    indxDB.onerror = (event) => {
      alert("Database error: ", event.target.onerror);
    };
    indxDB.onsuccess = (event) => {
      const indexDBOnsuccess = event.target.result;
      setIndexDB(indexDBOnsuccess);
    };
  }, []);

  useEffect(() => {
    if (indexDB) {
      getExpensesDataFromIndexDBAndToState();
    }
  }, [indexDB]);

  // const addExpense = (newExp) => {
  //   // setExpenses((state) => [{ id: Date.now(), ...newExp }, ...state]);
  //   addIndexDB(newExp);
  //   getExpensesDataFromIndexDBAndToState();
  // };

  // const updateExpense = (expId, data) => {
  //   const copyExpenses = [...expenses];
  //   const index = copyExpenses.findIndex((x) => x.id === expId);
  //   const updateExpObj = { ...copyExpenses[index], ...data };
  //   copyExpenses[index] = { ...updateExpObj };
  //   setExpenses(copyExpenses);
  //   console.log(data);
  // };

  const addIndexDB = (exp) => {
    const trs = indexDB.transaction("data", "readwrite");
    const store = trs.objectStore("data");
    store.put(exp, exp.id);
    getExpensesDataFromIndexDBAndToState();
  };

  const getExpensesDataFromIndexDBAndToState = () => {
    if (!indexDB) return;
    const trs = indexDB.transaction("data", "readonly");
    const store = trs.objectStore("data");
    const getuser = store.getAll();
    getuser.onsuccess = () => {
      const res = getuser.result;
      setExpenses(res);
    };
  };

  const deletIndexdb = (key) => {
    const trs = indexDB.transaction("data", "readwrite");
    const store = trs.objectStore("data");
    store.delete(key);
    getExpensesDataFromIndexDBAndToState();
    console.log(key);
  };

  const getSingleData = (key) => {
    const trs = indexDB.transaction("data", "readonly");
    const store = trs.objectStore("data");
    let open = store.get(Number(key));
    open.onsuccess = (e) => {
      const result = open.result;
      setGetSingleDataDb(result);
    };
  };

  const updateIndexdb = (exp) => {
    const trs = indexDB.transaction("data", "readwrite");
    const store = trs.objectStore("data");
    store.put(exp, exp.id);
    getExpensesDataFromIndexDBAndToState();
  };

  return (
    <ExpenseContext.Provider
      value={{
        expenses,
        indexDB,
        getSingleDataDB,
        deletIndexdb,
        addIndexDB,
        updateIndexdb,
        getSingleData,
      }}
    >
      {props.children}
    </ExpenseContext.Provider>
  );
}
