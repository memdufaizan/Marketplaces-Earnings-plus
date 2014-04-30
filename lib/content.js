if($(".page-tabs li.selected a").html() == "Earnings"){
  
    $.fn.reverseChildren = function() {
      return this.each(function(){
        var $this = $(this);
        $this.children().each(function(){
          $this.prepend(this);
        });
      });
    };
  
    $('#referrals_table tbody').reverseChildren();
    
    var styles = {
      backgroundColor : "#cbe6c2",
      borderTop: "1px solid",
      borderBottom: "1px solid",
      borderColor: "#6e8768",
      fontSize: "13px",
      color: "#2e3c2c",
      padding: "5px 10px",
      fontWeight: "bold"
    };
    
    $("#referrals_table tfoot").contents().clone().prependTo("#referrals_table tbody");
    $("#referrals_table tbody tr:first-child td").css(styles);
    
    var span = $("#referrals_table thead tr td");
    span.replaceWith(function () {
        return $('<th/>', {        
            html: this.innerHTML
        });
    });
        
    
    var newElement = '<li class="payment-request__service"><div class="fancy-label js-fancy-label"><label><div class="fancy-label__title"></div><div class="fancy-label__body"><span class="fancy-label__sub-title"><strong></strong></span></div></label></div></li>';
    
        var currentMonth = $( ".table-general tbody td:first-child strong" ).html();
        $(".content-s").prepend('<h2 class="underlined">'+currentMonth+'</h2><ul class="payment-request__choices"></ul>');
        $(".payment-request__choices").append(newElement);
        $(".payment-request__choices").append(newElement);
        $(".payment-request__choices").append(newElement);
        $(".payment-request__choices").append(newElement);
    
    
    $( ".table-general thead th" ).each(function( index ) {
      if ( index !== 0 ) {
          var content = $(this).text();      
          $("ul.payment-request__choices li:nth-child("+index+") .fancy-label__title").html(content);
      }
    });
    $( ".table-general tbody tr:nth-child(2) td" ).each(function( index ) {
      if ( index !== 0 ) {
          var data = $(this).text();          
          var arr = data.split(' ');
          $("ul.payment-request__choices li:nth-child("+index+") .fancy-label__sub-title strong").html(arr[0]);
      }
    });

}