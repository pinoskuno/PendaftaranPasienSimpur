const createAllProducts = (
  nama_poli,
  image,
  waktu_checkin,
  kuota_pasien,
  id,
  buttonClass
) => `
  <div class="col-md-8 col-lg-3 col-sm-6 rounded">
    <div class="card_product p-2">
      <a class="img-card">
        <img src="${image}" />
      </a>
      <div class="card-content">
        <h5 class="card-title">${nama_poli}</h5>
        <p class="card-text"><i class="fa-solid fa-layer-group"></i>&nbsp; Kuota Pasien : ${kuota_pasien}</p>
        <p class="card-text"><i class="fa-solid fa-layer-group"></i>&nbsp; Waktu Reservasi : ${waktu_checkin}</p>
      </div>
      <div class="card-read-more py-4">
        <div class="text-center">
          ${
            buttonClass === "btn-link btn-block"
              ? `<a href="#/deskripsi/${id}" class="my-5 ${buttonClass}"></i>Daftar</a>`
              : `<p class="my-5">Tidak Tersedia</p>`
          }
        </div>
      </div>
    </div>
  </div>
`;

export default createAllProducts;
