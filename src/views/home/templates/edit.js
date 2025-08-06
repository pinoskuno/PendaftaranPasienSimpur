


  




const formEditData = (data) => `

<div class="row">
<div class="col-md-12">
    <div class="mb-3">
        <label for="namaData" class="form-label">Nama</label>
        <input type="text" class="form-control" name="namaData" id="namaData" aria-label="Nama Data" placeholder="Isikan nama data" value="${data.nama_data}" required>
    </div>
</div>
<div class="mb-3">
  <label for="link" class="form-label">Link Data</label>
  <textarea class="form-control" id="link" placeholder="link Data" rows="4">${data.link}</textarea>
</div>
<div class="d-grid gap-2 mt-3">
    <button class="btn btn-primary" type="submit" id="btnEditData">Update Data</button>
</div>
</div>
`;


const formEditPasien = (data) => {
    // Function to get current date and time
    const getCurrentDateTime = () => {
        const now = new Date();
        const year = now.getFullYear();
        const month = (now.getMonth() + 1).toString().padStart(2, '0');
        const day = now.getDate().toString().padStart(2, '0');
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        
        return `${year}-${month}-${day}T${hours}:${minutes}`;
      };
  

    // Form HTML
    return `


      
<div class="modal-header border-0 border-top border-4 border-primary"></div>
<div class="row">
<div class="col-md-12">
<div class="mb-3" style="padding-top: 30px;">
<label for="namaPasien" class="form-label">Nama</label>
<input type="text" class="form-control" name="namaPasien" id="namaPasien" aria-label="Nama Pasien" placeholder="Isikan nama dari Pasien" value="${data.nama_pasien}" required>
</div>
<div class="mb-3">
<label for="nomorRekamMedis" class="form-label">Nomor Rekam Medis</label>
<input type="text" class="form-control" name="nomorRekamMedis" id="nomorRekamMedis" aria-label="Nomor Rekam Medis" placeholder="Isikan nomor rekam medis" value="${data.nomor_rekam_medis}" required>
</div>
<div class="mb-3">
<label for="nomorKTP" class="form-label">NIK KTP</label>
<input type="text" class="form-control" name="nomorKTP" id="nomorKTP" aria-label="NIK KTP" placeholder="Isikan NIK KTP" value="${data.nik_ktp}" required>
</div>
<div class="mb-3">
<label for="tanggalLahir" class="form-label">Tanggal Lahir</label>
<input type="date" class="form-control" name="tanggalLahir" id="tanggalLahir" aria-label="tanggalLahir" placeholder="Isikan tanggalLahir" value="${data.tanggal_lahir}" required>
</div>
<div class="mb-3">
<label for="nomorHP" class="form-label">Nomor HP</label>
<input type="text" class="form-control" name="nomorHP" id="nomorHP" aria-label="nomorHP" placeholder="Isikan nomor HP" value="${data.nomor_hp}" required>
</div>
<div class="mb-3">
<label for="nomorBPJS" class="form-label">Nomor BPJS</label>
<input type="text" class="form-control" name="nomorBPJS" id="nomorBPJS" aria-label="nomorBPJS" placeholder="Isikan nomor BPJS" value="${data.nomor_bpjs}" required>
</div>
<div class="mb-3">
<label for="Alamat" class="form-label">Alamat</label>
<input type="text" class="form-control" name="Alamat" id="Alamat" aria-label="Alamat" placeholder="Isikan Alamat" value="${data.alamat}" required>
</div>
<div class="mb-3">
<label for="jenisKelamin" class="form-label">Jenis Kelamin</label>
<select type="text" class="form-control" name="jenisKelamin" id="jenisKelamin" aria-label="jenisKelamin" placeholder="Isikan jenisKelamin" value="${data.jenis_kelamin}" required>
<option>Pria</option>
<option>Wanita</option>
</select>
</div>
<div class="mb-3">
<label for="poli" class="form-label">Poli</label>
<input type="text" class="form-control" name="poli" id="poli" aria-label="Poli" placeholder="Isikan poli" value="${data.poli}" required>
</div>
<div class="mb-3">
<label for="waktuReservasi" class="form-label">Waktu Reservasi</label>
<input type="datetime-local" class="form-control" name="waktuReservasi" id="waktuReservasi" step="any" aria-label="waktuReservasi" placeholder="Isikan waktuReservasi" value="${data.waktu_reservasi}" required>
</div>
<div class="mb-3">
<input type="hidden" name="Checkin" id="Checkin" value="${getCurrentDateTime()}">
</div>

<div class="mb-3">
<label for="Status" class="form-label">Status</label>
<select type="text" class="form-control" name="Status" id="Status" aria-label="Status" placeholder="Isikan status" value="${data.status}" required>
<option value="Pending">Pending</option>
<option value="Confirmed">Confirmed</option>
<option value="Succeed">Succeed</option>
<option value="Cancelled">Cancelled</option>
</select>
</div>
<div class="d-grid gap-2 mt-3">
    <button class="btn btn-primary" type="submit" id="btnEditPasien">Update Daftar Antrian Pasien</button>
</div>
</div>
    `;
  };
  





