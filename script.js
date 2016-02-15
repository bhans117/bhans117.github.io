// JavaScript Document	
	var contentTitle = document.getElementById("content-title"),
	content = document.getElementById("content"),
	header = document.getElementById("header"),
	newHeader,
	homeLink = document.getElementById("home"),
	photographyLink = document.getElementById("photography"),
	musicLink = document.getElementById("music"),
	gamesLink = document.getElementById("games"),
	contactLink = document.getElementById("contact");
	
	var images = document.getElementsByClassName('image');
	
	homeLink.addEventListener('click', switchToHome);
	photographyLink.addEventListener('click', switchToPhotography);
	musicLink.addEventListener('click', switchToMusic);
	gamesLink.addEventListener('click', switchToGames);
	contactLink.addEventListener('click', switchToContact);
	
	
	content.style.width = "75%";
	contentTitle.style.height = "100px";
	
	function switchToHome() {
		if (header.innerHTML !== homeLink.innerHTML){
		newHeader = homeLink.innerHTML;
		fadeOut();
		}
	}
	
	function switchToPhotography() {
		if (header.innerHTML !== photographyLink.innerHTML){
		newHeader = photographyLink.innerHTML;
		fadeOut();
		}
	}
	
	function switchToMusic() {
		if (header.innerHTML !== musicLink.innerHTML){
		newHeader = musicLink.innerHTML;
		fadeOut();
		colapseUp();
		}
	}
	
	function switchToGames() {
		if (header.innerHTML !== gamesLink.innerHTML){
		newHeader = gamesLink.innerHTML;
		fadeOut();
        }
	}
	
	function switchToContact() {
		if (header.innerHTML !== contactLink.innerHTML){
		newHeader = contactLink.innerHTML;
		fadeOut();
		}
	}
	
	function fadeOut() {
		colapseUp();
		$('#content').fadeOut(1000, 'swing', function() {
			turnOffAllContent();
            switch(newHeader){
                case homeLink.innerHTML:
                    document.getElementById('homeContent').className = 'active';
                    break;
                case photographyLink.innerHTML:
                    document.getElementById('photographyContent').className = 'active';
                    break;
                case musicLink.innerHTML:
                    document.getElementById('musicContent').className = 'active';
                    break;
                case gamesLink.innerHTML:
                    document.getElementById('gamesContent').className = 'active';
                    break;
                case contactLink.innerHTML:
                    document.getElementById('contactContent').className = 'active';    
            }
			$('#content').fadeIn('fast', 'swing', colapseDown);	
		});
	}
	
/*	function colapseIn() {
		content.style.width = (parseInt(content.style.width) - 3) + '%';
		if (parseInt(content.style.width) > 2){
		setTimeout(colapseIn, 5);
		}
		else {
			header.innerHTML = newHeader;
			turnOffAllContent();
            
            switch(newHeader){
                case homeLink.innerHTML:
                    document.getElementById('homeContent').className = 'active';
                    break;
                case photographyLink.innerHTML:
                    document.getElementById('photographyContent').className = 'active';
                    break;
                case musicLink.innerHTML:
                    document.getElementById('musicContent').className = 'active';
                    break;
                case gamesLink.innerHTML:
                    document.getElementById('gamesContent').className = 'active';
                    break;
                case contactLink.innerHTML:
                    document.getElementById('contactContent').className = 'active';    
            }
			colapseOut();	
		}
	}
	
	function colapseOut() {
		content.style.width = (parseInt(content.style.width) + 3) + '%';
		console.log("out");
		if (parseInt(content.style.width) < 75){
		setTimeout(colapseOut, 5);
		}
	}*/
	
	function colapseUp() {
	contentTitle.style.height = (parseInt(contentTitle.style.height) - 1) + 'px';
		if (parseInt(contentTitle.style.height) > 0){
			setTimeout(colapseUp, 7);	
		}
		else {
			header.innerHTML = newHeader;	
		}
	}
	
	function colapseDown() {
		console.log("colapsedown", contentTitle.style.height) 
		contentTitle.style.height = (parseInt(contentTitle.style.height) + 1) + 'px';
		if (parseInt(contentTitle.style.height) < 100){
			setTimeout(colapseDown, 7);	
		}
	}
        
    function turnOffAllContent() {
       	document.getElementById('homeContent').className = 'notActive';
        document.getElementById('photographyContent').className = 'notActive';  
        document.getElementById('musicContent').className = 'notActive';   
        document.getElementById('gamesContent').className = 'notActive';   
        document.getElementById('contactContent').className = 'notActive';   
    }

	
