/* eslint-disable no-undef */
import UrlParser from "../../../scripts/routes/url-parser";
import editDataFunction from "../../../scripts/utils/editDataFunction";
// import editProduct from '../../../utils/editProduct';
import { formEditData } from "../templates/edit";

const editData = {
  async render() {
    console.log("render jalan");
    return `
      <div class="pagetitle">
        <h1><a href="#/dataseller" title="Back"><i class="bi bi-arrow-left d-xl-none me-2"></i></a>Update Data</h1>
        <nav>
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#/">Home</a></li>
            <li class="breadcrumb-item active">Edit Data</li>
          </ol>
        </nav>
      </div><!-- End Page Title -->
      
        <section class="section dashboard" style="margin-left: 300px;">
          <div class="row">
            <!-- Left side columns -->
            <div class="col-lg-12">
              <div class="row">
                <!-- Recent Sales -->
                <div class="col-12">
                
                  <div class="card recent-sales overflow-auto">
                    <div class="card-body">
                      <form action="#" method="post" id="EditData" enctype="multipart/form-data">
                        
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
    const currentData = await editDataFunction.fetchDataById(url.id);
    console.log(currentData);
    const formEdit = document.getElementById("EditData");
    formEdit.innerHTML = formEditData(currentData);

    await editDataFunction.init(url.id);
  },
};

export default editData;
