<template>
  <div>
    <div class="feature3-component mini-spacer">
      <v-container class="position-relative">
        <!-- -----------------------------------------------
            Start Feature 3 Text
        ----------------------------------------------- -->
        <v-row>
          <v-col cols="12" lg="10">
            <v-img
              :src="require('@/assets/images/features/3/feature-img.jpg')"
              alt="feature"
              class="rounded"
            />
          </v-col>
          <v-col cols="12" md="7" lg="5" class="feature3-card">
            <v-card class="card-shadow">
              <v-card-text>
                <div class="pa-10 text-center">
                  <v-chip small color="info" text-color="white">
                    Project 1
                  </v-chip>
                  <h3 class="feature3-title font-weight-medium">
                    Growthedge Timbers
                  </h3>
                  <p>
                   Growthedge Timbers is a timber start up in which the Sacco has a 22% stake, with the remainder owned by individual Sacco members.

GE Timbers has a sales outlet at Mbare and received it's first load of timber in February 2022. At the moment the company is distributing structural timber for roofing but is looking to expand its range to include other types of timber

The company now shares the office at Chiedza House with the Sacco.
                  </p>
                  <v-btn
                    color="error"
                    class="btn-custom-lg linking mt-10 btn-arrow"
                    nuxt
                    large
                    to="/"
                    elevation="0"
                  >
                    <span>Explore More</span>
                    <i class="mdi mdi-arrow-right"></i>
                  </v-btn>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <!-- -----------------------------------------------
            End Feature 3 Text
        ----------------------------------------------- -->
      </v-container>
    </div>
  </div>
</template>
<script>
export default {
  name: "Feature3",
  data() {
    return {};
  },
  methods: {},
};
</script>
