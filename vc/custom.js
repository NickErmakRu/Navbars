var click = 0;

$('.poisk').click(function() {
    
    if(click == 0){
        
        $('#myscript1').remove();
        $('#myscript2').remove();
        $('.zamena').remove();
        $('<div id="udali1"><i class="fas fa-search mysearch"></i></div').appendTo('#parent1');
        $('<form class="form-inline my-2 udali2"><input class="form-control mr-sm-2" type="search" placeholder="" aria-label="Search"></form>').appendTo('#parent1');
        $('<button type="button" class="btn btn-light newbtn">Найти</button>').appendTo('#parent1');
        $('.newicon').remove();
        $('<a class="nav-link newicon" href="#"><i class="fas fa-times"></i></a>').appendTo('.poisk');
        
        click = 1;
        
    }else{
        
        $('#udali1').remove();
        $('.udali2').remove();
        $('.newbtn').remove();
        $('.newicon').remove();
        $('<a class="nav-link newicon" href="#"><i class="fas fa-search"></i></a>').appendTo('.poisk');
        
        $('<ul class="navbar-nav justify-content-center zamena"><li class="nav-item active"><a class="nav-link popular" href="#">Популярное</a></li><li class="nav-item dropdown active strelka"><a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></a>                    <div class="dropdown-menu" aria-labelledby="navbarDropdown"><a class="dropdown-item" href="#">За месяц</a><a class="dropdown-item" href="#">За неделю</a><a class="dropdown-item" href="#">За год</a><a class="dropdown-item" href="#">За всё время</a></div> </li></ul>').appendTo('#parent1');
        
        $('<ul class="navbar-nav justify-content-center"><li id="myscript1" class="nav-item active"><a class="nav-link ogran" href="#">Свежее</a></li><li id="myscript2" class="nav-item active"><a class="nav-link" href="#">Вакансии</a></li></ul>').appendTo('#parent1');
        
        click = 0;
    }
});