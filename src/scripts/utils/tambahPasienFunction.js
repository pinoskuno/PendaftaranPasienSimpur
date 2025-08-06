/* eslint-disable prefer-destructuring */
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { customAlphabet } from "nanoid";
import firebaseConfig from "../globals/firebaseConfig";
import { getUserInfo, escapeHtml, uploadFile } from "./functions";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
let fileimage;

const tambahPasienFunction = {
  async init() {
    await this._getDataForm();
  },

  async _getDataForm() {
    const namaPasien = document.querySelector("#namaPasien");
    const editNomorRekamMedis = document.querySelector("#nomorRekamMedis");
    const tanggalLahir = document.querySelector("#tanggalLahir");
    const nomorKTP = document.querySelector("#nomorKTP");
    const nomorBPJS = document.querySelector("#nomorBPJS");
    const nomorHP = document.querySelector("#nomorHP");
    const Alamat = document.querySelector("#Alamat");
    const jenisKelamin = document.querySelector("#jenisKelamin");
    const editPoli = document.querySelector("#poli");
    const waktuReservasi = document.querySelector("#waktuReservasi");
    const Checkin = document.querySelector("#Checkin");
    const Status = document.querySelector("#Status");
    const btnTambah = document.getElementById("btnTambah");
    const formtambahPasien = document.getElementById("tambahPasien");

    formtambahPasien.addEventListener("submit", async (e) => {
      e.preventDefault();
      btnTambah.innerText = "Mohon tunggu ...";
      btnTambah.classList.add("disabled");
      const data = {
        nama_pasien: escapeHtml(namaPasien.value),
        nomor_rekam_medis: escapeHtml(editNomorRekamMedis.value),
        tanggal_lahir: escapeHtml(tanggalLahir.value),
        nik_ktp: escapeHtml(nomorKTP.value),
        nomor_bpjs: escapeHtml(nomorBPJS.value),
        nomor_hp: escapeHtml(nomorHP.value),
        alamat: escapeHtml(Alamat.value),
        jenis_kelamin: escapeHtml(jenisKelamin.value),
        poli: escapeHtml(editPoli.value),
        waktu_reservasi: escapeHtml(waktuReservasi.value),
        checkin: escapeHtml(Checkin.value),
        status: escapeHtml(Status.value),
      };
      const nanoid = customAlphabet("1234567890", 10);
      const idPasien = `daftar_antrian_${nanoid()}`;
      await this._insertPasien(data, idPasien);
    });
  },

  async _insertPasien(data, id) {
    try {
      await setDoc(doc(db, "daftarAntrian", id), data);
      Swal.fire({
        icon: "success",
        title: "Berhasil",
        text: "Data berhasil ditambahkan",
        showCloseButton: true,
      });
      setTimeout(() => {
        location.reload();
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
};

export default tambahPasienFunction;
