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
  const editMenu5Function = {
    async init(id) {
      await this.getValueInputEdit(id);
    },
  
    async getValueInputEdit(id) {
      const editNamaMenu5 = document.querySelector('#namaMenu5');
      const editLink5 = document.querySelector('#link');
      const editGambarMenu5 = document.querySelector('#editGambarMenu5')
      const formEditMenu5 = document.getElementById('EditMenu5');
      const btnEditMenu5 = document.getElementById('btnEditMenu5');
  
      editGambarMenu5.addEventListener('change', async (e) => {
        e.preventDefault();
        await uploadFile(e.target.files[0], `menu5/${id}`).then((url) => {
          const data = {};
          data.gambar = url;
          this._insertEditmenu5(data, id);
        });
      });

      formEditMenu5.addEventListener('submit', async (e) => {
        e.preventDefault();
        btnEditMenu5.innerText = 'Mohon tunggu ...';
        btnEditMenu5.classList.add('disabled');
        const data = {
          nama_menu5: escapeHtml(editNamaMenu5.value),
          link: editLink5.value,
          tanggal: new Date().toLocaleDateString(),
        };
        await this._insertEditmenu5(data, id);
      });
    },
  
    async _insertEditmenu5(data, id) {
      try {
        const docRef = doc(db, 'menu5', id);
        await updateDoc(docRef, data);
        Swal.fire({
          icon: 'success',
          title: 'Berhasil',
          text: 'Menu berhasil diubah',
          showCloseButton: true,
          })
        setTimeout(() => {
          window.location.href = '../#/menu5';
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
      const docRef = doc(db, 'menu5', `${menuID}`);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return docSnap.data();
      }
      // return null;
    },
  };
  
  export default editMenu5Function;
  