// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
= require jquery
= require jquery_ujs
= require_tree .

$(document).ready(function() {
	$("#myModal").modal('show');
	$('#collapse_button').click(function() {
       $('.collapse').toggle;
      });
	$('.accordion-toggle').click(function() {
		$(this).toggleClass('active');
		$('i.icon-plus').toggleClass('icon-minus');
	});
    $('.accordion-inner').tooltip({
      selector: "a[data-toggle=tooltip]";
    });
    $('#accept').click(function() {
       $('#continue_results').toggleClass('.disabled');
      });

   	
});
$(document).ready(function() {
    $('#example').dataTable( {
        "sDom": "<'row'<'span6'l><'span6'f>r>t<'row'<'span6'i><'span6'p>>"
    } );
} );
$.extend( $.fn.dataTableExt.oStdClasses, {
    "sWrapper": "dataTables_wrapper form-inline"
} );
