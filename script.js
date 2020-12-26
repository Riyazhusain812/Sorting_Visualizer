window.onload = function () {
    alert("hello!");
}
var algo_name = document.getElementById("sorting_selection");
var inp_gen = document.getElementById("shuffle");
var inp_size = document.getElementById("size_selection");
var array_size = inp_size.Value;
var inp_speed = document.getElementById("speed");


var div_sizes = [];
var divs = [];
var margin_size;
var cont = document.getElementById("sortchart");
//cont.style="flex-direction:row";

inp_gen.addEventListener("click", generate_array);
inp_size.addEventListener("change", update_array_size);

//var h1=document.createElement("h1");
//h1.innerText="testig for event listner";
//cont.appendChild(h1);


function generate_array() {
    cont.innerHTML = "";

    for (var i = 0; i < array_size; i++) {
        div_sizes[i] = Math.floor(Math.random() * 90) + 10;
        divs[i] = document.createElement("div");
        cont.appendChild(divs[i]);
        margin_size = 0.3;
        divs[i].style = " margin:0% " + margin_size + "%; background-color:white; width:" + (100 / array_size - (2 * margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
    }
}
function update_array_size() {
    array_size = inp_size.value;
    generate_array();
}
window.onload = update_array_size();



var start = document.getElementById("start");

start.addEventListener("click", run_algo);

function disable_button() {

    //     alert("disable_button");

    inp_gen.disabled = false;
    start.disabled = false;
}

function run_algo() {
    disable_button();
    var match_algo = algo_name.value;
    switch (match_algo) {
        case "Bubble_sort": Bubble_sort();
            break;
        case "Selection_sort": Selection_sort();
            break;
        case "Insertion_sort": Insertion_sort();
            break;
        case "Merge_sort": Merge_sort();
            break;
        case "Quick_sort": Quick_sort();
            break;

    }

    //  enable_buttons();


}

var c_delay = 0;
var speed = 1000;
inp_speed.addEventListener("change", change_speed());
function change_speed() {
    speed = inp_speed.value;
}
function div_update(cont, height, color) {
    window.setTimeout(
        function () {
            cont.style = " margin:0% " + margin_size + "%; width:" + (100 / array_size - (2 * margin_size)) + "%; height:" + height + "%; background-color:" + color + ";";
        }
        , c_delay += 50);

}

function Bubble_sort() {
    var yellow1 = document.getElementById("yellow");
    var red1 = document.getElementById("red");
    var green1 = document.getElementById("green");
    green1.innerHTML = "Sorted";
    yellow1.innerText = "Comparing";
    red1.innerHTML = "Swapping";

   // var summary = document.getElementById("summary");

    var h1=document.getElementById('sortheading');
    var p=document.getElementById('contentofsummary');
     h1.innerText="Bubble Sort";
    //summary.appendChild(h1);
     //cont.appendChild(h1);

    p.innerHTML = "Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.The pass through the list is repeated until the list is sorted. The algorithm, which is a comparison sort, is named for the way smaller or larger elements (bubble) to the top of the list. Although the algorithm is simple, it is too slow and impractical for most problems";

    var wc1=document.getElementById('wc1');
    var wc2=document.getElementById('wc2');
    wc1.innerHTML="n";
    wc2.innerHTML="2";
    var ac1=document.getElementById('ac1');
    var ac2=document.getElementById('ac2');
    ac1.innerHTML="n";
    ac2.innerHTML="2";
    var bc1=document.getElementById('bc1');
    var bc2=document.getElementById('bc2');
    bc1.innerHTML="n";
    bc2.innerHTML="";
    var sc=document.getElementById('sc');
    sc.innerHTML="1";


   // summary.appendChild(p);
    c_delay = 0;

    for (var i = 0; i < array_size - 1; i++) {
        for (var j = 0; j < array_size - i - 1; j++) {
            div_update(divs[j], div_sizes[j], "yellow");//comparing 
            div_update(divs[j + 1], div_sizes[j + 1], "yellow");// Color update
            if (div_sizes[j] > div_sizes[j + 1]) {
                div_update(divs[j], div_sizes[j], "red");//swap 
                div_update(divs[j + 1], div_sizes[j + 1], "red");//Color update

                var temp = div_sizes[j];
                div_sizes[j] = div_sizes[j + 1];
                div_sizes[j + 1] = temp;

                div_update(divs[j], div_sizes[j], "red");//Height update
                div_update(divs[j + 1], div_sizes[j + 1], "red");//Height update
            }
            div_update(divs[j], div_sizes[j], "white");//
            div_update(divs[j + 1], div_sizes[j + 1], "white");// Color update

        }
        div_update(divs[j], div_sizes[j], "green");//Color update


    }
    if (i == array_size - 1) {
        //    alert("funciton inable_button" + i);

    }

    div_update(divs[0], div_sizes[0], "green");//Color update

    enable_buttons();

}


function enable_buttons() {

    //  alert("inable_button");

    inp_gen.disabled = false;
    start.disabled = false;
}

function Selection_sort() {
    var yellow1 = document.getElementById("yellow");
    var red1 = document.getElementById("red");
    var green1 = document.getElementById("green");

    green1.innerHTML = "Sorted";
    yellow1.innerText = "Comparing";
    red1.innerHTML = "Swapping";

    var h1=document.getElementById('sortheading');
    var p=document.getElementById('contentofsummary');
     h1.innerText="Selection Sort";
    //summary.appendChild(h1);
     //cont.appendChild(h1);

    p.innerHTML = "Selection Sort is an in-place comparison sorting algorithm that divides the input list into two parts: the sublist of items already sorted, which is built up from left to right at the front (left) of the list, and the sublist of items remaining to be sorted that occupy the rest of the list. Initially, the sorted sublist is empty and the unsorted sublist is the entire input list. The algorithm proceeds by finding the smallest element in the unsorted sublist, exchanging (swapping) it with the leftmost unsorted element (putting it in sorted order), and moving the sublist boundaries one element to the right.";

    var wc1=document.getElementById('wc1');
    var wc2=document.getElementById('wc2');
    wc1.innerHTML="n";
    wc2.innerHTML="2";
    var ac1=document.getElementById('ac1');
    var ac2=document.getElementById('ac2');
    ac1.innerHTML="n";
    ac2.innerHTML="2";
    var bc1=document.getElementById('bc1');
    var bc2=document.getElementById('bc2');
    bc1.innerHTML="n";
    bc2.innerHTML="2";
    var sc=document.getElementById('sc');
    sc.innerHTML="1";


    c_delay = 0;

    for (var i = 0; i < array_size - 1; i++) {
        //div_update(divs[i],div_sizes[i],"yellow");//Color update

        index_min = i;

        for (var j = i + 1; j < array_size; j++) {
            div_update(divs[index_min], div_sizes[index_min], "yellow");//Color update
            div_update(divs[j], div_sizes[j], "yellow");//Color update

            if (div_sizes[j] < div_sizes[index_min]) {
                // if(index_min!=i)
                {
                    div_update(divs[index_min], div_sizes[index_min], "white");//Color update
                }
                index_min = j;
                div_update(divs[index_min], div_sizes[index_min], "red");//Color update
            }
            else {
                div_update(divs[j], div_sizes[j], "white");//Color update
            }
        }

        if (index_min != i) {
            var temp = div_sizes[index_min];
            div_sizes[index_min] = div_sizes[i];
            div_sizes[i] = temp;

            div_update(divs[index_min], div_sizes[index_min], "red");//Height update
            div_update(divs[i], div_sizes[i], "red");//Height update
            div_update(divs[index_min], div_sizes[index_min], "white");//Color update
        }
        div_update(divs[i], div_sizes[i], "green");//Color update
    }
    div_update(divs[i], div_sizes[i], "green");//Color update

    enable_buttons();
}
function Insertion_sort() {
    var yellow1 = document.getElementById("yellow");
    var red1 = document.getElementById("red");
    var green1 = document.getElementById("green");

    green1.innerHTML = "Sorted";
    yellow1.innerText = "Comparing";
    red1.innerHTML = "Swapping";

    var h1=document.getElementById('sortheading');
    var p=document.getElementById('contentofsummary');
     h1.innerText="Insertion Sort";
    //summary.appendChild(h1);
     //cont.appendChild(h1);

    p.innerHTML = "Insertion Sort is a simple sorting algorithm that iterates through an array and at each iteration it removes one element from the array, finds the location it belongs to in the sorted list and inserts it there, repeating until no elements remain in the unsorted list. It is an in-place, stable sorting algorithm that is inefficient on large input arrays but works well for data sets that are almost sorted. It is more efficient in practice compared to other quadratic sorting algorithms like bubble sort and selection sort.";

    var wc1=document.getElementById('wc1');
    var wc2=document.getElementById('wc2');
    wc1.innerHTML="n";
    wc2.innerHTML="2";
    var ac1=document.getElementById('ac1');
    var ac2=document.getElementById('ac2');
    ac1.innerHTML="n";
    ac2.innerHTML="2";
    var bc1=document.getElementById('bc1');
    var bc2=document.getElementById('bc2');
    bc1.innerHTML="n";
    bc2.innerHTML="";
    var sc=document.getElementById('sc');
    sc.innerHTML="1";

    c_delay = 0;

    for (var j = 0; j < array_size; j++) {
        div_update(divs[j], div_sizes[j], "yellow");//Color update
        if (j == 0) {
            div_update(divs[j], div_sizes[j], "green");//Color update

        }
        else {
            div_update(divs[j - 1], div_sizes[j - 1], "yellow");//Color update

        }
        var key = div_sizes[j];
        var i = j - 1;
        while (i >= 0 && div_sizes[i] > div_sizes[i + 1]) {
            div_update(divs[i], div_sizes[i], "red");//Color update
            div_update(divs[i + 1], div_sizes[i + 1], "red");//Color update

            var temp = div_sizes[i + 1];
            div_sizes[i + 1] = div_sizes[i];
            div_sizes[i] = temp;

            div_update(divs[i], div_sizes[i], "red");//Height update
            div_update(divs[i + 1], div_sizes[i + 1], "red");//Height update

            div_update(divs[i + 1], div_sizes[i + 1], "white");//Color update

            i -= 1;
            if (i >= 0) {
                div_update(divs[i], div_sizes[i], "yellow");//Height update
                div_update(divs[i + 1], div_sizes[i + 1], "yellow");//Height update

            }
        }
        //  div_sizes[i+1]=key;

        for (var t = 0; t <= j; t++) {
            div_update(divs[t], div_sizes[t], "green");//Color update
        }
    }
    //
    div_update(divs[j - 1], div_sizes[j - 1], "green");//Color update

    enable_buttons();
}
function Merge_sort() {
    c_delay = 0;

    var green1 = document.getElementById("green");
    var yellow1 = document.getElementById("yellow");
    var red1 = document.getElementById("red");

    green1.innerHTML = "Sorted and Overwrite From axillary array";
    yellow1.innerText = "Call Merge Sort";
    red1.innerHTML = "write In axillary array";

    var h1=document.getElementById('sortheading');
    var p=document.getElementById('contentofsummary');
     h1.innerText="Merge Sort";
    //summary.appendChild(h1);
     //cont.appendChild(h1);

    p.innerHTML = "Merge Sort is an efficient, stable sorting algorith that makes use of the divide and conquer strategy. Conceptually the algorithm works as follows    Divide the unsorted list into n sublists, each containing one element(a list of one element is considered sorted)    Repeatedly merge sublists to produce new sorted sublists until there is only one sublist remaining. This will be the sorted list.";

    var wc1=document.getElementById('wc1');
    var wc2=document.getElementById('wc2');
    wc1.innerHTML="n log(n) ";
    wc2.innerHTML="";
    var ac1=document.getElementById('ac1');
    var ac2=document.getElementById('ac2');
    ac1.innerHTML="n log(n) "  ;
    ac2.innerHTML="";
    var bc1=document.getElementById('bc1');
    var bc2=document.getElementById('bc2');
    bc1.innerHTML="n log(n) ";
    bc2.innerHTML="";
    var sc=document.getElementById('sc');
    sc.innerHTML="n";

    merge_partition(0, array_size - 1);

    enable_buttons();
}

function merge_two_array(start, mid, end) {
    var p = start, q = mid + 1;

    var Arr = [], k = 0;

    for (var i = start; i <= end; i++) {
        if (p > mid) {
            Arr[k++] = div_sizes[q++];
            div_update(divs[q - 1], div_sizes[q - 1], "red");//Color update
        }
        else if (q > end) {
            Arr[k++] = div_sizes[p++];
            div_update(divs[p - 1], div_sizes[p - 1], "red");//Color update
        }
        else if (div_sizes[p] < div_sizes[q]) {
            Arr[k++] = div_sizes[p++];
            div_update(divs[p - 1], div_sizes[p - 1], "red");//Color update
        }
        else {
            Arr[k++] = div_sizes[q++];
            div_update(divs[q - 1], div_sizes[q - 1], "red");//Color update
        }
    }

    for (var t = 0; t < k; t++) {
        div_sizes[start++] = Arr[t];
        div_update(divs[start - 1], div_sizes[start - 1], "green");//Color update
    }
}

function merge_partition(start, end) {
    if (start < end) {
        var mid = Math.floor((start + end) / 2);
        div_update(divs[mid], div_sizes[mid], "yellow");//Color update

        merge_partition(start, mid);
        merge_partition(mid + 1, end);

        merge_two_array(start, mid, end);
    }
}

function Quick_sort() {
    var yellow1 = document.getElementById("yellow");
    var red1 = document.getElementById("red");
    var green1 = document.getElementById("green");
    green1.innerHTML = "Sorted Correct Place Of Pivot Element  ";
    yellow1.innerText = "Comparing";
    red1.innerHTML = "Swapping";

    c_delay = 0;

    quick_sort(0, array_size - 1);

    enable_buttons();
}

function quick_partition(start, end) {
    var i = start + 1;
    var piv = div_sizes[start];//make the first element as pivot element.
    div_update(divs[start], div_sizes[start], "yellow");//Color update

    for (var j = start + 1; j <= end; j++) {
        //re-arrange the array by putting elements which are less than pivot on one side and which are greater that on other.
        div_update(divs[j], div_sizes[j], "yellow");//Color update
        if (div_sizes[j] < piv) {


            div_update(divs[i], div_sizes[i], "red");//Color update
            div_update(divs[j], div_sizes[j], "red");//Color update

            var temp = div_sizes[i];
            div_sizes[i] = div_sizes[j];
            div_sizes[j] = temp;

            div_update(divs[i], div_sizes[i], "red");//Height update
            div_update(divs[j], div_sizes[j], "red");//Height update

            div_update(divs[i], div_sizes[i], "white");//Height update
            div_update(divs[j], div_sizes[j], "white");//Height update

            i += 1;
        }
        else {
            div_update(divs[j], div_sizes[j], "white");//Color update
        }
    }
    div_update(divs[start], div_sizes[start], "red");//Color update
    div_update(divs[i - 1], div_sizes[i - 1], "red");//Color update

    var temp = div_sizes[start];//put the pivot element in its proper place.
    div_sizes[start] = div_sizes[i - 1];
    div_sizes[i - 1] = temp;

    div_update(divs[start], div_sizes[start], "red");//Height update
    div_update(divs[i - 1], div_sizes[i - 1], "red");//Height update

    //for(var t=start;t<=i;t++)

    div_update(divs[i - 1], div_sizes[i - 1], "green");//Color update
    if (i - 1 != start) {
        div_update(divs[start], div_sizes[start], "white");
    }

    return i - 1;//return the position of the pivot
}

function quick_sort(start, end) {  /*     if(start == end){
    div_update(divs[end],div_sizes[end],"green");//Color update

    }
    else */
    if (start <= end) {
        //stores the position of pivot element
        var piv_pos = quick_partition(start, end);
        quick_sort(start, piv_pos - 1);//sorts the left side of pivot.
        quick_sort(piv_pos + 1, end);//sorts the right side of pivot.
    }
}