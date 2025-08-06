/* eslint-disable no-undef */
import UrlParser from "../../../scripts/routes/url-parser";
import editPraktekFunction from "../../../scripts/utils/editPraktekFunction";
import { formEditPraktek } from "../templates/edit";

const editPraktek = {
  async render() {
    console.log("render jalan");
    return `
      <div class="head-title">
        <div class="left">
          <h1>Update Jadwal Praktek</h1>
            <ul class="breadcrumb">
              <li>
                <a href="#">Home</a>
              </li>
              <li><i class='bx bx-chevron-right' ></i></li>
              <li>
                <a class="active" href="index.html#/praktek">Daftar Jadwal Praktek</a>
              </li>
              <li><i class='bx bx-chevron-right' ></i></li>
              <li>
                <a class="active" href="index.html#/editpraktek">Edit Jadwal Praktek</a>
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
                      <form action="#" method="post" id="EditPraktek" enctype="multipart/form-data">
                        
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
    const currentPraktek = await editPraktekFunction.fetchPraktekById(url.id);
    console.log(currentPraktek);
    const formEdit = document.getElementById("EditPraktek");
    formEdit.innerHTML = formEditPraktek(currentPraktek);

    await editPraktekFunction.init(url.id);
  },
};

export default editPraktek;
