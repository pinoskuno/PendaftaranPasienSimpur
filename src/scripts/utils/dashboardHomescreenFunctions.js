import { initializeApp } from "firebase/app"; // initialize app
import { getFirestore } from "firebase/firestore"; // API modular web
import { collection, doc, setDoc, getDoc, getDocs } from "firebase/firestore"; // menambahkan data
import firebaseConfig from "../globals/firebaseConfig";
import { customAlphabet } from "nanoid";

const app = initializeApp(firebaseConfig); // initialize firebase

const db = getFirestore(app); // Initialize Cloud Firestore and get a reference to the service

const dashboardHomescreenFunctions = {
  async getAllJadwalPraktek() {
    try {
      const querySnapshot = await getDocs(collection(db, "jadwalPraktek"));
      return querySnapshot;
    } catch (error) {
      console.log("Error", error);
    }
  },
  async getAllDaftarAntrian() {
    try {
      const querySnapshot = await getDocs(collection(db, "daftarAntrian"));
      return querySnapshot;
    } catch (error) {
      console.log("Error", error);
    }
  },
  async getAllData() {
    try {
      const querySnapshot = await getDocs(collection(db, "data"));
      return querySnapshot;
    } catch (error) {
      console.log("Error", error);
    }
  },
  async init(data) {
    let existed = 0;
    const querySnapshot = await getDocs(collection(db, "akun")); // Membaca data
    querySnapshot.forEach((doc) => {
      console.log(doc.id, "==>", doc.data().email);
      if (doc.data().email == data.email) {
        existed = 1;
        Swal.fire({
          icon: "error",
          title: "Email Sudah Terdaftar",
          text: "Pendaftaran Gagal",
          showCloseButton: true,
        });
        setTimeout(() => {
          location.reload();
        }, 2000);
      }
    });
    if (existed == 0) {
      this.insertData(data);
      setTimeout(() => {
        window.location.href = "../login";
      }, 2000);
    }
  },
};

export default dashboardHomescreenFunctions;
