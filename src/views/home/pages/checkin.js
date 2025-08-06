import hapusCheckinFunction from "../../../scripts/utils/hapusCheckinFunction";
import homeCheckinFunctions from "../../../scripts/utils/homeCheckinFunctions";
import tambahCheckinFunction from "../../../scripts/utils/tambahCheckinFunction";
import dataTransactions from "../../../scripts/utils/dataTransactions";

import hapusPasienFunction from "../../../scripts/utils/hapusPasienFunction";

/* eslint-disable no-undef */
const checkinAdmin = {
  async render() {
    return `
      <div class="head-title">
        <div class="left">
            <h1>Checkin Poli</h1>
                <ul class="breadcrumb">
                    <li>
                        <a href="#">Home</a>
                    </li>
                        <li><i class='bx bx-chevron-right' ></i></li>
                    <li>
                        <a class="active" href="index.html#/checkin">Daftar Checkin Poli</a>
                    </li>
                </ul>
        </div>
      </div>

      <section class="section accounts">
        <div class="table-data">
          <div class="card-body">
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addProducts"><i class="bi bi-plus-circle"></i> TAMBAH DATA <i class="bi bi-plus-circle"></i></button>
            <h5 class="card-title">List Data</h5>
            <div class="table-responsive">
              <table class="table table-bordered table-hover" id="checkinTable">
                <thead>
                  <tr class="table-secondary">
                  <th scope="col" class="no-sort text-center">No.</th>
                  <th scope="col" class="no-sort text-center">Foto</th>
                  <th scope="col" class="no-sort text-center">Nama Poli</th>
                  <th scope="col" class="no-sort text-center">Waktu Checkin</th>
                  <th scope="col" class="no-sort text-center">Kuota Pasien</th>
                  <th scope="col" class="no-sort text-center">Actions</th>
                  </tr>
                </thead>
                <tbody class="align-middle" id="bodyCheckin">
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section class="section accounts">
      <div class="table-data">
        <div class="card-body">
          <h5 class="card-title">List Data</h5>
          <div class="table-responsive">
            <table class="table table-bordered table-hover" id="transactionTable">
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
              <tbody class="align-middle" id="transactionBody">

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>

    <section class="section accounts">
      <div class="table-data">
        <div class="card-body">
          <h5 class="card-title">List Data</h5>
          <div class="table-responsive">
            <table class="table table-bordered table-hover" id="transactionTableSucceed">
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
              <tbody class="align-middle" id="transactionSucceedBody">

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>

    <section class="section accounts">
      <div class="table-data">
        <div class="card-body">
          <h5 class="card-title">List Data</h5>
          <div class="table-responsive">
            <table class="table table-bordered table-hover" id="transactionTableCancelled">
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
              <tbody class="align-middle" id="transactionCancelledBody">

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>

      <!-- Menambahkan Kuota Checkin Pasien -->
      <div class="modal fade" id="addProducts" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
              aria-labelledby="addProductsLabel" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered modal-xl">
                  <div class="modal-content" id="form-edit">
                    <form action="#" method="post" id="tambahCheckin" enctype="multipart/form-data">
                          <div class="modal-header border-0 border-top border-4 border-primary">
                              <h1 class="modal-title fs-5" id="addProductsLabel">Tambah Data</h1>
                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="modal-body border-top">
                              <div class="row">
                                    <div class="mb-3">
                                        <label for="fotoBarang" class="form-label">Foto</label>
                                        <input class="form-control" type="file" id="foto" name="foto" required accept=".jpg,.jpeg,.png">
                                        <small><span class="text-danger fst-italic">Pastikan file tidak lebih 3mb dan format jpg/jpeg/png</span></small>
                                    </div>
                                    <div class="mb-3">
                                        <label for="namaPoli" class="form-label">Nama Poliklinik</label>
                                        <select type="form-select" class="form-control" name="namaPoli" id="namaPoli" aria-label="Nama Poli" placeholder="Isikan nama poli" required>
                                        <option selected>Isikan nama poliklinik</option>
                                        <option value="Poli Spesialis Umum">Poli Spesialis Umum</option>
                                        <option value="Poli Spesialis Gigi dan Mulut">Poli Spesialis Gigi dan Mulut</option>
                                        <option value="Poli Spesialis Kesehatan Ibu dan Anak">Poli Spesialis Kesehatan Ibu dan Anak</option>
                                        <option value="Poli Spesialis Anak dan Imunisasi">Poli Spesialis Anak dan Imunisasi</option>
                                        </select>
                                    </div>
                                    <div class="mb-3">
                                        <label for="waktuCheckin" class="form-label">Waktu Checkin</label>
                                        <input type="text" class="form-control" name="waktuCheckin" id="waktuCheckin" aria-label="Waktu Checkin" placeholder="Isikan waktu checkin" required>
                                    </div>
                                    <div class="mb-3">
                                        <label for="kuotaPasien" class="form-label">Kuota Pasien</label>
                                        <input type="text" class="form-control" name="kuotaPasien" id="kuotaPasien" aria-label="Kuota Pasien" placeholder="Isikan kuota pasien" required>
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

    const bodyCheckin = document.querySelector("#bodyCheckin");
    const fetchedCheckin = await homeCheckinFunctions.getAllData();
    console.log(fetchedCheckin);
    let i = 1;

    fetchedCheckin.forEach(async (d) => {
      const data = d.data();
      data.id = d.id;
      bodyCheckin.innerHTML += `<tr>
      <th scope="row">${i}</th>
      <td><img src="${data.foto}" style="width: 90px; height: 80px" class="rounded"></td>
      <td id='checkinidname' value=${data.nama_poli}>${data.nama_poli}</td>
      <td class="text-center">${data.waktu_checkin}</td>
      <td class="text-center">${data.kuota_pasien}</td>
      <td class="text-center"><a href="#/editcheckin/${data.id}" role="button" class="btn btn-outline-secondary">Edit</a>
      <button type="button" class="btn btn-outline-danger" id="deleteCheckin" data-id="${data.id}">Del</button></td>
    </tr>`;
      i += 1;
    });

    await homeCheckinFunctions.convertIDtoName();

    await tambahCheckinFunction.init();

    await hapusCheckinFunction.init();

    await $("#checkinTable").DataTable({
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

    console.log("afterrender transactions");

    const transactionBody = document.getElementById("transactionBody");

    const fetchedTranscations = await dataTransactions._fetchDataTransactions();
    let counter = 1;

    fetchedTranscations.forEach((d) => {
      const data = d.data();
      data.id = d.id;

      if (data.status === "Pending") {
        data.bedge = "text-bg-secondary";
      } else if (data.status === "Confirmed") {
        data.bedge = "text-bg-primary";
      } else if (data.status === "Succeed") {
        data.kirim = "disabled";
        data.bedge = "text-bg-success";
      } else if (data.status === "Cancelled") {
        data.bedge = "text-bg-danger";
      } else {
        data.bedge = "text-bg-warning";
      }

      transactionBody.innerHTML += `
      <tr>
      <th scope="row">${counter}</th>
      <td>${data.nama_pasien}</td>
      <td id='totalBeli' product-id='${data.id_barang}'>${data.nomor_rekam_medis}</td>
      <td class="text-center">${data.nik_ktp}</td>
      <td class="text-center">${data.tanggal_lahir}</td>
      <td class="text-center">${data.nomor_hp}</td>
      <td class="text-center">${data.nomor_bpjs}</td>
      <td class="text-center">${data.alamat}</td>
      <td class="text-center">${data.jenis_kelamin}</td>
      <td class="text-center">${data.poli}</td>
      <td class="text-center">${data.waktu_reservasi}</td>
      <td class="text-center">${data.checkin}</td>
      <td><span class="badge ${data.bedge}">${data.status}</span></td>
      <td class="text-center"><a href="#/editpasien/${data.id}" role="button" class="btn btn-outline-secondary">Edit</a>
      <button type="button" class="btn btn-outline-danger" id="deletePasien" data-id="${data.id}">Delete</button></td>
      </tr>
      `;
      // eslint-disable-next-line no-plusplus
      counter++;
    });

    const fetchDataCheckoutCancelled =
      await dataTransactions._fetchCancelledDataTransactions();
    const transactionBodyCancelled = document.getElementById(
      "transactionCancelledBody"
    );
    let newcount = 1;

    fetchDataCheckoutCancelled.forEach(async (d) => {
      const data = d.data();
      data.id = d.id;

      if (data.status === "Pending") {
        data.bedge = "text-bg-secondary";
      } else if (data.status === "Confirmed") {
        data.bedge = "text-bg-primary";
      } else if (data.status === "Succeed") {
        data.kirim = "disabled";
        data.bedge = "text-bg-success";
      } else if (data.status === "Cancelled") {
        data.bedge = "text-bg-danger";
      } else {
        data.bedge = "text-bg-warning";
      }

      transactionBodyCancelled.innerHTML += `
      <tr>
      <th scope="row">${newcount}</th>
      <td>${data.nama_pasien}</td>
      <td id='totalBeli' product-id='${data.id_barang}'>${data.nomor_rekam_medis}</td>
      <td class="text-center">${data.nik_ktp}</td>
      <td class="text-center">${data.tanggal_lahir}</td>
      <td class="text-center">${data.nomor_hp}</td>
      <td class="text-center">${data.nomor_bpjs}</td>
      <td class="text-center">${data.alamat}</td>
      <td class="text-center">${data.jenis_kelamin}</td>
      <td class="text-center">${data.poli}</td>
      <td class="text-center">${data.waktu_reservasi}</td>
      <td class="text-center">${data.checkin}</td>
      <td><span class="badge ${data.bedge}">${data.status}</span></td>
      <td class="text-center"><a href="#/editpasien/${data.id}" role="button" class="btn btn-outline-secondary">Edit</a>
      <button type="button" class="btn btn-outline-danger" id="deletePasien" data-id="${data.id}">Delete</button></td>
      </tr>
      `;
      // eslint-disable-next-line no-plusplus
      newcount++;
    });

    const fetchDataCheckoutSucceed =
      await dataTransactions._fetchSucceedDataTransactions();
    const transactionBodySucceed = document.getElementById(
      "transactionSucceedBody"
    );
    let newnumber = 1;

    fetchDataCheckoutSucceed.forEach(async (d) => {
      const data = d.data();
      data.id = d.id;

      if (data.status === "Pending") {
        data.bedge = "text-bg-secondary";
      } else if (data.status === "Confirmed") {
        data.bedge = "text-bg-primary";
      } else if (data.status === "Succeed") {
        data.kirim = "disabled";
        data.bedge = "text-bg-success";
      } else if (data.status === "Cancelled") {
        data.bedge = "text-bg-danger";
      } else {
        data.bedge = "text-bg-warning";
      }

      transactionBodySucceed.innerHTML += `
      <tr>
      <th scope="row">${newnumber}</th>
      <td>${data.nama_pasien}</td>
      <td id='totalBeli' product-id='${data.id_barang}'>${data.nomor_rekam_medis}</td>
      <td class="text-center">${data.nik_ktp}</td>
      <td class="text-center">${data.tanggal_lahir}</td>
      <td class="text-center">${data.nomor_hp}</td>
      <td class="text-center">${data.nomor_bpjs}</td>
      <td class="text-center">${data.alamat}</td>
      <td class="text-center">${data.jenis_kelamin}</td>
      <td class="text-center">${data.poli}</td>
      <td class="text-center">${data.waktu_reservasi}</td>
      <td class="text-center">${data.checkin}</td>
      <td><span class="badge ${data.bedge}">${data.status}</span></td>
      <td class="text-center"><a href="#/editpasien/${data.id}" role="button" class="btn btn-outline-secondary">Edit</a>
      <button type="button" class="btn btn-outline-danger" id="deletePasien" data-id="${data.id}">Delete</button></td>
      </tr>
      `;
      // eslint-disable-next-line no-plusplus
      newnumber++;
    });

    await hapusPasienFunction.init();



    $("#transactionTable").DataTable({
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

    $("#transactionTableCancelled").DataTable({
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

    $("#transactionTableSucceed").DataTable({
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

export default checkinAdmin;
