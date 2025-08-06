import { initializeApp } from 'firebase/app';
import {
  getFirestore, doc, setDoc, deleteDoc, getDoc, updateDoc
} from 'firebase/firestore';
import { customAlphabet } from 'nanoid';
import firebaseConfig from "../globals/firebaseConfig";
import {
  getUserInfo, escapeHtml, uploadFile,
} from './functions';

  
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const editMenu4Function = {
    async init(id) {
      await this.getValueInputEdit(id);
    },
  
    async getValueInputEdit(id) {
      const editNamaMenu4 = document.querySelector('#namaMenu4');
      const editLink4 = document.querySelector('#link');
      const editGambarMenu4 = document.querySelector('#editGambarMenu4')
      const formEditMenu4 = document.getElementById('EditMenu4');
      const btnEditMenu4 = document.getElementById('btnEditMenu4');
  
      editGambarMenu4.addEventListener('change', async (e) => {
        e.preventDefault();
        await uploadFile(e.target.files[0], `menu4/${id}`).then((url) => {
          const data = {};
          data.gambar = url;
          this._insertEditmenu4(data, id);
        });
      });

      formEditMenu4.addEventListener('submit', async (e) => {
        e.preventDefault();
        btnEditMenu4.innerText = 'Mohon tunggu ...';
        btnEditMenu4.classList.add('disabled');
        const data = {
          nama_menu4: escapeHtml(editNamaMenu4.value),
          link: editLink4.value,
          tanggal: new Date().toLocaleDateString(),
        };
        await this._insertEditmenu4(data, id);
      });
    },
  
    async _insertEditmenu4(data, id) {
      try {
        const docRef = doc(db, 'menu4', id);
        await updateDoc(docRef, data);
        Swal.fire({
          icon: 'success',
          title: 'Berhasil',
          text: 'Menu berhasil diubah',
          showCloseButton: true,
          })
        setTimeout(() => {
          window.location.href = '../#/menu4';
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
  
    async fetchMenuById(menuID) {
      const docRef = doc(db, 'menu4', `${menuID}`);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return docSnap.data();
      }
      // return null;
    },
  };
  
  export default editMenu4Function;
  