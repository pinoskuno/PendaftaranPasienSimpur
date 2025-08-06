/* eslint-disable no-unused-vars */
import {
  query,
  where,
  collection,
  getFirestore,
  getDocs,
  doc,
  getDoc,
  orderBy,
} from "firebase/firestore";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../globals/firebaseConfig";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const dataTransactions = {
  async _fetchAllDataTransactions() {
    const querySnapshot = await getDocs(
      query(collection(db, "daftarAntrian"), orderBy("status"))
    );
    return querySnapshot;
  },

  async _fetchDataById(id) {
    const q = doc(db, "daftarAntrian", `${id}`);
    const docSnap = await getDoc(q);
    return docSnap.data();
  },

  async _fetchDataTransactions() {
    const querySnapshot = await getDocs(
      query(
        collection(db, "daftarAntrian"),
        where("status", "!=", "Cancelled"),
        orderBy("status")
      )
    );
    return querySnapshot;
  },

  async _fetchDataTransactions() {
    const querySnapshot = await getDocs(
      query(
        collection(db, "daftarAntrian"),
        where("status", "!=", "Succeed"),
        orderBy("status")
      )
    );
    return querySnapshot;
  },

  async _fetchDataTransactionsByIdBuyer(idBuyer) {
    const querySnapshot = await getDocs(
      query(
        collection(db, "daftarAntrian"),
        where("id_buyer", "==", `${idBuyer}`)
      )
    );
    return querySnapshot;
  },

  async _fetchDataTransactionsByIdSeller(idSeller) {
    const querySnapshot = await getDocs(
      query(
        collection(db, "daftarAntrian"),
        where("id_seller", "==", `${idSeller}`)
      )
    );
    return querySnapshot;
  },

  async _fetchCancelledDataTransactions() {
    const querySnapshot = await getDocs(
      query(collection(db, "daftarAntrian"), where("status", "==", "Cancelled"))
    );
    return querySnapshot;
  },

  async _fetchSucceedDataTransactions() {
    const querySnapshot = await getDocs(
      query(collection(db, "daftarAntrian"), where("status", "==", "Succeed"))
    );
    return querySnapshot;
  },
};

export default dataTransactions;
