<template>
  <div class="start">
    <img class="logo" src="./../assets/logo.jpg">
    <h1>{{ msg }}</h1>
    <h2>In the meantime find us on social media below...</h2>
    <a href="https://www.facebook.com/writtenininkband/">
      <i class="fa fa-facebook-square fa-4x social-link" aria-hidden="true"></i>
    </a>
    <a href="https://www.youtube.com/channel/UCja7GCil8LEOamdofCARF0g">
      <i class="fa fa-youtube-square fa-4x social-link" aria-hidden="true"></i>
    </a>
    <a href="https://soundcloud.com/user-443869644">
      <i class="fa fa-soundcloud fa-4x social-link" aria-hidden="true"></i>
    </a>
    <a href="https://www.instagram.com/writteninink_band/?hl=en">
      <i class="fa fa-instagram fa-4x social-link" aria-hidden="true"></i>
    </a>
    <i class="fa fa-spotify fa-4x social-link-coming" aria-hidden="true"></i>
  </div>
</template>

<script>
export default {
  name: 'start',
  data () {
    return {
      msg: 'Our web site is coming very soon...'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.social-link {
  color: #0c0c0c;
  margin: 20px;
}
.social-link-coming {
  color: grey;
  margin: 20px;
}
.logo {
  margin-bottom: 60px;
}

</style>
