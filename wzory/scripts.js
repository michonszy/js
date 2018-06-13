        function openNav() {
            document.getElementById("myNav").style.width = "100%";
        }

        function closeNav() {
            document.getElementById("myNav").style.width = "0%";
        }
        function poleTrojkata(){
            var a = document.getElementById("a").value;
            var h = document.getElementById("h").value;
            
            var pole = (a*h)/2;
            
            document.getElementById("wyniki").innerHTML="Pole to: "+pole;
            
            document.getElementById("howto").innerHTML = "Podstawiamy do wzoru: " +a+"*"+h+"/ 2 = " +pole;
            
            document.getElementById("results").style.visibility="visible";
        }
            
        function obwodTrojkata(){
            var a = document.getElementById("a").value;
            var b = document.getElementById("b").value;
            var c = document.getElementById("c").value;
            
            var obwod = parseInt(a) + parseInt(b) + parseInt(c);
            
            document.getElementById("wyniki").innerHTML="Obwod to: "+obwod;
            
            document.getElementById("howto").innerHTML = "Podstawiamy do wzoru: " +a+"+"+b+"+" +c+"="+obwod;
            
            document.getElementById("results").style.visibility="visible";
        }


        function poleKola(){
            var a = document.getElementById("a").value;
            
            var pole = 2 * parseInt(a) * parseInt(a) * Math.PI;
            
             document.getElementById("wyniki").innerHTML="Pole to: "+pole;
            document.getElementById("results").style.visibility="visible";
        }
        function obwodKola(){
             var a = document.getElementById("a").value;
            
            var pole = 2 * parseInt(a) * Math.PI;
            
             document.getElementById("wyniki").innerHTML="Pole to: "+pole;
            document.getElementById("results").style.visibility="visible";
        }

        function poleKwadratu(){
             var a = document.getElementById("a").value;
            
            var pole = parseInt(a) * parseInt(a);
            
             document.getElementById("wyniki").innerHTML="Pole to: "+pole;
            document.getElementById("results").style.visibility="visible";
        }
        function obwodKwadratu(){
             var a = document.getElementById("a").value;
            
            var pole = 4 * parseInt(a);
            
             document.getElementById("wyniki").innerHTML="Pole to: "+pole;
            document.getElementById("results").style.visibility="visible";
        }

        function poleRombu(){

        }
        function obwodRombu(){

        }

        function poleRownolegloboku(){

        }
        function obwodRownolegloboku(){

        }

        function poleTrapezu(){

        }
        function obwodTrapezu(){
            
        }

    