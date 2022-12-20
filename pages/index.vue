<template>
  <div class="container">
    <Header/>
    <h1>{{this.$store.state.counter}}</h1>
    <button v-on:click = "add">press</button>
    <div>
      <b-table  small
                :fields="fields"
                responsive="sm"
                :items="items"
      >

        <template #cell(index) = "data">
          {{data.index + 1}}
        </template>

        <template #cell(email)="data">
          <b class="text-info">{{ data.value.toUpperCase() }}</b>
        </template>

        <template #cell(nameage)="data">
          <div class = "btn-container">
            <b-button>{{data.item.add}}</b-button>
            <b-button class="btn-remove">{{ data.item.remove }}</b-button>
          </div>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>

import Header from "../components/Header";

export default {
  data(){
    return{
      fields: [

        'Index',

        // A column that needs custom formatting

        { key: 'email', label: 'Email' },

        // A regular column
        {key:'name',label:'Имя'},

        // A regular column

        {key:'surname',label:'Фамилия'},

        'age',
        // A virtual column made up from two fields
        { key: 'nameage', label: 'Удалить / Редактировать' }

      ],

      items: [
        // {email : 'bakzbannyld@mail.ru', surname: 'Рязанова', name: "Masha", age:25, add:'remove',remove:'redact'}
      ]
    }
  },

  methods:{

    add(){

      this.$store.commit('increment',{

        amount:10

      })
    }

  },

created(){

    this.$store.state.collection.forEach((item) => {

      this.items.push(item)

    })

}


}

</script>

<style>

.container{
  min-height: 100px;
}



</style>
