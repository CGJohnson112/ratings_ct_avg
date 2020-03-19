

let list = [ 
{
    "id": 1,
    "rating": 5
}, {
    "id": 2,
    "rating": 4
}, {
    "id": 3,
    "rating": 1
}, {
    "id": 4,
    "rating": 5
}, {
    "id": 5,
    "rating": 3
}, {
    "id": 6,
    "rating": 5
}
   
]

let rateSum = 0;
        let numRatings = 0;
        const len = list.length;
        let rater = null;
        for (let i = 0; i < len; i++) {
            rater = list[i];
            rateSum = list[i].rating + rateSum;
            numRatings = numRatings + 1;     
        }

    document.getElementById("numRatings").innerHTML = numRatings;

    let rating5 = list.filter(list => list.rating === 5).length;
    let rating4 = list.filter(list => list.rating === 4).length;
    let rating3 = list.filter(list => list.rating === 3).length;
    let rating2 = list.filter(list => list.rating === 2).length;
    let rating1 = list.filter(list => list.rating === 1).length;
    

    //console.log(rating5);
    document.getElementById("demo").innerHTML = "Number of 5 star ratings........." + rating5;
    document.getElementById("demo2").innerHTML = "Number of 4 star ratings........." + rating4;
    document.getElementById("demo3").innerHTML = "Number of 3 star ratings........." + rating3;
    document.getElementById("demo4").innerHTML = "Number of 2 star ratings........." + rating2;
    document.getElementById("demo5").innerHTML = "Number of 1 star ratings........." + rating1;

    //get the number of ratings per each category, then fix the decimal to a percentage, then slice the decimal to transfor to 
        //a whole number. Should add up to 100%
        rating5 = list.filter(list => list.rating === 5).length / list.length;
        let rating5round = rating5.toFixed(2).slice(2);
        rating4 = list.filter(list => list.rating === 4).length / list.length;;
        let rating4round = rating4.toFixed(2).slice(2);
        rating3 = list.filter(list => list.rating === 3).length / list.length;;
        let rating3round = rating3.toFixed(2).slice(2);
        rating2 = list.filter(list => list.rating === 2).length / list.length;;
        let rating2round = rating2.toFixed(2).slice(2);
        rating1 = list.filter(list => list.rating === 1).length / list.length;;
        let rating1round = rating1.toFixed(2).slice(2);

        console.log(rating5round);
        console.log(rating4round);
        console.log(rating3round);
        console.log(rating2round);
        console.log(rating1round);

        document.getElementById("avg").innerHTML = "% of 5 star ratings......" + (rating1round);
        document.getElementById("avg2").innerHTML = "% of 4 star ratings......" + (rating2round);
        document.getElementById("avg3").innerHTML = "% of 3 star ratings......" + (rating3round);
        document.getElementById("avg4").innerHTML = "% of 2 star ratings......" + (rating4round);
        document.getElementById("avg5").innerHTML = "% of 1 star ratings......" + (rating5round);
    
