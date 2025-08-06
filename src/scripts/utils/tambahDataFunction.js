/* eslint-disable prefer-destructuring */
import { initializeApp } from 'firebase/app';
import {
  getFirestore, doc, setDoc,
} from 'firebase/firestore';
import { customAlphabet } from 'nanoid';
import firebaseConfig from "../globals/firebaseConfig";
import {
  getUserInfo, escapeHtml, uploadFile,
} from './functions';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
let fileimage;
const tambahDataFunction = {
  async init() {
    await this._getDataForm();
  },

  async _getDataForm() {
    const namaData = document.querySelector('#namaData');
    const link = document.querySelector('#link');
    const btnTambah = document.getElementById('btnTambah');
    const formtambahData = document.getElementById('tambahData');

    formtambahData.addEventListener('submit', async (e) => {
      e.preventDefault();
      btnTambah.innerText = 'Mohon tunggu ...';
      btnTambah.classList.add('disabled');
      const data = {
        nama_data: escapeHtml(namaData.value),
        link: link.value,
        admin: getUserInfo().id,
        tanggal: new Date().toLocaleDateString(),
      };
      const nanoid = customAlphabet('1234567890', 10);
      const idData = `data_${nanoid()}`;
      await this._insertData(data, idData);
    });
  },

  async _insertData(data, id) {
    try {
      await setDoc(doc(db, 'data', id), data);
      Swal.fire({
        icon: 'success',
        title: 'Berhasil',
        text: 'Data berhasil ditambahkan',
        showCloseButton: true,
        })
      setTimeout(() => {
        location.reload();
      }, 2000);
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Gagal',
            text: 'Data gagal ditambahkan',
            showCloseButton: true,
            })
    }
  },
};

export default tambahDataFunction;
