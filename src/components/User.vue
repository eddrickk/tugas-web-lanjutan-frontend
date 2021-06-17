<template>
  <div>
    <h1>Selamat Datang</h1>
    <div>Daftar User :</div>
    <ul>
      <li v-for="item in users" :key="item">{{item.username}} <button @click="deleteUsers(item.id)">X</button></li>
    </ul>
    <input v-model="username" type="text" placeholder="Username">
    <br/>
    <input v-model="password" type="password" placeholder="Password">
    <br/>
    <button @click="addUsers">Add</button>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data: () => { 
      return { 
        users: [],
        username: '',
        password: ''
      } 
    },
    mounted: function () {
      this.getUsers()
    },
    methods: {
      getUsers(){
        const username = localStorage.getItem('usr')
        const password = localStorage.getItem('pwd')
        axios.get('http://localhost:3000/user/users', { headers: {username, password} })
        .then(result => {
          this.users = result.data
        })
      },
      addUsers(){
        const username = localStorage.getItem('usr')
        const password = localStorage.getItem('pwd')
        let newItem = {username: this.username, password: this.password}
        axios.post('http://localhost:3000/user', newItem, { headers: {username, password} })
          .then(() => {
            this.getUsers()
          })
        //this.todos.push(newItem)
      },
      deleteUsers(id){
        const username = localStorage.getItem('usr')
        const password = localStorage.getItem('pwd')
        axios.delete(`http://localhost:3000/user/${id}`, { headers: {username, password} })
          .then(() => {
            this.getUsers()
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
