<template>
  <f7-page>
    <f7-navbar title="Nuxt7 Project">
      <f7-nav-right>
        <a class="link icon-only searchbar-enable" data-searchbar=".searchbar-components">
          <i class="icon f7-icons ios-only">search_strong</i>
          <i class="icon material-icons md-only">search</i>
        </a>
      </f7-nav-right>
      <form data-search-container=".components-list" data-search-in="a" class="searchbar searchbar-expandable searchbar-components searchbar-init">
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

    <f7-toolbar tabbar bottom>
      <f7-link tab-link="#tab-1" tab-link-active>Tab 1</f7-link>
      <f7-link tab-link="#tab-2">Tab 2</f7-link>
      <f7-link tab-link="#tab-3">Tab 3</f7-link>
    </f7-toolbar>
    <f7-tabs swipeable>
      <f7-tab id="tab-1" class="page-content" tab-active>
        <f7-block>
          <f7-block-title class="searchbar-found">About</f7-block-title>

          <f7-list class="searchbar-hide-on-search">
            <f7-list-item title="About Nuxt7" link="/about/"></f7-list-item>
            <f7-list-item :title="$store.state.user.name" link="/dashboard/"></f7-list-item>
          </f7-list>

          <f7-button fill sheet-open=".demo-sheet-swipe-to-step">Swipe To Step</f7-button>
        </f7-block>

        <f7-sheet
          class="demo-sheet-swipe-to-step"
          style="height:auto; --f7-sheet-bg-color: #fff;"
          swipe-to-close
          swipe-to-step
          backdrop
        >
          <!-- Initial swipe step sheet content -->
          <div class="sheet-modal-swipe-step">
            <div class="display-flex padding justify-content-space-between align-items-center">
              <div style="font-size: 18px"><b>Total:</b></div>
              <div style="font-size: 22px"><b>$500</b></div>
            </div>
            <div class="padding-horizontal padding-bottom">
              <f7-button large fill>Make Payment</f7-button>
              <div class="margin-top text-align-center">Swipe up for more details</div>
            </div>
          </div>
          <!-- Rest of the sheet content that will opened with swipe -->
          <f7-block-title medium class="margin-top">Your order:</f7-block-title>
          <f7-list no-hairlines>
            <f7-list-item title="Item 1">
              <b slot="after" class="text-color-black">$200</b>
            </f7-list-item>
            <f7-list-item title="Item 2">
              <b slot="after" class="text-color-black">$180</b>
            </f7-list-item>
            <f7-list-item title="Delivery">
              <b slot="after" class="text-color-black">$120</b>
            </f7-list-item>
          </f7-list>
        </f7-sheet>
      </f7-tab>
      <f7-tab id="tab-2" class="page-content">
        <f7-block>
          <f7-card expandable>
            <f7-card-content :padding="false">
              <div class="bg-color-red" :style="{height: '300px'}">
                <f7-card-header text-color="white" class="display-block">
                  Framework7
                  <br />
                  <small :style="{opacity: 0.7}">Build Mobile Apps</small>
                </f7-card-header>
                <f7-link card-close color="white" class="card-opened-fade-in" :style="{position: 'absolute', right: '15px', top: '15px'}" icon-f7="multiply_circle_fill"></f7-link>
              </div>
              <div class="card-content-padding">
                <p>Framework7 - is a free and open source HTML mobile framework to develop hybrid mobile apps or web apps with iOS or Android (Material) native look and feel...</p>
              </div>
            </f7-card-content>
          </f7-card>
        </f7-block>
      </f7-tab>
      <f7-tab id="tab-3" class="page-content">
        <f7-block>
          <f7-card title="Cool stuff" expandable>
            <f7-card-content>
              {{ search }}
            </f7-card-content>
          </f7-card>
        </f7-block>
      </f7-tab>
    </f7-tabs>
  </f7-page>
</template>

<script>
export default {
  data: () => ({
    search: ''
  })
}
</script>
