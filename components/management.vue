<template>
  <div>
    <div class="team-component mini-spacer bg-extra-light mini-spacer">
      <v-container>
        <!-- -----------------------------------------------
            Start Team Text
        ----------------------------------------------- -->
        <v-row justify="center">
          <v-col cols="12" sm="10" md="9" lg="7">
            <div class="text-center">
              <h2 class="section-title font-weight-medium">
                Our Executive Team
              </h2>
              <p>
                This is the amazing team behind the Zimbabwe BUsiness Forum Savings & Credit Union
              </p>
            </div>
          </v-col>
        </v-row>

        <!-- -----------------------------------------------
            End Team Text
        ----------------------------------------------- -->
        <!-- -----------------------------------------------
            Start Team
        ----------------------------------------------- -->
        <v-row class="mt-13">
          <v-col cols="12" md="6" lg="4">
            <v-card elevation="0" class="team-card portfolio-card overflow-hidden mb-15">
              <div class="social-overlay">
                <v-img
                  :src="require('@/assets/images/team/t1.jpg')"
                  alt="team"
                />
                <div class="img-overlay">
                  <ul>
                    <li>
                      <a href="#">
                        <i class="mdi mdi-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="mdi mdi-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="mdi mdi-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="mdi mdi-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <v-card-text>
              <div>
                <h5 class="team-title  font-weight-medium font-18">
                 Brave Svomai
                </h5>
                <p class="team-subtitle">Property Specialist</p>
              </div>
              <p class="textyangu">
                You can relay on our amazing features list and also our customer
                services will be great experience.
              </p>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="6" lg="4">
            <v-card elevation="0" class="team-card portfolio-card overflow-hidden mb-15">
              <div class="social-overlay">
                <v-img
                  :src="require('@/assets/images/team/t2.jpg')"
                  alt="team"
                />
                <div class="img-overlay">
                  <ul>
                    <li>
                      <a href="#">
                        <i class="mdi mdi-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="mdi mdi-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="mdi mdi-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="mdi mdi-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
           <v-card-text>
              <div>
                <h5 class="team-title  font-weight-medium font-18">
                 Brave Svomai
                </h5>
                <p class="team-subtitle">Property Specialist</p>
              </div>
              <p class="textyangu">
                You can relay on our amazing features list and also our customer
                services will be great experience.
              </p>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="6" lg="4">
            <v-card elevation="0" class="team-card portfolio-card overflow-hidden mb-15">
              <div class="social-overlay">
                <v-img
                  :src="require('@/assets/images/team/t3.jpg')"
                  alt="team"
                />
                <div class="img-overlay">
                  <ul>
                    <li>
                      <a href="#">
                        <i class="mdi mdi-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="mdi mdi-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="mdi mdi-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="mdi mdi-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
           <v-card-text>
              <div>
                <h5 class="team-title  font-weight-medium font-18">
                 Brave Svomai
                </h5>
                <p class="team-subtitle">Property Specialist</p>
              </div>
              <p class="textyangu">
                You can relay on our amazing features list and also our customer
                services will be great experience.
              </p>
              </v-card-text>
            </v-card>
          </v-col>
  
        </v-row>

        <!-- -----------------------------------------------
            End Team
        ----------------------------------------------- -->
      </v-container>
    </div>
  </div>
</template>
<script>
export default {
  name: "Team",
  data() {
    return {};
  },
  methods: {},
};
</script>
