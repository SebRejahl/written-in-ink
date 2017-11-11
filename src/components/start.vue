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
      <b-container fluid>
        <b-row>
          <b-col>
            <b-card  bg-variant="dark" text-variant="white" title="The OLLIE Gig" class="event">
              <img class="card-img" src="../assets/ollie.jpg"/>
              <p class="card-text">24 November at 18:00–21:00</p>
              <p class="card-text">The Pioneer Club, Heathlands Drive</p>
              <p class="card-text">AL3 5AY Saint Albans</p>
              <b-button href="https://www.facebook.com/events/290727604749582/" class="wii-button">More Info...</b-button>
            </b-card>
          </b-col>
          <b-col>
            <b-card  bg-variant="dark" text-variant="white" title="Funkin' For Fundin' - Animal Welfare" class="event">
              <img class="card-img" src="../assets/fff.jpg"/>
              <p class="card-text">9 December at 19:30–23:55</p>
              <p class="card-text">5 The Rise, Park St</p>
              <p class="card-text">AL2 2NT London, United Kingdom</p>
              <b-button href="https://www.facebook.com/events/137651613528899/" class="wii-button">More Info...</b-button>
              <b-button href="https://www.musicglue.com/funkin-for-fundraisin/events/2017-12-09-funkin-for-fundraisin-1-animal-welfare-park-street-village-hall" class="wii-button">Tickets...</b-button>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="Our Music" id="our-music">
      <h1 class="wii-h">Our Music</h1>
      <b-container fluid>
        <b-row>
          <b-col>
            <youtube :video-id="video_1" class="wii-video" player-width="600"></youtube>
          </b-col>
          <b-col>
            <youtube :video-id="video_2" class="wii-video" player-width="600"></youtube>
          </b-col>
        </b-row>
      </b-container>
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

    },
    ready (player) {
          this.player = player
        },
    playing (player) {
      // The player is playing a video.
    },
    change () {
      // when you change the value, the player will also change.
      // If you would like to change `playerVars`, please change it before you change `videoId`.
      // If `playerVars.autoplay` is 1, `loadVideoById` will be called.
      // If `playerVars.autoplay` is 0, `cueVideoById` will be called.
      this.videoId = 'another video id'
    },
    stop () {
      this.player.stopVideo()
    },
    pause () {
      this.player.pauseVideo()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-img {
  width: auto;
  height: 75px;
  margin-bottom: 30px;
}
.wii-h {
  margin-top: 50px;
  font-family: 'Permanent Marker', cursive;
  color: black;
}
.wii-button {
  background-color: #a21919;
  color: white;
  border-radius: 0px;
  width: 120px;
  font-size: 12px;
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
}

.event {
  margin-top: 50px;
  border-radius: 0px;
}

.wii-video {
  margin-top: 50px;
}

</style>
