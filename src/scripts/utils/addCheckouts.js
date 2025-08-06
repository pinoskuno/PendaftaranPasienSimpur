/* eslint-disable prefer-destructuring */
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { customAlphabet } from "nanoid";
import firebaseConfig from "../globals/firebaseConfig";
import dataProduct from "./dataProducts";
import editTransaction from "./editTransactions";
import flassMessage from "./flassMessage";
import { getUserInfo, escapeHtml } from "./functions";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const addCheckout = {
  async init() {
    await this.addToDatabase();
  },

  async addToDatabase(idProduk, idSeller, buyerId) {
    const totalPesan = document.querySelector("#totalBeli");
    const btnSubmit = document.getElementById("btnCheckout");
    const formAddCheckout = document.getElementById("addCheckout");

    formAddCheckout.addEventListener("submit", async (e) => {
      e.preventDefault();
      btnSubmit.innerText = "Mohon tunggu ...";
      btnSubmit.classList.add("disabled");

      // Ganti sesuai kebutuhan Anda untuk mendapatkan ID produk dan ID penjual
      const dataProduk = await dataProduct._fetchDataProductByIdProduk(
        idProduk
      );
      const currentStock = dataProduk.kuota_pasien;

      const dataCheckout = {
        id_barang: escapeHtml(idProduk),
        id_buyer: buyerId, // Menggunakan buyerId yang diperoleh dari form inputan
        id_seller: escapeHtml(idSeller),
        antrian: escapeHtml(totalPesan.value),
        nama_pasien: namaPasien.value,
        nomor_rekam_medis: nomorRekamMedis.value,
        tanggal_lahir: tanggalLahir.value,
        nik_ktp: nomorKTP.value,
        nomor_bpjs: nomorBPJS.value,
        nomor_hp: nomorHP.value,
        alamat: Alamat.value,
        jenis_kelamin: jenisKelamin.value,
        poli: poli.value,
        waktu_reservasi: waktuReservasi.value,
        // checkin: Checkin.value,
        status: Status.value,
      };

      const calculateNewStock =
        Math.floor(currentStock) - Math.floor(totalPesan.value);
      const updatedStockData = {
        kuota_pasien: calculateNewStock,
      };
      const nanoid = customAlphabet("1234567890abcdef", 10);
      const idCheckout = `daftar_antrian_${nanoid()}`;
      await this._insertData(dataCheckout, idCheckout); // add to database checkout
      await editTransaction._updateStokProduct(updatedStockData, idProduk); // update stok produk
    });
  },

  async _insertData(data, id) {
    try {
      await setDoc(doc(db, "daftarAntrian", id), data);
      flassMessage(
        "success",
        "Pendaftaran Berhasil",
        "Terima kasih telah melakukan pendaftaran, pasien diharapkan melakukan checkin 30 menit sebelum jadwal praktek dokter"
      );
      setTimeout(() => {
        window.location.href = "/";
      }, 4000);
    } catch (error) {
      flassMessage("error", "Gagal Memesan", `Error= ${error}`);
    }
  },
};

export default addCheckout;
