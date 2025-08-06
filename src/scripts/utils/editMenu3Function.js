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
  const editMenu3Function = {
    async init(id) {
      await this.getValueInputEdit(id);
    },
  
    async getValueInputEdit(id) {
      const editNamaMenu3 = document.querySelector('#namaMenu3');
      const editLink3 = document.querySelector('#link');
      const editGambarMenu3 = document.querySelector('#editGambarMenu3')
      const formEditMenu3 = document.getElementById('EditMenu3');
      const btnEditMenu3 = document.getElementById('btnEditMenu3');
  
      editGambarMenu3.addEventListener('change', async (e) => {
        e.preventDefault();
        await uploadFile(e.target.files[0], `menu3/${id}`).then((url) => {
          const data = {};
          data.gambar = url;
          this._insertEditmenu3(data, id);
        });
      });

      formEditMenu3.addEventListener('submit', async (e) => {
        e.preventDefault();
        btnEditMenu3.innerText = 'Mohon tunggu ...';
        btnEditMenu3.classList.add('disabled');
        const data = {
          nama_menu3: escapeHtml(editNamaMenu3.value),
          link: editLink3.value,
          tanggal: new Date().toLocaleDateString(),
        };
        await this._insertEditmenu3(data, id);
      });
    },
  
    async _insertEditmenu3(data, id) {
      try {
        const docRef = doc(db, 'menu3', id);
        await updateDoc(docRef, data);
        Swal.fire({
          icon: 'success',
          title: 'Berhasil',
          text: 'Menu berhasil diubah',
          showCloseButton: true,
          })
        setTimeout(() => {
          window.location.href = '../#/menu3';
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
      const docRef = doc(db, 'menu3', `${menuID}`);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return docSnap.data();
      }
      // return null;
    },
  };
  
  export default editMenu3Function;
  