const formEditMenu = (data) => `

<div class="row">
<div class="col-md-6">
    <img src="${data.gambar}" alt="${data.nama_menu}" title="foto data ${data.nama_menu}" class="rounded" style="object-fit: cover;max-width: 300px;">
</div>

<div class="col-md-6">
    <div class="my-3">
        <label for="editGambarMenu" class="form-label">Ganti foto</label>
        <input class="form-control" type="file" id="editGambarMenu" name="editGambarMenu" accept=".jpg,.jpeg,.png">
        <small><span class="text-danger fst-italic">Pastikan file tidak lebih 3mb dan format jpg/jpeg/png</span></small>
    </div>
    <div class="mb-3">
        <label for="namaMenu" class="form-label">Nama Menu</label>
        <input type="text" class="form-control" name="namaMenu" id="namaMenu" aria-label="Nama Menu" placeholder="Isikan nama data" value="${data.nama_menu}" required>
    </div>
    <div class="mb-3">
        <label for="link" class="form-label">Link Menu</label>
        <textarea class="form-control" id="link" placeholder="link Menu" rows="4">${data.link}</textarea>
      </div>
</div>


<div class="d-grid gap-2 mt-3">
    <button class="btn btn-primary" type="submit" id="btnEditMenu">Update Menu</button>
</div>
</div>
`;

const formEditMenu2 = (data) => `

<div class="row">
<div class="col-md-6">
    <img src="${data.gambar}" alt="${data.nama_menu2}" title="foto data ${data.nama_menu2}" class="rounded" style="object-fit: cover;max-width: 300px;">
</div>

<div class="col-md-6">
    <div class="my-3">
        <label for="editGambarMenu2" class="form-label">Ganti foto</label>
        <input class="form-control" type="file" id="editGambarMenu2" name="editGambarMenu2" accept=".jpg,.jpeg,.png">
        <small><span class="text-danger fst-italic">Pastikan file tidak lebih 3mb dan format jpg/jpeg/png</span></small>
    </div>
    <div class="mb-3">
        <label for="namaMenu2" class="form-label">Nama Menu</label>
        <input type="text" class="form-control" name="namaMenu2" id="namaMenu2" aria-label="Nama Menu" placeholder="Isikan nama data" value="${data.nama_menu2}" required>
    </div>
    <div class="mb-3">
        <label for="link" class="form-label">Link Menu</label>
        <textarea class="form-control" id="link" placeholder="link Menu" rows="4">${data.link}</textarea>
      </div>
</div>


<div class="d-grid gap-2 mt-3">
    <button class="btn btn-primary" type="submit" id="btnEditMenu2">Update Menu</button>
</div>
</div>
`;

const formEditMenu3 = (data) => `

<div class="row">
<div class="col-md-6">
    <img src="${data.gambar}" alt="${data.nama_menu3}" title="foto data ${data.nama_menu3}" class="rounded" style="object-fit: cover;max-width: 300px;">
</div>

<div class="col-md-6">
    <div class="my-3">
        <label for="editGambarMenu3" class="form-label">Ganti foto</label>
        <input class="form-control" type="file" id="editGambarMenu3" name="editGambarMenu3" accept=".jpg,.jpeg,.png">
        <small><span class="text-danger fst-italic">Pastikan file tidak lebih 3mb dan format jpg/jpeg/png</span></small>
    </div>
    <div class="mb-3">
        <label for="namaMenu3" class="form-label">Nama Menu</label>
        <input type="text" class="form-control" name="namaMenu3" id="namaMenu3" aria-label="Nama Menu" placeholder="Isikan nama data" value="${data.nama_menu3}" required>
    </div>
    <div class="mb-3">
        <label for="link" class="form-label">Link Menu</label>
        <textarea class="form-control" id="link" placeholder="link Menu" rows="4">${data.link}</textarea>
      </div>
</div>


<div class="d-grid gap-2 mt-3">
    <button class="btn btn-primary" type="submit" id="btnEditMenu3">Update Menu</button>
</div>
</div>
`;

