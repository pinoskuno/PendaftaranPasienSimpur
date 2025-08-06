/* eslint-disable prefer-destructuring */
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { customAlphabet } from "nanoid";
import firebaseConfig from "../globals/firebaseConfig";
import flassMessage from "./flassMessage";
import { getUserInfo, escapeHtml, uploadFile } from "./functions";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
let fileimage;
const addProduct = {
  async init() {
    await this._getDataForm();
  },

  async _getDataForm() {
    const fotoBarang = document.getElementById("fotoBarang");
    const namaPoli = document.querySelector("#namaPoli");
    const waktuCheckin = document.querySelector("#waktuCheckin");
    const kuota = document.querySelector("#kuota");
    const btnTambah = document.getElementById("btnTambah");
    const formAddProduct = document.getElementById("addProduct");

    fotoBarang.addEventListener("change", async (e) => {
      e.preventDefault();
      fileimage = e.target.files[0];
    });

    formAddProduct.addEventListener("submit", async (e) => {
      e.preventDefault();
      btnTambah.innerText = "Mohon tunggu ...";
      btnTambah.classList.add("disabled");
      const dataproduct = {
        nama_poli: escapeHtml(namaPoli.value),
        waktu_checkin: escapeHtml(waktuCheckin.value),
        kuota: escapeHtml(kuota.value),
        tgl_dibuat: new Date().toISOString(),
        tgl_diupdate: new Date().toISOString(),
      };
      const nanoid = customAlphabet("1234567890abcdef", 17);
      const idProduk = `product_${nanoid()}`;
      await uploadFile(fileimage, `products/${idProduk}`).then((url) => {
        dataproduct.foto = url;
      });
      await this._insertDataProduct(dataproduct, idProduk);
    });
  },

  async _insertDataProduct(data, id) {
    try {
      await setDoc(doc(db, "products", id), data);
      flassMessage("success", "Berhasil!", "Tambah data produk berhasil!");
      setTimeout(() => {
        location.reload();
      }, 2000);
    } catch (error) {
      flassMessage("error", "Gagal Tambah", `Error= ${error}`);
    }
  },

  // addproduct untuk admin
  async _getDataFormAdmin() {
    const fotoBarang = document.getElementById("fotoBarang");
    const namaPoli = document.querySelector("#namaPoli");
    const waktuCheckin = document.querySelector("#waktuCheckin");
    const kuota = document.querySelector("#kuota");
    const btnTambah = document.getElementById("btnTambah");
    const formAddProduct = document.getElementById("addProduct");

    fotoBarang.addEventListener("change", async (e) => {
      e.preventDefault();
      fileimage = e.target.files[0];
    });

    formAddProduct.addEventListener("submit", async (e) => {
      e.preventDefault();
      btnTambah.innerText = "Mohon tunggu ...";
      btnTambah.classList.add("disabled");
      const dataproduct = {
        nama_poli: escapeHtml(namaPoli.value),
        waktu_checkin: escapeHtml(waktuCheckin.value),
        kuota: escapeHtml(kuota.value),
        tgl_dibuat: new Date().toISOString(),
        tgl_diupdate: new Date().toISOString(),
      };
      const nanoid = customAlphabet("1234567890abcdef", 17);
      const idProduk = `product_${nanoid()}`;
      await uploadFile(fileimage, `products/${idProduk}`).then((url) => {
        dataproduct.foto = url;
      });
      await this._insertDataProduct(dataproduct, idProduk);
    });
  },
};

export default addProduct;
