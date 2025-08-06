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
const tambahMenu4Function = {
  async init() {
    await this._getDataForm();
  },

  async _getDataForm() {
    const namaData4 = document.querySelector('#namaMenu4');
    const link = document.querySelector('#link');
    const gambar = document.querySelector('#gambarMenu4');
    const btnTambah4 = document.getElementById('btnTambah4');
    const formtambahMenu4 = document.getElementById('tambahMenu4');

    gambar.addEventListener('change', async (e) => {
        e.preventDefault();
        fileimage = e.target.files[0];
      });

    formtambahMenu4.addEventListener('submit', async (e) => {
      e.preventDefault();
      btnTambah4.innerText = 'Mohon tunggu ...';
      btnTambah4.classList.add('disabled');
      const data = {
        nama_menu4: escapeHtml(namaData4.value),
        link: link.value,
        admin: getUserInfo().id,
        tanggal: new Date().toLocaleDateString(),
      };
      const nanoid = customAlphabet('1234567890', 10);
      const idMenu = `menu4_${nanoid()}`;
      await uploadFile(fileimage, `menu4/${idMenu}`).then((url) => {
        data.gambar = url;
      });
      await this._insertData(data, idMenu);
    });
  },

  async _insertData(data, id) {
    try {
      await setDoc(doc(db, 'menu4', id), data);
      Swal.fire({
        icon: 'success',
        title: 'Berhasil',
        text: 'Menu berhasil ditambahkan',
        showCloseButton: true,
        })
      setTimeout(() => {
        location.reload();
      }, 2000);
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Gagal',
            text: 'Menu gagal ditambahkan',
            showCloseButton: true,
            })
    }
  },
};

export default tambahMenu4Function;
