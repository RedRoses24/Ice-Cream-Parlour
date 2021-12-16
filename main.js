menu_list_array = ["Caramel Chocolate Cheesecake",
"Chillin' the Roast", "Chocolate Shake It",
"Gimme S'more!™",
"Glampfire Trail Mix™",
"It's Ice...Cream",
"Pecan Sticky Buns",
"Americone Dream®"];
    
    function getmenu(){
        var htmldata="";
        menu_list_array.sort();
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+ menu_list_array[i] + '<br>'
        }
        document.getElementById("display_menu").innerHTML = htmldata;
        //give the appropriate id name as display_menu 
    }

    function add_item(){
        var htmldata;
		var imgtags='<img id="im1" src="https://s.w.org/images/core/emoji/13.0.1/svg/1f366.svg">'
        var item=document.getElementById("add_item").value;
        // use the sort function as - menu_list_array.sort();
        menu_list_array.sort()
        htmldata="";
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+imgtags+ menu_list_array[i]+'<br>';
            document.getElementById("display_addedmenu").innerHTML = htmldata;
        }
         document.getElementById("display_addedmenu").innerHTML = htmldata;
		
    }

function add_top(){
	var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
	add_item();
}
