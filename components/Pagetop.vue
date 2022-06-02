<template>
  <div>
    <!-- -----------------------------------------------
          Start Header
    ----------------------------------------------- -->
    <v-app-bar app class="app-header position-relative bg-dark header2" flat>
      <v-container class="py-0 fill-height">
        <!-- Logo -->
        <div style="width:155px" class="logo">
          <NLink to="/">
         <v-img
            :src="require('@/assets/images/logos/zbflogo.png')"
            alt="banner"
          />
          </NLink>
        </div>

        <v-spacer></v-spacer>
        <v-btn
          class="d-block d-md-none"
          color="white"
          text
          @click="toggleClass()"
        >
          <v-app-bar-nav-icon class="white--text" />
        </v-btn>
        <!-- Desktop view Navigation -->
        <div
          class="navigation"
          v-bind:class="[isActive ? 'd-block' : '']"
          @click="isActive = !isActive"
        >
          <ul class="navbar-nav">
            <li class="nav-item" text>
              <n-link class="nav-link" nuxt to="/"> Home </n-link>
            </li>
            <li class="nav-item" text>
              <n-link class="nav-link" nuxt to="/about"> About Us </n-link>
            </li>
            <li class="nav-item" text>
              <n-link class="nav-link" nuxt to="/investments"> Investments </n-link>
            </li>
            <li class="nav-item" text>
              <n-link class="nav-link" nuxt to="/ourprojects"> Projects </n-link>
            </li>
            <li class="nav-item" text>
              <n-link class="nav-link" nuxt to="/team"> Our Team </n-link>
            </li>
            <li class="nav-item" text>
              <n-link class="nav-link" nuxt to="/blogs"> Blogs</n-link>
            </li>
          </ul>
        </div>
        <!-- login-regiter -->
        <v-btn
          class="d-none d-lg-flex btn-custom-nm ml-5"
          nuxt
          depressed
          color="primary"
          background-color= "#000000 !important"
          border-color = "#000000 !important"
          
          to="/contactus"
          elevation="0"
        >
          Contact Us
        </v-btn>
         <v-btn
          class="d-none d-lg-flex btn-custom-nm ml-5"
          nuxt
          depressed
          color="primary"
          background-color= "#000000 !important"
          border-color = "#000000 !important"
          
          to="/registration"
          elevation="0"
        >
          Join Now
        </v-btn>
      </v-container>
    </v-app-bar>
    <!-- -----------------------------------------------
          End Header
    ----------------------------------------------- -->
  </div>
</template>

<script>
export default {
  name: "Header2",
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    toggleClass: function (event) {
      this.isActive = !this.isActive;
    },
  },
};
</script>
 