const formEditMenu4 = (data) => `

<div class="row">
<div class="col-md-6">
    <img src="${data.gambar}" alt="${data.nama_menu4}" title="foto data ${data.nama_menu4}" class="rounded" style="object-fit: cover;max-width: 300px;">
</div>

<div class="col-md-6">
    <div class="my-3">
        <label for="editGambarMenu4" class="form-label">Ganti foto</label>
        <input class="form-control" type="file" id="editGambarMenu4" name="editGambarMenu4" accept=".jpg,.jpeg,.png">
        <small><span class="text-danger fst-italic">Pastikan file tidak lebih 3mb dan format jpg/jpeg/png</span></small>
    </div>
    <div class="mb-3">
        <label for="namaMenu4" class="form-label">Nama Menu</label>
        <input type="text" class="form-control" name="namaMenu4" id="namaMenu4" aria-label="Nama Menu" placeholder="Isikan nama data" value="${data.nama_menu4}" required>
    </div>
    <div class="mb-3">
        <label for="link" class="form-label">Link Menu</label>
        <textarea class="form-control" id="link" placeholder="link Menu" rows="4">${data.link}</textarea>
      </div>
</div>


<div class="d-grid gap-2 mt-3">
    <button class="btn btn-primary" type="submit" id="btnEditMenu4">Update Menu</button>
</div>
</div>
`;

const formEditMenu5 = (data) => `

<div class="row">
<div class="col-md-6">
    <img src="${data.gambar}" alt="${data.nama_menu5}" title="foto data ${data.nama_menu5}" class="rounded" style="object-fit: cover;max-width: 300px;">
</div>

<div class="col-md-6">
    <div class="my-3">
        <label for="editGambarMenu5" class="form-label">Ganti foto</label>
        <input class="form-control" type="file" id="editGambarMenu5" name="editGambarMenu5" accept=".jpg,.jpeg,.png">
        <small><span class="text-danger fst-italic">Pastikan file tidak lebih 3mb dan format jpg/jpeg/png</span></small>
    </div>
    <div class="mb-3">
        <label for="namaMenu5" class="form-label">Nama Menu</label>
        <input type="text" class="form-control" name="namaMenu5" id="namaMenu5" aria-label="Nama Menu" placeholder="Isikan nama data" value="${data.nama_menu5}" required>
    </div>
    <div class="mb-3">
        <label for="link" class="form-label">Link Menu</label>
        <textarea class="form-control" id="link" placeholder="link Menu" rows="4">${data.link}</textarea>
      </div>
</div>


<div class="d-grid gap-2 mt-3">
    <button class="btn btn-primary" type="submit" id="btnEditMenu5">Update Menu</button>
</div>
</div>
`;

