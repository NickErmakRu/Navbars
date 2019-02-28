
var click = 0;

$('button').click(function() {
    
    if(click == 0){
        
        $('#myscript1').remove();
        $('#myscript2').remove();
        $('form').removeAttr('id')
        
        click = 1;
        
    }else{
        
        $('<div id="myscript1" class="mycollapse"><ul class="navbar-nav mr-auto"><li class="nav-item active"><a class="nav-link" href="#"><i class="fab fa-canadian-maple-leaf"></i></a></li></ul></div>').appendTo('#parent1');
        
        $('<div id="myscript2" class="mycollapse"><ul class="navbar-nav mr-auto"><li class="nav-item active"><a class="nav-link" href="#"><i class="fas fa-shopping-bag"></i></a></li></ul></div>').appendTo('#parent2');
    
        $('form').attr('id', 'nonevisible');
        
        click = 0;
    }
});
