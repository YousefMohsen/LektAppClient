const lektApi = "http://yousefmohsen.dk:3000";

export default class MessageStore{
  msgList = [];
  
  constructor() {
    //  this.testMethod();
       //this.getFlightByDestination("CPH");

   }

   returnList(aList){
      return
  
        };
  
   request(){
      fetch(lektApi)
      .then(function(response){
        return response.text()
      }).then(function(text){
        alert(text);
      });
    }
  
    
}

