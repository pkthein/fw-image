<template>
  <q-dialog maximized v-model="card.active">
    <q-card class="bg-white full-width" align="center">
      <q-img class="gt-xs i-fullscreen" :src="card.url" ratio="1" />
      <q-img class="xs i-xs-fullscreen" :src="card.url" ratio="1" />

      <q-btn
        round dense
        color="primary" icon="close" class="absolute i-dialog-close"
        @click="card.active = false"
      />
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  name: 'View_Fullscreen',
  props: {
    card: Object
  }
}
</script>

<style>

</style>
