<template>
  <f7-block>
    <f7-block-title large class="searchbar-found">About</f7-block-title>

    <f7-row>
      <f7-col>
        <f7-card>
          <f7-card-content>
            <f7-list class="searchbar-hide-on-search">
              <f7-list-item title="About Nuxt7" link="/about/"></f7-list-item>
              <f7-list-item :title="$store.state.user.name" link="/dashboard/"></f7-list-item>
            </f7-list>

          </f7-card-content>  
          <f7-card-footer>
            <f7-button large fill sheet-open=".demo-sheet-swipe-to-step">Purchase Now</f7-button>
            <f7-button @click="$f7router.navigate({ name: 'about' })" large fill>Go to About</f7-button>
          </f7-card-footer>
        </f7-card>
      </f7-col>
    </f7-row>


    <f7-row>
      <f7-col>
        <f7-card content="80% (.col-80)"></f7-card>
      </f7-col>
      <f7-col>
        <f7-card content="20% (.col-20)"></f7-card>
      </f7-col>
    </f7-row>

    <f7-row>
      <f7-col>
        <f7-card>
          <f7-card-content>
            <f7-icon icon="icon-back"></f7-icon>
            <f7-icon ios="f7:alarm"></f7-icon>
            <f7-icon ios="f7:arrow_right"></f7-icon>
            <f7-icon ios="f7:archivebox"></f7-icon>
            <f7-icon ios="f7:bell"></f7-icon>
          </f7-card-content>
        </f7-card>
      </f7-col>
    </f7-row>

    <f7-sheet
      class="demo-sheet-swipe-to-step"
      style="height:auto; --f7-sheet-bg-color: #fff;"
      swipe-to-close
      swipe-to-step
      backdrop>
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
  </f7-block>
</template>

<script>
export default {

}
</script>

<style>

</style>