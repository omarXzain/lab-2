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

    let myAnimal = $('.photo-template').clone();
    $('main').append(myAnimal);
    let Options = $('<option></option>').text(this.keyword);
    $('select').append(Options);

    myAnimal.find('h2').text(this.title);
    myAnimal.find('img').attr('src', this.image_url);
    myAnimal.find('p').text(this.description);
    myAnimal.find('.p2').text(this.keyword);
    myAnimal.find('b').text(`Horns Number: ${this.horns}`);
    myAnimal.attr('class', this.keyword);

  };

  //=============================================


  //   ajax setup
  const ajaxSettings = {
    method: 'get',
    dataType: 'json'
  };

  $.ajax('../data/page-1.json', ajaxSettings).then(data => {

    data.forEach(myZoo => {
      let pet = new ZooGallery(myZoo);
      pet.picViewer();
    });
  });

// keyword filter
  $('select').on('change', function(){
    let selected = this.value;
    $('section').hide();
    $(`.${selected}`).show();
  });
});

//====================================================






