var printable = false;
let itemList;
var file;
var config = {
    delimiter: "",	// auto-detect
    newline: "",	// auto-detect
    quoteChar: '"',
    header: true,
    dynamicTyping: false,
    preview: 0,
    encoding: "",
    worker: false,
    comments: false,
    step: undefined,
    complete: function(results, file) {
        //console.log("Parsing complete:", results.data.length, file);
        itemList = results.data;
    },
    error: undefined,
    download: false,
    skipEmptyLines: false,
    chunk: undefined,
    fastMode: undefined,
    beforeFirstChunk: undefined,
    withCredentials: undefined
}
var target = document.getElementById('fileDrop');

target.addEventListener("dragover", function(event) {
    event.preventDefault();
}, false);

target.addEventListener("drop", function(event) {

    // cancel default actions
    event.preventDefault();

    var i = 0,
        files = event.dataTransfer.files,
        len = files.length;
    file = files;

    for (; i < len; i++) {
        console.log("Filename: " + files[i].name);
        console.log("Type: " + files[i].type);
        console.log("Size: " + files[i].size + " bytes");
    }

}, false);

function makePrintable(){
    var fileDropArea = document.getElementById('fileDrop');
    var parseButton = document.getElementById('parseButton');
    var listRoomsButton = document.getElementById('listRoomsButton');
    if(!printable){
        fileDropArea.style.visibility = 'hidden';
        parseButton.style.visibility = 'hidden';
        listRoomsButton.style.visibility = 'hidden';
        printable = true;
    }else{
        fileDropArea.style.visibility = 'visible';
        parseButton.style.visibility = 'visible';
        listRoomsButton.style.visibility = 'visible';
        printable = false;
    }
}

function parse(){
    console.log(file);
    var f = new File(file, config);

    Papa.parse(f, config);
}

function listRoomsAfterParse(){
    listRooms(itemList);
}


