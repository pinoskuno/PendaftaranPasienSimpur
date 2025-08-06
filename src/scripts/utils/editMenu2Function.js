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
  const editMenu2Function = {
    async init(id) {
      await this.getValueInputEdit(id);
    },
  
    async getValueInputEdit(id) {
      const editNamaMenu2 = document.querySelector('#namaMenu2');
      const editLink2 = document.querySelector('#link');
      const editGambarMenu2 = document.querySelector('#editGambarMenu2')
      const formEditMenu2 = document.getElementById('EditMenu2');
      const btnEditMenu2 = document.getElementById('btnEditMenu2');
  
      editGambarMenu2.addEventListener('change', async (e) => {
        e.preventDefault();
        await uploadFile(e.target.files[0], `menu2/${id}`).then((url) => {
          const data = {};
          data.gambar = url;
          this._insertEditmenu2(data, id);
        });
      });

      formEditMenu2.addEventListener('submit', async (e) => {
        e.preventDefault();
        btnEditMenu2.innerText = 'Mohon tunggu ...';
        btnEditMenu2.classList.add('disabled');
        const data = {
          nama_menu2: escapeHtml(editNamaMenu2.value),
          link: editLink2.value,
          tanggal: new Date().toLocaleDateString(),
        };
        await this._insertEditmenu2(data, id);
      });
    },
  
    async _insertEditmenu2(data, id) {
      try {
        const docRef = doc(db, 'menu2', id);
        await updateDoc(docRef, data);
        Swal.fire({
          icon: 'success',
          title: 'Berhasil',
          text: 'Menu berhasil diubah',
          showCloseButton: true,
          })
        setTimeout(() => {
          window.location.href = '../#/menu2';
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
      const docRef = doc(db, 'menu2', `${menuID}`);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return docSnap.data();
      }
      // return null;
    },
  };
  
  export default editMenu2Function;
  