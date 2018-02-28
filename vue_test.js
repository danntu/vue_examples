var data = {a: 1}

var vm = new Vue({
    data: data
})

vm.a =2;
data.a=3;

if (vm.a === data.a)
    document.getElementById("result").innerHTML = 'vm.a === data.a result is  ' + (vm.a === data.a);

document.getElementById("data").innerHTML = 'data.a ' + data.a;
document.getElementById("vm").innerHTML = 'vm.a ' + vm.a;

var obj ={
    foo: 'bar'
}

Object.freeze(obj);

new Vue({
    el: '#app',
    data(){
        return {
            obj
        }
    }
})
var test = new Vue({
    el: '#test',
    data : {
        msg : 'This is a test',
        rawHtml: '<span style="color: red">Текст должен быть красным</span>'
    }
})