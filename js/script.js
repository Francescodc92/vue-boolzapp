const { createApp } = Vue;
const DateTime = luxon.DateTime;

createApp({
  data() {
    return {
      newMessage: '',
      contactActiveIndex : 0,
      searchInput:'',
      darkTheme: false,
      contacts: [
        {
          name: 'Michele',
          avatar: './img/avatar_1.jpg',
          visible: true,
          contactWriting:"",
          haveMessage:false,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Hai portato a spasso il cane?',
              status: 'sent',
              modalVisible:false,
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'Ricordati di stendere i panni',
              status: 'sent',
              modalVisible:false,
            },
            {
              date: '10/01/2020 16:15:22',
              message: 'Tutto fatto!',
              status: 'received',
              modalVisible:false,
            }
          ],
        },
        {
          name: 'Fabio',
          avatar: './img/avatar_2.jpg',
          visible: true,
          contactWriting:"",
          haveMessage:false,
          messages: [
            {
              date: '20/03/2020 16:30:00',
              message: 'Ciao come stai?',
              status: 'sent',
              modalVisible:false,
            },
            {
              date: '20/03/2020 16:30:55',
              message: 'Bene grazie! Stasera ci vediamo?',
              status: 'received',
              modalVisible:false,
            },
            {
              date: '20/03/2020 16:35:00',
              message: 'Mi piacerebbe ma devo andare a fare la spesa.',
              status: 'sent',
              modalVisible:false,
            }
          ],
        },
        {
            name: 'Samuele',
            avatar: './img/avatar_3.jpg',
            visible: true,
            contactWriting:"",
            haveMessage:false,
            messages: [
            {
              date: '28/03/2020 10:10:40',
              message: 'La Marianna va in campagna',
              status: 'received',
              modalVisible:false,
            },
            {
              date: '28/03/2020 10:20:10',
              message: 'Sicuro di non aver sbagliato chat?',
              status: 'sent',
              modalVisible:false,
            },
            {
              date: '28/03/2020 16:15:22',
              message: 'Ah scusa!',
              status: 'received',
              modalVisible:false,
            }
          ],
        },
        {
          name: 'Alessandro B.',
          avatar: './img/avatar_4.jpg',
          visible: true,
          contactWriting:"",
          haveMessage:false,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Lo sai che ha aperto una nuova pizzeria?',
              status: 'sent',
              modalVisible:false,
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'Si, ma preferirei andare al cinema',
              status: 'received',
              modalVisible:false,
            }
          ],
        },
        {
          name: 'Alessandro L.',
          avatar: './img/avatar_5.jpg',
          visible: true,
          contactWriting:"",
          haveMessage:false,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Ricordati di chiamare la nonna',
              status: 'sent',
              modalVisible:false,
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'Va bene, stasera la sento',
              status: 'received',
              modalVisible:false,
            }
          ],
        },
        {
          name: 'Claudia',
          avatar: './img/avatar_6.jpg',
          visible: true,
          contactWriting:"",
          haveMessage:false,
          messages: [
          {
            date: '10/01/2020 15:30:55',
            message: 'Ciao Claudia, hai novità?',
            status: 'sent',
            modalVisible:false,
          },
          {
            date: '10/01/2020 15:50:00',
            message: 'Non ancora',
            status: 'received',
            modalVisible:false,
          },
          {
            date: '10/01/2020 15:51:00',
            message: 'Nessuna nuova, buona nuova',
            status: 'sent',
            modalVisible:false,
          }
        ],
        },
        {
          name: 'Federico',
          avatar: './img/avatar_7.jpg',
          visible: true,
          contactWriting:"",
          haveMessage:false,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Fai gli auguri a Martina che è il suo compleanno!',
              status: 'sent',
              modalVisible :false,
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'Grazie per avermelo ricordato, le scrivo subito!',
              status: 'received',
              modalVisible :false,
            }
          ],
        },
        {
          name: 'Davide',
          avatar: './img/avatar_8.jpg',
          visible: true,
          contactWriting:"",
          haveMessage:false,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Ciao, andiamo a mangiare la pizza stasera?',
              status: 'received',
              modalVisible: false,
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
              status: 'sent',
              modalVisible: false,
            },
            {
              date: '10/01/2020 15:51:00',
              message: 'OK!!',
              status: 'received',
              modalVisible: false,
            }
          ],
        },
        {
          name: 'Davide 2',
          avatar: './img/avatar_8.jpg',
          visible: true,
          contactWriting:"",
          haveMessage:false,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Ciao, andiamo a mangiare la pizza stasera?',
              status: 'received',
              modalVisible :false,
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
              status: 'sent',
              modalVisible :false,
            },
            {
              date: '10/01/2020 15:51:00',
              message: 'OK!!',
              status: 'received',
              modalVisible :false,
            },
            {
              date: '10/01/2020 15:30:55',
              message: 'Ciao, andiamo a mangiare la pizza stasera?',
              status: 'received',
              modalVisible :false,
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
              status: 'sent',
              modalVisible :false,
            },
            {
              date: '10/01/2020 15:51:00',
              message: 'OK!!',
              status: 'received',
              modalVisible :false,
            },
            {
              date: '10/01/2020 15:30:55',
              message: 'Ciao, andiamo a mangiare la pizza stasera?',
              status: 'received',
              modalVisible :false,
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
              status: 'sent',
              modalVisible :false,
            },
            {
              date: '10/01/2020 15:51:00',
              message: 'OK!!',
              status: 'received',
              modalVisible :false,
            },
            {
              date: '10/01/2020 15:30:55',
              message: 'Ciao, andiamo a mangiare la pizza stasera?',
              status: 'received',
              modalVisible :false,
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
              status: 'sent',
              modalVisible :false,
            },
            {
              date: '10/01/2020 15:51:00',
              message: 'OK!!',
              status: 'received',
              modalVisible :false,
            },
            {
              date: '10/01/2020 15:30:55',
              message: 'Ciao, andiamo a mangiare la pizza stasera?',
              status: 'received',
              modalVisible :false,
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
              status: 'sent',
              modalVisible :false,
            },
            {
              date: '10/01/2020 15:51:00',
              message: 'OK!!',
              status: 'received',
              modalVisible :false,
            },
            {
              date: '10/01/2020 15:30:55',
              message: 'Ciao, andiamo a mangiare la pizza stasera?',
              status: 'received',
              modalVisible :false,
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
              status: 'sent',
              modalVisible :false,
            },
            {
              date: '10/01/2020 15:51:00',
              message: 'OK!!',
              status: 'received',
              modalVisible :false,
            },
          ],
        }
      ]
    }
  },
  methods:{
    activeChat(index){
      this.contactActiveIndex = index;
      this.contacts[index].haveMessage = false;
    },
    sendMessage(){
      if(this.newMessage.trim() != ''){
        const currentIndex = this.contactActiveIndex;
        const status = 'sent';
        const text = this.newMessage  
        this.contacts[currentIndex].messages.push(
          this.createMessage(text, status )
        );
        this.newMessage = '';
        this.contacts[this.contactActiveIndex].contactWriting = 'digitando...';
        this.replayMessage(currentIndex)
      };

    },
    replayMessage(currentIndex){
       const randomTime = Math.floor(Math.random() * (4000 - 1000 + 1) ) + 1000;
       const status = 'received'
       const responseText = 'risposta'
       setTimeout(() => {
         this.contacts[currentIndex].messages.push(
           this.createMessage(responseText, status )
         );
         this.contacts[currentIndex].contactWriting = '';
         if(currentIndex != this.contactActiveIndex){
           this.contacts[currentIndex].haveMessage = true;
         }
       }, randomTime);
    },
    createMessage(textMessage, status){
      const message = {
        date: DateTime.now().toLocaleString(DateTime.TIME_FULL) + ' ' + DateTime.now().toLocaleString(DateTime.TIME_WITH_SECONDS),
        message: textMessage,
        status: status
      }
      return message
    },
    contactFilter(){
      const searchInputLower = this.searchInput.toLowerCase()
      this.contacts.forEach(element => {
        element.visible = true;
        const elementNameLower = element.name.toLowerCase();
        if(!elementNameLower.includes(searchInputLower)){
          element.visible = false;
        };
      });
    },
    getMessageDate(index){
      if(this.contacts[index].messages.length > 0){
        const currentContact = this.contacts[index]
        const lastMessageDate = currentContact.messages[currentContact.messages.length - 1 ].date  
        return  this.formatDate(lastMessageDate).day
      };
      return null;
      
    },
    openModal(index){
        this.contacts[this.contactActiveIndex].messages.forEach((message, i) => {
          if(i == index){
            message.modalVisible = !message.modalVisible;
          }else{
            message.modalVisible = false;
          }
        });
    },
    deleteMSG(index){
      this.contacts[this.contactActiveIndex].messages.splice(index, 1);
    },
    getLastMessage(index){
      if(this.contacts[index].messages.length > 0){
        const currentContact = this.contacts[index]
        const lastMessage = currentContact.messages[currentContact.messages.length - 1 ].message 
        return lastMessage
      };
      return null;
    },
    getLastDate(){
      if(this.contacts[this.contactActiveIndex].messages.length > 0){
        const currentContact = this.contacts[this.contactActiveIndex]
        const lastMessageFullDate = currentContact.messages[currentContact.messages.length - 1 ].date 
        const lastMessageFormattedDate = this.formatDate(lastMessageFullDate)
        return lastMessageFormattedDate.hour
      };
      return null;
    },
    formatDate(date){
      const splittedDate = date.split(' ');
      const splittedHour = splittedDate[1].split(':');
      const formattedHour = splittedHour[0] + ':' + splittedHour[1] ;
      const formattedDate = {
        hour : formattedHour,
        day: splittedDate[0]
      };
      

      return formattedDate;
    },
  }
}).mount('#app');
