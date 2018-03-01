var app = new Vue({
    el: '#app',
    data :{
        dynamicId : 10,
        isButtonDisabled: false,
        number : 10,
        raw1 : '{{number+1}}',
        raw2: '{{ isButtonDisabled ? \'YES\' : \'NO\' }}',
        message: 'DaniK',
        seen : true,
        url : 'http://google.kz'
    }
})