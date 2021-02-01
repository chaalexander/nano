console.log("hi");

$(document).ready(function () {
    $("#my_nanogallery2").nanogallery2({
      items: [
        {
          src:          'image_01.jpg',    // image url
          srct:         'image_01ts.jpg',  // thumbnail url
          title:        'Title Image1',    // media title
          description:  'Description1'     // media description
        },
        { src: 'image_02.jpg', srct: 'image_02t.jpg',  title: 'Title Image2' },
        { src: 'image_03.jpg', srct: 'image_03ts.jpg', title: 'Title Image3' }
      ]
    });
  });