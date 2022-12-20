export const state = () => ({

  counter:0,

  collection:[],


})


export const mutations = {

    increment(state,payload){

      state.counter += payload.amount

    },

    insert(state,payload){

    this.state.collection.push(payload.item)

      console.log(this.state.collection)

    }


}
