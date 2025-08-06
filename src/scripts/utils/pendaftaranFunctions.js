import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, doc, setDoc, getDoc, getDocs } from "firebase/firestore";
import firebaseConfig from "../globals/firebaseConfig";
import { customAlphabet } from "nanoid";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
let fileimage;

const pendaftaranFunctions = {
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
        nama_pasien: namaPasien.value,
        nomor_rekam_medis: editNomorRekamMedis.value,
        tanggal_lahir: tanggalLahir.value,
        nik_ktp: nomorKTP.value,
        nomor_bpjs: nomorBPJS.value,
        nomor_hp: nomorHP.value,
        alamat: Alamat.value,
        jenis_kelamin: jenisKelamin.value,
        poli: editPoli.value,
        waktu_reservasi: waktuReservasi.value,
        checkin: Checkin.value,
        status: Status.value,
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
        title: "Pendaftaran Berhasil",
        text: "Terima kasih telah melakukan pendaftaran",
        showCloseButton: true,
      });
      setTimeout(() => {
        location.reload();
      }, 2000);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Pendaftaran Gagal",
        text: " Pendaftaran pasien gagal",
        showCloseButton: true,
      });
    }
  },
};

export default pendaftaranFunctions;
