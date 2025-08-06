/* eslint-disable prefer-destructuring */
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { customAlphabet } from "nanoid";
import firebaseConfig from "../globals/firebaseConfig";
import { getUserInfo, escapeHtml, uploadFile } from "./functions";


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
let fileimage;
const tambahAkunFunction = {
  async init() {
    await this._getDataForm();
  },

   async _getDataForm() {
    const namaAkun = document.querySelector("#namaAkun");
    const nomorHP = document.querySelector("#nomorHP");
    const email = document.querySelector("#email");
    const foto = document.querySelector('#foto');
    const passwordAkun = document.querySelector('#passwordAkun')
    const btnTambah = document.getElementById("btnTambah");
    const formtambahAkun = document.getElementById("tambahAkun");

    foto.addEventListener('change', async (e) => {
      e.preventDefault();
      fileimage = e.target.files[0];
    });

    formtambahAkun.addEventListener("submit", async (e) => {
      e.preventDefault();
      btnTambah.innerText = "Mohon tunggu ...";
      btnTambah.classList.add("disabled");
      const data = {
        nama: escapeHtml(namaAkun.value),
        no_hp: escapeHtml(nomorHP.value),
        email: escapeHtml(email.value),
        password: escapeHtml(passwordAkun.value),
      };
      const nanoid = customAlphabet("1234567890", 10);
      const idAkun = `akun_${nanoid()}`;
      await uploadFile(fileimage, `akun/${idAkun}`).then((url) => {
        data.fotoprofil = url;
      });
      await this._insertAkun(data, idAkun);
      });
    },


  async _insertAkun(data, id) {
    try {
      await setDoc(doc(db, "akun", id), data);
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

export default tambahAkunFunction;
