import dashboardHome from "../../views/dashboard/pages/dashboard";
// import aboutHome from "../../views/dashboard/pages/about";
import Deskripsi from "../../views/dashboard/pages/deskripsi";
import pendaftaranpasien from "../../views/dashboard/pages/pendaftaran";

import accountsAdmin from "../../views/home/pages/akun";
import dashboardAdmin from "../../views/home/pages/dashboard";
import dataAdmin from "../../views/home/pages/data";
import pasienAdmin from "../../views/home/pages/pasien";
import praktekAdmin from "../../views/home/pages/praktek";
import checkinAdmin from "../../views/home/pages/checkin";
import editData from "../../views/home/pages/editData";
import editPasien from "../../views/home/pages/editPasien";
import editMenu from "../../views/home/pages/editMenu";
import editMenu2 from "../../views/home/pages/editMenu2";
import editMenu3 from "../../views/home/pages/editMenu3";
import editMenu4 from "../../views/home/pages/editMenu4";
import editMenu5 from "../../views/home/pages/editMenu5";
import editPraktek from "../../views/home/pages/editPraktek";
import editCheckin from "../../views/home/pages/editCheckin";
import menuAdmin from "../../views/home/pages/menu";
import menuAdmin2 from "../../views/home/pages/menu2";
import menuAdmin3 from "../../views/home/pages/menu3";
import menuAdmin4 from "../../views/home/pages/menu4";
import menuAdmin5 from "../../views/home/pages/menu5";
// import jadwalPraktek from "../../views/home/pages/jadwaldokter";
import profil from "../../views/home/pages/profil";
// import mainLogin from "../../views/login/pages/main-login";
import mainLogin from "../../views/login/pages/main-login-new";
import mainRegister from "../../views/register/pages/main-register";
// import mainPendaftaran from "../../views/pendaftaran/pages/main-pendaftaran";
import mainPendaftaran from "../../views/pendaftaran/pages/main-pendaftaran-new";
import editTransactionsPage from "../../views/home/pages/editTransactionsPage";

// Register routes
const registerRoutes = {
  "/": mainRegister,
};

// Pendaftaran routes
const pendaftaranRoutes = {
  "/": mainPendaftaran,
};

// Login routes
const loginRoutes = {
  "/": mainLogin,
};

const adminRoutes = {
  "/": dashboardAdmin,
  "/akun": accountsAdmin,
  "/data": dataAdmin,
  "/pasien": pasienAdmin,
  "/praktek": praktekAdmin,
  "/checkin": checkinAdmin,
  "/menu": menuAdmin,
  "/menu2": menuAdmin2,
  "/menu3": menuAdmin3,
  "/menu4": menuAdmin4,
  "/menu5": menuAdmin5,
  // "/jadwaldokter": jadwalPraktek,
  "/profil": profil,
  "/editdata/:id": editData,
  "/editpasien/:id": editPasien,
  "/editpraktek/:id": editPraktek,
  "/editcheckin/:id": editCheckin,
  "/editmenu/:id": editMenu,
  "/editmenu2/:id": editMenu2,
  "/editmenu3/:id": editMenu3,
  "/editmenu4/:id": editMenu4,
  "/editmenu5/:id": editMenu5,
  "/edittransaction/:id": editTransactionsPage,
};

const HomeRoutes = {
  "/": dashboardHome,
  // "/about": aboutHome,
  "/pendaftaran": pendaftaranpasien,
  "/deskripsi/:id": Deskripsi,
};

export {
  registerRoutes,
  loginRoutes,
  adminRoutes,
  HomeRoutes,
  pendaftaranRoutes,
};
