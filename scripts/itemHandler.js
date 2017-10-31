function returnSpace(totalSpaces, decrement){
    space = '';
    amount = totalSpaces - decrement;
    for(i = 0; i < amount; i++){
        space += '&nbsp';
    }
    return space;
}

function listRooms(itemList){

    var totalPrices = new Map();
    var itemAmounts = new Map();

    for(i = 0; i < itemList.length; i++){
        item = itemList[i];
        var roomName = item['Room Name'];
        if(Array.from(totalPrices.keys()).indexOf(item['Room Name'])==-1 && item['Room Name']){
            //add room to map with initial value
            totalPrices.set(roomName, parseInt(item['Current Price']));
            itemAmounts.set(roomName, 1);
        }else if(roomName){
            var prevVal = totalPrices.get(roomName);
            totalPrices.set(roomName, prevVal + parseInt(item['Current Price']))
            itemAmounts.set(roomName, itemAmounts.get(roomName)+1);
            //add to room value
        }

    }

    var output = '';


    var rooms = totalPrices.keys();
    while(true){
        var roomKey = rooms.next();
        if(roomKey.value){
            output += roomKey.value + returnSpace(40, roomKey.value.length) + totalPrices.get(roomKey.value)+ ',00e' +
                returnSpace(10, 0)+ itemAmounts.get(roomKey.value) +'<br>';
        }else{
            break;
        }
    }

    /*for(let i = 0; i < itemList.length; i++){
        item = itemList[i];
        output += item['Room Name'] + '/n';
    }*/
    document.getElementById('output').innerHTML = output;
}



