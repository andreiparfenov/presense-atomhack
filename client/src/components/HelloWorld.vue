<template>
  <div class="main">
    <div class="main-map">
      <router-view/>
      <yandex-map :coords="coords" :zoom="15" @click="onClick" :options="options" :controls="controls">
        <ymap-marker v-for="task in tasks" :key="task.id" :coords="task.coords" marker-id="0" :balloon-template="balloonTemplate(task.name, task.desc, task.people, task.points)" />
      </yandex-map>

      <b-modal ref="my-modal" id="bv-modal-example" hide-footer>
        <template v-slot:modal-title>
          Сообщить о проблеме
        </template>
        <div class="d-block text-center">
          <b-form>
            <b-form-group
              id="input-group-1"
              label="Название проблемы"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                v-model="form.name"
                type="text"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-2"
              label="Описание проблемы"
              label-for="input-2"
            >
              <b-form-textarea
                id="input-2"
                v-model="form.desc"
                type="text"
                required
              ></b-form-textarea>
            </b-form-group>

            <b-button v-if="!photo" class="mt-3" block @click="photo = true">Загрузить фото</b-button>
            <b-button variant="success" v-if="photo" class="mt-3" block>Фото загружено!</b-button>
          </b-form>
        </div>
        <b-button variant="primary" class="mt-3" block @click="$bvModal.hide('bv-modal-example'); createProblem(form.name, form.desc)">Сообщить о проблеме</b-button>
      </b-modal>
    </div>

     <b-alert
      class="alert"
      :show="dismissCountDown"
      dismissible
      @dismissed="dismissCountDown=0"
      @dismiss-count-down="countDownChanged"
    >
      <p>Поздравляем! Вам начислены 20 кварков за размещение проблемы!</p>
    </b-alert>
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
      controls: ['zoomControl'],
      form: {
        name: '',
        desc: '',
      },
      photo: false,
      tasks: [
        {
          id: 0,
          coords: [ 54.817533, 58.448946 ],
          name: 'Сдача макулатуры',
          desc: 'Приглашаем всех желающих сдать макулатуру',
          people: 'не ограничено',
          points: 20
        },
        {
          id: 1,
          coords: [54.811554, 58.450909],
          name: 'Игрушки в детский дом',
          desc: 'Пожертвовать новые игрушки в детским дом',
          people: 5,
          points: 50
        },
        {
          id: 2,
          coords: [54.817425, 58.452623],
          name: 'Весенний субботник',
          desc: 'Приглашаем жителей принять участие в субботнике',
          people: 10,
          points: 50
        }
      ],
      dismissSecs: 10,
      dismissCountDown: 0,
    }
  },
  methods: {
    onClick (e) {
      this.coords = e.get('coords')
      this.$refs['my-modal'].show()
    },

    createProblem(name, desc) {
      this.tasks.push({
        id: 3,
        coords: this.coords,
        name: name,
        desc: desc
      })
      this.showAlert();
    },

    countDownChanged(dismissCountDown) {
        this.dismissCountDown = dismissCountDown
      },
    showAlert() {
      this.dismissCountDown = this.dismissSecs
    },

    balloonTemplate(name, desc, people, points) {
      return `
      <h3>${name}</h3>
      <p>${desc}</p>
      <p>Необходимо людей: ${people}</p>
      <p>Кварки за выполнение: ${points}</p>
      <button "@click=goToLK() variant="primary">Приступить</button>
      `
    },

    goToLK() {
      console.log("hey!");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.main-map {
    width: 100%;
    height: 100vh;
 }

 .ymap-container {
    width: 100%;
    height: 100%;
 }

 .alert {
   position: fixed;
   bottom: 10px;
   right: 10px;
   z-index: 3;
 }
</style>
