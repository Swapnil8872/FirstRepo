function f1(){
    var tv ={
        "Name":"Samsung Tv",
        "Price":45000.45,
        "City":["Delhi","Hyd"],
        "Rating":{Rate:4.2,Count:56000},
        "Qty":12,
        "Total":function(){
            return this.Qty * this.Price;
        }
    }

    // document.write("Name "+tv.Name+" Product Price Is "+tv.Price+ " This Product Available In A "+tv.City[0]+ " And Product Rating Is "+tv.Rating.Rate + " And Count "+tv.Rating.count+" Total Amount Is "+tv.Total());
    console.log(`Name ${tv.Name}\nPrice ${tv.Price}\nCity ${tv.City[1]}\nAnd My Product Rating Is ${tv.Rating.Rate}\nAnd Roduct Count Is ${tv.Rating.Count}\nProduct Total Is ${tv.Total()}`)
}
f1();