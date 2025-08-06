import { data } from "autoprefixer";
import hapusPasienFunction from "../../../scripts/utils/hapusPasienFunction";
import homePasienFunctions from "../../../scripts/utils/homePasienFunctions";
import tambahPasienFunction from "../../../scripts/utils/tambahPasienFunction";

/* eslint-disable no-undef */
const pasienAdmin = {
  async render() {
    return `
      <div class="head-title">
        <div class="left">
          <h1>Daftar Antrian</h1>
          <ul class="breadcrumb">
            <li>
              <a href="#">Home</a>
            </li>
            <li><i class='bx bx-chevron-right' ></i></li>
            <li>
              <a class="active" href="index.html#/pasien">Daftar Antrian</a>
            </li>
          </ul>
        </div>
      </div>

      <section class="section accounts">
        <div class="table-data">
          <div class="card-body">
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addProducts"><i class="bi bi-plus-circle"></i> TAMBAH DATA <i class="bi bi-plus-circle"></i></button>
            <h5 class="card-title">List Pasien</h5>
            <div class="table-responsive">
              <table class="table table-bordered table-hover" id="pasienTable">
                <thead>
                  <tr class="table-secondary">
                    <th scope="col" class="no-sort text-center">No.</th>
                    <th scope="col" class="no-sort text-center">Nama Pasien</th>
                    <th scope="col" class="no-sort text-center">Nomor Rekam Medis</th>
                    <th scope="col" class="no-sort text-center">NIK KTP</th>
                    <th scope="col" class="no-sort text-center">Tanggal Lahir</th>
                    <th scope="col" class="no-sort text-center">Nomor HP</th>
                    <th scope="col" class="no-sort text-center">Nomor BPJS</th>
                    <th scope="col" class="no-sort text-center">Alamat</th>
                    <th scope="col" class="no-sort text-center">Jenis Kelamin</th>
                    <th scope="col" class="no-sort text-center">Poli</th>
                    <th scope="col" class="no-sort text-center">Waktu Reservasi</th>
                    <th scope="col" class="no-sort text-center">Checkin</th>
                    <th scope="col" class="no-sort text-center">Status</th>
                    <th scope="col" class="no-sort text-center">Actions</th>
                  </tr>
                </thead>
                <tbody class="align-middle" id="bodyPasien">
                  
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      

      <!-- Modal Add Products -->
      <div class="modal fade" id="addProducts" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
              aria-labelledby="addProductsLabel" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered modal-xl">
                  <div class="modal-content" id="form-edit">
                    <form action="#" method="post" id="tambahPasien" enctype="multipart/form-data">
                          <div class="modal-header border-0 border-top border-4 border-primary">
                              <h1 class="modal-title fs-5" id="addProductsLabel">Tambah Pasien</h1>
                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="modal-body border-top">
                              <div class="row">
                                    <div class="mb-3">
                                        <label for="namaPasien" class="form-label">Nama</label>
                                        <input type="text" class="form-control" name="namaPasien" id="namaPasien" aria-label="Nama Pasien" placeholder="Isikan nama dari Pasien" required>
                                    </div>
                                    <div class="mb-3">
                                        <label for="nomorRekamMedis" class="form-label">Nomor Rekam Medis</label>
                                        <input type="text" class="form-control" name="nomorRekamMedis" id="nomorRekamMedis" aria-label="Nomor Rekam Medis" placeholder="Isikan nomor rekam medis" required>
                                    </div>
                                    <div class="mb-3">
                                        <label for="nomorKTP" class="form-label">NIK KTP</label>
                                        <input type="text" class="form-control" name="nomorKTP" id="nomorKTP" aria-label="NIK KTP" placeholder="Isikan NIK KTP" required>
                                    </div>
                                    <div class="mb-3">
                                        <label for="tanggalLahir" class="form-label">Tanggal Lahir</label>
                                        <input type="date" class="form-control" name="tanggalLahir" id="tanggalLahir" aria-label="tanggalLahir" placeholder="Isikan tanggal lahir" required>
                                    </div>
                                    <div class="mb-3">
                                        <label for="nomorHP" class="form-label">Nomor HP</label>
                                        <input type="text" class="form-control" name="nomorHP" id="nomorHP" aria-label="nomorHP" placeholder="Isikan nomor HP" required>
                                    </div>
                                    <div class="mb-3">
                                        <label for="nomorBPJS" class="form-label">Nomor BPJS</label>
                                        <input type="text" class="form-control" name="nomorBPJS" id="nomorBPJS" aria-label="nomorBPJS" placeholder="Isikan nomor BPJS" required>
                                    </div>
                                    <div class="mb-3">
                                        <label for="Alamat" class="form-label">Alamat</label>
                                        <input type="text" class="form-control" name="Alamat" id="Alamat" aria-label="Alamat" placeholder="Isikan alamat" required>
                                    </div>
                                    <div class="mb-3">
                                        <label for="jenisKelamin" class="form-label">Jenis Kelamin</label>
                                        <select type="text" class="form-control" name="jenisKelamin" id="jenisKelamin" aria-label="jenisKelamin" placeholder="Isikan jenis kelamin" required>
                                          <option>Pria</option>
                                          <option>Wanita</option>
                                        </select>
                                    </div>
                                    <div class="mb-3">
                                        <label for="poli" class="form-label">Poli</label>
                                        <input type="text" class="form-control" name="poli" id="poli" aria-label="Poli" placeholder="Isikan poli" required>
                                    </div>
                                    <div class="mb-3">
                                        <label for="waktuReservasi" class="form-label">Waktu Reservasi</label>
                                        <input type="datetime-local" class="form-control" name="waktuReservasi" id="waktuReservasi" step="2" aria-label="waktuReservasi" placeholder="Isikan waktu reservasi" required>
                                    </div>
                                    <div class="mb-3">
                                        <label for="Checkin" class="form-label">Checkin</label>
                                        <input type="datetime-local" class="form-control" name="Checkin" id="Checkin" step="2" aria-label="Checkin" placeholder="Isikan checkin" required>
                                    </div>
                                    <div class="mb-3">
                                        <label for="Status" class="form-label">Status</label>
                                        <select type="text" class="form-control" name="Status" id="Status" aria-label="Status" placeholder="Isikan status" required>
                                          <option>Hadir</option>
                                          <option>Tidak Hadir</option>
                                        </select>
                                    </div>
                                  <div class="d-grid gap-2 mt-2">
                                      <button class="btn btn-primary" type="submit" id="btnTambah">Tambah</button>
                                  </div>
                              </div>
                          </div>
                          <div class="modal-footer">
                              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                          </div>
                      </form>
                      
                  </div>
              </div>
      </div>
            `;
  },

  async afterRender() {
    console.log("afterrender items");

    const bodyPasien = document.querySelector("#bodyPasien");
    const fetchedPasien = await homePasienFunctions.getAllDaftarAntrian();
    console.log(fetchedPasien);
    let i = 1;

    fetchedPasien.forEach(async (d) => {
      const data = d.data();
      data.id = d.id;
      bodyPasien.innerHTML += `<tr>
      <th scope="row">${i}</th>
      <td id='pasienidname' value=${data.admin}>${data.nama_pasien}</td>
      <td class="text-center">${data.nomor_rekam_medis}</td>
      <td class="text-center">${data.nik_ktp}</td>
      <td class="text-center">${data.tanggal_lahir}</td>
      <td class="text-center">${data.nomor_hp}</td>
      <td class="text-center">${data.nomor_bpjs}</td>
      <td class="text-center">${data.alamat}</td>
      <td class="text-center">${data.jenis_kelamin}</td>
      <td class="text-center">${data.poli}</td>
      <td class="text-center">${data.waktu_reservasi}</td>
      <td class="text-center">${data.checkin}</td>
      <td class="text-center">${data.status}</td>
      <td class="text-center"><a href="#/editpasien/${data.id}" role="button" class="btn btn-outline-secondary">Edit</a>
      <button type="button" class="btn btn-outline-danger" id="deletePasien" data-id="${data.id}">Del</button></td>
    </tr>`;
      i += 1;
    });

    await homePasienFunctions.convertIDtoName();

    await tambahPasienFunction.init();

    await hapusPasienFunction.init();

    await $("#pasienTable").DataTable({
      // eslint-disable-next-line quotes
      lengthMenu: [
        [5, 10, 25, 50, -1],
        [5, 10, 25, 50, "All"],
      ],
      columnDefs: [
        {
          targets: "no-sort",
          orderable: false,
        },
      ],
    });
  },
};

export default pasienAdmin;
