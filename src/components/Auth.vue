<template>
    <div>
        <div>
            <label>Username : </label>
            <input type="text" v-model="username"/>
        </div>
        <div>
            <label>Password : </label>
            <input type="password" v-model="password">
        </div>
        
        <button @click="saveBtn">Save</button>
        <button @click="deleteBtn"> Delete</button>
    </div>
</template>

<script>
export default {
    data : function() {
        return {
            username : '',
            password : ''
        }
    },
    created:function(){
        this.username = localStorage.getItem('usr')
        this.password = localStorage.getItem('pwd')
    },
    methods:{
        saveBtn : function (){
            localStorage.setItem('usr',this.username)
            localStorage.setItem('pwd',this.password)
        },
        deleteBtn : function (){
            localStorage.removeItem('usr')
            localStorage.removeItem('pwd')
            this.username = ''
            this.password = ''
        }
    }
}
</script>