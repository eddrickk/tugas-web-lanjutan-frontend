<template>
  <div>
    <h1>Selamat Datang</h1>
    <div>Daftar Description :</div>
    <ul>
      <li v-for="item in todos" :key="item">{{item.description}} <button @click="deleteTodos(item.id)">X</button></li>
    </ul>
    <input v-model="myText" type="text" placeholder="Description">
    <br/>
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
        const username = localStorage.getItem('usr')
        const password = localStorage.getItem('pwd')
        axios.get('http://localhost:3000/todo/todos', { headers: {username, password} })
        .then(result => {
          this.todos = result.data
        })
      },
      addTodos(){
        const username = localStorage.getItem('usr')
        const password = localStorage.getItem('pwd')
        let newItem = {description: this.myText}
        axios.post('http://localhost:3000/todo', newItem, { headers: {username, password} })
          .then(() => {
            this.getTodos()
          })
        //this.todos.push(newItem)
      },
      deleteTodos(id){
        const username = localStorage.getItem('usr')
        const password = localStorage.getItem('pwd')
        axios.delete(`http://localhost:3000/todo/${id}`, { headers: {username, password} })
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
