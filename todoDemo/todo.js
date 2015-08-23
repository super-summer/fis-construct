var demo = new Vue({
    el: '#demo',
    data: {
        title: 'todos',
        todos: function () {
            return {
              todos: 'not updated'
            }
          }        	
        
    },
    methods: {
        getList:function(){
            if(!localStorage.obj){
				var obj = [
					{
						done: true,
						content: 'this task has been done'
					},
					{
						done: false,
						content: 'i will do this work next.'
					}
				]; //初始化两条数据
				var str = JSON.stringify(obj); //存入 
				localStorage.obj = str; 
			}			
			//读取 
			str = localStorage.obj; 
			//重新转换为对象 
			obj = JSON.parse(str);
            this.todos = obj;
		},
		changeItem:function(item,e){
			item.done = !item.done;
            var cn = item.done?'done':'';
            e.$el.className = cn; 
            var index = e.$index;
            this.todos[index].done = item.done;
			var str = JSON.stringify(this.todos); //存入 
			localStorage.obj = str; 
		},
        addItem:function(item){
        	if(confirm("Do you want to add one?")){
            	str = localStorage.obj;
                //重新转换为对象 
                obj = JSON.parse(str);
                obj.push({
                        done: false,
                        content: item
                    });
                var str = JSON.stringify(obj); //存入 
                localStorage.obj = str; 
                this.todos = obj;  
				document.getElementById("item").value = '';
            }         
        },
        
  }    
});
demo.getList();