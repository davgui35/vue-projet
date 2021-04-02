<template>
  <div id="footer">
    <div class="footer-content container-fluid">
      <div>
        <img src="../assets/img/panda.png" alt="image" width="600px" />
      </div>
      <div class="footer-form">
        <h2>
          On fait sa<br />
          commère ?
        </h2>
        <div class="place-form">
          <div class="inputs">
            <input type="text" placeholder="Username" aria-label="Username" />
            <input
              type="text"
              placeholder="E-mail adresse"
              aria-label="E-mail adresse"
            />
          </div>
          <div>
            <button type="submit" class="btn btn-secondary">Sign up</button>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-links">
      <div class="network">
        <a href="https://www.instagram.com/" target="_blank"
          ><img src="../assets/icons/instagram.svg" alt="icon instagram"
        /></a>

        <a href="https://www.facebook.com/" target="_blank"
          ><img src="../assets/icons/facebook.svg" alt="icon facebook"
        /></a>

        <a href="https://www.youtube.com/" target="_blank"
          ><img src="../assets/icons/youtube.svg" alt="icon youtube"
        /></a>
      </div>
      <div>
        <p>Copyright</p>
      </div>
      <div>
        <p>Mentions Légales</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss" scoped>
#footer {
  position: relative;
  margin-top: 200px;
  scroll-behavior: smooth;

  .footer-content {
    background-image: url("../assets/img/bgRed.png");
    height: 350px;
    display: flex;
    align-items: flex-end;
    width: 100%;

    button {
      color: #fff;
      background-color: black;
      border-radius: 9999px;
      &:hover {
        background: #fbcb00;
        color: black;
        outline: none;
      }
    }
  }
  .footer-form {
    width: 100%;
    h2 {
      font-family: "Staatliches", cursive;
      position: absolute;
      top: -80px;
      left: 40%;
      text-transform: uppercase;
      color: black;
      font-weight: bold;
      font-size: 5rem;
    }
    .place-form {
      margin-top: 100px;
      margin-bottom: 100px;
      width: 100%;
      text-align: start;
      .inputs {
        display: flex;
      }
      input {
        width: 50%;
        background: none;
        border: none;
        border-radius: none;
        margin: 10px;
        border-bottom: 2px solid black;
      }
      input::placeholder {
        color: #fff;
      }
    }
  }

  .footer-links {
    background: #333;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .network {
      height: 80px;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      a {
        margin-right: 30px;
      }
    }
    p {
      color: #f1f1f1;
    }
  }
}
</style>
