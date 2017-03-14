function initHeader() {
      width = window.innerWidth;
      height = window.innerHeight;
      target = {x: width/2, y: height/2};

      largeHeader = document.getElementById('hero-content');
      largeHeader.style.height = height+'px';
    }
    function addListeners() {
      window.addEventListener('resize', resize);
    }
    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      largeHeader.style.height = height+'px';
    }

$('#panel-open').on('click', function() {
    $('body').addClass('sidepanel-open');
});
$('#panel-close').on('click', function() {
    $('body').removeClass('sidepanel-open');
});
$('.add-overlay').on('click', function() {
    $('body').removeClass('sidepanel-open');
});


$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 1000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});