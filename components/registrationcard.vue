<template>
  <div>
    <div class="mini-spacer">
      <v-container>
        <!-- -----------------------------------------------
            Start Contact Form
        ----------------------------------------------- -->
        <v-row justify="center">
          <v-col cols="12" sm="10" md="12" lg="8">
            <div>
              <h4 class="font-weight-medium contact-title mt-0">
                Quick Registration
              </h4>
              <form>
                <v-row class="mt-15">
                  <v-col cols="12" md="6" class="py-0">
                    <v-text-field
                      label="Name"
                      outlined
                      v-model="name"
                      placeholder="Name"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6" class="py-0">
                    <v-text-field
                      label="Surname"
                      outlined
                      type="text"
                      v-model="email"
                      placeholder="Surname"
                    ></v-text-field>
                  </v-col>
                   <v-col cols="12" md="6" class="py-0">
                    <v-menu
      ref="menu"
      v-model="menu"
      outlined
      :close-on-content-click="false"
      transition="scale-transition"
      offset-y
      min-width="auto"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          v-model="date"
          label="Birthday date"
          readonly
          outlined
          v-bind="attrs"
          v-on="on"
        ></v-text-field>
      </template>
      <v-date-picker
        v-model="date"
        outlined
        :active-picker.sync="activePicker"
        :max="(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)"
        min="1950-01-01"
        @change="save"
      ></v-date-picker>
    </v-menu>
                  </v-col>
                   <v-col cols="12" md="6" class="py-0">
                    <v-text-field
                      label="ID Number"
                      outlined
                      type="text"
                      v-model="email"
                      placeholder="ID Number"
                    ></v-text-field>
                  </v-col>
                   <v-col cols="12" md="6" class="py-0">
                    <v-text-field
                      label="Phone Number"
                      outlined
                      type="text"
                      v-model="email"
                      placeholder="Phone Number"
                    ></v-text-field>
                  </v-col>
                   <v-col cols="12" md="6" class="py-0">
                    <v-text-field
                      label="Email Address"
                      outlined
                      type="email"
                      v-model="email"
                      placeholder="Email Address"
                    ></v-text-field>
                  </v-col>
                   <v-col cols="12" md="6" class="py-0">
                    <v-text-field
                      label="Physical Address"
                      outlined
                      type="text"
                      v-model="email"
                      placeholder="Physical Address"
                    ></v-text-field>
                  </v-col>
                   <v-col cols="12" md="6" class="py-0">
                    <v-select
                     :items="items"
                      label="Gender"
                      outlined
                    ></v-select>
                  </v-col>
                   <v-col cols="12" md="6" class="py-0">
                     <v-select
                     :items="qualifications"
                      label="Academic Qulifications"
                      outlined
                    ></v-select>
                  </v-col>
                   <v-col cols="12" md="6" class="py-0">
                    <v-text-field
                      label="Field"
                      outlined
                      type="text"
                      placeholder="E.g Accounting"
                    ></v-text-field>
                  </v-col>
                   <v-col cols="12" md="12" class="py-0">
                     <center>Next of Kin Details</center>
                  </v-col>
                    <v-col cols="12" md="6" class="py-0">
                    <v-text-field
                      label="Name"
                      outlined
                      type="text"
                      v-model="email"
                      placeholder="Name"
                    ></v-text-field>
                  </v-col>
                    <v-col cols="12" md="6" class="py-0">
                    <v-text-field
                      label="Surname"
                      outlined
                      type="text"
                      v-model="email"
                      placeholder="Surname"
                    ></v-text-field>
                  </v-col>
                    <v-col cols="12" md="6" class="py-0">
                    <v-text-field
                      label="Contact"
                      outlined
                      type="text"
                      v-model="email"
                      placeholder="Contact"
                    ></v-text-field>
                  </v-col>
                    <v-col cols="12" md="6" class="py-0">
                     <v-select
                     :items="relation"
                      label="Relation"
                      outlined
                    ></v-select>
                  </v-col>
                </v-row>
                <v-btn
                  nuxt
                  to="/"
                  class="btn-custom-md btn-danger-gradient mt-12"
                  outlined
                  color="white"
                  elevation="0"
                >
                  Submit
                </v-btn>
              </form>
            </div>
          </v-col>
          <v-col cols="12" sm="10" md="12" lg="4">
            <div class="primary contact-detail-card">
              <h2 class="detail-title font-weight-medium white--text">
                ZBF Headquarters
              </h2>
              <p class="mt-15 op-8 mb-0 white--text">+263 719 008 185</p>
              <p class="op-8 mb-8 white--text">info@zbf.co.zw</p>
              <p class="mt-15 op-8 mb-0 white--text">31 Binton Avenue</p>
              <p class="op-8 mb-0 white--text">Greystone Park, Harare</p>
            </div>
          </v-col>
        </v-row>
        <!-- -----------------------------------------------
            End Contact Form
        ----------------------------------------------- -->
      </v-container>
    </div>
  </div>
</template>
<script>
export default {
  name: "Contact",
  data() {
    return {
      name: "",
      email: "",
      items: ['Male', 'Female'],
      qualifications: ['Certificate', 'Degree','Masters','PhD'],
      relation: ['Father', 'Mother','Brother','Sister','Other'],
    };
  },
  methods: {},
};
</script>
