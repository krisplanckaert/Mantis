    $(function(){
        $("#includedContentHeader").load("includes/header.html"); 
    });
    $(function(){
        $("#includedContentFooter").load("includes/footer.html"); 
    });
    $(function(){
        $("#includedContentMenu").load("includes/menu.html"); 
    });
    $(function(){
        $("#mm").load("includes/mm.html"); 
    });
    
$(document).ready(function(){
    filename = "home.html";
    $("#includedContent").load(filename); 
    
    $(document).on('click', 'p', function(){
        id=$(this).attr('id'); 
        filename = id+".html";
        $("#mmt").text(id);
        $("#includedContent").load(filename); 
        $("#includedContentSubMenu").load('includes/empty.html'); 
        if($(this).hasClass('uitrusting')) {
            $("#includedContentSubMenu").load('includes/uitrusting.html'); 
        }
        if($(this).hasClass('spelregels')) {
            $("#includedContentSubMenu").load('includes/spelregels.html'); 
        }
        $("#mm").addClass('off');
        $("#mm").removeClass('on');
        $('#mmb').css("background-image", "url(css/img/63525898bc.png)");  
    });
    
    $(document).on('click', '#mmb', function(){
        if($("#mm").hasClass('off')) {
            $("#mm").addClass('on');
            $("#mm").removeClass('off');
            $('#mmb').css("background-image", "url(css/img/e4727122fb.png)");  
        } else {
            $("#mm").addClass('off');
            $("#mm").removeClass('on');
            $('#mmb').css("background-image", "url(css/img/63525898bc.png)");  
        }
    });
    
    $(document).on('click', '#divSpelregels', function() {
        $("#ulSpelregels").toggle();
    });
    
    $(document).on('click', '#divUitrusting', function() {
        $("#ulUitrusting").toggle();
    });
});
