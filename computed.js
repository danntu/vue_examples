var  vm = new Vue({
    el: "#example",
    data :{
        message : 'Привет Данияр'
    },
    computed :{
        reversedMessage:function () {
            return this.message.split('').reverse().join('')
        },
        now : function () {
            return Date.now()
        }
    }
})

var vm2 = new Vue({
    el: '#demo',
    data:{
        firstName : 'Мырзаканов',
        lastName : 'Данияр'
    },
    computed:{
        fullName:function () {
            return this.firstName+' ' +this.lastName;
        }
    }
})
//Using setter
var vm3 =  new Vue({
    el: '#setter',
    data:{
        firstName : 'Мырзаканов',
        lastName :'Данияр'
    },
    computed:{
        fullName:{
            //getter
            get:function () {
                return this.firstName+' '+this.lastName;
            },
            //setter
            set:function (newValue) {
                var names = newValue.split(' ');
                this.firstName=names[0];
                this.lastName=names[names.length-1];
            }
        }
    }
})

var watchExampleVM = new Vue({
    el: '#watch-example',
    data:{
        question: '',
        answer : 'Пока вы не зададите вопрос, я не могу ответить!'
    },
    watch :{
        question:function (newQuestion,oldQuestion) {
            this.answer='Ожидаю, когда вы закончите печатать...'
            this.getAnswer()
        }
    },
    methods:{
        getAnswer: _.debounce(
            function () {
               if(this.question.indexOf('?') ===-1){
                   this.answer = 'Вопросы обычно заканчиваются вопросительным знаком. ?)'
                   return
               }
                this.answer = 'Думаю...'
                var vm = this
                axios.get('https://yesno.wtf/api')
                    .then(function (responce) {
                        vm.answer=_.capitalize(response.data.answer)
                    })
                    .catch(function (error) {
                        vm.answer='Ошибка! Не могу связаться с API. '+error
                    })
            },
            500
        )
    }
})