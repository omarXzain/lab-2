'use strict';


let allInfo = [];
$(document).ready(function () {

  // Constructor Building
  function ZooGallery(animal) {
    this.title = animal.title;
    this.image_url = animal.image_url;
    this.description = animal.description;
    this.keyword = animal.keyword;
    this.horns = animal.horns;

    allInfo.push(this);
  }
  //===========================================

  ZooGallery.prototype.picViewer = function () {
    let Options = $('<option></option>').text(this.keyword);
    $('select').append(Options);
    
    let Template = $('#myTemplate').html();
    let htmlText = Mustache.render(Template, this);
    $('#second-page').append(htmlText);
    
  };

 //============================================

  // ajax setup
  const ajaxSettings = {
    method: 'get',
    dataType: 'json'
  };

  const pageView = (pageNum) => {

  
  $.ajax(`data/page-${pageNum}.json`, ajaxSettings).then(data => {

  
    data.forEach(myZoo => {
      let pet = new ZooGallery(myZoo);
      pet.picViewer();
    });
  });
 };
 pageView(1);


 // keyword filter
  $('select').on('change', function(){
    let selected = this.value;
    $('#second-page').hide();
    $(`.${selected}`).show();
  });



 const changer = () =>{
  $('.page1').on('click', function(){
    $('#second-page').hide('');
    $('#second-page').show('');
    // $('#second-page').toggle('.ANM');
    $('#second-page').html('');
    pageView(1);
  });

  $('.page2').on('click', function(){
    $('#second-page').hide("");
    $('#second-page').show("");
    $('#second-page').html("");
    pageView(2);
  });
 }
 changer();

 //====================================================
});





