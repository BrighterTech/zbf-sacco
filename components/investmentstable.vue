<template>
  <div>
    <div class="mini-spacer">
      <v-container>
        <!-- -----------------------------------------------
            Start Ui Table
        ----------------------------------------------- -->
        <v-row justify="center">
          <v-col cols="12" sm="12" md="12" lg="12">
            <div class="text-center">
              <h2 class="ui-title font-weight-bold">ZBF SACCO PORTFOLIOS</h2>
              <p>
                These are the portfolios that we have invested in.
              </p>
            </div>
          </v-col>
        </v-row>

        <!-- -----------------------------------------------
            End Ui Table
        ----------------------------------------------- -->
      </v-container>
    </div>
    <div>
      <v-container>
        <v-row justify="center">
          <v-col cols="12" sm="12" md="12" lg="12">
            <v-card>
              <v-card-text>
                <v-simple-table>
                  <template v-slot:default>
                    <thead>
                      <tr>
                        <th class="text-left">Counter</th>
                        <th class="text-left">Purchase Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="item in desserts" :key="item.name">
                        <td>{{ item.name }}</td>
                        <td>{{ item.calories }}</td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
<script>
export default {
  name: "UiTable",
  data() {
    return {
      desserts: [
        {
          name: "Hippo",
          calories: "30.03.2021",
        },
        {
          name: "Meikles",
          calories: "30.03.2021",
        },
        {
          name: "Zimplow",
          calories: "30.03.2021",
        },
        {
          name: "Afdis",
          calories: "28.04.2021",
        },
        {
          name: "Dairiboard",
          calories: "28.04.2021",
        },
        {
          name: "Simbisa",
          calories: "18.05.2021",
        },
        {
          name: "Padenga",
          calories: "18.05.2021",
        },
        {
          name: "Cafca",
          calories: "19.05.2021",
        },
        {
          name: "CBZ",
          calories: "22.06.2021",
        },
        {
          name: "Edgars",
          calories: "17.06.2021",
        },
         {
          name: "Afdis",
          calories: "04.01.2021",
        },
         {
          name: "Hippo",
          calories: "04.08.2021",
        },
         {
          name: "SeedCo",
          calories: "03.09.2021",
        },
         {
          name: "InnScor",
          calories: "11.04.2022",
        },
         {
          name: "Econet",
          calories: "11.04.2022",
        },
           {
          name: "Delta",
          calories: "11.04.2022",
        },
       {
          name: "Econet",
          calories: "14.04.2022",
        },
          {
          name: "Econet",
          calories: "20.04.2022",
        },
          {
          name: "Econet",
          calories: "20.04.2022",
        },
      ],
    };
  },
  methods: {},
};
</script>
