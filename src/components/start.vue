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
    <div class="upcoming-events" id="upcoming-events">
      <h1 class="wii-h">Upcoming Events</h1>
      <b-card  bg-variant="dark" text-variant="white" title="Card Title" class="event">
        <p class="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
        <b-button href="#" variant="primary">Go somewhere</b-button>
      </b-card>
    </div>
    <div class="Our Music" id="our-music">
      <h1 class="wii-h">Our Music</h1>
      <b-row>
        <b-col>
          <youtube :video-id="video_1"></youtube>
        </b-col>
        <b-col>
          <youtube :video-id="video_2"></youtube>
        </b-col>
      </b-row>
    </div>
    <div class="social-media" id="social-media">
      <h1 class="wii-h">Social Media</h1>
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
import { getIdFromURL, getTimeFromURL } from 'vue-youtube-embed'

export default {
  name: 'start',
  data () {
    return {
      video_1: "MJ7GiQA1ya4",
      video_2: "dBkXdInVeBA"
    }
  },
  methods: {
    onSlideStart: function() {

    },
    onSlideEnd: function() {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wii-h {
  margin-top: 50px;
  margin-bottom: 50px;
  font-family: 'Permanent Marker', cursive;
  color: black;
}
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
  padding-bottom: 100px;
  height: 800px;
}

.upcoming-events {
  text-align: center;
  display: inline-block;
}

.event {
}

</style>
