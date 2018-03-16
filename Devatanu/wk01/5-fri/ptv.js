stops = [
    ["Flinders Street", "Richmond", "East Richmond", "Burnley", "Hawthorn", "Glenferrie"],
    ["Flagstaff", "Melbourne Central", "Parliament", "Richmond", "Kooyong", "Tooronga"],
    ["Southern Cross", "Richmond", "South Yarra", "Prahran", "Windsor"]
]

var startStation = 'Windsor';
var endStation = 'Glenferrie';

var startLine = undefined;
var endLine = undefined;

// find start and end line
for(var i = 0; i < stops.length; i++){
    if(startLine === undefined && stops[i].includes(startStation)){
        startLine = i;
    }
    if(endLine === undefined && stops[i].includes(endStation)){
        endLine = i;
    }
}

// Richmond is available on any line
if(startStation == "Richmond"){
    startLine = endLine;
}
if(endStation == "Richmond"){
    endLine = startLine;
}


//check if both start and end lines are valid
var printJourney = function(journeyArray){
    console.log(`Origin: ${journeyArray[0]}`);
    console.log(`Destination: ${journeyArray[journeyArray.length-1]}\n`);
    console.log(journeyArray.join('---->'));
    console.log(`${journeyArray.length-1} stops in total`);
}

//generate an array of stations in a single line
var mapSingleLineJourney = function(start,end, line){
    startIndex = stops[line].indexOf(start);
    endIndex = stops[line].indexOf(end);

    //if start station is left of end station
    if (startIndex<endIndex){
        return stops[line].slice(startIndex,endIndex+1);
    }
    //if start station is right of end station
    else if (startIndex>endIndex){
        return stops[line].slice(endIndex,startIndex+1).reverse();
    }
    else{
        return [];
    }
}


var journeyArray = []
//check if start and end are in the same line
if (startLine === endLine){
    //if they are then map out the line
    journeyArray = mapSingleLineJourney(startStation,endStation,startLine);
}

else{
    // if they are not then map journey for each line

    firstJourney = mapSingleLineJourney(startStation,'Richmond',startLine);
    nextJourney = mapSingleLineJourney('Richmond',endStation,endLine);
    
    for (var i = 0; i < firstJourney.length; i++){
        journeyArray.push(firstJourney[i]);
    }
    for (var i = 1; i < nextJourney.length; i++){
        journeyArray.push(nextJourney[i]);
    }
}


printJourney(journeyArray);