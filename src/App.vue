<template>
  <div id="app">
    <b-navbar sticky class="navbar-wii" toggleable="md">

      <b-nav-toggle target="nav_collapse"></b-nav-toggle>

      <b-navbar-brand href="#">
        <img src="./assets/logo-nav-t.png"/>
      </b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">

        <b-nav is-nav-bar>
          <b-nav-item href="#">Upcoming Events</b-nav-item>
          <b-nav-item href="#">Our Music</b-nav-item>
          <b-nav-item href="#social-media">Social Media</b-nav-item>
          <b-nav-item href="#">Contact Us</b-nav-item>
        </b-nav>
      </b-collapse>
    </b-navbar>


    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
      handleScroll: function (event) {
        if (window.pageYOffset > 100) {
          document.getElementById('nav').classList.add("scroll-down");
        } else if (window.pageYOffset < 50){
          document.getElementById('nav').classList.remove("scroll-down");
        }
      }
}
created: function () {
    window.addEventListener('scroll', this.handleScroll);
},
destroyed: function () {
    window.removeEventListener('scroll', this.handleScroll);
}}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
.navbar-wii {
  background-color: rgba(255, 255, 255, 0.1);
  -webkit-box-shadow: 0px 3px 3px 0px rgba(0,0,0,0.43);
  -moz-box-shadow: 0px 3px 3px 0px rgba(0,0,0,0.43);
  box-shadow: 0px 3px 3px 0px rgba(0,0,0,0.43);
}

.navbar-wii .navbar-nav .nav-link {
  color: #a21919;
  font-size: 24px;
  font-family: 'Permanent Marker', cursive;
  margin-left: 30px;
}
</style>
