<template>
  <div>
    <h1>Selamat Datang</h1>
    <div>Daftar Description :</div>
    <ul>
      <li v-for="item in todos" :key="item">{{item.description}} <button @click="deleteTodos(item.id)">X</button></li>
    </ul>
    <input v-model="myText" type="text">
    <button @click="addTodos">Add</button>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data: () => { 
      return { 
        todos: [],
        myText: ''
      } 
    },
    mounted: function () {
      this.getTodos()
    },
    methods: {
      getTodos(){
        axios.get('http://localhost:3000/todo')
        .then(result => {
          this.todos = result.data
        })
      },
      addTodos(){
        let newItem = {description: this.myText}
        axios.post('http://localhost:3000/todo', newItem)
          .then(() => {
            this.getTodos()
          })
        //this.todos.push(newItem)
      },
      deleteTodos(id){
        axios.delete(`http://localhost:3000/todo/${id}`)
          .then(() => {
            this.getTodos()
          })
      }
    }
  }
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
