/* eslint-disable no-param-reassign */
import {
  query, where, collection, getFirestore, getDocs, doc, getDoc,
} from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import firebaseConfig from "../globals/firebaseConfig";
import { getUserInfo } from './functions';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const dataProduct = {
  async init() {
    const getdata = await this._fetchDataProduct();
    return getdata;
  },

  async _fetchDataProduct() {
    const idUser = getUserInfo().id;
    const q = query(collection(db, 'checkin'), where('id_user', '==', idUser));
    const docSnap = await getDocs(q);
    return docSnap;
  },

  async _fetchAllDataProduct() { // digunakan untuk get all product
    const querySnapshot = await getDocs(collection(db, 'checkin'));
    return querySnapshot;
  },

  async _fetchUserNameById(idUser) { // digunakan untuk convert user id ke nama
    const q = doc(db, 'akun', idUser);
    const docSnap = await getDoc(q);
    return docSnap.data();
  },

  async _fetchDataProductByIdProduk(idProduk) {
    const q = doc(db, 'checkin', idProduk);
    const docSnap = await getDoc(q);
    return docSnap.data();
  },

  async convertIdProductToName() {
    const rowIdBarang = document.querySelectorAll('#nama_Barang');
    rowIdBarang.forEach(async (colIdBarang) => {
      const attr = colIdBarang.getAttribute('value');
      const getNamaBarang = await this._fetchDataProductByIdProduk(attr);
      colIdBarang.innerHTML = getNamaBarang.nama_poli;
    });
  },

  async convertIDBuyerToName() {
    const rowIdBuyer = document.querySelectorAll('#nama_Pembeli');
    rowIdBuyer.forEach(async (colIdPembeli) => {
      const attrBuyer = colIdPembeli.getAttribute('value');
      const getNamaPembeli = await this._fetchUserNameById(attrBuyer);
      colIdPembeli.innerHTML = getNamaPembeli.nama;
    });
  },
};

export default dataProduct;
