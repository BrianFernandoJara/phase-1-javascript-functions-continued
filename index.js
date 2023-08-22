// code your solution here
function saturdayFun(activity){
    if( activity !== undefined ){
        return `This Saturday, I want to ${activity}!`;
    }else{
        return `This Saturday, I want to roller-skate!`;
    }
}
const mondayWork = function(activity){
    if(activity !== undefined){
        return `This Monday, I will ${activity}.`;
    }else{
        return `This Monday, I will go to the office.`;
    }
}
function wrapAdjective(emphasize = "*"){
    return function(adjective = "special"){ 
        return `You are ${emphasize+adjective+emphasize}!`;
    }
}
