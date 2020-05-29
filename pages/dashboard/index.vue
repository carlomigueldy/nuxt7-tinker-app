<template>
  <f7-page>
    <f7-navbar title="About Nuxt7" back-link="Back"></f7-navbar>
    <f7-list class="searchbar-hide-on-search">
      <f7-list-item title="About Nuxt7" link="/about/"></f7-list-item>
      <f7-list-item :title="$store.state.user.name" link="/dashboard/"></f7-list-item>
    </f7-list>
  </f7-page>
</template>

<script>
export default {

}
</script>

<style>

</style>