<template>
  <div class="main">
    <div class="main-map">
      <yandex-map :coords="coords" :zoom="15" @click="onClick" :options="options" :controls="controls">
        <ymap-marker :coords="coords" marker-id="123" :hint-content="coords" />
      </yandex-map>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      coords: [ 54.817533, 58.448946 ],
      options: {
        restrictMapArea: [
            [54.83381208998252,58.4077226876815],
            [54.79925718380296,58.4894802010907]
        ]
      },
      controls: ['zoomControl']
    }
  },
  methods: {
    onClick (e) {
      this.coords = e.get('coords')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.main-map {
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
 }

 .ymap-container {
    width: 100%;
    height: 100%;
 }
</style>
