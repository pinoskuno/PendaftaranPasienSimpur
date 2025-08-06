import { async } from "regenerator-runtime";
import pendaftaranFunctions from "../../../scripts/utils/pendaftaranFunctions";

const mainPendaftaran = {
  async render() {
    return ` <section class="vh-100" style="background-color: #0766AD; ">
        <div class="container h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-lg-12 col-xl-11">
              <div class="card text-black" style="border-radius: 25px;">
                <div class="card-body p-md-5">
                    <div class="col-md-12">

                    <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4" style="color: #012970;">Pendaftaran Pasien Online Puskesmas Simpur</p>
      
                    <form class="row g-3">
                      <div class="col-md-12">
                        <input type="text" class="form-control" placeholder="Your Name">
                      </div>
                      <div class="col-md-6">
                        <input type="email" class="form-control" placeholder="Email">
                      </div>
                      <div class="col-md-6">
                        <input type="password" class="form-control" placeholder="Password">
                      </div>
                    </form>
                      <form class="mx-1 mx-md-4" id="registerForm">
                        
                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input type="text" id="form3Example1c" placeholder="Your Name" class="form-control" required />
                          </div>
                        </div>
                    </div>
      
                    <div class="col-md-5">
                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input type="email" id="form3Example3c" class="form-control" placeholder="Your Email" required />
                          </div>
                        </div>
                    </div> 

                    <div class="col-md-5">
                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input type="password" id="form3Example4c" class="form-control" placeholder="Password" required />
                          </div>
                        </div>
                    </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input type="password" id="form3Example4cd" class="form-control" placeholder="Repeat your Password" required />
                          </div>
                        </div>
                    </div>

                        <div class="form-check d-flex justify-content-center mb-4">
                        <label class="form-check-label" for="form2Example3">
                        Sudah memiliki akun? silahkan <a href="../login">Login Disini</a>
                        </label>
                        </div>
      
                        <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button type="submit" class="btn btn-primary btn-lg">Register</button>
                        </div>
      
                      </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>`;
  },

  async afterRender() {
    console.log("afterrender jalan..");

    const registerForm = document.getElementById("registerForm");
    registerForm.addEventListener("submit", async (e) => {
      const inputNama = document.getElementById("form3Example1c");
      const inputEmail = document.getElementById("form3Example3c");
      const inputPassword = document.getElementById("form3Example4c");
      const inputPasswordRepeat = document.getElementById("form3Example4cd");
      e.preventDefault();
      if (inputPassword.value !== inputPasswordRepeat.value) {
        Swal.fire(
          "Konfirmasi Password Tidak Sama",
          "Silahkan tulis ulang password konfirmasi",
          "error"
        );
        setTimeout(() => {
          location.reload();
        }, 2000);
      } else {
        const data = {
          email: inputEmail.value,
          nama: inputNama.value,
          password: inputPassword.value,
        };
        await pendaftaranFunctions.init(data);
      }
    });
  },
};
export default mainPendaftaran;
