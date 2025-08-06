import { async } from "regenerator-runtime";
import loginFunctions from "../../../scripts/utils/loginFunctions";

const mainLogin = {
  async render() {
    return ` 
    <section>

    <div class="container d-flex justify-content-center align-items-center min-vh-100">
      <div class="row border rounded-5 p-3 bg-white shadow box-area">
      <div class="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box" style="background: #103cbe;">
          <div class="featured-image mb-3">
           <img src="../assets/img/login/Doctor.png" class="img-fluid" style="width: 500px;">
          </div>
      </div> 
       
      <div class="col-md-6 right-box">
         <div class="row align-items-center">
               <div class="header-text mb-4">
                    <h2>LOGIN ADMIN</h2>
                    <p>UPT PUSKESMAS SIMPUR</p>
               </div>

               <form class="row g-3" id="loginForm">
                    <div class="input-group col-md-12">
                        <input type="email" id="form3Example3c" class="form-control form-control-lg bg-light fs-6" placeholder="Email address" required />
                    </div>
                    <div class="input-group col-md-12">
                        <input type="password" id="form3Example4c" class="form-control form-control-lg bg-light fs-6" id="password-input" placeholder="Password" required />
                    </div>
                    <div class="input-group mb-5 d-flex justify-content-between">
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="show-password">
                            <label for="show-password" class="form-check-label text-secondary"><small>Show Password</small></label>
                        </div>
                    </div>
                    <div class="input-group mb-3">
                        <button type="submit" class="btn btn-lg btn-primary w-100 fs-6">Login</button>
                    </div>
               </form>
         </div>
      </div> 

     </div>
   </div>
   </section>`;
  },

  async afterRender() {
    console.log("afterrender jalan..");

    const loginForm = document.getElementById("loginForm");
    loginForm.addEventListener("submit", async (e) => {
      const inputEmail = document.getElementById("form3Example3c");
      const inputPassword = document.getElementById("form3Example4c");
      e.preventDefault();
      const data = {
        email: inputEmail.value,
        password: inputPassword.value,
      };
      await loginFunctions.init(data);
    });

    // Mengambil elemen tombol "Show Password"
    const showPasswordCheckbox = document.getElementById("show-password");
    // Mengambil elemen input password
    const passwordInput = document.getElementById("form3Example4c");

    // Menambahkan event listener ketika tombol "Show Password" diubah
    showPasswordCheckbox.addEventListener("change", () => {
      // Mengubah tipe input password menjadi text jika tombol dicentang
      // Mengubah tipe input password menjadi password jika tombol tidak dicentang
      passwordInput.type = showPasswordCheckbox.checked ? "text" : "password";
    });
  },
};
export default mainLogin;
