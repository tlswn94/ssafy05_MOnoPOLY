<template>
  <div>
    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
    </base-header>

    <b-container fluid class="mt--7">
      <card header-classes="bg-transparent">
        <b-row class="mt-3 mr-4">
          <b-col  class="noticeEditTypesColumn">
            <span class="noticeEditTypesLabel noticeEditFont12">분류</span>
          </b-col>
          <b-col>
            <b-form-select
              v-model="notice.notice_type"
              :options="type_options"
              class="noticeEditTypeSelect"
            ></b-form-select>
          </b-col>
        </b-row>

        <b-row class="mt-3 mr-4">
          <b-col  class="noticeEditTypesColumn">
            <span class="noticeEditTypesLabel noticeEditFont12">제목</span>
          </b-col>
          <b-col>
            <b-form-input
              v-model="notice.title"
              class="noticeEditTitle mr-5"
            ></b-form-input>
          </b-col>
        </b-row>

        <b-row class="mt-3 mr-4">
          <b-col class="noticeEditTypesColumn">
            <span class="noticeEditTypesLabel noticeEditFont12">작성자</span>
          </b-col>
          <b-col>
            <span class="noticeEditWriter noticeEditFont12">{{ notice.library_name }} {{ user.userName }}</span>
          </b-col>
        </b-row>

        <!-- <b-row class="mt-3 mr-4">
          <b-col class="noticeEditTypesColumn">
            <span class="noticeEditTypesLabel noticeEditFont12">첨부파일</span>
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
          <b-col class="noticeEditTypesColumn">
          </b-col>
          <b-col>
            <editor class="noticeEditEditorContext" :preHtml="this.preContext" @update-context="onChangeContext"/>

          </b-col>
        </b-row>

        <b-row class="mt-3 mr-4 justify-content-center">
          <div class="overflow-auto">
            <div class="noticeEditBtnContainer mt-5">
              <b-button class="" squared to="/noticeBoard">취소</b-button>
              <b-button class="ml-3" squared @click="onSubmit">
                <router-link :to="{path:'/noticeDetail/' + this.notice_id, params:{}}">
                  등록
                </router-link>
              </b-button>
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
      return {
        notice_id: this.$route.params.notice_id,
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
        preContext: '',
        type_options: [
          { value: '일반', text: '일반' },
          { value: '중요', text: '중요' }
        ],
        user: {
          userName:'',
          userId: 0,
        }

      };
    },
    created() {
      this.notices = JSON.parse(JSON.stringify(this.$store.getters['notice/getNotice']));
      this.notice = this.notices[this.notice_id];
      this.preContext = this.notice.context

      this.user.userName = this.$store.getters['user/getUserName']
      this.user.userId = this.$store.getters['user/getUserId']
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        this.notices[this.notice_id].notice_type = this.notice.notice_type;
        this.notices[this.notice_id].title = this.notice.title;
        this.notices[this.notice_id].writer_name = this.user.userName;    // user name 수정하는 경우 대비
        this.notices[this.notice_id].context = this.notice.context;

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

.noticeEditTypesLabel {
  margin-left: 40px;
}

.noticeEditTypesColumn {
  line-height: 46px;
  max-width: 150px;
}

.noticeEditTypeSelect {
  width: 100px;
  font-size: 1em;
}

.noticeEditTitle {
  font-size:1em;
  margin-right: 10%;
}

.noticeEditEditorContext {
  height: 500px;
  overflow: auto;
}

.noticeEditWriter {
  line-height: 46px;
}

.noticeEditContent {
  font-size:1em;
  height: 500px;
}

.noticeEditBtnContainer {
  display: flex;
  justify-content: center;
}

.noticeEditFont12 {
  font-family: 'Nanum Gothic', sans-serif;
  font-size: 1.2em;
}


@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap');
</style>

