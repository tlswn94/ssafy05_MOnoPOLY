<template>
  <div>
    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
    </base-header>

    <b-container fluid class="mt--7">
      <card header-classes="bg-transparent">
        <b-row class="mt-3 mr-4">
          <b-col  class="noticeCreateTypesColumn">
            <span class="noticeCreateTypesLabel noticeCreateFont12">분류</span>
          </b-col>
          <b-col>
            <b-form-select
              v-model="notice.notice_type"
              :options="type_options"
              class="noticeCreateTypeSelect"
            ></b-form-select>
          </b-col>
        </b-row>

        <b-row class="mt-3 mr-4">
          <b-col class="noticeCreateTypesColumn">
            <span class="noticeCreateTypesLabel noticeCreateFont12">제목</span>
          </b-col>
          <b-col>
            <b-form-input
              v-model="notice.title"
              class="noticeCreateTitle mr-5"
              required
            ></b-form-input>
            <!-- <b-form-input v-model="notice.title" placeholder="Enter your name"></b-form-input>
    <div class="mt-2">Value: {{ this.notice.title }}</div> -->
          </b-col>
        </b-row>

        <b-row class="mt-3 mr-4">
          <b-col class="noticeCreateTypesColumn">
            <span class="noticeCreateTypesLabel noticeCreateFont12">작성자</span>
          </b-col>
          <b-col>
            <span class="noticeCreateWriter noticeCreateFont12">{{ this.library_name }} {{ this.user.userName }}</span>
          </b-col>
        </b-row>

        <!-- <b-row class="mt-3 mr-4">
          <b-col class="noticeCreateTypesColumn">
            <span class="noticeCreateTypesLabel noticeCreateFont12">첨부파일</span>
          </b-col>
          <b-col>
            <b-form-file multiple>
            <template slot="file-name" slot-scope="{ names }" class="justify-content-center">
              <b-badge variant="light">{{ names[0] }}</b-badge>
              <b-badge v-if="names.length > 1" variant="light" class="ml-1">
                + {{ names.length - 1 }} More files
              </b-badge>
            </template>
            </b-form-file>
          </b-col>
        </b-row> -->

        <b-row class="mt-3  mr-4">
          <b-col class="noticeCreateTypesColumn">
          </b-col>
          <b-col>
            <editor class="noticeCreateEditorContext" @update-context="onChangeContext"/>
          </b-col>
        </b-row>

        <b-row class="mt-3 mr-4 justify-content-center">
          <div class="overflow-auto">
            <div class="noticeCreateBtnContainer mt-5">
              <b-button class="" squared to="/noticeBoard">취소</b-button>
              <b-button class="ml-3" squared @click="onSubmit" to="/noticeBoard">등록</b-button>
            </div>
          </div>
        </b-row>
      </card>
    </b-container>

  </div>
</template>
<script>
import Editor from '../components/Editor/Editor.vue'
  export default {
    components: {
      Editor,
    },
    data() {
      const today = new Date()
      return {
        notices: [],
        notice: {
          notice_id: 0,
          notice_type: '일반',
          title: "",
          library_name: '',
          writer_id: 0,
          writer_name: '',
          writer_type: '',
          context: '',
          created_date: '',
          hits: 0
        },
        user: {
          userName : '',
          userId : 0,
          userType: '',
        },
        type_options: [
          { value: '일반', text: '일반' },
          { value: '중요', text: '중요' }
        ],
        library_name: "한국도서관",
        hits: 0,
        // content: "",

      };
    },
    created() {
      this.notices = JSON.parse(JSON.stringify(this.$store.getters['notice/getNotice']));

      this.user.userName = this.$store.getters['user/getUserName']
      this.user.userId = this.$store.getters['user/getUserId']
      this.user.userType = this.$store.getters['user/getUserType']
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        // alert(JSON.stringify(this.form))
        let today = new Date();
        let todayStr = today.getFullYear().toString();
        todayStr = todayStr + '-';
        if(today.getMonth() < 10) todayStr = todayStr + '0';
        todayStr = todayStr + today.getMonth().toString();
        todayStr = todayStr + '-';
        if(today.getDate() < 10) todayStr = todayStr + '0';
        todayStr = todayStr + today.getDate().toString();

        this.notice.notice_id = this.notices.length
        this.notice.library_name = this.library_name
        this.notice.writer_id = this.user.userId
        this.notice.writer_name = this.user.userName
        this.notice.writer_type = this.user.userType
        this.notice.created_date = todayStr;

        this.notices.push(this.notice)
        this.updateNotice()
      },
      updateNotice(){
        this.$store.commit('notice/updateNotice', this.notices)
      },
      onChangeContext(html) {
        this.notice.context = html;
        // console.log("parent: ", html);
      }
    }
  };
</script>

<style>
div.card-body {
  height: 900px;
}

.noticeCreateTypesLabel {
  margin-left: 40px;
}

.noticeCreateTypesColumn {
  line-height: 46px;
  max-width: 150px;
}

.noticeCreateTypeSelect {
  width: 100px;
  font-size: 1em;
}

.noticeCreateTitle
{
  font-size:1em;
  margin-right: 10%;

}

.noticeCreateWriter {
  line-height: 46px;
}

.noticeCreateContent {
  font-size:1em;
  height: 500px;
}


.noticeCreateEditorContext {
  height: 500px;
  overflow: auto;
}

.noticeCreateBtnContainer {
  display: flex;
  justify-content: center;
}

.noticeCreateFont12 {
  font-family: 'Nanum Gothic', sans-serif;
  font-size: 1.2em;
}


@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap');
</style>

