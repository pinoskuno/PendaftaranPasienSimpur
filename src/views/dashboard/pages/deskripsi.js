/* eslint-disable camelcase */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable prefer-const */
/* eslint-disable func-names */
/* eslint-disable quotes */
/* eslint-disable no-undef */
/* eslint-disable quote-props */
import UrlParser from "../../../scripts/routes/url-parser";
import addCheckout from "../../../scripts/utils/addCheckouts";
import dataAccount from "../../../scripts/utils/dataAccounts";
import dataProduct from "../../../scripts/utils/dataProducts";
import moment from 'moment-timezone';

const Deskripsi = {
  async render() {
    return `
    <section class="container deskripsi my-5 mt-3" id="container">
    </section>
    `;
  },
  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const container = document.getElementById("container");
    const dataProduk = await dataProduct._fetchDataProductByIdProduk(url.id);
    const dataSeller = await dataAccount._fetchUserNameById(dataProduk.id_user);

    container.innerHTML += `
      <div class="row mt-5">
        <div class="col-md-5 p-5">
          <div class="d-flex justify-content-center align-items-center">
            <img class="img-fluid" style="border-radius: 20px; padding-top:150px" src="${dataProduk.foto}" width="300%"/>
          </div>
        </div>
        <div class="col-md-7">
          <header class="section-header">
            <p>${dataProduk.nama_poli}</p>
          </header>

          <button type="button" class="btn btn-info mb-2">
            Total Kuota Pasien <span class="badge bg-white text-info" id='stokProduk'>${dataProduk.kuota_pasien}</span>
          </button></br>
          
          <form class="row g-3" action="#" method="post" id="addCheckout" enctype="multipart/form-data">
            <!-- Jumlah Beli dihilangkan dan diset sebagai default 1 -->
            <input type="hidden" id="totalBeli" value="1">
            <!-- Tambahkan inputan untuk buyerId -->
            <div class="col-md-6">
              <label for="nomorKTP" class="form-label">NIK KTP</label>
              <input type="text" name="nomorKTP" id="nomorKTP" class="form-control form-control-lg bg-light fs-6" placeholder="NIK KTP" required>
            </div>
            <div class="col-md-6">
              <label for="jenisKelamin" class="form-label">Jenis Kelamin</label>
              <select type="text" class="form-control" name="jenisKelamin" id="jenisKelamin" aria-label="jenisKelamin" placeholder="Isikan jenis kelamin" required>
                <option>Pria</option>
                <option>Wanita</option>
              </select>
            </div>
            <div class="col-md-12">
                <label for="namaPasien" class="form-label">Nama</label>
                <input type="text" name="namaPasien" id="namaPasien" class="form-control form-control-lg bg-light fs-6" placeholder="Name Pasien" required />
            </div>
            <div class="col-md-6">
                <label for="nomorRekamMedis" class="form-label">Nomor Rekam Medis</label>
                <input type="text" name="nomorRekamMedis" id="nomorRekamMedis" class="form-control form-control-lg bg-light fs-6" placeholder="No. Rekam Medis" required>
            </div>
            <div class="col-md-6">
                <label for="tanggalLahir" class="form-label">Tanggal Lahir</label>
                <input type="date" name="tanggalLahir" id="tanggalLahir" class="form-control form-control-lg bg-light fs-6" placeholder="Tanggal Lahir" required>
            </div>

            <div class="col-md-6">
                <label for="nomorBPJS" class="form-label">Nomor BPJS</label>
                <input type="text" name="nomorBPJS" id="nomorBPJS" class="form-control form-control-lg bg-light fs-6" placeholder="Nomor BPJS" required>
            </div>
            <div class="col-md-6">
                <label for="nomorHP" class="form-label">Nomor HP</label>
                <input type="text" name="nomorHP" id="nomorHP" class="form-control form-control-lg bg-light fs-6" placeholder="Nomor HP" required>
            </div>
            <div class="col-md-12">
                <label for="Alamat" class="form-label">Alamat</label>
                <input type="text" name="Alamat" id="Alamat" class="form-control form-control-lg bg-light fs-6" placeholder="Alamat" required>
            </div>
            <div class="col-md-6">
            <label for="poli" class="form-label">Poli</label>
            <input type="text" name="poli" id="poli" class="form-control form-control-lg bg-light fs-6" placeholder="Poli" value="${dataProduk.nama_poli} ${dataProduk.waktu_checkin}" readonly>
            </div>
            <div class="col-md-6">
                <input type="hidden" name="waktuReservasi" id="waktuReservasi" value="" required>
            </div>
            <div class="col-md-6">
                <input type="hidden"  id="Status" value="pending">
            </div>
            <div class="d-grid gap-2 mt-2">
              <button class="btn btn-primary" type="submit" id="btnCheckout" title="checkout">Daftar</button>
            </div>
            <div class="d-grid gap-2 mt-2">
              <button class="btn btn-secondary" type="reset" id="reset">Reset</button>
            </div>
          </form>
        </div>
      </div>
    `;

    // Tambahkan event listener untuk form
    const formAddCheckout = document.getElementById("addCheckout");
    formAddCheckout.addEventListener("submit", async (e) => {
      e.preventDefault();

      // Dapatkan nilai buyerId dari inputan
      const buyerIdInput = document.getElementById("nomorKTP");
      const buyerId = buyerIdInput.value;
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
      const Status = document.querySelector("#Status");

      // Tambahkan penanganan stok 0 di sini
      const stokProdukElement = document.getElementById("stokProduk");
      const stokProduk = parseInt(stokProdukElement.textContent);

      if (stokProduk <= 0) {
        alert("Stok produk habis. Tidak dapat melakukan pemesanan.");
        return;
      }

      // Set the hidden input value to the current date and time
      const currentDate = moment().tz('Asia/Jakarta');
      const formattedDate = currentDate.format('YYYY-MM-DDTHH:mm');
  
      waktuReservasi.value = formattedDate;

      // Call the addToDatabase function
      await addCheckout.addToDatabase(
        url.id,
        dataProduk.id_user,
        buyerId,
        namaPasien,
        editNomorRekamMedis,
        tanggalLahir,
        nomorKTP,
        nomorBPJS,
        nomorHP,
        Alamat,
        jenisKelamin,
        editPoli,
        waktuReservasi,
        Status
      );
    });
  },
};

export default Deskripsi;
