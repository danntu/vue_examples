var vm = new Vue({
    el: "#test",
    data:{
        ok:true,
        type:'CA'
    }
})

var text= new Vue({
    el :"#toggle",
    data:{
        loginType:'username'
    },
    methods:{
        toggleLoginType:function () {
            this.loginType = this.loginType==='username' ? 'email' : 'username'
        }
    }
})

Vue.component('templat',{

})

Vue.component('templat2',{

})