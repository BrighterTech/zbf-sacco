<template>
  <div class="banner-wrapper">
    <v-container>
      <!-- -----------------------------------------------
            Start Banner
        ----------------------------------------------- -->
      <v-row justify="center">
        <v-col cols="12" md="7" lg="6" class="d-flex align-center">
          <div class="text-center text-md-left">
            <h1 class="banner-title font-weight-bold white--text">
              ZIMBABWE BUSINESS FORUM SAVINGS
AND CREDIT UNION
            </h1>
            <h4 class="banner-subtitle white--text font-weight-regular">
              Save Money, Invest & Improve
            </h4>
            <div class="mt-16 pt-2">
          
              <v-btn
                nuxt
                large
                to="/coming-soon"
                class="btn-custom-md"
                outlined
                color="white"
                elevation="0"
              >
                Join Us Now
              </v-btn>
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="5" lg="6">
          <v-img
            :src="require('@/assets/images/banner/undraw_investing_re_bov7.svg')"
            alt="banner"
          />
        </v-col>
      </v-row>

      <!-- -----------------------------------------------
            End Banner
        ----------------------------------------------- -->
    </v-container>
  </div>
</template>
<script>
export default {
  name: "Banner",
  data() {
    return {};
  }
};
</script>
