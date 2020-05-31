<template>
  <div class="add">
    <h2>Добавить задание</h2>
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group
        id="input-group-1"
        label="Название задачи"
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
        label="Описание задачи"
        label-for="input-2"
      >
        <b-form-textarea
          id="input-2"
          v-model="form.desc"
          type="text"
          required
        ></b-form-textarea>
      </b-form-group>

      <b-form-group
        id="input-group-12"
        label="Точный адрес"
        label-for="input-12"
      >
        <b-form-input
          id="input-12"
          v-model="form.address"
          type="text"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-3"
        label="Количество людей"
        label-for="input-3"
      >
        <b-form-spinbutton
          id="input-3"
          v-model="form.number"
          min="1"
          max="100"
          required
        ></b-form-spinbutton>
      </b-form-group>

      <b-form-group
        id="input-group-4"
        label="Приоритет задания"
        label-for="input-4"
      >
        <b-form-select
          id="input-4"
          v-model="form.priority"
          min="1"
          max="100"
          required
          :options="['высокий', 'средний']"
        ></b-form-select>
      </b-form-group>

      <b-form-group
        id="input-group-5"
        label="Кварки за задание"
        label-for="input-5"
      >
        <b-form-spinbutton
          id="input-5"
          v-model="form.points"
          min="1"
          max="1000"
          required
        ></b-form-spinbutton>
      </b-form-group>

      <b-button type="submit" variant="primary">Создать задание</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: "AddTask",
  data() {
    return {
      form: {
        name: '',
        desc: '',
        address: '',
        number: 1,
        priority: '',
        points: 10
      }
    }
  }
}
</script>

<style scoped>

</style>