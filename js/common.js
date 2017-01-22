window.onscroll = function() {scrollFn();notif()};
        function scrollFn() {
            var navbar = document.getElementById("myNavbar");
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                navbar.className = "theme-navbar" + " theme-card-2" + " theme-animate-top" + " theme-white";
            } else {
                navbar.className = navbar.className.replace(" theme-card-2 theme-animate-top theme-white", " theme-text-white");
            }
        }

        function notif() {
            var notif = document.getElementById("notif");
            if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
                notif.style.display="block";
            } else {
                notif.style.display="none";
            }
        }

        // Used to toggle the menu on small screens when clicking on the menu button
        function menuToggle() {
            var x = document.getElementById("navDemo");
            if (x.className.indexOf("theme-show") == -1) {
                x.className += " theme-show";
            } else {
                x.className = x.className.replace(" theme-show", "");
                }
            }

        function acc(id) {
            var x = document.getElementById(id);
            if (x.className.indexOf("theme-show") == -1) {
                x.className += " theme-show";
                x.previousElementSibling.className += " theme-theme-d1";
            } else { 
                x.className = x.className.replace("theme-show", "");
                x.previousElementSibling.className = 
                x.previousElementSibling.className.replace(" theme-theme-d1", "");
            }
        }