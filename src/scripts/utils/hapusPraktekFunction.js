import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  setDoc,
  deleteDoc,
  getDoc,
} from "firebase/firestore";
import { getStorage, ref, deleteObject } from "firebase/storage";
import firebaseConfig from "../globals/firebaseConfig";
import { getUserInfo, escapeHtml, uploadFile } from "./functions";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const hapusPraktekFunction = {
  async init() {
    await this._btndeleteClik();
  },

  async _btndeleteClik() {
    const deleteProduk = document.querySelectorAll("#deletePraktek");
    deleteProduk.forEach((btndelete) => {
      btndelete.addEventListener("click", (e) => {
        const id = btndelete.getAttribute("data-id");
        e.preventDefault();
        Swal.fire({
          title: "Jadwal ini akan dihapus? ",
          showCancelButton: true,
          confirmButtonText: "Confirm",
        }).then(async (result) => {
          if (result.isConfirmed) {
            await this._deleteDataProduk(id);
          }
        });
      });
    });
  },

  async _deleteDataProduk(id) {
    try {
      await deleteDoc(doc(db, "jadwalPraktek", id));
      Swal.fire({
        icon: "success",
        title: "Berhasil",
        text: "Jadwal Praktek berhasil dihapus",
        showCloseButton: true,
      });
      setTimeout(() => {
        location.reload();
      }, 2000);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Gagal",
        text: "Menu gagal dihapus",
        showCloseButton: true,
      });
      console.log(error);
    }
  },
};

export default hapusPraktekFunction;
