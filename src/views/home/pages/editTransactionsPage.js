/* eslint-disable no-undef */
import UrlParser from "../../../scripts/routes/url-parser";
import dataProduct from "../../../scripts/utils/dataProducts";

import dataTransactions from "../../../scripts/utils/dataTransactions";
import editTransaction from "../../../scripts/utils/editTransactions";
import { formEditTransaksi } from "../templates/edit";

const editTransactionsPage = {
  async render() {
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
                      <form action="#" method="post" id="EditTransaksi" enctype="multipart/form-data">
                        
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
    const fetchedDataTransactions = await dataTransactions._fetchDataById(
      url.id
    );

    console.log(fetchedDataTransactions);

    const dataProduk = await dataProduct._fetchDataProductByIdProduk(
      fetchedDataTransactions.id_barang
    );

    const container = document.getElementById("EditTransaksi");
    container.innerHTML = formEditTransaksi(
      dataProduk,
      fetchedDataTransactions
    );
    // await editProduct.getValueInputEdit(url.id);

    await editTransaction.getValueInputEdit(
      url.id,
      dataProduk.stok,
      fetchedDataTransactions.id_ktp
    );
  },
};

export default editTransactionsPage;
