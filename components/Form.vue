<template>
  <div>
    <b-form @submit.prevent="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Your Surname:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.surname"
          placeholder="Enter your age name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4" label="Your Age:" label-for="input-4">
        <b-form-input
          id="input-4"
          v-model="form.age"
          placeholder="Enter your age name"
          required
        ></b-form-input>
      </b-form-group>


      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>

    </b-form>

  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: '',
        name: 'Vasya',
        surname:'Gavrilov',
        age:'25',
        add:'remove',
        remove:'redact'
      },
      show: true
    }
  },
  methods: {


    onSubmit() {

      this.$store.commit('insert',{

        item:this.form

      })
    },

    onReset(event) {
      event.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.name = ''
      this.form.age = ''
      this.form.sex = ''
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>

<style scoped>

</style>
