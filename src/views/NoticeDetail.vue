<template>
  <div>
    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
    </base-header>

    <b-container fluid class="mt--7">
      <card header-classes="bg-transparent">
        <h3 slot="header" class="mb-0 noticeDetailTitle">{{ notices[notice_id].title }}</h3>
          <b-row class="justify-content-center ">
            <b-col class="info noticeDetailUserName">
              <pre>담당자 : {{ notices[notice_id].library_name }} {{ notices[notice_id].writer_name }}  |  등록일 : {{notices[notice_id].created_date}}  |  조회 : {{notices[notice_id].hits}}</pre>
            </b-col>
          </b-row>

          <div class=" mt-3 noticeDetailContentBorder ">
              <br>
              <p class="noticeDetailContentTitle">{{ notices[notice_id].title }}</p>
              <span class="noticeDetailContentContext" v-html="notices[notice_id].context"></span>
              <br>
          </div>

          <div class="noticeDetailBtnContainer mt-4">
            <b-button class="" squared to="/noticeBoard">목록으로</b-button>
            <b-button v-if="user.userId===notices[notice_id].writer_id" class="ml-3" squared >
              <router-link :to="{path:'/noticeEdit/' + this.notice_id, params:{}}">
                수정
              </router-link>
            </b-button>
          </div>
      </card>
    </b-container>

  </div>
</template>
<script>


  export default {
    methods: {
    },
    mounted() {
    },
    data() {
      return {
        notices: [],
        notice_id: this.$route.params.notice_id,
        user: {
          userId : 0,
        },
      }
    },
    created() {
      this.notices = JSON.parse(JSON.stringify(this.$store.getters['notice/getNotice']))
      this.notices[this.notice_id].hits++;
      this.$store.commit('notice/updateNotice', this.notices)

      this.user.userId = this.$store.getters['user/getUserId']
    },
  };
</script>

<style>
.noticeDetailTitle {
  font-size: 1.5em;
}

.noticeDetailContentBorder {
  height: 700px;
  border-top:1px solid lightgrey;
  border-bottom:1px solid lightgrey;
}

.noticeDetailContentTitle {
  font-size: 2em;
  font: bold;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 30px;
}

.noticeDetailContentContext {
  margin-left: 5%;
  margin-right: 5%;
  height: 500px;
  display: block;
  overflow: auto;
}

div.card-body {
  height: 900px;
}

.noticeDetailUserName {
  padding-right: 1px solid gray;
}

.noticeDetailBtnContainer {
  display: flex;
  justify-content: center;
}

@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap');

.noticeDetailFont12 {
  font-family: 'Nanum Gothic', sans-serif;
  font-size: 1.2em;
}

</style>
