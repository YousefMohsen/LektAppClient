const lektApi = "http://yousefmohsen.dk:3000";
import {observable, action} from 'mobx'

//  @observable  msgList = [{"title":"Lektier til imorgen","msg":"Læs . s. 10 - 277 i Java Software Solutions Eighth edition","sender":"Leo Messi","date":"2017-10-02T12:02:00.000Z", "iconUrl":"https://www.fifaindex.com/static/FIFA14/images/players/128/158023.png"},{"title":"Lektier til på tirsdag","msg":"Læs bogen Sapiens - en kort historie om menneskeheden ","sender":"Thiago","date":"2017-10-13T12:02:00.000Z" ,"iconUrl":"https://www.fifaindex.com/static/FIFA14/images/players/128/189509.png"},{"title":"Aflyst time","msg":"Barcelona spiller imorgen og timen er defor selvfølgelig aflyst","sender":"Xavi","date":"2017-10-02T14:02:00.000Z", "iconUrl":"https://www.fifaindex.com/static/FIFA14/images/players/128/10535.png"},{"title":"Vigtigt!","msg":"Forza Lundtofte Boldklub","sender":"Claus Abildgaard","date":"2017-10-02T12:02:00.000Z", "iconUrl":""}];

 class MessageStore{

  @observable  msgList = [];
  constructor() {
   // this.request();
    //setTimeout(this.changeList(), 4000);
    this.setMsgList = this.setMsgList.bind(this)
    
    this.request = this.request.bind(this)
    this.changeList = this.changeList.bind(this)
    
   // this.request();
   }
//deleteMe
 
changeList = function(){
  this.request();  

  //newList  =  [{"title":"test","msg":"Læs . s. 10 - 277 i Java Software Solutions Eighth edition","sender":"Leo Messi","date":"2017-10-02T12:02:00.000Z", "iconUrl":"https://www.fifaindex.com/static/FIFA14/images/players/128/158023.png"},{"title":"Lektier til på tirsdag","msg":"Læs bogen Sapiens - en kort historie om menneskeheden ","sender":"Thiago","date":"2017-10-13T12:02:00.000Z" ,"iconUrl":"https://www.fifaindex.com/static/FIFA14/images/players/128/189509.png"},{"title":"Aflyst time","msg":"Barcelona spiller imorgen og timen er defor selvfølgelig aflyst","sender":"Xavi","date":"2017-10-02T14:02:00.000Z", "iconUrl":"https://www.fifaindex.com/static/FIFA14/images/players/128/10535.png"},{"title":"Vigtigt!","msg":"Forza Lundtofte Boldklub","sender":"Claus Abildgaard","date":"2017-10-02T12:02:00.000Z", "iconUrl":""}];
   // this.msgList = newList;
    console.log("change list");
  
        };


    setMsgList = function(fetchedMsgList){
     // console.log(newFlightLis);
       console.log("setList!")
     console.log(fetchedMsgList);
      this.msgList = fetchedMsgList;

    }
  
   request = function(){
      fetch(lektApi)
      .then(function(response){
        return response.json()
      }).then((res)=>{
        
     //   console.log(res);
        this.setMsgList(res);
       
       // alert(text[0].title);
      });
    }
  
    
}

export default new MessageStore();
