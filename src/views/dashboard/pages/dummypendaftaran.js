import dataProduct from "../../../scripts/utils/dataProducts";
import createAllProducts from "../templates/displayProducts";

const pendaftaranpasien = {
  async render() {
    return `
      <main class="main-container">
        <section class="container pb-3" style="margin: 1rem auto;">
          <div class="d-grid justify-content-center">
            <div class="col-12 container p-3">
              <h1 class="fw-bold text-center" style="color: #012970; font-family: 'Poppins', sans-serif;">Daftar Kuota Pasien</h1>
              <!-- Input untuk pencarian -->
              <input type="text" id="searchInput" class="form-control mb-3" placeholder="Cari nama poli...">
            </div>
          </div>
          <div class="row d-flex" id="products">
          </div>
        </section>
      </main>
    `;
  },

  async afterRender() {
    const productsContainer = document.querySelector("#products");
    productsContainer.innerHTML = ""; // Mengosongkan konten produk sebelum menambahkan yang baru
    document.querySelector("#navProduk").classList.add("active");

    const fetchedDataProduct = await dataProduct._fetchAllDataProduct();
    const productsHTML = [];

    fetchedDataProduct.forEach(async (d) => {
      const data = d.data();
      data.id = d.id;

      const buttonClass = buttonClassBasedOnTime(data);

      productsHTML.push(createAllProducts(
        data.nama_poli,
        data.foto,
        data.waktu_checkin,
        data.kuota_pasien,
        data.id,
        buttonClass
      ));
    });

    // Tambahkan event listener untuk pencarian
    document.getElementById('searchInput').addEventListener('input', function () {
      const searchKeyword = this.value.trim().toLowerCase();
      filterAndRenderProducts(searchKeyword, productsContainer, productsHTML);
    });

    // Render semua produk
    renderProducts(productsContainer, productsHTML);
  },
};

function renderProducts(container, productsHTML) {
  container.innerHTML = productsHTML.join('');
}

function filterAndRenderProducts(keyword, container, productsHTML) {
  const filteredProducts = productsHTML.filter(html => {
    const productName = html.toLowerCase();
    return productName.includes(keyword);
  });

  renderProducts(container, filteredProducts);
}
function buttonClassBasedOnTime(data) {
  // Function to check if the current time is before the check-in time
  const isCheckinTimeValid = () => {
    const now = new Date();
    const [startHours, startMinutes] = data.waktu_checkin.split(' - ')[0].split(':').map(Number);
    const checkinTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), startHours, startMinutes);

    return now > checkinTime;
  };

  // Determine button class based on check-in time and kuota_pasien
  if (isCheckinTimeValid() || data.kuota_pasien <= 0) {
    return "btn-link btn-block disabled";
  } else {
    return "btn-link btn-block";
  }
}



export default pendaftaranpasien;
