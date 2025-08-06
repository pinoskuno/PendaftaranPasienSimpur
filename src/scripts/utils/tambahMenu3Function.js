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
const tambahMenu3Function = {
  async init() {
    await this._getDataForm();
  },

  async _getDataForm() {
    const namaData3 = document.querySelector('#namaMenu3');
    const link = document.querySelector('#link');
    const gambar = document.querySelector('#gambarMenu3');
    const btnTambah3 = document.getElementById('btnTambah3');
    const formtambahMenu3 = document.getElementById('tambahMenu3');

    gambar.addEventListener('change', async (e) => {
        e.preventDefault();
        fileimage = e.target.files[0];
      });

    formtambahMenu3.addEventListener('submit', async (e) => {
      e.preventDefault();
      btnTambah3.innerText = 'Mohon tunggu ...';
      btnTambah3.classList.add('disabled');
      const data = {
        nama_menu3: escapeHtml(namaData3.value),
        link: link.value,
        admin: getUserInfo().id,
        tanggal: new Date().toLocaleDateString(),
      };
      const nanoid = customAlphabet('1234567890', 10);
      const idMenu = `menu3_${nanoid()}`;
      await uploadFile(fileimage, `menu3/${idMenu}`).then((url) => {
        data.gambar = url;
      });
      await this._insertData(data, idMenu);
    });
  },

  async _insertData(data, id) {
    try {
      await setDoc(doc(db, 'menu3', id), data);
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

export default tambahMenu3Function;
