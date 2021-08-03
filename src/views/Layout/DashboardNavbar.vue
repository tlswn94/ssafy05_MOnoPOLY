<template>
  <base-nav
    container-classes="container-fluid"
    class="navbar-top navbar-expand"
    :class="{'navbar-dark': type === 'default'}"
  >

    <a href="#" aria-current="page" class="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block active router-link-active"> {{this.$store.getters['library/getLibraryName']+' '+$route.name}} </a>
    <i v-if="checkContain()" class="ni ni-tag text-yellow ml-3 favorite" @click="removeLibList()"></i>
    <i v-else class="ni ni-tag text-white ml-3 favorite" @click="addLibList()"></i>
    <!-- Navbar links -->
    <b-navbar-nav class="align-items-center ml-md-auto">
      <!-- This item dont have <b-nav-item> because item have data-action/data-target on tag <a>, wich we cant add -->
      <li class="nav-item d-sm-none">
        <a class="nav-link" href="#" data-action="search-show" data-target="#navbar-search-main">
          <i class="ni ni-zoom-split-in"></i>
        </a>
      </li>
    </b-navbar-nav>
    <b-navbar-nav class="align-items-center ml-auto ml-md-0">

      <b-nav-item>
               <i class="ni ni-key-25 mr-2"></i>
               <span class="nav-link-inner--text ml-1" @click="loginWithKakao">로그인</span>
               <!-- <a id="custom-login-btn" href="javascript:loginWithKakao()">
                <img
                  src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg"
                  width="222"
                /> -->
              <!-- </a> -->

           </b-nav-item>
           <b-nav-item>
               <i class="ni ni-single-02 mr-2"></i>
               <router-link to="Profile" tag="span" active-class="nav-link-inner--text ml-1" >프로필</router-link>
               <!-- <a id="custom-login-btn" href="javascript:loginWithKakao()">
                <img
                  src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg"
                  width="222"
                /> -->
              <!-- </a> -->

           </b-nav-item>
           <b-nav-item>
               <i class="ni ni-button-power mr-2"></i>
               <span class="nav-link-inner--text ml-1" @click="logoutWithKakao">로그아웃</span>
               <!-- <a id="custom-login-btn" href="javascript:loginWithKakao()">
                <img
                  src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg"
                  width="222"
                /> -->
              <!-- </a> -->

           </b-nav-item>
        <!-- <b-form class="navbar-search form-inline mr-sm-3"
            :class="{'navbar-search-dark': type === 'default', 'navbar-search-light': type === 'light'}"
            id="navbar-search-main">
        <b-form-group class="mb-0">
          <b-input-group class="input-group-alternative input-group-merge">
            <b-form-input placeholder="Search" type="text"> </b-form-input>

            <div class="input-group-append">
              <span class="input-group-text"><i class="fas fa-search"></i></span>
            </div>
          </b-input-group>
        </b-form-group>
      </b-form> -->
      <!-- <base-dropdown menu-on-right
                     class="nav-item"
                     tag="li"
                     title-tag="a"
                     title-classes="nav-link pr-0">
        <a href="#" class="nav-link pr-0" @click.prevent slot="title-container">
          <b-media no-body class="align-items-center">
                  <span class="avatar avatar-sm rounded-circle">
                    <img alt="Image placeholder" src="img/theme/team-4.jpg">
                  </span>
            <b-media-body class="ml-2 d-none d-lg-block">
              <span class="mb-0 text-sm  font-weight-bold">John Snow</span>
            </b-media-body>
          </b-media>
        </a>

        <template>

          <b-dropdown-header class="noti-title">
            <h6 class="text-overflow m-0">Welcome!</h6>
          </b-dropdown-header>
          <b-dropdown-item href="#!">
            <i class="ni ni-single-02"></i>
            <span>My profile</span>
          </b-dropdown-item>
          <b-dropdown-item href="#!">
            <i class="ni ni-settings-gear-65"></i>
            <span>Settings</span>
          </b-dropdown-item>
          <b-dropdown-item href="#!">
            <i class="ni ni-calendar-grid-58"></i>
            <span>Activity</span>
          </b-dropdown-item>
          <b-dropdown-item href="#!">
            <i class="ni ni-support-16"></i>
            <span>Support</span>
          </b-dropdown-item>
          <div class="dropdown-divider"></div>
          <b-dropdown-item href="#!">
            <i class="ni ni-user-run"></i>
            <span>Logout</span>
          </b-dropdown-item>

        </template>
      </base-dropdown> -->
    </b-navbar-nav>
  </base-nav>
</template>
<script>
import { CollapseTransition } from 'vue2-transitions';
import { BaseNav, Modal } from '@/components';

export default {
  components: {
    CollapseTransition,
    BaseNav,
    Modal
  },
  props: {
    type: {
      type: String,
      default: 'default', // default|light
      description: 'Look of the dashboard navbar. Default (Green) or light (gray)'
    }
  },
  computed: {
    routeName() {
      const { name } = this.$route;
      return this.capitalizeFirstLetter(name);
    },
    getCurLibName()
    {

      return this.$store.getters['library/getLibraryName']
    },
    getCurLibArea()
    {

      return this.$store.getters['library/getLibraryArea']
    },
    getCheckContain()
    {
      return this.checkContain
    }
  },
  watch :{

    getCurLibName(val){
      console.log("changed name : " + val)
      this.curLibName = val
    },
    getCurLibArea(val)
    {
      console.log("changed area : " + val)
      this.curLibArea = val;
    },
    getCheckContain(val)
    {
      this.checkContain = val;
    }



  },
  mounted()
  {
    this.curLib = {name : this.$store.getters['library/getLibraryName'], area : this.$store.getters['library/getLibraryArea']}
    this.curLibName = this.$store.getters['library/getLibraryName']
    this.curLibArea = this.$store.getters['library/getLibraryArea']



  },
  data() {
    return {
      activeNotifications: false,
      showMenu: false,
      searchModalVisible: false,
      searchQuery: '',
      curLibName : '',
      curLibArea :'',
      curLib : {},

    };
  },
  methods: {
    checkContain(){

      var idx = this.$store.getters['user/getUserLib'].findIndex(i => i.name==this.curLib.name && i.area==this.curLib.area)

      if(idx == -1)
      {
        return false
      }
      else
      {

        return true
      }
    },
    addLibList(){
      this.curLib = {name : this.curLibName , area : this.curLibArea}
      console.log(this.curLib)
      this.$store.commit('user/addUserLibrary',this.curLib)
      console.log(this.$store.getters['user/getUserLib'])


    },
    removeLibList(name){

      this.$store.commit('user/delUserLibrary',this.curLib)
      console.log(this.$store.getters['user/getUserLib'])

    },
    loginWithKakao() {
        Kakao.Auth.login({
          success: function(authObj) {
            console.log("성공")
            console.log(authObj)
          },
          fail: function(err) {
            console.log("실패")
            console.log(authObj)
          },
        })
      },
      logoutWithKakao() {
        if (!Kakao.Auth.getAccessToken())
        {
          console.log("비정상로그아웃")
          return
        }
        Kakao.Auth.logout(function() { console.log('정상로그아웃 ' + Kakao.Auth.getAccessToken())})

      },
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    toggleNotificationDropDown() {
      this.activeNotifications = !this.activeNotifications;
    },
    closeDropDown() {
      this.activeNotifications = false;
    }
  }
};
</script>
<style scoped>

.favorite{

  cursor: pointer;
}

</style>
