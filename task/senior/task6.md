1. 写出 构造函数模式、混合模式、模块模式、工厂模式、单例模式、发布订阅模式的范例。

   - 构造函数模式

     ```javascript
     var Person = function(name, age) {
       this.name = name;
       this.age = age;
     }
     Person.prototype.sayName = function() {
       return this.name;
     }
     var student = new Person("htkz", 30);
     console.log(student)
     ```

   - 混合模式

     ```javascript
     var Person = function(name, age) {
       this.name = name;
       this.age = age;
     };
     Person.prototype.sayName = function() {
       console.log(this.name);
     }

     var Student = function(name, age, score) {
       Person.call(this, name, age);
       this.score = score;
     }
     Student.prototype = Object.create(Person.prototype);

     Student.prototype.sayScore = function() {
       console.log(this.score);
     }
     var student = new Student("htkz", 28, 99);
     console.log(student)
     ```

   - 模块模式

     ```javascript
     var Person = (function(){
       var name = "htkz";
       function sayName() {
         console.log(name);
       }
       return {
         name: name,
         sayName: sayName
       }
     })()
     ```

   - 工厂模式

     ```javascript
     function createPerson(opts) {
       var person = {
         name: opts.name || 'htkz'
       }
       person.sayName = function() {
         console.log(this.name);
       }
       return person;
     }
     var p1 = createPerson({name: 'htkz'});
     var p2 = createPerson({name: '1234'});
     ```

   - 单例模式

     ```javascript
     var People = (function() {
       var instance;
       function init(name) {
         return name;
       }
       return {
         createPeople: function(name) {
           if(!instance) {
             instance = init(name);
           }
           return instance;
         }
       }
     })();
     var obj1 = People.createPeople('ts123');
     var obj2 = People.createPeople('456');
     ```

   - 发布订阅模式

     ```javascript
     var EventCenter = (function() {
       var events = {};
       function on (evt, handler) {
         events[evt] = events[evt] || [];
         events[evt].push({
           handler: handler
         });
       }
       
       function fire(evt, args) {
         if(!events[evt]) {
           return;
         }
         for(var i = 0; i < events[evt].length; i++) {
           events[evt][i].handler(args);
         }
       }
       
       return {
         on: on,
         fire: fire
       }
     })();
     EventCenter.on('hit', function() {
       console.log('hit');
     })
     EventCenter.fire('hit');
     ```

     ​

2. 使用发布订阅模式写一个事件管理器，可以实现如下方式调用

   ```
   Event.on('change', function(val){
       console.log('change...  now val is ' + val);  
   });
   Event.fire('change', '饥人谷');
   Event.off('changer');
   ```

   ```javascript
   var Event = (function() {
     var events = {};
     function on (evt, handler) {
       events[evt] = events[evt] || [];
       events[evt].push({
         handler: handler
       });
     }
     
     function fire(evt, args) {
       if(!events[evt]) {
         return;
       }
       for(var i = 0; i < events[evt].length; i++) {
         events[evt][i].handler(args);
       }
     }
     
     function off(evt) {
       delete events[evt];
     }
     
     function test() {
       console.log(events);
     }
     
     return {
       on: on,
       fire: fire,
       off: off,
       test: test
     }
   })();

   Event.on('change', function(val){
       console.log('change...  now val is ' + val);  
   });
   Event.fire('change', '饥人谷');
   Event.off('change');
   Event.fire('change', '饥人谷');

   ```

   ​