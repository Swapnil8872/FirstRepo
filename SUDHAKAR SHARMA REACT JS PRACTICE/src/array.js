function f1(){
    var values =["Ajay",10,true,["Hyd","Delhi"],function(){console.log('Hello Guys How Are You..!')}];
    var [name, id,stock,cities,Hello] = values;
    console.log(cities);
    Hello();
}
f1();