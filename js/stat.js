'use strict';

window.renderStatistics = function (ctx, names, times) {

    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.strokeRect(110, 20, 420, 270);
    ctx.fillRect(110, 20, 420, 270);

    ctx.fillStyle = 'rgba(256, 256, 256, 1.0)';
    ctx.strokeRect(100, 10, 420, 270);
    ctx.fillRect(100, 10, 420, 270);

    ctx.fillStyle = '#000';
    ctx.font = '16px PT Mono';
    ctx.fillText('Ура, вы победили!', 120, 40);
    ctx.fillText('Список результатов:', 120, 60);


    var max = Math.max.apply(Math, times);
    var histogramHeight = 150;
    var step = histogramHeight / max;

    var barWidth = 40;
    var indent = 50;
    var initialX = 150;
    var initialY = 250;

    ctx.textBaseline = 'top';

    var name = names[i];

    var getRandomColor = function(name) {

        for (var i = 0; i < names.length; i++) {

            if (name == 'Вы') {
              var color = 'rgba(0, 0, 255, '+ Math.random()+')';
            }

            else {
              var color = 'rgba(255, 0, 0, 1.0)';
            }

            return (color);
        }
    }    
  
    for (var i = 0; i < times.length; i++) {

        ctx.fillStyle = getRandomColor(name);
        ctx.fillRect(initialX + (barWidth+indent) * i, initialY, barWidth, - times[i] * step);

        ctx.fillStyle = 'rgba(0, 0, 0, 1)';
        ctx.fillText(parseInt(times[i]), initialX + (barWidth+indent) * i, initialY - histogramHeight - 20 );
        ctx.fillText(names[i], initialX + (barWidth+indent) * i, initialY + 5 );
    }   
}
