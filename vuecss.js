var vm = new Vue({
    el: "span",
    data: {
        isActive: true,
        hasError: true
    }
})
var vm2 = new Vue({
    el: ".static",
    data: {
        isActive: true,
        hasError: true
    }
})
var vm3 = new Vue({
    el: "p",
    data: {
        classObject: {
            active: true,
            'text-danger': true
        }
    }
})
var vm4 = new Vue({
    el: "h1",
    data: {
        isActive: true,
        error: null
    },
    computed: {
        classObject: function () {
            return {
                active: this.isActive && !this.error,
                'text-danger': this.error && this.error.type === 'fatal'
            }
        }
    }
})
var vm5 = new Vue({
    el: "h2",
    data: {
        activeClass: "active",
        errorClass: "text-danger"
    }
})
var vm6 = new Vue({
    el: "h3",
    data: {
        isActive: true,
        activeClass: "active",
        errorClass: "text-danger"
    }
})
var vm7 = new Vue({
    el: "h4",
    data: {
        isActive: false,
        activeClass: "active",
        errorClass: "text-danger"
    }
})

Vue.component('my-component', {
    template: '<div>Пользовательский компонент!</div>'
})
Vue.component('p-component', {
    template: '<p class="foo bar">Привет Мир</p>'
})
var vm8 = new Vue({
    el: "#example"
})
var vm9 = new Vue({
    el: "#pcomponent",
    data: {
        isActive: false
    }
})

var vm10 = new Vue({
    el: '#inline',
    data: {
        activeColor: 'red',
        fontSize: 30
    }
})

var vm11 =new Vue({
    el: "#object",
    data:{
        styleObject:{
            color:'blue',
            fontSize:'33px'
        },
        baseStyles:{
            color:'red',
            fontSize:'33px'
        },
        overridingStyles:{
            color:'yellow',
            fontSize:'33px'
        }
    }
})