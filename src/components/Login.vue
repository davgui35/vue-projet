<template>
  <div class="login">
    <!-- Modal -->
    <div
      class="modal fade"
      id="login"
      tabindex="-1"
      role="dialog"
      aria-labelledby="loginTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <ul
              class="nav nav-fill nav-pills mb-3"
              id="pills-tab"
              role="tablist"
            >
              <li class="nav-item">
                <a
                  class="nav-link active"
                  id="pills-home-tab "
                  data-toggle="pill"
                  href="#pills-login"
                  role="tab"
                  aria-controls="pills-login"
                  aria-selected="true"
                  >Se connecter</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  id="pills-register-tab"
                  data-toggle="pill"
                  href="#pills-register"
                  role="tab"
                  aria-controls="pills-register"
                  aria-selected="false"
                  >S'inscrire</a
                >
              </li>
            </ul>

            <div class="tab-content" id="pills-tabContent">
              <div
                class="tab-pane fade show active"
                id="pills-login"
                role="tabpanel"
                aria-labelledby="pills-login-tab"
              >
                <h5 class="text-center">Se connecter</h5>
                <div class="form-group">
                  <label for="exampleInputEmail1">Adresse Email</label>
                  <input
                    type="email"
                    class="form-control"
                    v-model="email"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Adresse Email"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Mot de passe</label>
                  <input
                    type="password"
                    class="form-control"
                    v-model="password"
                    id="exampleInputPassword1"
                    placeholder="Mot de passe"
                  />
                </div>

                <div class="form-group">
                  <button
                    class="btn btn-warning"
<<<<<<< HEAD
                    @click="login"
                    style="background: #FBCB00;"
=======
                    style="background: #FBCB00;"
                    @click="login"
>>>>>>> fceb5ba23e43d35e0064d7a8a75fafc0cba2944f
                  >
                    Se connecter
                  </button>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="pills-register"
                role="tabpanel"
                aria-labelledby="pills-register-tab"
              >
                <h5 class="text-center">Créer un compte</h5>

                <div class="form-group">
                  <label for="name">Ton nom</label>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    v-model="name"
                    placeholder="Ton nom"
                  />
                </div>

                <div class="form-group">
                  <label for="email">Ton adresse Email</label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    v-model="email"
                    aria-describedby="emailHelp"
                    placeholder="Ton adresse Email"
                  />
                </div>
                <div class="form-group">
                  <label for="password">Mot de passe</label>
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    v-model="password"
                    placeholder="Mot de passe"
                  />
                </div>

                <div class="form-group">
                  <button
                    class="btn btn-warning"
                    style="background: #FBCB00;"
                    @click="register"
                  >
                    S'inscrire
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "Login",
  data() {
    return {
      name: "",
      email: "",
      password: ""
    };
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          alert("Vous êtes connecté !!!");
          let homeLink = this.$router.options.routes[0].path;
          this.$router.replace(homeLink);
          document.location.reload();
        })
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          if (errorCode === "auth/wrong-password") {
            alert("Wrong password.");
          } else {
            alert(errorMessage);
          }
          console.log(error);
        });
    },
    register: function() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          function(user) {
            alert("connecté!" + user);
          },
          function(err) {
            alert("Ooops. " + err.message);
          }
        );
    }
  }
};
</script>

<style lang="scss" scoped>
.nav-pills .nav-link.active {
  background: #fbcb00;
  color: #000;
}
.nav-link {
  background: none;
  color: #000;
}
</style>
