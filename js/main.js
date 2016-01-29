$(document).ready(function(){
    var opic = $.ajax({
        url: 'json/main.json',
        type: 'GET',
        dataType: 'JSON'

    });
    opic.success(function(data) {
        var odata = data;
for(var i=0;i<odata.Images.length;i++){
        $('.carousel-inner #image').eq(i).attr('src', odata.Images[i].img);   
   }  

for(var i=0;i<odata.Item.length;i++){
        $('.tabBorder').eq(i).html(odata.Item[i].description);
        $('.title1').eq(i).html(odata.Item[i].title);
        $('#tabDiv1 #logo').eq(i).attr('src',odata.Item[i].logo);
       $('.award-style #award').eq(i).attr('src',odata.Item1[i].img);
    }
    });
$('#viewDetails1').click(function() {
        $('#contentID').html($('.details').eq(0).find('p').text());
        $('#myDetails').modal('show');

    });
    $('#viewDetails2').click(function() {
        $('#contentID').html($('.details').eq(1).find('p').text());
        $('#myDetails').modal('show');

    });
    $('#viewDetails3').click(function() {
        $('#contentID').html($('.details').eq(2).find('p').text());
        $('#myDetails').modal('show');

    });
    $('#viewDetails4').click(function() {
        $('#contentID').html($('.details').eq(3).find('p').text());
        $('#myDetails').modal('show');

    });


    $('#save').on('click', function() {
        $('table').append('<tr id="myrow" role="row" class="info"><td>' + $('#sno').val() + '</td>' + '<td>' + $('#empname').val() + '</td>' + '<td>' + $('#empid').val() + '</td>' + '<td>' + $('#address').val() + '</td>' + '<td><button class="btn btn-primary" id="editBtn">Edit</button></td>' + '<td><button class="btn btn-primary" id="view"  data-toggle="modal" data-target="#myModal2">View</button></td>' + '<td><button class="btn btn-primary" id="delete">Delete</button></td>' + '<td><span class="glyphicon glyphicon-info-sign" id="info"></span></td>' + '</tr>');
    });
 $('#mytable').on('click', '#delete', function() {
        $(this).parent().parent().remove();
    });
   $('#mytable').on('click', '#view', function() {
        var a = $(this).closest('td').parent();
        $('#contentload').html('Serial No:' + a.find('td').eq(0).text() + '<br>' + 'Employee Name:' + a.find('td').eq(1).text() + '<br>' + 'Employee id:' + a.find('td').eq(2).text() + '<br>' + 'Address:' + a.find('td').eq(3).text());

    });
   var col1, col2, col3, col4;
    $('#mytable').on('click', '#editBtn', function() {
        $('#exampleModal').modal('show');
        $('#save').hide();
        $('#update').show();
        var tr = $(this).closest('td').parent();
        col1 = tr.find('td').eq(0);
        col2 = tr.find('td').eq(1);
        col3 = tr.find('td').eq(2);
        col4 = tr.find('td').eq(3);
        $('#sno').val(col1.text());
        $('#empname').val(col2.text());
        $('#empid').val(col3.text());
        $('#address').val(col4.text());
    });
    $('#update').click(function() {
        col1.text($('#sno').val());
        col2.text($('#empname').val());
        col3.text($('#empid').val());
        col4.text($('#address').val());
        $('#exampleModal').modal('hide');
    });
    $('#create').on('click',function(){
        $('#save').show();
        $('#update').hide();
    });

$('#mytable').on("mouseover", "#info", function() {
        var tr = $(this).closest('td').parent();
        $(this).tooltip({
            title: 'Employee Name:' + tr.find('td').eq(1).text(),
            placement: "top"
        });
    });
 $(window).on('load resize',function() {
  if ($(window).width()<400) {
    $('#table-responsive').attr('class','table-responsive');
  }
 else {
   $('#table-responsive').removeAttr('class');
 }
});

 $(function() {

  // initial sort set using sortList option
  $(".table").tablesorter({
    theme : 'blue',
    // sort on the first column and second column in ascending order
    sortList: [[0,0],[1,0]]
  });
});
 });
    