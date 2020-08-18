
module.exports.myDateTime = function () {
    var dateUTC = new Date().toUTCString();
    return dateUTC;
  }; 

module.exports.greating = function(){
    let hours = new Date().getHours();
        switch(true){
        case (hours<=5 || hours>23):  
        return 'Good Night';
        break;
        case (hours<=11):  
        return 'Good Morning';
        break;
        case(hours<=17):
        return 'Good Afternon';
        break;
        case(hours<=23):
        return 'Good Evening';
        break;
        default: console.log("wrong input");
        break;
    };
}  

  