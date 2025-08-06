/* eslint-disable no-undef */
import UrlParser from "../../../scripts/routes/url-parser";
import editCheckinFunction from "../../../scripts/utils/editCheckinFunction";
import { formEditCheckin } from "../templates/edit";

const editCheckin = {
  async render() {
    console.log("render jalan");
    return `
      <div class="head-title">
        <div class="left">
          <h1>Update Checkin</h1>
            <ul class="breadcrumb">
              <li>
                <a href="#">Home</a>
              </li>
              <li><i class='bx bx-chevron-right' ></i></li>
              <li>
                <a class="active" href="index.html#/checkin">Daftar Checkin</a>
              </li>
              <li><i class='bx bx-chevron-right' ></i></li>
              <li>
                <a class="active" href="index.html#/editcheckin">Edit Checkin</a>
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
                      <form action="#" method="post" id="EditCheckin" enctype="multipart/form-data">
                        
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
    const currentCheckin = await editCheckinFunction.fetchCheckinById(url.id);
    console.log(currentCheckin);
    const formEdit = document.getElementById("EditCheckin");
    formEdit.innerHTML = formEditCheckin(currentCheckin);

    await editCheckinFunction.init(url.id);
  },
};

export default editCheckin;
