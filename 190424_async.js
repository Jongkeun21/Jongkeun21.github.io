// console.log("promise opened");
var first = "./txt_dir/hello.txt";
var second = "./txt_dir/introduce.txt";
var third = "./txt_dir/bye.txt";

function _promise(seq) {
    return new Promise(function (resolve, reject) {
        console.log(readTextFile_async(seq));
        resolve("finish!");
    });
}

function readTextFile_async(file) {
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

async function myAsync() {
    await _promise(first);
    await _promise(second);
    await _promise(third);
}