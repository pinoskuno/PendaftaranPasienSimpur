import { doc, getDoc, getFirestore, updateDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../globals/firebaseConfig";
import { escapeHtml, redirect } from "./functions";
import flassMessage from "./flassMessage";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const editTransaction = {
  async init(idTransaksi) {
    const fetchdata = await this._fetchDataByIdProduct(idTransaksi);
    return fetchdata;
  },

  async getValueInputEdit(id) {
    const editnamaPasien = document.querySelector("namaPasien");
    const editNomorRekamMedis = document.querySelector("nomorRekamMedis");
    const editnomorKTP = document.querySelector("nomorKTP");
    const edittanggalLahir = document.querySelector("tanggalLahir");
    const editnomorHP = document.querySelector("nomorHP");
    const editnomorBPJS = document.querySelector("nomorBPJS");
    const editAlamat = document.querySelector("Alamat");
    const editjenisKelamin = document.querySelector("jenisKelamin");
    const editPoli = document.querySelector("poli");
    const editwaktuReservasi = document.querySelector("waktuReservasi");
    const editCheckin = document.querySelector("Checkin");
    const status = document.getElementById("status");
    const formEditTransaksi = document.getElementById("EditTransaksi");
    const btnEditTransaksi = document.getElementById("btnEditTransaksi");

    formEditTransaksi.addEventListener("submit", async (e) => {
      e.preventDefault();
      btnEditTransaksi.innerText = "Mohon tunggu ...";
      btnEditTransaksi.classList.add("disabled");

      const dataTransaksi = {
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
        chekin: escapeHtml(editCheckin.value),
        status: escapeHtml(status.value),
        // antrian: escapeHtml(stokRequest.toString()),
      };
      await this._insertEditdata(dataTransaksi, id);
    });
  },
  // const stokRequest = Math.floor(stokBeli.value);
  // const previousVal = Math.floor(prevvalue);
  // const currentStock = Math.floor(stokBarang);
  // if (stokRequest <= 0) {
  //   alert("Stok yang diminta harus lebih dari 0");
  //   btnEditTransaksi.innerText = "Edit Transaksi";
  //   btnEditTransaksi.classList.remove("disabled");
  //   return; // Hentikan eksekusi jika stok yang diminta kurang dari atau sama dengan 0
  // }
  // if (stokRequest > previousVal) {
  //   const calculate = stokRequest - previousVal;
  //   const dataToDB = currentStock - calculate;
  //   if (dataToDB < 0) {
  //     alert("Stok tidak mencukupi");
  //     btnEditTransaksi.innerText = "Edit Transaksi";
  //     btnEditTransaksi.classList.remove("disabled");
  //     return; // Hentikan eksekusi jika stok menjadi negatif
  //   }
  //   const updatedataStok = {
  //     kuota_pasien: dataToDB.toString(),
  //   };
  //   await this._updateStokProduct(updatedataStok, idProduk);
  // } else if (stokRequest < previousVal) {
  //   const calculate = previousVal - stokRequest;
  //   const dataToDB = currentStock + calculate;
  //   const updatedataStok = {
  //     kuota_pasien: dataToDB.toString(),
  //   };
  //   await this._updateStokProduct(updatedataStok, idProduk);
  // }

  async _insertEditdata(data, idTransaksi) {
    try {
      const docRef = doc(db, "daftarAntrian", idTransaksi);
      await updateDoc(docRef, data);
      flassMessage("success", "Berhasil!", "Data berhasil di edit");
      setTimeout(() => {
        redirect("../admin/#/checkin");
      }, 2000);
    } catch (error) {
      flassMessage("error", "Error!", `error:${error}`);
    }
  },

  // async _updateStokProduct(data, idProduk) {
  //   try {
  //     const docRef = doc(db, "checkin", idProduk);
  //     await updateDoc(docRef, data);
  //   } catch (error) {
  //     flassMessage("error", "Error!", `error:${error}`);
  //   }
  // },

  async _fetchDataByIdProduct(idTransaksi) {
    const getId = idTransaksi;

    const docRef = doc(db, "checkin", `${getId}`);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    }
    return null;
  },
};

export default editTransaction;
