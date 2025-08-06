// import homeDashboardFunctions from "../../../scripts/utils/homeDashboardFunctions";

import dashboardHomescreenFunctions from "../../../scripts/utils/dashboardHomescreenFunctions";
import homePraktekFunctions from "../../../scripts/utils/homePraktekFunctions";
import homePasienFunctions from "../../../scripts/utils/homePasienFunctions";

const dashboardHome = {
  async render() {
    return `

    <div id="daftarJadwalPraktek" class="counts">
      <div class="container" data-aos="fade-up">

        <header class="section-header">
          <p>Jadwal Praktek</p>
        </header>
         
        <div class="table-data">
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-bordered table-hover" id="praktekTable">
                <thead>
                  <tr style="background-color: #52D3D8;">
                    <th scope="col" class="no-sort text-center">No.</th>
                    <th scope="col" class="no-sort text-center">Nama Poli</th>
                    <th scope="col" class="no-sort text-center">Nama Dokter</th>
                    <th scope="col" class="no-sort text-center">Senin</th>
                    <th scope="col" class="no-sort text-center">Selasa</th>
                    <th scope="col" class="no-sort text-center">Rabu</th>
                    <th scope="col" class="no-sort text-center">Kamis</th>
                    <th scope="col" class="no-sort text-center">Jumat</th>
                    <th scope="col" class="no-sort text-center">Sabtu</th>
                  </tr>
                </thead>
                <tbody class="align-middle" id="bodyPraktek">

                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    </div>

    <section id="daftarAntrianPasien" class="counts">
      <div class="container" data-aos="fade-up">

        <header class="section-header">
          <p>Daftar Antrian Pasien</p>
        </header>

        <div class="filter-section">

          <label for="filterStartDate">Filter by Start Date:</label>
          <input type="datetime-local" id="filterStartDate" step="1">
          
          <label for="filterEndDate">Filter by End Date:</label>
          <input type="datetime-local" id="filterEndDate" step="1"><br><br>

          <label for="filterPoli">Filter by Poli:</label>
          <select id="filterPoli">
            <option value="">All Poli</option>
            <option value="Poli Spesialis Umum 11:00 - 11:59">Poli Spesialis Umum 11:00 - 11:59 1</option>
            <option value="Poli Spesialis KIA 09:00 - 10:29">Poli Spesialis KIA 09:00 - 10:29</option>
          </select>
          
          <label for="filterStatus">Filter by Status:</label>
          <select id="filterStatus">
            <option value="">All Status</option>
            <option value="pending">Pending</option>
            <option value="confirmed">Confirmed</option>
            <option value="succeed">Succeed</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div><br>

        <div class="table-data">
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-bordered table-hover" id="pasienTable">
                <thead>
                  <tr style="background-color: #52D3D8;">
                    <th scope="col" class="no-sort text-center">No.</th>
                    <th scope="col" class="no-sort text-center">Nama Pasien</th>
                    <th scope="col" class="no-sort text-center">Nomor Rekam Medis</th>
                    <th scope="col" class="no-sort text-center">Jenis Kelamin</th>
                    <th scope="col" class="no-sort text-center">Poli</th>
                    <th scope="col" class="no-sort text-center">Waktu Reservasi</th>
                    <th scope="col" class="no-sort text-center">Checkin</th>
                    <th scope="col" class="no-sort text-center">Status</th>
                  </tr>
                </thead>
                <tbody class="align-middle" id="bodyPasien">

                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    </section>`;
  },

  async afterRender() {
    console.log("afterrender items");
  
    // Mendapatkan elemen HTML yang diperlukan
    const filterPoli = document.getElementById("filterPoli");
    const filterStatus = document.getElementById("filterStatus");
    const filterStartDate = document.getElementById("filterStartDate");
    const filterEndDate = document.getElementById("filterEndDate");
    const bodyPraktek = document.querySelector("#bodyPraktek");
    const bodyPasien = document.querySelector("#bodyPasien");
  
    // Mendapatkan data dari Firebase
    const fetchedPraktek = await homePraktekFunctions.getAllJadwalPraktek();
    const fetchedPasien = await homePasienFunctions.getAllDaftarAntrian();
  
    let i = 1;
    let x = 1;
  
    // Function untuk memeriksa apakah tanggal berada dalam rentang yang dipilih
    const isDateWithinRange = (date, startDate, endDate) => {
      if (!startDate && !endDate) {
        return true; // Tampilkan jika tidak ada filter tanggal
      }
  
      const startDateTime = new Date(startDate);
      const endDateTime = new Date(endDate);
  
      // Periksa apakah tanggal berada dalam rentang
      return date >= startDateTime && date <= endDateTime;
    };

    const dateInRange = (date, startDate, endDate) => {
      if (!startDate && !endDate) {
        return true; // Tampilkan jika tidak ada filter tanggal
      }

      const startDateTime = new Date(startDate);
      const endDateTime = new Date(endDate);

      // Check if the date is within the range
      return date >= startDateTime && date <= endDateTime;
    };
  
    // Function untuk menyaring data dan menampilkannya
    const renderFilteredPasien = () => {
      // Mendapatkan nilai dari elemen filter
      const selectedPoli = filterPoli.value.toLowerCase();
      const selectedStatus = filterStatus.value.toLowerCase();
      const currentDate = new Date();
      currentDate.setHours(currentDate.getHours() + 7);
      const selectedStartDate = currentDate.toISOString().split("T")[0] + "T00:00";
      const selectedEndDate = currentDate.toISOString().split("T")[0] + "T23:59";
      const filterdatestart = filterStartDate.value;
      const filterdateend = filterEndDate.value;
    
      // Membuat array untuk menyimpan data yang sesuai dengan filter
      const filteredData = [];
    
      fetchedPasien.forEach(d => {
        const data = d.data();
        data.id = d.id;
    
        // Memeriksa apakah filter waktu telah diatur
        const isFilterTimeSet = filterdatestart && filterdateend;
    
        // Memeriksa apakah nama poli, status, dan tanggal cocok dengan yang dipilih di filter
        const reservasiDate = new Date(data.waktu_reservasi);
    
        const isPoliMatch = !selectedPoli || data.poli.toLowerCase() === selectedPoli;
        const isStatusMatch = !selectedStatus || data.status.toLowerCase() === selectedStatus;
        const isDateMatch = isDateWithinRange(reservasiDate, selectedStartDate, selectedEndDate);
        const dateIsCorrect = isFilterTimeSet && dateInRange(reservasiDate, filterdatestart, filterdateend);
    
        // Menentukan apakah data harus ditampilkan berdasarkan kondisi filter
        if ((isPoliMatch && isStatusMatch) && ((!isFilterTimeSet && isDateMatch) || (isFilterTimeSet && dateIsCorrect))) {
          // Menambahkan data yang sesuai dengan filter ke array
          filteredData.push({
            id: data.id,
            nama_pasien: data.nama_pasien,
            nomor_rekam_medis: data.nomor_rekam_medis,
            jenis_kelamin: data.jenis_kelamin,
            poli: data.poli,
            waktu_reservasi: data.waktu_reservasi,
            checkin: data.checkin,
            status: data.status,
            reservasiDate: reservasiDate.getTime(), // Menyimpan waktu reservasi sebagai nilai numerik
          });
        }
      });
    
      // Mengurutkan array berdasarkan waktu reservasi
      filteredData.sort((a, b) => a.reservasiDate - b.reservasiDate);
    
      // Mengosongkan tabel sebelum menambahkan data yang difilter
      bodyPasien.innerHTML = "";
    
      // Menambahkan data yang difilter ke tabel
      filteredData.forEach((data, index) => {
        bodyPasien.innerHTML += `<tr>
          <th scope="row">${index + 1}</th>
          <td id='pasienidname' value=${data.id}>${data.nama_pasien}</td>
          <td class="text-center">${data.nomor_rekam_medis}</td>
          <td class="text-center">${data.jenis_kelamin}</td>
          <td class="text-center">${data.poli}</td>
          <td class="text-center">${data.waktu_reservasi}</td>
          <td class="text-center">${data.checkin}</td>
          <td class="text-center">${data.status}</td>
        </tr>`;
      });
    };
    
    
    
  
    // Event listeners untuk perubahan nilai filter
    filterPoli.addEventListener("change", renderFilteredPasien);
    filterStatus.addEventListener("change", renderFilteredPasien);
    filterStartDate.addEventListener("change", renderFilteredPasien);
    filterEndDate.addEventListener("change", renderFilteredPasien);
  
    // Mendapatkan data praktek dan menampilkannya pada tabel
    fetchedPraktek.forEach(d => {
      const data = d.data();
      data.id = d.id;
      bodyPraktek.innerHTML += `<tr>
        <th scope="row">${i}</th>
        <td id='praktekidname' value=${data.id}>${data.nama_poli}</td>
        <td class="text-center">${data.nama_dokter}</td>
        <td class="text-center">${data.jadwal_senin}</td>
        <td class="text-center">${data.jadwal_selasa}</td>
        <td class="text-center">${data.jadwal_rabu}</td>
        <td class="text-center">${data.jadwal_kamis}</td>
        <td class="text-center">${data.jadwal_jumat}</td>
        <td class="text-center">${data.jadwal_sabtu}</td>
      </tr>`;
      i += 1;
    });
  
    // Mengonversi ID menjadi nama pada data praktek
    await homePraktekFunctions.convertIDtoName();
  
    // Menginisialisasi DataTable untuk tabel praktek
    await $("#praktekTable").DataTable({
      lengthMenu: [
        [5, 10, 25, 50, -1],
        [5, 10, 25, 50, "All"],
      ],
      columnDefs: [
        {
          targets: "no-sort",
          orderable: false,
        },
      ],
    });
  
    // Menampilkan data pasien tanpa filter saat pertama kali
    renderFilteredPasien();
  
    // Mengonversi ID menjadi nama pada data pasien
    await homePasienFunctions.convertIDtoName();
  
    // Menginisialisasi DataTable untuk tabel pasien
    await $("#pasienTable").DataTable({
      lengthMenu: [
        [5, 10, 25, 50, -1],
        [5, 10, 25, 50, "All"],
      ],
      columnDefs: [
        {
          targets: "no-sort",
          orderable: false,
        },
      ],
    });
  },
  
};

export default dashboardHome;
