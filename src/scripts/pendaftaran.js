import "regenerator-runtime";
import "bootstrap/dist/css/bootstrap.min.css";
import "regenerator-runtime";
import "../styles/pendaftaran.css";
import AppPendaftaran from "../views/pendaftaran/app";

if (localStorage.getItem("user")) {
  window.location.href = "/";
  const userAdmin = localStorage.getItem("user");
  const data = JSON.parse(userAdmin);
  document.getElementById("username").innerText = data.nama;
  document.getElementById("namauser").innerText = data.nama;
  document.getElementById("user").innerText = data.user;
}

const appPendaftaran = new AppPendaftaran({
  maincontent: document.querySelector("#mainpendaftaran"),
});

window.addEventListener("hashchange", () => {
  appPendaftaran.renderPage();
});

window.addEventListener("load", () => {
  appPendaftaran.renderPage();
});
