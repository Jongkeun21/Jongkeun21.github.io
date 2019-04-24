function myCallback() {
    console.log("callback clicked");

    first();
}

function first() {
    readTextFile_callBack("./txt_dir/hello.txt");
    second();
}

function second() {
    readTextFile_callBack("./txt_dir/introduce.txt");
    third();
}

function third() {
    readTextFile_callBack("./txt_dir/bye.txt");
}

// var first = function (filename) {
//     readTextFile(filename);
//     second("./txt_dir/introduce.txt");
// }

// var second = function (filename) {
//     readTextFile(filename);
//     third("./txt_dir/bye.txt");
// }

// var third = function (filename) {
//     readTextFile(filename);
// }

function readTextFile_callBack(file) {
    var rawFile = new XMLHttpRequest();

    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                var allText = rawFile.responseText;
                console.log(allText);
            }
        }
    };

    rawFile.send(null);
}