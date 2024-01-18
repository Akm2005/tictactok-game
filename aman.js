fun = () => {
    let one = document.querySelector('#one').value;
    console.log(one);
    let two = document.querySelector('#two').value;
    console.log(two);
    let three = document.querySelector('#three').value;
    console.log(three);
    let four = document.querySelector('#four').value;
    console.log(four);
    let five = document.querySelector('#five').value;
    console.log(five);
    let six = document.querySelector('#six').value;
    console.log(six);
    let seven = document.querySelector('#seven').value;
    console.log(seven);
    let eight = document.querySelector('#eight').value;
    console.log(eight);
    let nine = document.querySelector('#nine').value;
    console.log(nine);

    if (one && two && three && one == two && two == three) {
        document.querySelector('#result').innerHTML = `✨✨${one} is a winner✨✨`;
    } else if (one && four && seven && one == four && four == seven) {
        document.querySelector('#result').innerHTML = `✨✨${one} is a winner✨✨`;
    } else if (one && five && nine && one == five && five == nine) {
        document.querySelector('#result').innerHTML = `✨✨${one} is a winner✨✨`;
    } else if (two && five && eight && two == five && five == eight) {
        document.querySelector('#result').innerHTML = `✨✨${two} is a winner✨✨`;
    } else if (three && six && nine && three == six && six == nine) {
        document.querySelector('#result').innerHTML = `✨✨${nine} is a winner✨✨`;
    } else if (four && five && six && four == five && five == six) {
        document.querySelector('#result').innerHTML = `✨✨${four} is a winner✨✨`;
    } else if (three && five && seven && three == five && five == seven) {
        document.querySelector('#result').innerHTML = `✨✨${five} is a winner✨✨`;
    } else if (seven && eight && nine && seven == eight && eight == nine) {
        document.querySelector('#result').innerHTML = `✨✨${seven} is a winner✨✨`;
    } else {
        document.querySelector('#result').innerHTML = `✨✨Now no one is a winner✨✨`;
    }
}
