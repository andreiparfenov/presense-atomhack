<template>
  <div class="lk">
    <div class="lk-info">
      <div class="lk-info__photo">
        <img src="@/assets/head.png" alt="me">
      </div>
      <div class="lk-info__info">
        <div class="lk-info__name"><b>{{user.name}}</b></div><br>
        <div class="lk-progress__tasks">
          Статус: {{user.status}}
        </div>
      </div>
    </div>

    <div class="lk-progress">
      <div class="lk-progress__bar">

      </div>
      <div class="lk-progress__numbers">
        <div class="lk-progress__tasks">
          Заданий выполнено: {{user.tasks}} <br>
        </div>
        <div class="lk-progress__tasks">
          До нового статуса:<br> {{user.tasks}} заданий
        </div>
      </div>
    </div>

    <div class="lk-progress__points">
      На счету: {{user.points}} <img src="@/assets/logo.svg" class="kvark">
    </div>

    <div class="lk-dashboard">
      <div class="lk-dashboard__item">
        <div class="lk-dashboard__number">{{user.tasks}}</div>
        <div class="lk-dashboard__desc">заданий выполнено</div>
      </div>
      <div class="lk-dashboard__item">
        <div class="lk-dashboard__number">{{user.tasks}}</div>
        <div class="lk-dashboard__desc">заданий отклонено</div>
      </div>
      <div class="lk-dashboard__item">
        <div class="lk-dashboard__number">{{user.tasks}}</div>
        <div class="lk-dashboard__desc">заданий на проверке</div>
      </div>
      <div class="lk-dashboard__item">
        <div class="lk-dashboard__number">{{user.points}} <img src="@/assets/logo.svg" class="kvark"></div>
        <div class="lk-dashboard__desc">получено за всё время</div>
      </div>
    </div>
    
    <div class="lk-do">
      <h3>Выполняется:</h3>
      <b-card no-body class="overflow-hidden" style="max-width: 540px; margin-bottom: 15px" v-for="task in doTasks" :key="task.id">
        <b-row no-gutters>
          <b-col md="3">
            <b-card-img :src="task.img" alt="Image" class="rounded-0"></b-card-img>
          </b-col>
          <b-col md="9">
            <b-card-body :title="task.name">
              <b-card-text>
                {{task.desc}}
              </b-card-text>
              <b-badge variant="primary">{{task.type}}</b-badge>
              <b-badge variant="warning">{{task.theme}}</b-badge>
              <div class="card-price">{{task.points}} <img src="@/assets/logo.svg" class="kvark"></div>

              <b-button variant="success">Готово!</b-button>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </div>

    <div class="lk-do">
      <h3>Новые задания:</h3>
      <b-card no-body class="overflow-hidden" style="max-width: 540px; margin-bottom: 15px" v-for="task in tasks" :key="task.id">
        <b-row no-gutters>
          <b-col md="3">
            <b-card-img :src="task.img" alt="Image" class="rounded-0"></b-card-img>
          </b-col>
          <b-col md="9">
            <b-card-body :title="task.name">
              <b-card-text>
                {{task.desc}}
              </b-card-text>
              <b-badge variant="primary">{{task.type}}</b-badge>
              <b-badge variant="warning">{{task.theme}}</b-badge>
              <div class="card-price">{{task.points}} <img src="@/assets/logo.svg" class="kvark"></div>

              <b-button @click=doIt(task) variant="primary">Приступить</b-button>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>

      <b-card no-body class="overflow-hidden" style="max-width: 540px; background: #BDFFE9; margin-bottom: 15px">
        <b-row no-gutters>
          <b-col md="3">
            <b-card-img src="https://image.flaticon.com/icons/svg/262/262812.svg" alt="Image" class="rounded-0"></b-card-img>
          </b-col>
          <b-col md="9">
            <b-card-body title="Предложи идею!">
              <b-card-text>
                Предложи свою идею по благоустройству или культурной жизни города и получи до 1000 кварков!
              </b-card-text>
              <b-badge variant="primary">Инициатива</b-badge>
              <b-badge variant="warning">Контроль</b-badge>
              <div class="card-price">до 1000 <img src="@/assets/logo.svg" class="kvark"></div>

              <b-button @click=doInitiative variant="primary">Предложить</b-button>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </div>

    <b-modal ref="my-modal1" id="bv-modal-example1" hide-footer>
        <template v-slot:modal-title>
          Предложить идею
        </template>
        <div class="d-block text-center">
          <b-form>
            <b-form-group
              id="input-group-1"
              label="Идея"
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
              label="Подробнее об идее"
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
        <b-button variant="primary" class="mt-3" block @click="$bvModal.hide('bv-modal-example1'); createProblem(form.name, form.desc)">Отправить идею</b-button>
      </b-modal>
  </div>
