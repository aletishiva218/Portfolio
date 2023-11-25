let prdata = {
    "Photo Pro":{
        "url":"https://imagemagic.netlify.app",
        "img":"imgedtr.png",
        "description":"Unlock your creative potential with our crafted Image Editor, a seamless fusion of HTML, CSS, and JavaScript magic. Dive into a world where pixels become your canvas, and intuitive design meets cutting-edge technology, empowering you to edit and enhance images with ease.",
        "data":[70,60,100],
        "techStack":{
            "HTML":10,
            "CSS":20,
            "JavaScript":40
        }
    },
    "To Do List":{
        "url":"https://todomakelist.netlify.app",
        "img":"tdl.png",
        "description":"Elevate your productivity with our personalized To-Do List Maker, meticulously built using HTML, CSS, and JavaScript. Immerse yourself in the simplicity of task management, where the marriage of intuitive design and modern web technologies ensures a seamless and efficient way to organize your day.",
        "data":[50,70,100],
        "techStack":{
            "HTML":10,
            "CSS":20,
            "JavaScript":40
        }
    },
    "Tic Tac Toe Game":{
        "url":"https://ticgametacgametoegamenew.netlify.app",
        "img":"ttt.png",
        "description":"Dive into timeless fun with our homemade Tic Tac Toe game, meticulously designed with HTML, CSS, and JavaScript. Experience the joy of strategic gameplay, relishing the perfect blend of classic entertainment and modern web technologies in every move.",
        "data":[70,50,100],
        "techStack":{
            "HTML":10,
            "CSS":20,
            "JavaScript":40
        }
    },
    "Flappy Bird Game":{
        "url":"https://jumpingbirdgame.netlify.app",
        "img":"fbg.png",
        "description":"Embark on a retro gaming journey with our homebrewed Flappy Bird project, skillfully coded in HTML, CSS, and JavaScript. Experience the thrill of navigating pixelated obstacles, all while marveling at the fusion of creativity and technology that brings this classic to life in a whole new way.",
        "data":[50,80,100],
        "techStack":{
            "HTML":10,
            "CSS":20,
            "JavaScript":40
        }
    },
    "Dinosaur Game":{
        "url":"https://dinousargame.netlify.app",
        "img":"dino.png",
        "description":"Embark on a prehistoric adventure with our self-made Dinosaur Game, expertly crafted using HTML, CSS, and JavaScript. Roam the pixelated landscape, dodge obstacles, and witness the seamless synergy of creativity and technology in this thrilling, nostalgia-inducing gaming experience.",
        "data":[30,60,100],
        "techStack":{
            "HTML":10,
            "CSS":20,
            "JavaScript":40
        }
    },
    "Car Animation":{
        "url":"https://car123animation.netlify.app",
        "img":"caranmtn.png",
        "description":"Embark on a dynamic journey with our custom Car Animation, skillfully crafted using HTML, CSS, and JavaScript. Witness the convergence of creativity and technology as your virtual vehicle cruises through a pixel-perfect landscape, offering a visually captivating and entertaining experience for all.",
        "data":[50,100,0],
        "techStack":{
            "HTML":10,
            "CSS":20,
            "JavaScript":40
        }
    }
}
var typed = new Typed('#kme', {
    strings: ['SHIVA ALETI', 'a WEB DEVELOPER', 'a WEB DESIGNER'],
    typeSpeed: 50,
    loop: true,
    backDelay: 1500,
    backSpeed: 30,
});
let pr_buttons = document.querySelectorAll(".projects button")
let projects = document.querySelector(".projects");
let project = document.querySelector(".project");
let prtitletag = document.querySelector(".project > div h2")
let prpartag = document.querySelector(".project > div p")
let imgtag = document.querySelector(".project > div img")
Array.from(pr_buttons).forEach((e,index)=>{
    e.onmouseenter = () => {
        projects.classList.add("projectshover")
        project.classList.add("projectbghover")
        let prtitle = Object.keys(prdata)[index];
        let prpar = prdata[prtitle].description
        let img = prdata[prtitle].img
        let data = prdata[prtitle].data
        prpartag.innerHTML = prpar
        prtitletag.innerHTML = prtitle
        imgtag.src = `assets/${img}`
        var options1 = {
          series: data,
          chart: {
          type: 'polarArea',
        },
        stroke: {
          colors: ['transparent']
        },
        fill: {
          opacity: 0.8
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
        };
        document.querySelector("#chart2").innerHTML = ""
        var chart = new ApexCharts(document.querySelector("#chart2"), options1);
        chart.render();
        var options = {
            series: [{
            data:data
          }],
            chart: {
            height: 300,
            type: 'bar',
            events: {
              click: function(chart, w, e) {
                // console.log(chart, w, e)
              }
            }
          },
          colors:['rgb(255, 0, 0)','rgb(0, 179, 255)','rgb(255, 255, 0)'],
          plotOptions: {
            bar: {
              columnWidth: '45%',
              distributed: true,
            }
          },
          dataLabels: {
            enabled: true
          },
          legend: {
            show: false
          },
          xaxis: {
            categories: [
              'HTML',
              'CSS',
              'JavaScript',
            ],
            labels: {
              style: {
                colors: ['red','rgb(0, 179, 255)','yellow'],
                fontSize: '12px'
              }
            }
          }
          };
          document.querySelector("#chart1").innerHTML = ""
          var chart = new ApexCharts(document.querySelector("#chart1"), options);
          chart.render();
    }
    e.onmouseleave = () => {
        projects.classList.remove("projectshover")
        project.classList.remove("projectbghover")
        prtitletag.innerHTML = ""
        
    }
})
var options = {
  series: [{
  data: [100,100,100,30,60,70,90,90,100,100]
}],
  chart: {
  type: 'bar',
  height: 350
},
plotOptions: {
  bar: {
    borderRadius: 4,
    horizontal: true,
  }
},
dataLabels: {
  enabled: true
},
xaxis: {
  categories: ['HTML','CSS','JavaScript','PHP','MySQL','Node.js','MongoDB','Express.js','Git','GitHub'],
}
};

var chart = new ApexCharts(document.querySelector("#schart"), options);
chart.render();

let sdbrbutton = document.querySelector("#sdbrbutton")
sdbrbutton.onclick = () => {
  document.querySelector("nav").classList.toggle("ndisplay")
}
// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#container'),
//     smooth: true
// });


// const container = document.querySelector("#container")
//     for(var i = 0; i< 50; i++)
// {
//     const blocks = document.createElement("div")
//     blocks.classList.add(`block1`)
//     container.append(blocks)
// }
// let animateBlocks = () => {
//     anime({
//         targets: `.block1`,
//         translateX: () => {
//             return anime.random(-700,700)
//         },
//         translateY: () => {
//             return anime.random(-500,500)
//         },
//         scale: ()=>{
//             return anime.random(0.5,2)
//         },
//         easing: 'linear',
//         duration: 3000,
//         delay: anime.stagger(10),
//         complete: animateBlocks
//     })
// }
// animateBlocks()

// Shery.textAnimate(".h2text",{
//     //Parameters are optional.
//     style: 1,
//     y: 10,
//     delay: 0.1,
//     duration: 3,
//     ease: "cubic-bezier(0.23, 1, 0.320, 1)",
//     multiplier: 0.1,
//   });
//   //gsap to animate
//   gsap.from(".ntext",{
//       stagger:.3,
//       y:10,
//       duration: 0.8,
//       ease: Power3,
//       opacity:0
//   })

//   var typed = new Typed('#kme', {
//     strings: ['SHIVA ALETI', 'a WEB DEVELOPER', 'a WEB DESIGNER'],
//     typeSpeed: 50,
//     loop: true,
//     backDelay: 1500,
//     backSpeed: 40,
//     showCursor:false
// });