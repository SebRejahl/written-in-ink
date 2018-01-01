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
            <b-card  bg-variant="dark" text-variant="white" title="Battle of The Bands" class="event">
              <img class="card-img" src="../assets/battleofthebands.jpg"/>
              <p class="card-text">6 February at 20:00–23:00</p>
              <p class="card-text">The Horn, Victoria Street</p>
              <p class="card-text">AL1 3TE Saint Albans</p>
              <b-button href="https://www.facebook.com/events/132644037444988/" class="wii-button">More Info...</b-button>
              <b-button href="https://www.ticketweb.uk/event/battle-of-the-bands-the-horn-tickets/7769585?pl=horn" class="wii-button">Tickets...</b-button>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="Our Music" id="our-music">
      <h1 class="wii-h">Our Music</h1>
      <h2 class="wii-h">Our new EP is out!</h2>
      <iframe width="75%" height="500" scrolling="no" frameborder="no"
      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/401051450&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true">
      </iframe>
      <h2 class="wii-h">Live tracks</h2>
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
  height: 300px;
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
