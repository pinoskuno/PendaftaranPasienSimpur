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
const editPasienFunction = {
  async init(idProduk) {
    await this.getValueInputEdit(idProduk);
  },

  async getValueInputEdit(id) {
    const editnamaPasien = document.querySelector("#namaPasien");
    const editNomorRekamMedis = document.querySelector("#nomorRekamMedis");
    const editnomorKTP = document.querySelector("#nomorKTP");
    const edittanggalLahir = document.querySelector("#tanggalLahir");
    const editnomorHP = document.querySelector("#nomorHP");
    const editnomorBPJS = document.querySelector("#nomorBPJS");
    const editAlamat = document.querySelector("#Alamat");
    const editjenisKelamin = document.querySelector("#jenisKelamin");
    const editPoli = document.querySelector("#poli");
    const editwaktuReservasi = document.querySelector("#waktuReservasi");
    const editCheckin = document.querySelector("#Checkin");
    const editStatus = document.querySelector("#Status");
    const formEditPasien = document.getElementById("EditPasien");
    const btnEditPasien = document.getElementById("btnEditPasien");

    formEditPasien.addEventListener("submit", async (e) => {
      e.preventDefault();
      btnEditPasien.innerText = "Mohon tunggu ...";
      btnEditPasien.classList.add("disabled");
      const data = {
        nama_pasien: escapeHtml(editnamaPasien.value),
        nomor_rekam_medis: escapeHtml(editNomorRekamMedis.value),
        nik_ktp: escapeHtml(editnomorKTP.value),
        tanggal_lahir: escapeHtml(edittanggalLahir.value),
        nomor_hp: escapeHtml(editnomorHP.value),
        nomor_bpjs: escapeHtml(editnomorBPJS.value),
        alamat: escapeHtml(editAlamat.value),
        jenis_kelamin: escapeHtml(editjenisKelamin.value),
        poli: escapeHtml(editPoli.value),
        waktu_reservasi: escapeHtml(editwaktuReservasi.value),
        checkin: escapeHtml(editCheckin.value),
        status: escapeHtml(editStatus.value),
      };
      await this._insertEditpasien(data, id);
    });
  },

  async _insertEditpasien(data, idProduk) {
    try {
      const docRef = doc(db, "daftarAntrian", idProduk);
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

  async fetchPasienById(pasienID) {
    const docRef = doc(db, "daftarAntrian", `${pasienID}`);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    }
    return null;
  },
};

export default editPasienFunction;
