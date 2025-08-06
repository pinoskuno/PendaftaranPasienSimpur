import hapusDataFunction from "../../../scripts/utils/hapusDataFunction";
import homeDataFunctions from "../../../scripts/utils/homeDataFunction";
import tambahDataFunction from "../../../scripts/utils/tambahDataFunction";

/* eslint-disable no-undef */
const dataAdmin = {
  async render() {
    return `
      <div class="head-title">
        <div class="left">
          <h1>Data</h1>
          <ul class="breadcrumb">
            <li>
              <a href="#">Home</a>
            </li>
            <li><i class='bx bx-chevron-right' ></i></li>
            <li>
              <a class="active" href="index.html">Data</a>
            </li>
          </ul>
        </div>
      </div>

      <section class="section accounts">
        <div class="table-data">
          <div class="card-body">
          <button type="button" class="btn btn-success btn-lg" data-bs-toggle="modal" data-bs-target="#addProducts"><i class="bi bi-plus-circle"></i> TAMBAH DATA <i class="bi bi-plus-circle"></i></button>
            <h5 class="card-title">List Data</h5>
            <div class="table-responsive">
              <table class="table table-hover" id="dataTable">
                <thead>
                  <tr class="table-secondary">
                    <th scope="col">No.</th>
                    <th scope="col">Admin</th>
                    <th scope="col">Nama Data</th>
                    <th scope="col" class="no-sort text-center" >Tanggal</th>
                    <th scope="col" class="no-sort text-center" >LINK</th>
                    <th scope="col" class="no-sort text-center">Actions</th>
                  </tr>
                </thead>
                <tbody class="align-middle" id="bodyData">
                  
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
                    <form action="#" method="post" id="tambahData" enctype="multipart/form-data">
                          <div class="modal-header border-0 border-top border-4 border-primary">
                              <h1 class="modal-title fs-5" id="addProductsLabel">Tambah Data</h1>
                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="modal-body border-top">
                              <div class="row">
                                    <div class="mb-3">
                                        <label for="namaData" class="form-label">Nama Data</label>
                                        <input type="text" class="form-control" name="namaData" id="namaData" aria-label="Nama Data" placeholder="Isikan nama dari Data" required>
                                    </div>
                                  <div class="mb-3">
                                    <label for="link" class="form-label">Link Data</label>
                                    <textarea class="form-control" id="link" name="link" placeholder="Tempelkan Link atau Tautan dari Data" rows="6"></textarea>
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

    const bodyData = document.querySelector("#bodyData");
    const fetchedDataProduct = await homeDataFunctions.getAllData();
    console.log(fetchedDataProduct);
    let i = 1;

    fetchedDataProduct.forEach(async (d) => {
      const data = d.data();
      data.id = d.id;
      bodyData.innerHTML += `<tr>
      <th scope="row">${i}</th>
      <td id='adminName' value=${data.admin}>${data.admin}</td>
      <td >${data.nama_data}</td>
      <td class="text-center">${data.tanggal}</td>
      <td class="text-center"><a href="${data.link}" role="button" class="btn btn-outline-success" target="_blank"> Go To Data > </a></td>
      <td class="text-center"><a href="#/editdata/${data.id}" role="button" class="btn btn-outline-secondary">Edit</a>
      <button type="button" class="btn btn-outline-danger" id="deleteData" data-id="${data.id}">Del</button></td>
    </tr>`;
      i += 1;
    });

    await homeDataFunctions.convertIDtoName();

    await tambahDataFunction.init();

    await hapusDataFunction.init();

    await $("#dataTable").DataTable({
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

export default dataAdmin;
