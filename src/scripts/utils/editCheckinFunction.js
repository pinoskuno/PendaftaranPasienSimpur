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
const editCheckinFunction = {
  async init(id) {
    await this.getValueInputEdit(id);
  },

  async getValueInputEdit(id) {
    const namaPoli = document.querySelector("#namaPoli");
    const waktuCheckin = document.querySelector("#waktuCheckin");
    const kuotaPasien = document.querySelector("#kuotaPasien");
    const formEditCheckin = document.getElementById("EditCheckin");
    const btnEditCheckin = document.getElementById("btnEditCheckin");
    const editGambarFotoCheckin = document.querySelector('#editFoto');

    editGambarFotoCheckin.addEventListener('submit', async (e) => {
      e.preventDefault();
      await uploadFile(e.target.files[0], `checkin/${id}`).then((url) => {
        const data = {};
        data.foto = url;
        this._insertEditcheckin(data, id);
      });
    });

    formEditCheckin.addEventListener("submit", async (e) => {
      e.preventDefault();
      btnEditCheckin.innerText = "Mohon tunggu ...";
      btnEditCheckin.classList.add("disabled");
      const data = {
        nama_poli: escapeHtml(namaPoli.value),
        waktu_checkin: escapeHtml(waktuCheckin.value),
        kuota_pasien: escapeHtml(kuotaPasien.value),
      };
      await this._insertEditcheckin(data, id);
    });
  },

  async _insertEditcheckin(data, id) {
    try {
      const docRef = doc(db, "checkin", id);
      await updateDoc(docRef, data);
      Swal.fire({
        icon: "success",
        title: "Berhasil",
        text: "Data berhasil diubah",
        showCloseButton: true,
      });
      setTimeout(() => {
        window.location.href = "../admin/#/checkin";
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

  async fetchCheckinById(checkinID) {
    const docRef = doc(db, "checkin", `${checkinID}`);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    }
    // return null;
  },
};

export default editCheckinFunction;
