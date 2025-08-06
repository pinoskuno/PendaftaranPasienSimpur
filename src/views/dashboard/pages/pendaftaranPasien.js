import dataProduct from "../../../scripts/utils/dataProducts";
import createAllProducts from "../templates/displayProducts";

const pendaftaranpasien = {
  async render() {
    return `


<main class="main-container">
    <section class="container pb-3" style="margin: 1rem auto;">
    <div class="d-grid justify-content-center">
    <div class="col-12 container p-3">
    <h1 class="fw-bold text-center" style="color: #012970;">Daftar Kuota Pasien</h1>
    </div>
    </div>
    <div class="row d-flex" id="products">
    </div>
    </section>
</main>

<!-- <div class="collapse navbar-collapse" id="navbarNav">
      <a href="admin/" class="btn btn-primary ms-auto">admin</a>
      <a href="seller/" class="btn btn-success ms-3">penjual</a>
      <a href="buyer/" class="btn btn-success ms-3">pembeli</a>
      <a href="login.html" class="btn btn-info ms-3">Login</a>
    </div> -->
<!-- </div>
</nav> -->
`;
  },

  async afterRender() {
    const products = document.querySelector("#products");
    document.querySelector("#navProduk").classList.add("active");
    const fetchedDataProduct = await dataProduct._fetchAllDataProduct();
    fetchedDataProduct.forEach(async (d) => {
      const data = d.data();
      data.id = d.id;

      products.innerHTML += createAllProducts(
        data.nama_poli,
        data.foto,
        data.kuota_pasien,
        data.id
      );
    });
  },
};

export default pendaftaranpasien;
