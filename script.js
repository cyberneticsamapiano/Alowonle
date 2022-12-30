$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrolly > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });    
    //toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active")
    }); 
    
    
    // typing animation script
    var typed = new typed("", {
        strings: {"Designer", "Developer", "Researcher", "Freelancer"},
        typespeed: 100,
        backspeed: 60,
        loop: true
    })


    let down = document.querySelector('.down');

    btnDownload.addEventListener.addEventsListener('click' , () =>{
        let imgpath = down.getAttribute( 'src' );
        let fileName =getFileName(aPath);

        SaveAS(downPath, fileName);
    });

    function getFileName(str){
        return str.substring(str.lastIndexOf( '/')+1)
    }
    

    
    
    // owl carousal script//
   
});    