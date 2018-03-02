var example1 = new Vue({
    el:'#example-1',
    data:{
        counter: 0
    }
})

var example2 = new Vue({
    el: '#example-2',
    data:{
        name:'Dancho'
    },
    methods:{
        greet:function (event) {
            alert('Hi, '+this.name+'!')
            if (event){
                alert(event.target.tagName)
            }
        }
    }
})

var example3 = new Vue({
    el:'#example-3',
    data:{
        message:''
    },
    methods:{
        say:function (message) {
            this.message=message
        },
        warn:function (message,event) {
            if (event) event.preventDefault()
            alert(message)
        },
        submit_v_on:function () {
            this.message=this.messagetext
        },
        submit_short:function () {
            this.message=this.messagetext1
        },
        page_down:function () {
            this.message=this.messagetext2
        },
        alt_c:function () {
          this.message='You pressed Alt+C'
        },
        click_ctrl:function () {
            this.message='You pressed Ctrl + Click'
        },
        onClick:function () {
            this.message='B'
        }
    }
})

Vue.config