var rabbits = [];

var CuteRabbits = function(name, photo) {
  this.name = name;
  this.photo = photo;
  //votes has to happen before the push or the push won't include votes
  this.votes = 0;
  rabbits.push(this);
}

// if anything exist in local storage, we want to get from local storage, and not use the empty array.
// else we can use the generic array of objects
if (localStorage !== null) {
  localStorage.getItem(CuteRabbits);
} else {
  getStg();
};
console.log('this is line 18)');

var rab1 = new CuteRabbits('rab1', "img/rab1.jpeg");
var rab2 = new CuteRabbits('rab2', "img/rab2.jpeg");
var rab3 = new CuteRabbits('rab3', "img/rab3.jpeg");
var rab4 = new CuteRabbits('rab4', "img/rab4.jpeg");
var rab5 = new CuteRabbits('rab5', "img/rab5.jpeg");
var rab6 = new CuteRabbits('rab6', "img/rab6.jpeg");
var rab7 = new CuteRabbits('rab7', "img/rab7.jpeg");
var rab8 = new CuteRabbits('rab8', "img/rab8.jpeg");
var rab9 = new CuteRabbits('rab9', "img/rab9.jpeg");
var rab10 = new CuteRabbits('rab10', "img/rab10.jpeg");
var rab11 = new CuteRabbits('rab11', "img/rab11.jpeg");
var rab12 = new CuteRabbits('rab12', "img/rab12.jpeg");
var rab13 = new CuteRabbits('rab13', "img/rab13.jpeg");
var rab14 = new CuteRabbits('rab14', "img/rab14.jpeg");
var rab15 = new CuteRabbits('rab15', "img/rab15.jpeg");
var rab16 = new CuteRabbits('rab16', "img/rab16.jpeg");

//creates random image
function randomImg() {
  return Math.floor(Math.random() * rabbits.length);
};

//dom set up
var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');

var randomPhoto1, randomPhoto2;

function compareImg() {
  randomPhoto1 = randomImg();
  randomPhoto2 = randomImg();
  if (randomPhoto1 === randomPhoto2) {
    randomPhoto1 = randomImg();
  //src is a property of boxLeft DOM element, creating src/source attribute in html
  }
  img1.src = rabbits[randomPhoto1].photo;
  img2.src = rabbits[randomPhoto2].photo;
};
compareImg();

var voteFor = function(rabbit) {
  for (var i in rabbits) {
    if (rabbits[i].src === rabbit) {
      rabbit.votes +=1;
    }
  }
};

function makeChart () {
  var data = [
      {
        //each object in constructor function
          value: rabbits[randomPhoto1].votes,
          color:"#F7464A",
          highlight: "#FF5A5E",
          label: "Red"
      },

      {
          value: rabbits[randomPhoto2].votes,
          color: "#46BFBD",
          highlight: "#5AD3D1",
          label: "Green"
      }
  ];

  var context = document.getElementById('myChart').getContext('2d');
  var skillsChart = new Chart(context).Doughnut(data, {
    //number - amount of animation steps. These are found in chart.js documentation
    animationSteps : 30,
    //string - animation easing effect
    animationString : "easeOutBounce",
    //animate rotate
    animateRotate : true,
    //animate scale
    animateScale : false,
  });
};
makeChart();

var jsonVote1 = function() {
  localStorage.setItem('jsonVote1', JSON.stringify(rabbits));
};
//bind/assign to a variable
var getStg = function() {
  var storedVote1 = localStorage.getItem('jsonVote1');
  rabbits = JSON.parse(storedVote1);
};

img1.addEventListener('click', function() {
  console.log(rabbits[randomPhoto1].photo);
  rabbits[randomPhoto1].votes += 1;
  console.log(rabbits[randomPhoto1].votes);
  voteFor(img1.src);
  compareImg();
  makeChart();
  jsonVote1();
  getStg();
});

img2.addEventListener('click', function() {
  console.log(rabbits[randomPhoto2].photo);
  //this represents the obj.votes
  rabbits[randomPhoto2].votes += 1;
  console.log(rabbits[randomPhoto2].votes);
  voteFor(img2.src);
  compareImg();
  makeChart();
  jsonVote1();
  getStg();
});

