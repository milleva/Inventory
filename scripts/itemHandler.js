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

    var table = document.getElementById('table');
    document.getElementById('th1').innerHTML = 'Room Name';
    document.getElementById('th2').innerHTML = 'Total Items';
    document.getElementById('th3').innerHTML = 'Total Worth';

    var rooms = totalPrices.keys();
    while(true){
        var roomKey = rooms.next();
        if(roomKey.value){
            var tr = document.createElement('tr');
            var td1 = document.createElement('td');
            var td2 = document.createElement('td');
            var td3 = document.createElement('td');
            td1.appendChild(document.createTextNode(roomKey.value));
            td2.appendChild(document.createTextNode(itemAmounts.get(roomKey.value)));
            td3.appendChild(document.createTextNode(totalPrices.get(roomKey.value)));
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            table.appendChild(tr);
            tr.style.color = 'black';
        }else{
            break;
        }
    }

    /*var output = '';


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


    document.getElementById('output').innerHTML = output;*/
}



