<template>
  <f7-page color-theme="pink" login-screen>
    <f7-login-screen-title>Daycare App</f7-login-screen-title>
    <f7-list form>
      <f7-list-input
        label="Username"
        type="text"
        placeholder="Your username"
        :value="username"
        @input="username = $event.target.value"
      ></f7-list-input>
      <f7-list-input
        label="Password"
        type="password"
        placeholder="Your password"
        :value="password"
        @input="password = $event.target.value"
      ></f7-list-input>
    </f7-list>
    <f7-list>
      <f7-list-button @click="signIn">Sign In</f7-list-button>
      <f7-block-footer>Some text about login information.<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</f7-block-footer>
    </f7-list>
  </f7-page>
</template>

<script>
  export default {
    data() {
      return {
        loginScreenOpened: true,
        username: '',
        password: '',
      };
    },
    methods: {
      async signIn() {
        await this.$f7.preloader.show()
        const msg = `Username: ${this.username}<br>Password: ${this.password}`
      
        await setTimeout(async() => {
          await this.$f7.preloader.hide()
          await this.$f7router.navigate({ name: 'dashboard' })
          await this.$f7.loginScreen.close()
        }, 1500)
      },
    },
  };
</script>