const app1 = new Vue({
    el: '#app1',
    data: {
        products: 'Boots'
    }
})

const app2 = new Vue({
    el: '#app2',
    data: {
        products: [
            'Boots',
            'Jacket',
            'Hiking Socks'
        ]
    }
})

var app3 = new Vue({
    el: '#app3',
    data: {
        message: 'Hi, Vue!'
    }
})

var app4 = new Vue({
    el: '#app4',
    data: {
        message: 'Вы загрузили эту страницу в: ' + new Date().toLocaleString()
    }
})

var app5 = new Vue({
    el: '#app5',
    data: {
        seen: true
    }
})


var app6 = new Vue({
    el: '#app6',
    data: {
        todos: [
            {text: 'Посадить дерево'},
            {text: 'Построить дом'},
            {text: 'Вырастить сына'}
        ]
    }
})

var app7 = new Vue({
    el: '#app7',
    data: {
        message: 'Привет Vue.js!'
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
})

Vue.component('todo-item', {
        props: ['todo'],
        template: '<li>{{ todo.text }}</li>'
    }
)

var app8 = new Vue({
    el: '#app8',
    data: {
        groceryList: [
            {id: 0, text: 'Овощи'},
            {id: 1, text: 'Сыр'},
            {id: 2, text: 'Что там ещё люди едят?'}
        ]
    }
})