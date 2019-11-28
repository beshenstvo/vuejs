Vue.component('todo-item', {
    template: '\
      <li>\
        {{ fullname + name }}\
        <button class="delete" v-on:click="$emit(\'remove\')"><img src="delete.png" width="20px" /></button>\
      </li>\
    ',
    props: ['name', 'fullname']
})
var list = new Vue({ //создание экземпляра 
    el: '#container',
    data: {
        newText1: '',
        newText2: '',
        visib: true,
        todos: [
            {
                id: 1,
                fullname: 'Гатауллина',
                name: 'Руфина'
            },
            {
                id: 2,
                fullname: 'Кузнецов',
                name: 'Руслан'
            },
            {
                id: 3,
                fullname: 'Осипов',
                name: 'Егор'
            },
            {
                id: 4,
                fullname: 'Чеширский',
                name: 'Кот'
            },
        ],
        nextid: 5,
    },
    methods: {
        add: function () {
            this.cheking();
            if ((this.newText1 == '') || (this.newText2 == '')) {
                alert('Заполните оба поля для добавления в список!')
                return
            }
            this.todos.push({
                id: this.nextid++,
                fullname: this.newText2,
                name: this.newText1,
            })
            this.newText1 = '',
            this.newText2 = ''
            this.cheking();
        },
        cheking: function () {
            console.log('cheking')
            if (this.todos.length == 0) {
                document.getElementById('info').style.display = 'block';
            } else {
                document.getElementById('info').style.display = 'none';
            }

        }
    },
})

