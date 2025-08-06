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
const editPraktekFunction = {
  async init(idProduk) {
    await this.getValueInputEdit(idProduk);
  },

  async getValueInputEdit(id) {
    const namaPoli = document.querySelector("#namaPoli");
    const namaDokter = document.querySelector("#namaDokter");
    const jadwalSenin = document.querySelector("#jadwalSenin");
    const jadwalSelasa = document.querySelector("#jadwalSelasa");
    const jadwalRabu = document.querySelector("#jadwalRabu");
    const jadwalKamis = document.querySelector("#jadwalKamis");
    const jadwalJumat = document.querySelector("#jadwalJumat");
    const jadwalSabtu = document.querySelector("#jadwalSabtu");
    const formEditPraktek = document.getElementById("EditPraktek");
    const btnEditPraktek = document.getElementById("btnEditPraktek");

    formEditPraktek.addEventListener("submit", async (e) => {
      e.preventDefault();
      btnEditPraktek.innerText = "Mohon tunggu ...";
      btnEditPraktek.classList.add("disabled");
      const data = {
        nama_poli: escapeHtml(namaPoli.value),
        nama_dokter: escapeHtml(namaDokter.value),
        jadwal_senin: escapeHtml(jadwalSenin.value),
        jadwal_selasa: escapeHtml(jadwalSelasa.value),
        jadwal_rabu: escapeHtml(jadwalRabu.value),
        jadwal_kamis: escapeHtml(jadwalKamis.value),
        jadwal_jumat: escapeHtml(jadwalJumat.value),
        jadwal_sabtu: escapeHtml(jadwalSabtu.value),
      };
      await this._insertEditpraktek(data, id);
    });
  },

  async _insertEditpraktek(data, idProduk) {
    try {
      const docRef = doc(db, "jadwalPraktek", idProduk);
      await updateDoc(docRef, data);
      Swal.fire({
        icon: "success",
        title: "Berhasil",
        text: "Data berhasil diubah",
        showCloseButton: true,
      });
      setTimeout(() => {
        window.location.href = "../admin/#/praktek";
      }, 2000);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Gagal",
        text: "Jadwal praktek gagal ditambahkan",
        showCloseButton: true,
      });
    }
  },

  async fetchPraktekById(praktekID) {
    const docRef = doc(db, "jadwalPraktek", `${praktekID}`);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    }
    // return null;
  },
};

export default editPraktekFunction;