</template>

<script>
export default {
  name: "Dashboard2",
  data() {
    return {
      user: {
        name: 'Коля',
        status: 'Начинающий активист',
        tasks: 8,
        points: 250
      },
      doTasks: [
        {
          id: 0,
          name: 'Подстричь газон',
          desc: 'Нужна помощь в стрижке газонов',
          img: require('../assets/green.jpg'),
          type: '#Благоустройство',
          theme: 'Уборка',
          points: '60'
        }
      ],
      tasks: [
        {
          id: 0,
          coords: [ 54.817533, 58.448946 ],
          name: 'Сдача макулатуры',
          desc: 'Приглашаем всех желающих сдать макулатуру',
          type: '#Экология',
          img: require('../assets/newspapers.jpg'),
          theme: '',
          people: 'не ограничено',
          priority: 'средний',
          points: 20
        },
        {
          id: 1,
          coords: [54.811554, 58.450909],
          name: 'Игрушки в детский дом',
          desc: 'Пожертвовать новые игрушки в детским дом',
          type: '#Благотворительность',
          img: require('../assets/toys.jpg'),
          theme: '',
          people: 5,
          priority: 'высокий',
          points: 50
        },
        {
          id: 3,
          coords: [54.821554, 58.450909],
          name: 'Cфотографировать свалку',
          desc: 'Необходимо сфотографировать свалку для оценки объёмов мусора',
          img: require('../assets/camera.jpg'),
          type: '#Благоустройство',
          theme: '#Мониторинг',
          people: 5,
          priority: 'высокий',
          points: 20
        },
        {
          id: 2,
          coords: [54.817425, 58.452623],
          name: 'Весенний субботник',
          desc: 'Приглашаем жителей принять участие в субботнике',
          img: require('../assets/clean.jpg'),
          type: '#Благоустройство',
          theme: '#Уборка',
          people: 10,
          priority: 'высокий',
          points: 50
        }
      ],
      form: {
        name: '',
        desc: '',
      },
      photo: false
    }
  },
  methods: {
    doIt(chosenTask) {
      let ind = this.tasks.indexOf(chosenTask);
      if (ind > -1) {
        this.tasks.splice(ind, 1);
      }
      this.doTasks.push(chosenTask);
    },

    doInitiative() {
      this.$refs['my-modal1'].show()
    }
  }
}
</script>

<style scoped>

.lk {
  position: fixed;
  z-index: 1;
  width: 40%;
  background: #F4F4F4;
  padding-left: 20px;
  overflow-y: scroll;
  height: 100%;
  padding-bottom: 100px;
}

.lk-info {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 30px;
}

.lk-info__photo > img {
  width: 150px;
}

.lk-info__info {
  margin-left: 10px;
  padding: 10px;
}

.lk-info__name {
  font-size: 18px;
}

.lk-progress {
  width: 500px;
}

.lk-progress__bar {
  height: 10px;
  width: 500px;
  background: linear-gradient(90deg, #AF8CB7 0%, #2EC6C6 100%);
  border-radius: 25px;
  margin-bottom: 10px;
}

.lk-progress__numbers {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.lk-dashboard {
  display:flex;
  justify-content: center;
  margin-right: 10px;
  margin-top: 20px;
  background: #DBDBDB;
  width: 500px;
}

.lk-dashboard__item:not(:last-child) {
  border-right: 1px solid white;
  text-align: left;
  
}

.lk-dashboard__item {
  padding: 10px;
  text-align: center;
}

.lk-dashboard__number {
  font-size: 24px;
}

.lk-dashboard__desc {
  font-size: 12px;
}

.lk-do {
  margin-top: 40px;
}

.card-price {
  margin-top: 10px;
  background: linear-gradient(90deg, #AF8CB7 0%, #2EC6C6 100%);
  border-radius: 10px;
  padding: 5px;
  width: fit-content;
  font-size: 20px;
  font-style: bold;
  margin-bottom: 10px;
}

.kvark {
    height: 14px;
    margin-bottom: 4px;
}

.overflow-hidden {
  margin-bottom: 20px; 
  box-shadow: 6px 6px 10px rgba(250, 9, 255, 0.3); 
  border-radius: 25px;
  padding: 20px;
}

.overflow-hidden > div > div > img {
  padding-top: 25px;
}

</style>