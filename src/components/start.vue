<template>
  <div class="start">
    <div class="pictures">
      <b-carousel id="carousel1"
                      style="text-shadow: 1px 1px 2px #333;"
                      controls
                      indicators
                      background="#ababab"
                      :interval="4000"
                      img-width="1024"
                      img-height="480"
                      v-model="slide"
                      @sliding-start="onSlideStart"
                      @sliding-end="onSlideEnd">
        <b-carousel-slide img-src="/static/05.JPG"></b-carousel-slide>
        <b-carousel-slide img-src="/static/06.jpg"></b-carousel-slide>
        <b-carousel-slide img-src="/static/07.jpg"></b-carousel-slide>
        <b-carousel-slide img-src="/static/14.jpg"></b-carousel-slide>
        <b-carousel-slide img-src="/static/19.JPG"></b-carousel-slide>
        <b-carousel-slide img-src="/static/20.jpg"></b-carousel-slide>

      </b-carousel>
    </div>
    <div class="social-media" id="social-media">
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
.start {
  margin-top: -100px
}

.social-media {
  padding-top: 100px;
  padding-bottom: 100px
}

</style>
