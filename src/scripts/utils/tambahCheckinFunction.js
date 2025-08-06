/* eslint-disable prefer-destructuring */
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { customAlphabet } from "nanoid";
import firebaseConfig from "../globals/firebaseConfig";
import { getUserInfo, escapeHtml, uploadFile } from "./functions";


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
let fileimage;
const tambahCheckinFunction = {
  async init() {
    await this._getDataForm();
  },

   async _getDataForm() {
    const namaPoli = document.querySelector("#namaPoli");
    const waktuCheckin = document.querySelector("#waktuCheckin");
    const kuotaPasien = document.querySelector("#kuotaPasien");
    const foto = document.querySelector('#foto');
    const btnTambah = document.getElementById("btnTambah");
    const formtambahCheckin = document.getElementById("tambahCheckin");

    foto.addEventListener('change', async (e) => {
      e.preventDefault();
      fileimage = e.target.files[0];
    });

    formtambahCheckin.addEventListener("submit", async (e) => {
      e.preventDefault();
      btnTambah.innerText = "Mohon tunggu ...";
      btnTambah.classList.add("disabled");
      const data = {
        nama_poli: escapeHtml(namaPoli.value),
        waktu_checkin: escapeHtml(waktuCheckin.value),
        kuota_pasien: escapeHtml(kuotaPasien.value),
        admin: getUserInfo().id,
      };
      const nanoid = customAlphabet("1234567890", 10);
      const idCheckin = `checkin_${nanoid()}`;
      await uploadFile(fileimage, `checkin/${idCheckin}`).then((url) => {
        data.foto = url;
      });
      await this._insertCheckin(data, idCheckin);
      });
    },


  async _insertCheckin(data, id) {
    try {
      await setDoc(doc(db, "checkin", id), data);
      Swal.fire({
        icon: "success",
        title: "Berhasil",
        text: "Data berhasil ditambahkan",
        showCloseButton: true,
      })
      setTimeout(() => {
        location.reload();
      }, 2000);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Gagal",
        text: "Data gagal ditambahkan",
        showCloseButton: true,
      })
    }
  },
};

export default tambahCheckinFunction;
