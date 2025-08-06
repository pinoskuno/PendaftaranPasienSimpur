import homeDashboardFunctions from "../../../scripts/utils/homeDashboardFunctions";

const dashboardAdmin = {
  async render() {
    return `

      <div class="head-title">
        <div class="left">
          <h1>Dashboard</h1>
          <ul class="breadcrumb">
            <li>
              <a href="#">Home</a>
            </li>
            <li><i class='bx bx-chevron-right' ></i></li>
            <li>
              <a class="active" href="index.html">Dashboard</a>
            </li>
          </ul>
        </div>
      </div>
  
      <section class="section dashboard">
      <ul class="box-info">
        <li>
          <i class='bx bxs-user' ></i>
          <span class="text">
            <h3 id='totalAkun'></h3>
            <p>Total Seluruh Admin</p>
          </span>
        </li>
        <li>
          <i class='bx bxs-group' ></i>
          <span class="text">
            <h3 id='totalPasien'></h3>
            <p>Total Seluruh Daftar Antrian Pasien</p>
          </span>
        </li>
        <li>
          <i class='bx bxs-user-circle' ></i>
          <span class="text">
            <h3 id='totalDokter'></h3>
            <p>Total Seluruh Dokter</p>
          </span>
        </li>
        <li>
        <i class='bx bxs-book-add' ></i>
        <span class="text">
          <h3 id='totalJadwalPoli'></h3>
          <p>Total Seluruh Jadwal Praktik Poliklinik</p>
        </span>
      </li>
      </ul>

        <div class="table-data">
  
          <!-- Left side columns -->
          <div class="col-lg-12">
  
            <!-- Website Traffic -->
              <div class="card-body pb-0">
                <h5 class="card-title text-center">Diagram Kontribusi <span>| Perbandingan Upload Menu dan Data</span></h5>
  
                <div id="chartContainer"></div>
  
              </div>
            </div><!-- End Website Traffic -->
  
            </div>
          </div><!-- End Left side columns -->
  
        </div>
      </section>
        `;
  },

  async afterRender() {
    console.log("kode jalan");
    // TOTAL AKUN
    let currentID = "";
    const fetchedDataAccount = await homeDashboardFunctions.getAllAccount();
    const arrAccount = [];
    fetchedDataAccount.forEach((d) => {
      const data = d.data();
      data.id = d.id;
      arrAccount.push(data);
      if (d.data().email == JSON.parse(localStorage.getItem("user")).email) {
        currentID = d.id;
      }
    });
    const totalAkunContainer = document.getElementById("totalAkun");
    totalAkunContainer.innerText = `${arrAccount.length} Akun`;

    // TOTAL PASIEN
    const fetchedPasien = await homeDashboardFunctions.getAllDaftarAntrian();
    const arrPasien = [];
    fetchedPasien.forEach((d) => {
      const data = d.data();
      arrPasien.push(data);
    });
    const totalPasienContainer = document.getElementById("totalPasien");
    totalPasienContainer.innerText = `${arrPasien.length} Antrian Pasien`;

    // TOTAL DOKTER
    const fetchedPraktek = await homeDashboardFunctions.getAllJadwalPraktek();
    const arrDokter = [];
    fetchedPraktek.forEach((d) => {
      const data = d.data();
      arrDokter.push(data);
    });
    const totalDokterContainer = document.getElementById("totalDokter");
    totalDokterContainer.innerText = `${arrDokter.length} Dokter`;


    // TOTAL JADWAL POLI (NEW DATA)
    const fetchedJadwalPoli = await homeDashboardFunctions.getAllJadwalPoli();
    const arrJadwalPoli = [];
    fetchedJadwalPoli.forEach((d) => {
      const data = d.data();
      arrJadwalPoli.push(data);
    });
    const totalJadwalPoliContainer = document.getElementById("totalJadwalPoli");
    totalJadwalPoliContainer.innerText = `${arrJadwalPoli.length} Jadwal Praktik Poliklinik`;


    // const chartContainer = document.getElementById("chartContainer");
    // const chartOptions = {
    //   chart: {
    //     type: 'bar',
    //     height: 350,
    //   },
    //   series: [{
    //     name: 'Total Pasien',
    //     data: [arrPasien.length],
    //   }, {
    //     name: 'Total Jadwal Poli',
    //     data: [arrJadwalPoli.length],
    //   }],
    //   xaxis: {
    //     categories: ['Total Pasien', 'Total Jadwal Poli'],
    //   },
    // };
    // const chart = new ApexCharts(chartContainer, chartOptions);

    // // Render the chart
    // chart.render();

    const chartContainer = document.getElementById("chartContainer");
    const chartOptions = {
      chart: {
        type: 'pie', // Change to 'pie' for a pie chart
        height: 350,
      },
      series: [arrPasien.length, arrJadwalPoli.length],
      labels: ['Total Pasien', 'Total Jadwal Poliklinik'],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    };
    const chart = new ApexCharts(chartContainer, chartOptions);

    // Render the chart
    chart.render();

  },
};

export default dashboardAdmin;
