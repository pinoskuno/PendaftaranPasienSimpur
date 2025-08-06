/* eslint-disable prefer-destructuring */
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { customAlphabet } from "nanoid";
import firebaseConfig from "../globals/firebaseConfig";
import { getUserInfo, escapeHtml, uploadFile } from "./functions";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
let fileimage;
const tambahPraktekFunction = {
  async init() {
    await this._getDataForm();
  },

  async _getDataForm() {
    const namaPoli = document.querySelector("#namaPoli");
    const namaDokter = document.querySelector("#namaDokter");
    const jadwalSenin = document.querySelector("#jadwalSenin");
    const jadwalSelasa = document.querySelector("#jadwalSelasa");
    const jadwalRabu = document.querySelector("#jadwalRabu");
    const jadwalKamis = document.querySelector("#jadwalKamis");
    const jadwalJumat = document.querySelector("#jadwalJumat");
    const jadwalSabtu = document.querySelector("#jadwalSabtu");
    const btnTambah = document.getElementById("btnTambah");
    const formtambahPraktek = document.getElementById("tambahPraktek");

    formtambahPraktek.addEventListener("submit", async (e) => {
      e.preventDefault();
      btnTambah.innerText = "Mohon tunggu ...";
      btnTambah.classList.add("disabled");
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
      const nanoid = customAlphabet("1234567890", 10);
      const idPraktek = `jadwal_praktek_${nanoid()}`;
      await this._insertPraktek(data, idPraktek);
    });
  },

  async _insertPraktek(data, id) {
    try {
      await setDoc(doc(db, "jadwalPraktek", id), data);
      Swal.fire({
        icon: "success",
        title: "Berhasil",
        text: "Jadwal praktek berhasil ditambahkan",
        showCloseButton: true,
      });
      setTimeout(() => {
        location.reload();
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
};

export default tambahPraktekFunction;
