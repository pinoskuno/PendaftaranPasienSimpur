/* eslint-disable no-undef */
import UrlParser from "../../../scripts/routes/url-parser";
import editMenu3Function from "../../../scripts/utils/editMenu3Function";
import { formEditMenu3 } from "../templates/edit";

const editMenu3 = {
  async render() {
    return `
      <div class="pagetitle">
        <h1><a href="#/dataseller" title="Back"><i class="bi bi-arrow-left d-xl-none me-2"></i></a>Update Menu</h1>
        <nav>
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#/">Home</a></li>
            <li class="breadcrumb-item active">Edit Menu</li>
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
                      <form action="#" method="post" id="EditMenu3" enctype="multipart/form-data">
                        
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
    console.log(url.id);
    const currentMenu3 = await editMenu3Function.fetchMenuById(url.id);
    const formEdit = document.getElementById("EditMenu3");
    formEdit.innerHTML = formEditMenu3(currentMenu3);

    await editMenu3Function.init(url.id);
  },
};

export default editMenu3;
