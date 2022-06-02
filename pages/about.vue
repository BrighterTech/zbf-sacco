<template>
  <div>
<pagetop />
<abouttext />
<about />
<myportifolio />
  </div>
</template>
<script src="https://unpkg.com/vue@2.2.4"></script>
<script src="https://unpkg.com/vue-scrollto"></script>
<script>

export default {
  head() {
    return {
      title: "ZBF SACCO | Save Money, Invest & Improve",
      meta: [
        {
          hid: "description",
          name: "Number One Credit Facility",
          content: "ZIMBABWE BUSINESS FORUM SAVINGS AND CREDIT UNIONs primary objective shall be to save money from member contributions for investing in new projects for the benefit of and improve the standards of living and livelihoods of its members.",
        },
      ],
    };
  },

  data() {
    return {};
  },

};
</script>

<style>
a.d-none.d-lg-flex.btn-custom-nm.ml-5.v-btn.v-btn--has-bg.v-btn--router.theme--light.elevation-0.v-size--default.primary {
    background-color: black !important;
}
.feature1-component .icon-round {
    font-size: 45px;
    width: 80px;
    color: #ebd116 !important;
    line-height: 80px;
    text-align: center;
    display: inline-block;
    margin: 20px 0 30px;
    border-radius: 100%;
}
.portfolio-card.overflow-hidden.v-card.v-sheet.theme--light {
    background-color: #fdda29 !important;
}
p.textyangu {
    color: #585858;
}
.c2a1-spacer.primary {
    background-color: #fdda29 !important;
}
.bg-danger-grediant {
    background: #ff4d7e;
    background: linear-gradient(90deg, #006b00 0, #446021);
}
a.btn-custom-md.rangu.v-btn.v-btn--block.v-btn--outlined.v-btn--router.theme--light.elevation-0.v-size--large.white--text {
    background-color: black;
    border-color: black;
}
.bg-info-grediant {
    background: #316ce8;
    background: linear-gradient(90deg, #39621c 0, #0b6905) !important;
}
</style>

