var example1 = new Vue({
    el: '#example-1',
    data:{
        items:[
            { message: 'Dan1'},
            { message: 'Dan2'}
        ]
    },

})

new Vue({
    el: '#push',
    methods:{
        pushing:function () {
            example1.items.push({message:this.newText})
        },
        poping:function () {
            example1.items.pop({message:this.newText})
        },
        reversing:function () {
            example1.items.reverse()
        }

    },
    computed:{
        sorting:function () {
            return example1.items.sort(example1.items.message)
        }
    }
})

//example1.items.reverse();

var example = new Vue({
    el: '#example-2',
    data:{
        parentMessage: 'Родитель',
        items:[
            {id:1, message:'Dan3'},
            {id:2, message:'Dan4'}
        ]
    }
})

var v_for_object= new Vue({
    el:'#v-for-object',
    data:{
        object:{
            firstName:'Мырзаканов',
            lastName:'Данияр',
            age: 33
        }
    }
})