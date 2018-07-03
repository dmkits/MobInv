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
        var maxWidth=document.getElementById("pInvListTableHeader").clientWidth+'px';

        document.getElementById("pInvListTableHeader").style.maxWidth=maxWidth;

        document.getElementById("pInvListHeaderTable").style.maxWidth=maxWidth;
        document.getElementById("pInvListContentTable").style.maxWidth=maxWidth;
        document.getElementById("pInvListContentTable").style.marginTop=
            ( document.getElementById("pInvListTableHeader").offsetHeight)  +'px';
        document.getElementById("pInvListTableHeader").style.position='fixed';

        var pInvList=[
          {number:1, date:"21.04.2018", totalRealQty:120, totalDocQty:130, Warehouse:"Склад 1"},
          {number:2, date:"21.04.2018", totalRealQty:120, totalDocQty:130, Warehouse:"Склад 2"},
          {number:3, date:"21.04.2018", totalRealQty:120, totalDocQty:130, Warehouse:"Склад 3"},
          {number:4, date:"21.04.2018", totalRealQty:120, totalDocQty:130, Warehouse:"Склад 4"},
          {number:5, date:"21.04.2018", totalRealQty:120, totalDocQty:130, Warehouse:"Склад 5"},
          {number:6, date:"21.04.2018", totalRealQty:120, totalDocQty:130, Warehouse:"Склад 6"},
          {number:7, date:"21.04.2018", totalRealQty:120, totalDocQty:130, Warehouse:"Склад 7"},
          {number:8, date:"21.04.2018", totalRealQty:120, totalDocQty:130, Warehouse:"Склад 8"},
          {number:9, date:"21.04.2018", totalRealQty:120, totalDocQty:130, Warehouse:"Склад 9"},
          {number:10, date:"21.04.2018", totalRealQty:120, totalDocQty:130, Warehouse:"Склад 10"},
          {number:11, date:"21.04.2018", totalRealQty:120, totalDocQty:130, Warehouse:"Склад 1"},
          {number:12, date:"21.04.2018", totalRealQty:120, totalDocQty:130, Warehouse:"Склад 2"},
          {number:13, date:"21.04.2018", totalRealQty:120, totalDocQty:130, Warehouse:"Склад 3"},
          {number:14, date:"21.04.2018", totalRealQty:120, totalDocQty:130, Warehouse:"Склад 4"},
          {number:15, date:"21.04.2018", totalRealQty:120, totalDocQty:130, Warehouse:"Склад 5"},
          {number:16, date:"21.04.2018", totalRealQty:120, totalDocQty:130, Warehouse:"Склад 6"},
          {number:17, date:"21.04.2018", totalRealQty:120, totalDocQty:130, Warehouse:"Склад 7"},
          {number:18, date:"21.04.2018", totalRealQty:120, totalDocQty:130, Warehouse:"Склад 8"},
          {number:19, date:"21.04.2018", totalRealQty:120, totalDocQty:130, Warehouse:"Склад 9"},
          {number:20, date:"21.04.2018", totalRealQty:120, totalDocQty:130, Warehouse:"Склад 10"}
        ];

        if(!pInvList || pInvList.length==0){
          app.dialog.alert("Нет данных за выбранный период");
          return;
        }
        var mainTable=document.getElementById('pInvListContentTable');
        for(var i in pInvList){
          var pinv=pInvList[i];

          var tbody=document.createElement('tbody');
          var trHigher=document.createElement('tr');

          var tdpInvNum=document.createElement('td');
          var tdWharehouse=document.createElement('td');

          tdpInvNum.innerText=pinv.number.toString();
          tdpInvNum.style.width=(document.getElementById('pinvNum').offsetWidth-11) + "px";
          tdpInvNum.style.fontWeight="bold";
          //tdWharehouse.style.width=
          //    ((document.getElementById('pInvListDocQty').offsetWidth-11)
          //        +(document.getElementById('pInvListDocQty').offsetWidth-11)
          //    )+ "px";
          tdWharehouse.innerText=pinv.Warehouse;

          trHigher.appendChild(tdpInvNum);
          trHigher.appendChild(tdWharehouse);
          tdWharehouse.colSpan=2;
          tdWharehouse.className="blue-text";
          var trLower=document.createElement('tr');
          var tdDate=document.createElement('td');
          var tdRef=document.createElement('td');
          var tdReal=document.createElement('td');
          tdRef.className="text-right";
          tdReal.className="text-right";

          trLower.appendChild(tdDate);
          trLower.appendChild(tdRef);
          trLower.appendChild(tdReal);

          tdDate.innerText=pinv.date;
          tdRef.innerText=pinv.totalDocQty.toString();
          tdReal.innerText=pinv.totalRealQty.toString();

          tdDate.style.width=(document.getElementById('pinvNum').offsetWidth-11) + "px";
          tdRef.style.width=(document.getElementById('pInvListDocQty').offsetWidth-11) + "px";
          tdReal.style.width=(document.getElementById('pInvListRealQty').offsetWidth-11) + "px";

          tbody.appendChild(trHigher);
          tbody.appendChild(trLower);

          tbody.onclick=function(){
            console.log('onclick');

            var app=getAppObj();
            console.log("current",app.views.current);
            app.views.current.router.navigate('/pInv/'); // + url

            //app.views.current.router.navigate('/pInv/', {
            //  context:{
            //    name:"Iana"
            //    //data:function(){
            //    //  return pinv;
            //    //}
            //  }
            //});
          };
          mainTable.appendChild(tbody);
        }
      }
    }
  },
  // Default route (404 page). MUST BE THE LAST\
  {
    path: '/pInv/',
    //content:"",
    //url: './pages/pInv.html',
    componentUrl:'./pages/pInv.html'
    //data: function () {
    //  return {
    //    name: 'Iana'
    //  }
    //}
    //on: {
    //  pageAfterIn: function (event, page){
    //    page.Template7.compile(page);
    //  }
    //}
  },
  {
    path: '(.*)',
    url: './pages/404.html'
  }
];
