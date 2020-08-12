<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="stylus">
.grow { transition: all .2s ease-in-out; }

.grow:hover { transform: scale(1.05); }

.i-logo { padding-top: 15vh; }

.i-dialog-close {
  top: 0;
  right: 4px;
  transform: translateY(10%);
}

.i-xs-fullscreen {
  width: 100vw;
  height: 100vh;
}

.i-fullscreen {
  width: 100vh;
}

.i-searchbox {
  width: 80%;
  min-width: 300px;
  max-width: 800px;
}

</style>
