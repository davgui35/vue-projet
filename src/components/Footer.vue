<template>
  <div id="footer">
    <div class="footer-content container-fluid">
      <div>
        <img src="https://picsum.photos/600/400" alt="image" />
      </div>
      <div class="footer-form">
        <h2>
          On fait sa<br />
          commère ?
        </h2>
        <div class="place-form">
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Username"
              aria-label="Username"
            />
            <input
              type="text"
              class="form-control mx-3"
              placeholder="E-mail adresse"
              aria-label="E-mail adresse"
            />
          </div>
          <div>
            <button type="submit" class="btn btn-secondary">Submit</button>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-links">
      <div class="network">
        <p>
          <a href="https://www.instagram.com/" target="_blank"
            ><img src="../assets/icons/instagram.svg" alt="icon instagram"
          /></a>
        </p>
        <p>
          <a href="https://www.facebook.com/" target="_blank"
            ><img src="../assets/icons/facebook.svg" alt="icon facebook"
          /></a>
        </p>
        <p>
          <a href="https://www.youtube.com/" target="_blank"
            ><img src="../assets/icons/youtube.svg" alt="icon youtube"
          /></a>
        </p>
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

  .footer-content {
    background: rgb(182, 172, 172);
    height: 350px;
    display: flex;
    align-items: flex-end;
    width: 100%;

    button {
      border-radius: 9999px;
      &:hover {
        background: #4285f4;
        outline: none;
      }
    }
  }
  .footer-form {
    position: absolute;
    top: 20%;
    right: 20%;
    h2 {
      position: absolute;
      top: -115px;
      left: -110px;
      text-transform: uppercase;
      font-weight: bold;
      font-size: 5rem;
    }
    .place-form {
      margin-top: 100px;
      width: 100%;
      .input-group input {
        border: none;
        width: 25%;
        background: #f1f1f1;
      }
    }
  }

  .footer-links {
    background: #333;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .network {
      width: 33.3%;
      height: 80px;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
    p {
      color: #f1f1f1;
    }
  }
}
</style>
