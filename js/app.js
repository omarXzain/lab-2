'use strict';


let allInfo = [];

// Constructor Building
function ZooGallery(animal) {
  this.title = animal.title;
  this.image_url = animal.image_url;
  this.description = animal.description;
  this.keyword = animal.keyword;
  this.horns = animal.horns;



  allInfo.push(this);
  //   console.log(allInfo);
}


ZooGallery.prototype.picViewer = function () {
  let myAnimal = $('.photo-template').clone();
  let Options = $('<option></option>').text(this.keyword);
  $('select').append(Options);


  $('main').append(myAnimal);
  myAnimal.find('h2').text(this.title);
  console.log(myAnimal.find('h2').text(this.title));
  myAnimal.find('img').attr('src', this.image_url);
  myAnimal.find('p').text(this.description);
  myAnimal.find('span').text(this.keyword);
  myAnimal.find('div').text(this.horns);
  myAnimal.removeClass('photo-template');
  myAnimal.attr('id', 'horns');

};

ZooGallery.readJson = () => {
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



};

$(() => ZooGallery.readJson());


$(document).ready(function () {
  $('select').on('change', function() {
    let selected = this.value;
    $('section').hide();
    $(`.${selected}`).show();
  });
});








