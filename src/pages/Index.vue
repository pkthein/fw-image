<template>
  <q-page>
    <Logo :searched="searched" />

    <div align="center" class="q-pa-sm q-mt-md">
      <q-input
        outlined rounded bottom-slots
        v-model="filter"
        class="i-searchbox"
        placeholder="Search images to your heart's content ^_^"
        @keyup.enter="searchFilter"
        @keyup.esc="filter = ''"
      >
        <template v-slot:prepend>
          <q-icon name="search" />
        </template>

        <template v-slot:append>
          <q-icon v-if="filter" name="close" @click="filter = ''" class="cursor-pointer" />
        </template>
      </q-input>
    </div>

    <div v-if="!loading">
      <div v-if="searched" class="q-mb-lg" align="center">
        <div class="q-gutter-md">
          <q-img
            v-for="(image, index) in data.slice(0, slicer)"
            :key="index"
            :src="image.link"
            ratio="1" spinner-color="primary"
            class="rounded-borders cursor-pointer grow"
            alt="random img"
            style="width: 300px"
            @click="card.active = true; card.url = image.link"
          />
        </div>
      </div>

      <div v-if="data.length > 0 && filter && searched && slicer < data.length" class="q-mb-lg" align="center">
        <q-btn rounded outline @click="addMoreImages">More</q-btn>
      </div>

      <div v-if="data.length === 0 && searched" class="absolute-center">
        <q-icon name="warning" size="2em" />
        No Data!
      </div>
    </div>

    <div v-else class="absolute-center">
      <q-spinner-grid
        v-if="filter"
        color="primary"
        size="4em"
      />
    </div>

    <ViewFullscreen :card="card" />
  </q-page>
</template>

<script src="./pageIndex.js">
</script>
