//include libraries -- avoid using import *, only import what you will use
import {Observable} from 'rxjs/Rx';
import { scan } from 'rxjs/Rx';


//set up the handlers
const display = document.getElementById("display");
const incButton = document.getElementById("increment");
const decButton = document.getElementById("decrement");
const rstButton = document.getElementById("reset");

//create a counter as an object
let counter = {value: 0};
const incr = acc => ({value: acc.value +1});
const decr = acc => ({value: acc.value -1});
const rst = acc => ({value: 0});

//merge all streams for the three buttons into one
const button$ = Observable.merge(
    Observable.fromEvent(incButton, 'click').mapTo(incr),
    Observable.fromEvent(decButton, 'click').mapTo(decr),
    Observable.fromEvent(rstButton, 'click').mapTo(rst)
)


//scan and update the accumulator depending on the button clicked
.scan((acc, update) => update(acc), counter)

//subscribe and update the value
.subscribe(counter => {
    display.innerHTML = counter.value;
});
