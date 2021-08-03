<template>
  <card>
    <b-row align-v="center" slot="header" >

    </b-row>

    <b-form @submit.prevent="updateProfile">
      <h6 class="heading-small text-muted mb-4">사용자 정보</h6>

      <div class="pl-lg-4">
        <b-row>
          <b-col lg="6">
            <base-input
              type="text"
              label="이름"
              placeholder="이름"
              v-model="this.$store.getters['user/getUserName']"
            >
            </base-input>
          </b-col>
          <b-col lg="6">
            <base-input
              type="이메일"
              label="이메일"
              placeholder="이메일"
              v-model="this.$store.getters['user/getUserEmail']"
            >
            </base-input>
          </b-col>
        </b-row>
      </div>
      <hr class="my-4">

      <!-- Address -->
      <h6 class="heading-small text-muted mb-4">즐겨찾기한 도서관</h6>

      <div class="pl-lg-4">
        <p v-for="(lib,idx) in this.$store.getters['user/getUserLib']" :key =idx @click="moveToLib(lib)"><span>{{'이름 : ' + lib.name}}</span>  <span class="ml-3">{{'지역 : '+lib.area}}</span></p>
      </div>


    </b-form>
  </card>
</template>
<script>
export default {
  data() {
    return {

    };
  },
  methods: {

    moveToLib(lib)
    {
      this.$store.commit('library/updateLibraryName',lib.name)
      this.$store.commit('library/updateLibraryArea',lib.area)
      this.$router.push("dashboard")


    }

  }
};
</script>
<style>
p{

  font-weight :bolder;
  cursor : pointer

}


</style>
