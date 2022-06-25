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
                      label="First Name"
                      outlined
                      v-model="fname"
                      placeholder="Name"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6" class="py-0">
                    <v-text-field
                      label="Last Name"
                      outlined
                      type="text"
                      v-model="lname"
                      placeholder="Surname"
                    ></v-text-field>
                  </v-col>
                   <v-col cols="12" md="6" class="py-0">
                    <v-menu
                      ref="menu"
                      v-model="dob"
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
                      v-model="id_number"
                      placeholder="ID Number"
                    ></v-text-field>
                  </v-col>
                   <v-col cols="12" md="6" class="py-0">
                    <v-text-field
                      label="Phone Number"
                      outlined
                      type="text"
                      v-model="phone"
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
                      v-model="address"
                      placeholder="Physical Address"
                    ></v-text-field>
                  </v-col>
                   <v-col cols="12" md="6" class="py-0">
                    <v-select
                     :items="gender"
                      label="Gender"
                      outlined
                      v-model="gender"
                    ></v-select>
                  </v-col>
                  <v-col cols="12" md="6" class="py-0">
                     <v-select
                     :items="qualifications"
                      label="Academic Qulifications"
                      outlined
                      v-model="education"
                    ></v-select>
                  </v-col>
                  <v-col cols="12" md="6" class="py-0">
                    <v-text-field
                      label="Field"
                      outlined
                      type="text"
                      v-model="field"
                      placeholder="E.g Accounting"
                    ></v-text-field>
                  </v-col>

                   <v-col cols="12" md="12" class="py-0">
                     <center>For Logging In</center>
                  </v-col>
                  <v-col cols="12" md="6" class="py-0">
                    <v-text-field
                      label="Password"
                      outlined
                      type="Password"
                      v-model="password"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6" class="py-0">
                    <v-text-field
                      label="Verify Password"
                      outlined
                      type="Password"
                    ></v-text-field>
                  </v-col>

                   <v-col cols="12" md="12" class="py-0">
                     <center>Next of Kin Details</center>
                  </v-col>
                  <v-col cols="12" md="6" class="py-0">
                    <v-text-field
                      label="First Name"
                      outlined
                      type="text"
                      v-model="nok_firstname"
                      placeholder="First Name"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6" class="py-0">
                    <v-text-field
                      label="Last Name"
                      outlined
                      type="text"
                      v-model="nok_lastname"
                      placeholder="Surname"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6" class="py-0">
                    <v-text-field
                      label="Contact"
                      outlined
                      type="text"
                      v-model="nok_contact"
                      placeholder="Contact"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6" class="py-0">
                     <v-select
                     :items="relation"
                      label="Relation"
                      outlined
                      v-model="nok_relation"
                    ></v-select>
                  </v-col>

                  <v-col cols="12" md="12" class="py-0">
                     <center>Business Details(If you own a business complete the below)</center>
                  </v-col>
                  <v-col cols="12" md="6" class="py-0">
                    <v-text-field
                      label="Name of Business"
                      outlined
                      type="text"
                      v-model="business_name"
                      placeholder="Name of Business"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6" class="py-0">
                    <v-select
                     :items="sector"
                      label="Sector"
                      outlined
                      v-model="sector"
                    ></v-select>
                  </v-col>
                    <v-col cols="12" md="6" class="py-0">
                    <v-text-field
                      label="Business Address"
                      outlined
                      type="text"
                      v-model="business_address"
                      placeholder="Address"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6" class="py-0">
                       <v-text-field
                      label="Business Phone Number"
                      outlined
                      type="text"
                      v-model="business_phone"
                      placeholder="Phone Number"
                    ></v-text-field>
                  </v-col>
                   <v-col cols="12" md="12" class="py-0">
                       <v-text-field
                      label="Website Link"
                      outlined
                      type="text"
                      v-model="web_link"
                      placeholder="Enter URL"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-btn
                  nuxt
                 
                  class="btn-custom-md btn-danger-gradient mt-12"
                  outlined
                  color="white"
                  elevation="0"
                  @click="registerUser($event)"
                  
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
import axios from "axios"
export default {
  name: "Contact",
  data() {
    return {
      name: "",
      email: "",
      gender: ['Male', 'Female'],
      qualifications: ['Certificate', 'Degree','Masters','PhD'],
      relation: ['Father', 'Mother','Brother','Sister','Other'],
      sector: ['Retail', 'Construction','Farming','Tourism','Automotive','Logistics','Other'],
    };
  },
  methods: {
    registerUser:function(event)
    {
      event.preventDefault();
      let  payload = {
        fname:this.fname,
        lname:this.lname,
        email:this.email,
        dob:this.dob,
        phone:this.phone,
        address:this.address,
        IDNumber:this.id_number,
        gender:this.gender,
        education:this.education,
        field:this.field,
        next_of_kin_firstname:this.nok_firstname,
        next_of_kin_lastname:this.nok_lastname,
        next_of_kin_contact:this.nok_contact,
        next_of_kin_relation:this.nok_relation,
        business_name:this.business_name,
        sector:this.sector,
        business_address:this.business_address,
        business_phone:this.business_phone,
        web_link:this.web_link
      }
        axios.post('https://admin.zbfsacco.co.zw/register',payload).then(response =>{
           if(response.data.status){

            console.log(response);

           }
        }).catch(error=>{
          alert(error);
        })
    }
  },
};
</script>
