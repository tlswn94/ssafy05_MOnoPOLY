<template>
  <div>
    <!-- Header -->
    <div class="header bg-gradient-success py-7 py-lg-8 pt-lg-9">
      <b-container>
        <div class="header-body text-center mb-7">
          <b-row class="justify-content-center">
            <b-col xl="5" lg="6" md="8" class="px-5">
              <h1 class="text-white">MonoPoly</h1>
              <p class="text-lead text-white">사석화 방지 시스템</p>
            </b-col>
          </b-row>
        </div>
      </b-container>
      <div class="separator separator-bottom separator-skew zindex-100">
        <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1"
             xmlns="http://www.w3.org/2000/svg">
          <polygon class="fill-default" points="2560 0 2560 100 0 100"></polygon>
        </svg>
      </div>
    </div>
    <!-- Page content -->
   <b-container class="mt--8 pb-5" id="container">
      <b-row class="justify-content-center">
        <b-col lg="5" md="7">
          <b-card no-body class="bg-secondary border-0 mb-0">
            <b-card-header class="bg-transparent pb-5"  >
            </b-card-header>
            <div class="text-center text-muted mb-4">
                <small>도서관을 선택해주세요</small>
              </div>
            <b-card-body class="px-lg-5 py-lg-5">
              <div>
                 <p>지역</p>
                 <b-form-select v-model="selectedArea" :options="areaOptions"></b-form-select>
                 <p class="mt-3">도서관</p>
                 <b-form-select v-model="selectedLib" :options="areaOptions[selectedArea].lib"></b-form-select>
                <b-button pill variant="warning" class="mt-3" @click="moveTo">이동</b-button>
              </div>

            </b-card-body>
          </b-card>

        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
  export default {
    data() {
      return {

       selectedArea: 0,
       selectedLib : null,
       areaOptions:[
         {value : 0, text : '지역을 선택해 주세요', lib : [{value : null, text : '도서관을 선택해 주세요'}]},
         {value : 1, text : '서울', lib : [{value : null, text : '도서관을 선택해 주세요'}, {value : 'seoul1', text : '서울1'},{value : 'seoul2', text :'서울2'},{value : 'seoul3', text :'서울3'}]},
         {value : 2, text : '대전', lib : [{value : null, text : '도서관을 선택해 주세요'}, {value : 'dejeon1', text : '대전1'},{value : 'dejeon2', text :'대전2'},{value : 'dejeon3', text :'대전3'}]},
         {value : 3, text : '대구', lib : [{value : null, text : '도서관을 선택해 주세요'}, {value : 'daegu1', text : '대구1'},{value : 'daegu2', text :'대구2'},{value : 'daegu3', text :'대구3'}]},
         {value : 4, text : '부산', lib : [{value : null, text : '도서관을 선택해 주세요'}, {value : 'busan1', text : '부산1'},{value : 'busan2', text :'부산2'},{value : 'busan3', text :'부산3'}]},
         {value : 5, text : '인천', lib : [{value : null, text : '도서관을 선택해 주세요'}, {value : 'incheon1', text : '인천1'},{value : 'incheon2', text :'인천2'},{value : 'incheon3', text :'인천3'}]},




       ]
      }
    },
    methods: {
      moveTo(){


        this.$store.commit('library/updateLibraryArea',this.selectedArea)
        this.$store.commit('library/updateLibraryName',this.selectedLib)

        this.$router.push('dashboard')


      },
      onSubmit() {
        // this will be called only after form is valid. You can do api call here to login
      }
    }
  };
</script>
<style scoped>

p{

  font-weight :bolder;
}
#container{


  width : 100%;
}
</style>
