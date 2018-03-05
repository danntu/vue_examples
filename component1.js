Vue.component('my-component',{
    template: '<div>Пользовательский компонент</div>'
})

new Vue({
    el: '#example'
})

var Child = {
    template: '<div>Локальные компоненты. Пользовательский компонент!</div>'
}

new Vue({
    el: '#example1',
    components:{
        'my-component1':Child
    }
})

var data ={counter:0}

Vue.component('simple-counter',{
    template: '<button v-on:click="counter += 1">{{ counter }}</button>',
    data:function () {
        return {counter:0}
    }
})

new Vue({
    el: '#example-2'
})

Vue.component('child',{
    props: ['message'],
    template: '<span>{{message}}</span>'
})

new Vue({
    el: '#example-3'
})

Vue.component('child2',{
    props:['myMessage'],
    template: '<span>{{myMessage}}</span>'
})

new Vue({
    el:'#example-4',
    data:{
        parentMsg:'Сообщение из родителя'
    }
})


Vue.component('todo-item',{
    props:['text','isComplete'],
    template:'<span>{{text}} {{isComplete}}</span>'
})
new Vue({
    el:'#example-5',
    data:{
        todo: {
            text: 'Learn Vue',
            isComplete: false
        }
    }
})
