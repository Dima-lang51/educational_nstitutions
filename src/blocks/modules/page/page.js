import Swiper, {Pagination}  from "swiper";
import Chart from "chart.js/auto";
let ctx = document.getElementById("myChart").getContext("2d");
let chart = new Chart(ctx, {
    // Тип графика
    type: "line",
    // Создание графиков
    data: {
    // Точки графиков
        labels: ["2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021"],
        // График
        datasets: [{
            label: "", // Название
            backgroundColor: "rgba(171, 200, 234, 0.6)", // Цвет закраски
            borderColor: "rgba(171, 200, 234, 0.6", // Цвет линии
            fill: true,
            data: [110, 190, 100, 220, 160, 130, 210, 165, 10, 200], // Данные каждой точки графика
            pointStyle: "circle",
            pointRadius: 8,
            pointHoverRadius: 16
        },
        {
            label: "", // Название
            backgroundColor: "rgba(6, 86, 180, 0.6)", // Цвет закраски
            borderColor: "rgba(6, 86, 180, 0.6)", // Цвет линии
            fill: true,
            data: [10, 105, 140, 220, 60, 165, 130, 30, 10, 155], // Данные каждой точки графика
            pointStyle: "circle",
            pointRadius: 8,
            pointHoverRadius: 16
        }]
    },
    // Настройки графиков
    options: {
        responsive: false,
        interaction: {
            mode: 'point',
            intersect: false,
          },
        plugins: {
            title: {
                display: false
            },
            legend: false,
            tooltip: {
                // Disable the on-canvas tooltip
                enabled: false,

                external: function(context) {
                    // Tooltip Element
                    let tooltipEl = document.getElementById('chartjs-tooltip');

                    // Create element on first render
                    if (!tooltipEl) {
                        tooltipEl = document.createElement('div');
                        tooltipEl.id = 'chartjs-tooltip';
                        tooltipEl.innerHTML = '<div class="block__tooltip"></div>';
                        document.body.appendChild(tooltipEl);
                    }

                    // Hide if no tooltip
                    const tooltipModel = context.tooltip;
                    if (tooltipModel.opacity === 0) {
                        tooltipEl.style.opacity = 0;
                        return;
                    }

                    // Set caret Position
                    tooltipEl.classList.remove('above', 'below', 'no-transform');
                    if (tooltipModel.yAlign) {
                        tooltipEl.classList.add(tooltipModel.yAlign);
                    } else {
                        tooltipEl.classList.add('no-transform');
                    }

                    function getBody(bodyItem) {
                        return bodyItem.lines;
                    }

                    // Set Text
                    if (tooltipModel.body) {
                        const bodyLines = tooltipModel.body.map(getBody);
                        let value = bodyLines[0];
                        let innerHtml = `<p class="tooltip__text">Проходной балл<br> на бюджет: </p>
                                        <p class="tooltip__number">`+  value +`</p>`;

                        let tableRoot = tooltipEl.querySelector('.block__tooltip');
                        tableRoot.innerHTML = innerHtml;
                    }

                    const position = context.chart.canvas.getBoundingClientRect();
                    //const bodyFont = Chart.helpers.toFont(tooltipModel.options.bodyFont);

                    // Display, position, and set styles for font
                    tooltipEl.style.opacity = 1;
                    tooltipEl.style.position = 'absolute';
                    tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX + 'px';
                    tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY + 'px';
                    tooltipEl.style.padding = tooltipModel.padding + 'px ' + tooltipModel.padding + 'px';
                    tooltipEl.style.pointerEvents = 'none';
                }

            }
        },
        scales: {
            x: {
                grid: {
                    tickLength: 0
                },
                ticks: {
                    padding: 10,
                    color: "#767676",
                    font: {
                        size: 14
                    }
                }
            },
            y: {

                grid: {
                    tickLength: 0
                },
                type: "linear",
                labels: [250, 200, 150, 100, 0],
                ticks: {
                    autoSkip: false,
                    source: "labels",
                    min: 0,
                    max: 250,
                    padding: 15,
                    color: "#767676",
                    font: {
                        size: 14
                    }

                }
                
            }
        }
    }
});


window.addEventListener("resize", mobile_render);
mobile_render();

function mobile_render(){
    let btn = document.querySelector(".button__btn-check");
    if (window.innerWidth <= 576) {
        
        let new_parent = document.querySelector(".information__block__mb");
        new_parent.insertBefore(btn, null);
    } 
    else {
        let new_parent = document.querySelector(".promo__button");
        new_parent.insertBefore(btn, null);
    }

    if (window.innerWidth <=360){
        enable_swiper();
    } else {
        disable_swiper();
    }
  }

 
function disable_swiper() {
    const slides = document.querySelectorAll(".swiper-slide");
    if (slides.length > 0) {
        for (let index = 0; index < slides.length; index++) {
            let slide = slides[index];
            slide.classList.remove("swiper-slide");
        }
    }
    const slides_wrapper = document.querySelector(".swiper-wrapper");
    if (slides_wrapper) {
        slides_wrapper.classList.remove("swiper-wrapper");
    }
    const swiper_container = document.querySelector(".swiper");
    if (swiper_container) {
        swiper_container.classList.remove("swiper");
    }
};

function enable_swiper() {
    const slides = document.querySelectorAll(".educational__card");
    if (slides.length > 0) {
        for (let index = 0; index < slides.length; index++) {
            let slide = slides[index];
            slide.classList.add("swiper-slide");
        }
    }
    const slides_wrapper = document.querySelector(".cards_wrapper");
    if (slides_wrapper) {
        slides_wrapper.classList.add("swiper-wrapper");
    }
    const swiper_container = document.querySelector(".specialty");
    if (swiper_container) {
        swiper_container.classList.add("swiper");
    }
    const swiper = new Swiper(".specialty", {
        // configure Swiper to use modules
        modules: [ Pagination],
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
            clickable: true
        },
    });
};

  document.addEventListener("DOMContentLoaded", () => {
    const width = window.innerWidth;
    if (width <= 360){
        enable_swiper();
    } else {
        disable_swiper();
    }
  })


$(".university__description-more").click(function(){
    $( ".description__text-bottom" ).slideToggle( "fast" );
    let title=$(this).text();
    if (title =="Свернуть") {
        $(".university__description-more").html("Развернуть");
    }  else {
        $(".university__description-more").html("Свернуть");

    }



});


 

 


