<template>
  <div>
    <div id="about" class="feature1-component bg-extra-light mini-spacer">
      <v-container>
        <!-- -----------------------------------------------
            Start Feature 1 Text
        ----------------------------------------------- -->
        <v-row justify="center">
          <v-col cols="12" md="10" lg="7">
            <div class="text-center">
              <v-chip small color="error" text-color="white">
                ZBF SACCO
              </v-chip>
              <h2 class="section-title font-weight-medium">
                About Us
              </h2>
              <p class="font-18">
               Zimbabwe Business Forum Savings and Credit Cooperative was founded in 2021 out of a realisation that for us as black Zimbabweans locally and in the Diaspora needed to come together and contribute money to empower each other. Members contribute a minimum monthly fee of 30 USD. This money is invested on the stock exchange. After one year of contributions a member is then allowed to borrow.
              </p>
            </div>
          </v-col>
        </v-row>

        <!-- -----------------------------------------------
            End Feature 1 Text
        ----------------------------------------------- -->
        <!-- -----------------------------------------------
            Start Feature 1
        ----------------------------------------------- -->
        <v-row justify="center" class="mt-13">
          <v-col cols="12" md="6">
            <v-card elevation="0">
              <v-card-text>
                <div class="icon-round bg-light-info">
                  <i class="mdi mdi-star"></i>
                </div>
                <h5 class="font-weight-medium font-18">Primary Objective</h5>
                <p class="mt-10 mb-8">
                 ZIMBABWE BUSINESS FORUM SAVINGS AND CREDIT UNION’s primary
objective shall be to save money from member contributions for investing in new
projects for the benefit of and improve the standards of living and livelihoods of its
members
                </p>
                <a
                  href="#"
                  class="
                    text-themecolor
                    linking
                    text-decoration-none
                    d-flex
                    align-center
                  "
                >
                  Explore More <i class="mdi mdi-arrow-right"></i>
                </a>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <v-card elevation="0">
              <v-card-text>
                <div class="icon-round bg-light-info">
                  <i class="mdi mdi-check-circle"></i>
                </div>
                <h5 class="font-weight-medium font-18">Secondary Objective</h5>
                <p class="mt-10 mb-8">
                  ZIMBABWE BUSINESS FORUM SAVINGS AND CREDIT UNION’s secondary
objective shall be to invest in business ideas that address the community’s most vital
and pressing needs and issues. 

                </p>
                <a
                  href="#"
                  class="
                    text-themecolor
                    linking
                    text-decoration-none
                    d-flex
                    align-center
                  "
                >
                  Explore More <i class="mdi mdi-arrow-right"></i>
                </a>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <!-- -----------------------------------------------
            End Feature 1
        ----------------------------------------------- -->
      </v-container>
    </div>
  </div>
</template>
<script>
export default {
  name: "Feature1",
  data() {
    return {};
  },
  methods: {},
};
</script>
