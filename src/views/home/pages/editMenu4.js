/* eslint-disable no-undef */
import UrlParser from "../../../scripts/routes/url-parser";
import editMenu4Function from "../../../scripts/utils/editMenu4Function";
import { formEditMenu4 } from "../templates/edit";

const editMenu4 = {
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
                      <form action="#" method="post" id="EditMenu4" enctype="multipart/form-data">
                        
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
    const currentMenu4 = await editMenu4Function.fetchMenuById(url.id);
    const formEdit = document.getElementById("EditMenu4");
    formEdit.innerHTML = formEditMenu4(currentMenu4);

    await editMenu4Function.init(url.id);
  },
};

export default editMenu4;
