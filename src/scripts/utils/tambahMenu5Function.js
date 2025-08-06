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
const tambahMenu5Function = {
  async init() {
    await this._getDataForm();
  },

  async _getDataForm() {
    const namaData5 = document.querySelector('#namaMenu5');
    const link = document.querySelector('#link');
    const gambar = document.querySelector('#gambarMenu5');
    const btnTambah5 = document.getElementById('btnTambah5');
    const formtambahMenu5 = document.getElementById('tambahMenu5');

    gambar.addEventListener('change', async (e) => {
        e.preventDefault();
        fileimage = e.target.files[0];
      });

    formtambahMenu5.addEventListener('submit', async (e) => {
      e.preventDefault();
      btnTambah5.innerText = 'Mohon tunggu ...';
      btnTambah5.classList.add('disabled');
      const data = {
        nama_menu5: escapeHtml(namaData5.value),
        link: link.value,
        admin: getUserInfo().id,
        tanggal: new Date().toLocaleDateString(),
      };
      const nanoid = customAlphabet('1534567890', 10);
      const idMenu = `menu5_${nanoid()}`;
      await uploadFile(fileimage, `menu5/${idMenu}`).then((url) => {
        data.gambar = url;
      });
      await this._insertData(data, idMenu);
    });
  },

  async _insertData(data, id) {
    try {
      await setDoc(doc(db, 'menu5', id), data);
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

export default tambahMenu5Function;
