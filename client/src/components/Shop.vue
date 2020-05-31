<template>
  <div class="lk">
    <div class="lk-me">
      <h2 class="lk-tasks__h">Магазин поощрений</h2>
      <div class="lk-me__points-shop"><b>Кварков в кошельке:</b> 250</div>
    </div>
    <div class="lk-tasks">
      <div class="lk-tasks__cards">
        <b-card v-for="item in items"
          :key="item.id"
          :title="item.name"
          img-src="https://i.picsum.photos/id/1060/536/354.jpg"
          img-alt="aj"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2 lk-tasks__card"
        >
          <b-card-text>
            <p>{{item.desc}}</p>
            <p><b>Стоимость</b> {{item.points}} кварков</p>
          </b-card-text>

          <b-button href="#" variant="primary">Приобрести</b-button>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Shop",
  data() {
    return {
      items: [
        {
          id: 0,
          name: 'Пироговы: скидка 20% и бесплатная доставка',
          desc: 'Скидка 20% на первый заказ в кондитерской "Пироговы" и бепсплатная доставка',
          points: 200
        },
      ]
    }
  }
}

</script>

<style scoped>
.lk {
  max-width: 980px;
  margin: 0 auto;
}

.lk-tasks__h {
  margin-top: 30px;
  margin-bottom: 30px;
}

.lk-tasks__cards {
  display: flex;
  justify-content: space-between;
}

.lk-me__points-shop {
  margin-bottom: 20px;
}
</style>