const formEditPraktek = (data) => `

<div class="modal-header border-0 border-top border-4 border-primary"></div>
<div class="row">
<div class="col-md-12">
<div class="mb-3" style="padding-top: 30px;">
    <label for="namaPoli" class="form-label">Nama Poli</label>
    <input type="text" class="form-control" name="namaPoli" id="namaPoli" aria-label="Nama Poli" placeholder="Isikan nama dari nama poli" value="${data.nama_poli}" required>
</div>
<div class="mb-3">
    <label for="namaDokter" class="form-label">Nama Dokter</label>
    <input type="text" class="form-control" name="namaDokter" id="namaDokter" aria-label="Nama Dokter" placeholder="Isikan nama dari nama dokter" value="${data.nama_dokter}" required>
</div>
<div class="mb-3">
    <label for="jadwalSenin" class="form-label">Senin</label>
    <input type="text" class="form-control" name="jadwalSenin" id="jadwalSenin" aria-label="Jadwal Senin" placeholder="Isikan jadwal senin" value="${data.jadwal_senin}" required>
</div>
<div class="mb-3">
    <label for="jadwalSelasa" class="form-label">Selasa</label>
    <input type="text" class="form-control" name="jadwalSelasa" id="jadwalSelasa" aria-label="Jadwal Selasa" placeholder="Isikan jadwal selasa" value="${data.jadwal_selasa}" required>
</div>
<div class="mb-3">
    <label for="jadwalRabu" class="form-label">Rabu</label>
    <input type="text" class="form-control" name="jadwalRabu" id="jadwalRabu" aria-label="Jadwal Rabu" placeholder="Isikan jadwal rabu" value="${data.jadwal_rabu}" required>
</div>
<div class="mb-3">
    <label for="jadwalKamis" class="form-label">Kamis</label>
    <input type="text" class="form-control" name="jadwalKamis" id="jadwalKamis" aria-label="Jadwal Kamis" placeholder="Isikan jadwal kamis" value="${data.jadwal_kamis}" required>
</div>
<div class="mb-3">
    <label for="jadwalJumat" class="form-label">Jumat</label>
    <input type="text" class="form-control" name="jadwalJumat" id="jadwalJumat" aria-label="Jadwal Jumat" placeholder="Isikan jadwal jumat" value="${data.jadwal_jumat}" required>
</div>
<div class="mb-3">
    <label for="jadwalSabtu" class="form-label">Sabtu</label>
    <input type="text" class="form-control" name="jadwalSabtu" id="jadwalSabtu" aria-label="Jadwal Sabtu" placeholder="Isikan jadwal sabtu" value="${data.jadwal_sabtu}" required>
</div>

<div class="d-grid gap-2 mt-3">
    <button class="btn btn-primary" type="submit" id="btnEditPraktek">Update Jadwal Praktek Dokter</button>
</div>
</div>
`;

const formEditCheckin = (data) => `

<div class="modal-header border-0 border-top border-4 border-primary"></div>
<div class="row">
    <div class="col-md-6">
        <div class="mb-3 text-center" style="padding-top: 30px;">
            <img src="${data.foto}" alt="${data.nama_poli}" title="foto produk ${data.nama_poli}" class="rounded" style="object-fit: cover;width: 50%;">
        </div>
    </div>
    <div class="col-md-6">
        <div class="my-3">
                <label for="editFoto" class="form-label">Ganti foto</label>
                <input class="form-control" type="file" id="editFoto" name="editFoto" accept=".jpg,.jpeg,.png">
                <small><span class="text-danger fst-italic">Pastikan file tidak lebih 3mb dan format jpg/jpeg/png</span></small>
        </div>
        <div class="mb-3 right-box">
            <label for="namaPoli" class="form-label">Nama Poliklinik</label>
            <select type="form-select" class="form-control" name="namaPoli" id="namaPoli" aria-label="Nama Poli" placeholder="Isikan nama poli" value="${data.nama_poli}" required>
            <option selected>Isikan nama poliklinik</option>
            <option value="Poli Spesialis Umum">Poli Spesialis Umum</option>
            <option value="Poli Spesialis Gigi dan Mulut">Poli Spesialis Gigi dan Mulut</option>
            <option value="Poli Spesialis Kesehatan Ibu dan Anak">Poli Spesialis Kesehatan Ibu dan Anak</option>
            <option value="Poli Spesialis Anak dan Imunisasi">Poli Spesialis Anak dan Imunisasi</option>
            </select>
        </div>
        <div class="mb-3">
            <label for="waktuCheckin" class="form-label">Waktu Checkin</label>
            <input type="text" class="form-control" name="waktuCheckin" id="waktuCheckin" aria-label="Waktu Checkin" placeholder="Isikan waktu checkin" value="${data.waktu_checkin}" required>
        </div>
            <div class="mb-3">
            <label for="kuotaPasien" class="form-label">Kuota Pasien</label>
        <input type="text" class="form-control" name="kuotaPasien" id="kuotaPasien" aria-label="Kuota Pasien" placeholder="Isikan kuota pasien" value="${data.kuota_pasien}" required>
        </div>
    </div>
    <div class="d-grid gap-2 mt-3">
        <button class="btn btn-primary" type="submit" id="btnEditCheckin">Update Kuota Checkin</button>
    </div>
</div>
`;

