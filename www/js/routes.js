routes = [
  {
    path: '/',
    url: './index.html'
  },
  {
    path: '/pInvDetail/',
    url: './pages/pInvDetail.html',
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
  //{
  //  path: '(.*)',
  //  url: './pages/404.html'
  //},

  // Default route (404 page). MUST BE THE LAST\
  {
    path: '(.*)',
    url: './pages/404.html'
  }
];
