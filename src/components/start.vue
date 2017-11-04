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
        <b-carousel-slide img-src="https://lh3.googleusercontent.com/p9e92V_qO2-CYENgkqY9vfsxwCIAf_6Cc4VCp16xGqe-BZoWJ7GsFwyZdKgxYSFTZ0XNnJ7vsYzwmtTk0tX_WI4ylHS4ImE6g2eYpvyzRBQIOKrShW8LSRIx9gDBb38M4zE9jfbs5CQt5jWLloAHekzQwO9WzQ-XkZz18vGq5fG1FWPLOeDqK0wVzbsooM2JCYTpzPs_i-yAtDaMkk-ULiLG9rKmUN-3EC72ib1ltS3JQhHCsfWHEqYpDjRRWrFZFadDIuVONogKGe-TytEK4pXVujK7_Cfl_OZsWXkzCCIbGgsdCyayNnfBtPWx7b3ayeVwNEnbyD_C8oKWyDM6JWge0rXelifcQxH7QeBPuAdb8cMh3r9mtyLxl90OVQJcNympOEhkCNYjBhCrW4pB7DspDD7bpnz97DNdSkVD7kULOwdUBMtMD5Pn6QUotiw-bcCZyBLi-7WGLdnKoxLnQQiQFrojBrpOAYj5UFuRDe1eCO5qdLC3EkzbbXC5V36xlm2mQufUMqvr8wE6HlpE81TCcmkOlGJTjoU_WcS4JVBnPJWfNlu7iBoEyV149jNQAasRWQ6v8Fhk4163tjCyLK-J4oABUAAvzwuSALausZStyFX27HyN0T49CcItH5koKNV7AKOMNkZe28H9Jv1fNUhJtynk95BV1tA=w1090-h727-no">
        </b-carousel-slide>
        <b-carousel-slide img-src="https://lh3.googleusercontent.com/ppD6AM2HaZ59LzaB1Z8cRStvN_JTVgyYFWDa92-ZXjXwuZwIvfbwm1B4sOF-E1X1dHyv-V79333RLHw3EAu9T-aPhQpdBLU-bRKujaCNAW7sJjfTk8eMpz3PogePPVrKSGhf0DrIK-Yr4PUknph7SNPihMKBTi3iD8PDmWKogQ1M2WLg3FGRFNrjL7zAILPTcj9gT6Y-8YImj4nm9GVKIAwRaxojybt09BvJs0Kl186wTdWDBl705cfixByFm99d9HMf928k4cqAqbAr3yt9CDHPGP3awshcBV9bmuFqRNaFFHkro83VDQhGQFBIfmK1UF5QXiYRvKhjuLGQQpdMP5lAsvt6vJWDpJZAmrdNDLT2GBaWm18LxnXTLMc3B_z48YDNR4BELn6vz5S31HO8SFS1BoYFp0ZWOfBLzClOleK1Yi-lAC0P5ehbn4dEZyj_WTuKYStm9fu_eEsw_LuJBpZYwqibnE7ReXiDl3fju98UPhHg3vZHfEcqMjaJC4Jsdb_Y228By-mGA22SWV2Tw-wIDvO1F3qOjugiJkJd1uri2-_oGorenxa9exPyHUhbwCTnD0IqyUc6jTCtVipjjbGbY7LTi8CkpEWb3Eiwa9pwdA7NIVde-QD9dvVL8CDaJyt77LFKl_cCjJUBTfyJpIv46nsF6s4ViIw=w1239-h794-no">
        </b-carousel-slide>
        <b-carousel-slide img-src="https://lh3.googleusercontent.com/31kdP8rE-rdsZUszce51GLW_fpKsse13RmTo8Sh7tDmDsIi933NqNiMf5Yv8lFjRHBxzuKMYVnP625vQAZe6V4Un3tZT6Bcectw-mAFdm31ClIoofYgfRrOlwEFft8HPnUc3fvqDINgzGAf31cbKo-IREXAgveXmZ_7DcyTb7OAh15yxplkQ1AuwbrCvnk6nr4bQKeZzruWsPEincz_PQjmqiga7ZIJrBmX7vSd82nTnakLeeA3LbpmluPJHtDpYMs3A_c6XomYPhXcSfCc0UE3gVEYoa92DfWK-cWLHDUN8EjHdmhDUsULBBakZ2cDnRGoYO0HrIxhchMCwTR4r60Lsn3pgubY_qSQ6cW7nZh3dNC23gRMy9fQ6uiGFVhKnlP_0ccBbtSd-PXa8tqYPfW19pkVhY2YVGLmAGXeHjLs0E2bBzHgBLFVILnFROvaaYPeHqxVGZ67zmXdLFVQMsTNBhZ8TLyCK07DB3xNVQ7k-YUQTKiAVJDypyb1f1mapIpFMbViJT2Kj6qtvk8yayYY4omeZUT6r-ahgeaOaLluDIZVn2EyJWa7378UsW71mYplHPO1FXXziQlPkK4RwjspTNz1TXRCx87U89rt7PRPB8wK_J-a8FHu_a_zWVsCxj7jzU1sLdib0qPMzyyaef2Km7XU7dfUX40Q=w1192-h794-no">
        </b-carousel-slide>

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