const formEditTransaksi = (produk, transaksi) => `
<div class="modal-header border-0 border-top border-4 border-primary"></div>
<div class="row">
<div class="col-md-12">
<div class="mb-3" style="padding-top: 30px;">
<label for="namaPasien" class="form-label">Nama Pasien</label>
<input type="text" class="form-control" name="namaPasien" id="namaPasien" aria-label="Nama Pasien" placeholder="Isikan nama dari Pasien" value="${transaksi.nama_pasien}" required>
</div>
<div class="mb-3">
<label for="nomorRekamMedis" class="form-label">Nomor Rekam Medis</label>
<input type="text" class="form-control" name="nomorRekamMedis" id="nomorRekamMedis" aria-label="Nomor Rekam Medis" placeholder="Isikan nomor rekam medis" value="${transaksi.nomor_rekam_medis}" required>
</div>
<div class="mb-3">
<label for="nomorKTP" class="form-label">Nomor KTP</label>
<input type="text" class="form-control" name="nomorKTP" id="nomorKTP" aria-label="Nomor KTP" placeholder="Isikan Nomor Ktp" value="${transaksi.nik_ktp}" required>
</div>
<div class="mb-3">
<label for="nomorHP" class="form-label">Nomor HP</label>
<input type="text" class="form-control" name="nomorHP" id="nomorHP" aria-label="nomorHP" placeholder="Isikan nomor HP" value="${transaksi.nomor_hp}" required>
</div>
<div class="mb-3">
<label for="nomorBPJS" class="form-label">Nomor BPJS</label>
<input type="text" class="form-control" name="nomorBPJS" id="nomorBPJS" aria-label="nomorBPJS" placeholder="Isikan nomor BPJS" value="${transaksi.nomor_bpjs}" required>
</div>
<div class="mb-3">
<label for="tanggalLahir" class="form-label">Tanggal Lahir</label>
<input type="date" class="form-control" name="tanggalLahir" id="tanggalLahir" aria-label="tanggalLahir" placeholder="Isikan tanggalLahir" value="${transaksi.tanggal_lahir}" required>
</div>
<div class="mb-3">
<label for="jenisKelamin" class="form-label">Jenis Kelamin</label>
<select type="text" class="form-control" name="jenisKelamin" id="jenisKelamin" aria-label="jenisKelamin" placeholder="Isikan jenisKelamin" value="${transaksi.jenis_kelamin}" required>
<option>Pria</option>
<option>Wanita</option>
</select>
</div>
<div class="mb-3">
<label for="poli" class="form-label">Poli</label>
<input type="text" class="form-control" name="poli" id="poli" aria-label="Poli" placeholder="Isikan poli" value="${transaksi.poli}" required>
</div>
<div class="mb-3">
<label for="waktuReservasi" class="form-label">Waktu Reservasi</label>
<input type="datetime-local" class="form-control" name="waktuReservasi" id="waktuReservasi" step="any" aria-label="waktuReservasi" placeholder="Isikan waktuReservasi" value="${transaksi.waktu_reservasi}" required>
</div>
<div class="mb-3">
<label for="waktuCheckin" class="form-label">Checkin</label>
<input type="datetime-local" class="form-control" name="waktuCheckin" id="waktuCheckin" step="any" aria-label="Checkin" placeholder="Isikan Checkin" value="${transaksi.waktu_checkin}" required>
</div>
<div class="mb-3">
<label for="status" class="form-label">Status</label>
<select class="form-select" id="status" name="status" aria-label="Status" style="text-transform: capitalize;" required>
    <option selected value="${transaksi.status}" disabled>${transaksi.status}</option>
    <option value="Pending">Pending</option>
    <option value="Confirmed">Confirmed</option>
    <option value="Succeed">Succeed</option>
    <option value="Cancelled">Cancelled</option>
</select>
</div>
<div class="d-grid gap-2 mt-3">
    <button class="btn btn-primary" type="submit" id="btnEditTransaksi">Update Checkin Pasien</button>
</div>
</div>



`;

export {
  formEditData,
  formEditPasien,
  formEditMenu,
  formEditMenu2,
  formEditMenu3,
  formEditMenu4,
  formEditMenu5,
  formEditPraktek,
  formEditCheckin,
  formEditTransaksi,
};
