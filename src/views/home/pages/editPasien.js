/* eslint-disable no-undef */
import UrlParser from "../../../scripts/routes/url-parser";
import editPasienFunction from "../../../scripts/utils/editPasienFunction";
// import editProduct from '../../../utils/editProduct';
import { formEditPasien } from "../templates/edit";

const editPasien = {
  async render() {
    console.log("render jalan");
    return `
      <div class="head-title">
        <div class="left">
          <h1>Update Daftar Antrian Pasien</h1>
          <ul class="breadcrumb">
            <li>
              <a href="#">Home</a>
            </li>
            <li><i class='bx bx-chevron-right' ></i></li>
            <li>
              <a class="active" href="index.html#/pasien">Daftar Antrian</a>
            </li>
            <li><i class='bx bx-chevron-right' ></i></li>
            <li>
              <a class="active" href="index.html#/editpasien">Edit Daftar Antrian</a>
            </li>
          </ul>
        </div>
      </div>
      
        <section class="section dashboard">
          <div class="row">
            <!-- Left side columns -->
            <div class="col-lg-12">
              <div class="row">
                <!-- Recent Sales -->
                <div class="col-12">
                
                  <div class="card recent-sales overflow-auto">
                    <div class="card-body">
                      <form action="#" method="post" id="EditPasien" enctype="multipart/form-data">
                        
                      </form>
                        
                    </div>
  
                  </div>
                </div><!-- End Recent Sales -->
              </div>
            </div><!-- End Left side columns -->
  
          </div>
        </section>
      
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const currentPasien = await editPasienFunction.fetchPasienById(url.id);
    console.log(currentPasien);
    const formEdit = document.getElementById("EditPasien");
    formEdit.innerHTML = formEditPasien(currentPasien);

    await editPasienFunction.init(url.id);
  },
};

export default editPasien;
