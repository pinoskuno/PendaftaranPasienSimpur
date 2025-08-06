import { async } from "regenerator-runtime";
import pendaftaranFunctions from "../../../scripts/utils/pendaftaranFunctions";

const mainPendaftaran = {
  async render() {
    return ` <section>

    <div class="container d-flex justify-content-center align-items-center min-vh-100">
      <div class="row border rounded-5 p-3 bg-white shadow box-area">
      <div class="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box" style="background: #103cbe;">
          <div class="featured-image mb-3">
           <img src="../assets/img/pendaftaran/daftar-pasien.png" class="img-fluid" style="width: 500px;">
          </div>
      </div> 
       
      <div class="col-md-6 right-box">
         <div class="row align-items-center">
               <div class="header-text mb-4">
                    <h2>PENDAFTARAN PASIEN ONLINE</h2>
                    <p>UPT PUSKESMAS SIMPUR</p>
               </div>

                <form class="row g-3" id="tambahPasien">
                    <div class="col-md-12">
                        <label for="namaPasien" class="form-label">Nama</label>
                        <input type="text" name="namaPasien" id="namaPasien" class="form-control form-control-lg bg-light fs-6" placeholder="Name Pasien" required />
                    </div>
                    <div class="col-md-6">
                        <label for="nomorRekamMedis" class="form-label">Nomor Rekam Medis</label>
                        <input type="text" name="nomorRekamMedis" id="nomorRekamMedis" class="form-control form-control-lg bg-light fs-6" placeholder="No. Rekam Medis">
                    </div>
                    <div class="col-md-6">
                        <label for="tanggalLahir" class="form-label">Tanggal Lahir</label>
                        <input type="date" name="tanggalLahir" id="tanggalLahir" class="form-control form-control-lg bg-light fs-6" placeholder="Tanggal Lahir">
                    </div>
                    <div class="col-md-6">
                        <label for="nomorKTP" class="form-label">NIK KTP</label>
                        <input type="text" name="nomorKTP" id="nomorKTP" class="form-control form-control-lg bg-light fs-6" placeholder="NIK KTP">
                    </div>
                    <div class="col-md-6">
                        <label for="nomorBPJS" class="form-label">Nomor BPJS</label>
                        <input type="text" name="nomorBPJS" id="nomorBPJS" class="form-control form-control-lg bg-light fs-6" placeholder="Nomor BPJS">
                    </div>
                    <div class="col-md-6">
                        <label for="nomorHP" class="form-label">Nomor HP</label>
                        <input type="text" name="nomorHP" id="nomorHP" class="form-control form-control-lg bg-light fs-6" placeholder="Nomor HP">
                    </div>
                    <div class="col-md-6">
                        <label for="jenisKelamin" class="form-label">Jenis Kelamin</label>
                        <input type="text" name="jenisKelamin" id="jenisKelamin" class="form-control form-control-lg bg-light fs-6" placeholder="Jenis Kelamin">
                    </div>
                    <div class="col-md-12">
                        <label for="Alamat" class="form-label">Alamat</label>
                        <input type="text" name="Alamat" id="Alamat" class="form-control form-control-lg bg-light fs-6" placeholder="Alamat">
                    </div>
                    <div class="col-md-6">
                        <label for="poli" class="form-label">Poli</label>
                        <input type="text" name="poli" id="poli" class="form-control form-control-lg bg-light fs-6" placeholder="Poli">
                    </div>
                    <div class="col-md-6">
                        <label for="waktuReservasi" class="form-label">Waktu Reservasi</label>
                        <input type="datetime-local" name="waktuReservasi" id="waktuReservasi" step="2" class="form-control form-control-lg bg-light fs-6" placeholder="Reservasi">
                    </div>
                    <div class="col-md-6">
                        <label for="Checkin" class="form-label">Checkin</label>
                        <input type="datetime-local" name="Checkin" id="checkin" step="2" class="form-control form-control-lg bg-light fs-6" placeholder="Checkin">
                    </div>
                    <div class="col-md-6">
                        <label for="Status" class="form-label">Status</label>
                        <input type="text" name="Status" id="status" class="form-control form-control-lg bg-light fs-6" placeholder="Status">
                    </div>
                    <div class="d-grid gap-2 mt-2">
                        <button class="btn btn-primary" type="submit" id="btnTambah">Daftar</button>
                    </div>

                    <div class="d-grid gap-2">
                    <button class="btn btn-primary" id="btnCheckout" title="checkout" type="submit"><i class="bi bi-cart-plus fs-5"></i></button>
                  </div>
                  
                    <div class="d-grid gap-2 mt-2">
                        <button class="btn btn-secondary" type="reset" id="reset">Reset</button>
                    </div>
               </form>
         </div>
      </div> 

     </div>
   </div>
   </section>`;
  },

  async afterRender() {
    console.log("afterrender jalan..");

    await pendaftaranFunctions.init();

    // const tambahPasien = document.getElementById("tambahPasien");
    // tambahPasien.addEventListener("submit", async (e) => {
    //   const namaPasien = document.getElementById("namaPasien");
    //   const editNomorRekamMedis = document.getElementById("nomorRekamMedis");
    //   const tanggalLahir = document.getElementById("tanggalLahir");
    //   const nomorKTP = document.querySelector("#nomorKTP");
    //   const nomorBPJS = document.querySelector("#nomorBPJS");
    //   const nomorHP = document.querySelector("#nomorHP");
    //   const Alamat = document.querySelector("#Alamat");
    //   const jenisKelamin = document.querySelector("#jenisKelamin");
    //   const editPoli = document.querySelector("#poli");
    //   const waktuReservasi = document.querySelector("#waktuReservasi");
    //   const Checkin = document.querySelector("#Checkin");
    //   const Status = document.querySelector("#Status");
    //   e.preventDefault();
    //   const data = {
    //     nama_pasien: namaPasien.value,
    //     nomor_rekam_medis: editNomorRekamMedis.value,
    //     tanggal_lahir: tanggalLahir.value,
    //     nik_ktp: nomorKTP.value,
    //     nomor_bpjs: nomorBPJS.value,
    //     nomor_hp: nomorHP.value,
    //     alamat: Alamat.value,
    //     jenis_kelamin: jenisKelamin.value,
    //     poli: editPoli.value,
    //     waktu_reservasi: waktuReservasi.value,
    //     checkin: Checkin.value,
    //     status: Status.value,
    //   };
    //   await pendaftaranFunctions.init(data);
    // });
  },
};
export default mainPendaftaran;
