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
const tambahMenu2Function = {
  async init() {
    await this._getDataForm();
  },

  async _getDataForm() {
    const namaData2 = document.querySelector('#namaMenu2');
    const link = document.querySelector('#link');
    const gambar = document.querySelector('#gambarMenu2');
    const btnTambah2 = document.getElementById('btnTambah2');
    const formtambahMenu2 = document.getElementById('tambahMenu2');

    gambar.addEventListener('change', async (e) => {
        e.preventDefault();
        fileimage = e.target.files[0];
      });

    formtambahMenu2.addEventListener('submit', async (e) => {
      e.preventDefault();
      btnTambah2.innerText = 'Mohon tunggu ...';
      btnTambah2.classList.add('disabled');
      const data = {
        nama_menu2: escapeHtml(namaData2.value),
        link: link.value,
        admin: getUserInfo().id,
        tanggal: new Date().toLocaleDateString(),
      };
      const nanoid = customAlphabet('1234567890', 10);
      const idMenu = `menu2_${nanoid()}`;
      await uploadFile(fileimage, `menu2/${idMenu}`).then((url) => {
        data.gambar = url;
      });
      await this._insertData(data, idMenu);
    });
  },

  async _insertData(data, id) {
    try {
      await setDoc(doc(db, 'menu2', id), data);
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

export default tambahMenu2Function;
