routes = [
  {
    path: '/',
    url: './index.html'
  },
  {
    path: '/inventory/',
    url: './pages/inventory.html',
    on: {
      //pageBeforeIn: function (event, page) {
      //  // do something before page gets into the view
      //},
      pageAfterIn: function (event, page) {

        $$(document).on('click','#enterRowButton' ,function(){
          createTableRow($$("#barCodeInput").val());
        });

        $$("#app").prop("data-workingDoc", "inventory");

        var maxWidth=document.getElementById("tableWithFixedHead").clientWidth+'px';

        document.getElementById("tableWithFixedHead").style.maxWidth=maxWidth;

        document.getElementById("tableFixedHeader").style.maxWidth=maxWidth;
        document.getElementById("inventoryTable").style.maxWidth=maxWidth;

        document.getElementById("tableWithFixedFooter").style.maxWidth=maxWidth;
        document.getElementById("footTableFixedHeader").style.maxWidth=maxWidth;

        document.getElementById("inventoryTable").style.marginTop=
            ( document.getElementById("tableFixedHeader").offsetHeight)  +'px';
        document.getElementById("tableFixedHeader").style.position='fixed';

        document.getElementById("footTableFixedHeader").style.position='fixed';
        document.getElementById("footTableFixedHeader").style.maxWidth=maxWidth;


        document.getElementById("totalRowQty").style.width
            =(document.getElementById('num_td').offsetWidth-10) + "px";

        document.getElementById("totalEmpty").style.width
            =(document.getElementById('code_td').offsetWidth
            + document.getElementById('um_td').offsetWidth-10) + "px";

        document.getElementById("totalDocQty").style.width=
            (document.getElementById('doc_qty').offsetWidth-11) + "px";
        document.getElementById("totalRealQty").style.width=
            (document.getElementById('real_qty').offsetWidth-11) + "px";
      }
    }
  },
  {
    path: '/pInvList/',
    url: './pages/pInvList.html',
    on: {
      pageAfterIn: function (event, page) {
        var app=getAppObj();
          var calendarModal = app.calendar.create({
            inputEl: '#demo-calendar-modal',
            rangePicker: true,
            openIn: 'customModal',
            header: true,
            footer: true,
            dateFormat: 'dd.mm.yy',
            monthNames:['Январь', 'Февраль', 'Март','Апрель','Май','Июнь','Июль','Август',
              'Сентябрь','Октябрь','Ноябрь','Декабрь'],
            monthNamesShort:['янв', 'фев', 'мар','апр','май','июн','июл','авг',
              'сен','окт','ноя','дек'],
            dayNames:['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'],
            dayNamesShort:['вс','пн','вт','ср','чт','пт','сб'],
            toolbarCloseText:'Выбрать'
            //on:{
            //  closed:()=>{
            //    console.log(calendarModal.value);
            //  }
            //}
          });
        }
    }
  },
  // Default route (404 page). MUST BE THE LAST\
  {
    path: '(.*)',
    url: './pages/404.html'
  }
];
