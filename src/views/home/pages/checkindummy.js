import hapusCheckinFunction from "../../../scripts/utils/hapusCheckinFunction";
import homeCheckinFunctions from "../../../scripts/utils/homeCheckinFunctions";
import tambahCheckinFunction from "../../../scripts/utils/tambahCheckinFunction";
import dataTransactions from "../../../scripts/utils/dataTransactions";
import deleteTransaction from "../../../scripts/utils/deleteTransactions";

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
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addProducts"><i class="bi bi-plus-circle"></i> TAMBAH DATA <i class="bi bi-plus-circle"></i></button>
          <h5 class="card-title">List Data</h5>
          <div class="table-responsive">
            <table class="table table-bordered table-hover" id="transactionTable">
              <thead>
                <tr class="table-secondary">
                <th scope="col" class="no-sort text-center">No.</th>
                <th scope="col" class="no-sort text-center">Nama Pasien</th>
                <th scope="col" class="no-sort text-center">Nomor Rekam Medis</th
                <th scope="col" class="no-sort text-center">NIK KTP</th>
                <th scope="col" class="no-sort text-center">Tanggal Lahir</th>
                <th scope="col" class="no-sort text-center">Nomor BPJS</th>>
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
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addProducts"><i class="bi bi-plus-circle"></i> TAMBAH DATA <i class="bi bi-plus-circle"></i></button>
          <h5 class="card-title">List Data</h5>
          <div class="table-responsive">
            <table class="table table-bordered table-hover" id="transactionTableCancelled">
              <thead>
                <tr class="table-secondary">
                <th scope="col" class="no-sort text-center">No.</th>
                <th scope="col" class="no-sort text-center">ID Pembelian</th>
                <th scope="col" class="no-sort text-center">Jumlah Barang</th>
          
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

      <!-- Modal Add Products -->
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
                                        <label for="namaPoli" class="form-label">Nama Poli</label>
                                        <input type="text" class="form-control" name="namaPoli" id="namaPoli" aria-label="Nama Poli" placeholder="Isikan nama poli" required>
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
      <td id='checkinidname' value=${data.admin}>${data.nama_poli}</td>
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

      if (data.status === "sedang dikemas") {
        data.bedge = "text-bg-secondary";
      } else if (data.status === "dikirim") {
        data.bedge = "text-bg-primary";
      } else if (data.status === "selesai") {
        data.kirim = "disabled";
        data.bedge = "text-bg-success";
      } else if (data.status === "dibatalkan") {
        data.bedge = "text-bg-danger";
      } else {
        data.bedge = "text-bg-warning";
      }

      transactionBody.innerHTML += `
      <tr>
      <th scope="row">${counter}</th>
      <td>${data.id}</td>
      <td id='totalBeli' product-id='${data.id_barang}'>${data.total_beli}</td>
      
      <td><span class="badge ${data.bedge}">${data.status}</span></td>
      <td><a type="button" class="btn btn-outline-secondary" href="#/edittransaction/${data.id}">Edit</a>
      <button type="button" class="btn btn-outline-danger" id="deleteTransaction" data-id="${data.id}">Delete</button></td>
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

      if (data.status === "sedang dikemas") {
        data.bedge = "text-bg-secondary";
      } else if (data.status === "dikirim") {
        data.bedge = "text-bg-primary";
      } else if (data.status === "selesai") {
        data.kirim = "disabled";
        data.bedge = "text-bg-success";
      } else if (data.status === "dibatalkan") {
        data.bedge = "text-bg-danger";
      } else {
        data.bedge = "text-bg-warning";
      }

      transactionBodyCancelled.innerHTML += `
      <tr>
      <th scope="row">${newcount}</th>
      <td>${data.id}</td>
      <td id='totalBeli' product-id='${data.id_barang}'>${data.total_beli}</td>
      
      <td><span class="badge ${data.bedge}">${data.status}</span></td>
      <td><a type="button" class="btn btn-outline-secondary" href="#/edittransaction/${data.id}">Edit</a>
      <button type="button" class="btn btn-outline-danger" id="deleteTransaction" data-id="${data.id}">Delete</button></td>
      </tr>
      `;
      // eslint-disable-next-line no-plusplus
      newcount++;
    });

    await deleteTransaction.init();

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
  },
};

export default checkinAdmin;
