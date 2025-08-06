import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  setDoc,
  deleteDoc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { customAlphabet } from "nanoid";
import firebaseConfig from "../globals/firebaseConfig";
import { getUserInfo, escapeHtml, uploadFile } from "./functions";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const editDataFunction = {
  async init(idProduk) {
    await this.getValueInputEdit(idProduk);
  },

  async getValueInputEdit(id) {
    const editNamaData = document.querySelector("#namaData");
    const editLink = document.querySelector("#link");
    const formEditData = document.getElementById("EditData");
    const btnEditData = document.getElementById("btnEditData");

    formEditData.addEventListener("submit", async (e) => {
      e.preventDefault();
      btnEditData.innerText = "Mohon tunggu ...";
      btnEditData.classList.add("disabled");
      const data = {
        nama_data: escapeHtml(editNamaData.value),
        link: editLink.value,
        tanggal: new Date().toLocaleDateString(),
      };
      await this._insertEditdata(data, id);
    });
  },

  async _insertEditdata(data, idProduk) {
    try {
      const docRef = doc(db, "data", idProduk);
      await updateDoc(docRef, data);
      Swal.fire({
        icon: "success",
        title: "Berhasil",
        text: "Data berhasil diubah",
        showCloseButton: true,
      });
      setTimeout(() => {
        window.location.href = "../#/data";
      }, 2000);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Gagal",
        text: "Data gagal ditambahkan",
        showCloseButton: true,
      });
    }
  },

  async fetchDataById(dataID) {
    const docRef = doc(db, "data", `${dataID}`);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    }
    return null;
  },
};

export default editDataFunction;
