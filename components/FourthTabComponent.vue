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

    <f7-block strong>
      <p class="row">
        <!-- One group, open by direct accessing instance .open() method -->
        <f7-button large filled class="col" raised @click="$refs.actionsOneGroup.open()">One group</f7-button>
        <!-- Two groups, open by "actions-open" attribute -->
        <f7-button large filled class="col" raised actions-open="#actions-two-groups">Two groups</f7-button>
      </p>
      <p>
        <!-- Actions Grid, open by changing actionGridOpened prop -->
        <f7-button large raised @click="actionGridOpened = true">Action Grid</f7-button>
      </p>
    </f7-block>

    <f7-block-title>Action Sheet To Popover</f7-block-title>
    <f7-block strong>
      <p>Action Sheet can be automatically converted to Popover (for tablets). This button will open Popover on tablets and Action Sheet on phones: <f7-button style="display:inline-block" class="button-to-popover" @click="openActionsPopover">Actions</f7-button></p>
    </f7-block>

    <!-- One Group -->
    <f7-actions ref="actionsOneGroup">
      <f7-actions-group>
        <f7-actions-label>Do something</f7-actions-label>
        <f7-actions-button bold>Button 1</f7-actions-button>
        <f7-actions-button>Button 2</f7-actions-button>
        <f7-actions-button color="red">Cancel</f7-actions-button>
      </f7-actions-group>
    </f7-actions>

    <!-- Two Groups -->
    <f7-actions id="actions-two-groups">
      <f7-actions-group>
        <f7-actions-label>Do something</f7-actions-label>
        <f7-actions-button bold>Button 1</f7-actions-button>
        <f7-actions-button>Button 2</f7-actions-button>
      </f7-actions-group>
      <f7-actions-group>
        <f7-actions-button color="red">Cancel</f7-actions-button>
      </f7-actions-group>
    </f7-actions>

    <!-- Grid -->
    <f7-actions :grid="true" :opened="actionGridOpened" @actions:closed="actionGridOpened = false">
      <f7-actions-group>
        <f7-actions-button>
          <img slot="media" src="https://cdn.framework7.io/placeholder/people-96x96-1.jpg" width="48"/>
          <span>Button 1</span>
        </f7-actions-button>
        <f7-actions-button>
          <img slot="media" src="https://cdn.framework7.io/placeholder/people-96x96-2.jpg" width="48"/>
          <span>Button 2</span>
        </f7-actions-button>
        <f7-actions-button>
          <img slot="media" src="https://cdn.framework7.io/placeholder/people-96x96-3.jpg" width="48"/>
          <span>Button 3</span>
        </f7-actions-button>
      </f7-actions-group>
      <f7-actions-group>
        <f7-actions-button>
          <img slot="media" src="https://cdn.framework7.io/placeholder/fashion-96x96-4.jpg" width="48"/>
          <span>Button 4</span>
        </f7-actions-button>
        <f7-actions-button>
          <img slot="media" src="https://cdn.framework7.io/placeholder/fashion-96x96-5.jpg" width="48"/>
          <span>Button 5</span>
        </f7-actions-button>
        <f7-actions-button>
          <img slot="media" src="https://cdn.framework7.io/placeholder/fashion-96x96-6.jpg" width="48"/>
          <span>Button 6</span>
        </f7-actions-button>
      </f7-actions-group>
    </f7-actions>
  </f7-block>
</template>

<script>
export default {
  data() {
    return {
      actionGridOpened: false,
    };
  },
  methods: {
    openActionsPopover() {
      const self = this;
      const app = self.$f7;
      if (!self.actionsToPopover) {
        self.actionsToPopover = app.actions.create({
          buttons: [
            {
              text: 'Do something',
              label: true,
            },
            {
              text: 'Button 1',
              bold: true,
            },
            {
              text: 'Button 2',
            },
            {
              text: 'Cancel',
              color: 'red',
            },
          ],
          // Need to specify popover target
          targetEl: self.$el.querySelector('.button-to-popover'),
        });
      }

      // Open
      self.actionsToPopover.open();
    },
  },
};
</script>