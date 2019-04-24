// console.log("promise opened");

var _promise = function (param) {
    return new Promise(function (resolve, reject) {
        if (param) {
            resolve("finish!");
        } else {
            reject(Error("error called"));
        }
    });
};

function myPromise() {
    console.log("promise clicked");
    
    _promise(true)
    .then(first())
    .then(second())
    .then(third());
}

function readTextFile_promise(file) {
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

var first = function () {
    readTextFile_promise("./txt_dir/hello.txt");
}

var second = function () {
    readTextFile_promise("./txt_dir/introduce.txt");
}

var third = function () {
    readTextFile_promise("./txt_dir/bye.txt");
}