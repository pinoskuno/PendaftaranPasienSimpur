import homeAkunFunctions from "../../../scripts/utils/homeAkunFunctions";
import tambahAkunFunction from "../../../scripts/utils/tambahAkunFunction";

const accountsAdmin = {
  async render() {
    return `
      <div class="head-title">
          <div class="left">
            <h1>Akun</h1>
              <ul class="breadcrumb">
                <li>
                  <a href="#">Home</a>
                </li>
                <li><i class='bx bx-chevron-right' ></i></li>
                <li>
                  <a class="active" href="index.html">Akun</a>
                </li>
              </ul>
          </div>
      </div>

      <section class="section accounts">
        <div class="table-data">
          <div class="card-body">
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addAkun"><i class="bi bi-plus-circle"></i> TAMBAH DATA <i class="bi bi-plus-circle"></i></button>
            <h5 class="card-title">Akun Admin</h5>
            <div class="table-responsive">
              <table class="table table-hover" id="adminTable">
                <thead>
                  <tr class="table-secondary">
                    <th scope="col">No.</th>
                    <th scope="col" class="no-sort">Avatar</th>
                    <th scope="col">Nama Lengkap</th>
                    <th scope="col">Nomor HP</th>
                    <th scope="col">Email</th>
                  </tr>
                </thead>
                <tbody class="align-middle" id="body-admin">
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <!-- Modal Add Products -->
      <div class="modal fade" id="addAkun" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
              aria-labelledby="addAkunLabel" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered modal-xl">
                  <div class="modal-content" id="form-edit">
                    <form action="#" method="post" id="tambahAkun" enctype="multipart/form-data">
                          <div class="modal-header border-0 border-top border-4 border-primary">
                              <h1 class="modal-title fs-5" id="addAkunLabel">Tambah Data</h1>
                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="modal-body border-top">
                              <div class="row">
                                <div class="mb-3">
                                  <label for="fotoAkun" class="form-label">Foto</label>
                                    <input class="form-control" type="file" id="foto" name="foto" required accept=".jpg,.jpeg,.png">
                                    <small><span class="text-danger fst-italic">Pastikan file tidak lebih 3mb dan format jpg/jpeg/png</span></small>
                                </div>
                              <div class="mb-3">
                                <label for="namaAkun" class="form-label">Nama Akun</label>
                                <input type="text" class="form-control" name="namaAkun" id="namaAkun" aria-label="Nama Akun" placeholder="Isikan nama poli" required>
                              </div>
                              <div class="mb-3">
                                <label for="nomorHP" class="form-label">Nomor HP</label>
                                <input type="text" class="form-control" name="nomorHP" id="nomorHP" aria-label="Nomor HP" placeholder="Isikan nomor HP" required>
                              </div>
                              <div class="mb-3">
                                <label for="email" class="form-label">Email</label>
                                <input type="text" class="form-control" name="email" id="email" aria-label="Email" placeholder="Isikan email" required>
                              </div>
                              <div class="mb-3">
                                <label for="passwordAkun" class="form-label">Password</label>
                                <input type="text" class="form-control" name="passwordAkun" id="passwordAkun" aria-label="Password Akun" placeholder="Isikan password akun" required>
                                <small><span class="text-danger fst-italic">Pastikan untuk mengingat password</span></small>
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
    console.log("afterrender accounts");

    const bodyAdmin = document.querySelector("#body-admin");

    const fetchedDataAccount = await homeAkunFunctions.getAllAccount();
    console.log(fetchedDataAccount);
    let numberCount = 1;
    let numberCountBuyer = 1;

    fetchedDataAccount.forEach((d) => {
      const data = d.data();
      data.id = d.id;
      bodyAdmin.innerHTML += `<tr class="profile-card">
        <th scope="row">${numberCount}</th>
        <td><img src="" class="rounded-circle img-fluid" alt="Profile" style="max-width: 40px;" id='profilepic${data.id}'></td>
        <td>${data.nama}</td>
        <td id='nomorhp${data.id}'>${data.no_hp}</td>
        <td>${data.email}</td>
        </tr>`;
      numberCount += 1;
      const profilepic = `profilepic${data.id}`;
      const nomorhp = `nomorhp${data.id}`;
      if (data.fotoprofil) {
        document
          .getElementById(profilepic)
          .setAttribute("src", data.fotoprofil);
      } else {
        document
          .getElementById(profilepic)
          .setAttribute("src", "../../assets/img/profile-img.png");
      }
      if (!data.no_hp) {
        document.getElementById(nomorhp).innerText = "-";
      }
    });

    await tambahAkunFunction.init();

    $("#adminTable").DataTable({
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

export default accountsAdmin;
