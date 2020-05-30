<template>
  <f7-page  color-theme="pink">
    <f7-navbar title="Nuxt7 Project" bg-color="pink">
      <f7-nav-right>
        <a class="link icon-only searchbar-enable" data-searchbar=".searchbar-components">
          <i class="icon f7-icons ios-only">search_strong</i>
          <i class="icon material-icons md-only">search</i>
        </a>
      </f7-nav-right>
      <form @submit.prevent="$f7.dialog.alert(`Hi, were you look for ${search}`)" data-search-container=".components-list" data-search-in="a" class="searchbar searchbar-expandable searchbar-components searchbar-init">
        <div class="searchbar-inner">
          <div class="searchbar-input-wrap">
            <input type="search" placeholder="Search components" v-model="search" />
            <i class="searchbar-icon"></i>
            <span class="input-clear-button"></span>
          </div>
          <span class="searchbar-disable-button">Cancel</span>
        </div>
      </form>
    </f7-navbar>

    <f7-toolbar bg-color="white" tabbar bottom>
      <f7-link tab-link="#tab-1" tab-link-active>
        <f7-icon color="pink" ios="f7:home" material="home"></f7-icon>
      </f7-link>
      <f7-link tab-link="#tab-2">
        <f7-icon color="pink" ios="f7:bars_chart" material="insert_chart"></f7-icon>
      </f7-link>
      <f7-link tab-link="#tab-3">
        <f7-icon color="pink" ios="f7:add_round_fill" material="add_circle"></f7-icon>
      </f7-link>
      <f7-link tab-link="#tab-4">
        <f7-icon color="pink" ios="f7:placemark" material="map"></f7-icon>
      </f7-link>
      <f7-link tab-link="#tab-5">
        <f7-icon color="pink" ios="f7:person_round" material="account_circle"></f7-icon>
      </f7-link>
    </f7-toolbar>

    <f7-tabs swipeable>
      <f7-tab id="tab-1" class="page-content" tab-active>
        <FirstTabComponent />
      </f7-tab>

      <f7-tab id="tab-2" class="page-content">
        <SecondTabComponent />
      </f7-tab>

      <f7-tab id="tab-3" class="page-content">
        <ThirdTabComponent />
      </f7-tab>

      <f7-tab id="tab-4" class="page-content" tab-active>
        <FourthTabComponent />
      </f7-tab>

      <f7-tab id="tab-5" class="page-content">
        <FifthTabComponent />
      </f7-tab>
    </f7-tabs>
  </f7-page>
</template>

<script>
import FirstTabComponent from '~/components/FirstTabComponent'
import SecondTabComponent from '~/components/SecondTabComponent'
import ThirdTabComponent from '~/components/ThirdTabComponent'
import FourthTabComponent from '~/components/FourthTabComponent'
import FifthTabComponent from '~/components/FifthTabComponent'

export default {
  data: () => ({
    search: ''
  }),

  components: {
    FirstTabComponent,
    SecondTabComponent,
    ThirdTabComponent,
    FourthTabComponent,
    FifthTabComponent,
  }
}
</script>

<style>
.card {
  border-radius: 15px;
}
</style>