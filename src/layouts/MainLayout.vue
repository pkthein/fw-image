<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          <div class="cursor-pointer" @click="goHome">
            ImagoPH
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',
  data () {
    return {
    }
  },
  methods: {
    goHome: function () {
      this.$router.push('/').catch(() => false)
    }
  }
}
</script>
