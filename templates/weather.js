// Created by ★ Hemant ★
window.onload=()=>{
    let xml = new XMLHttpRequest();
    xml.open("GET","https://ipapi.co/json/",false);
    xml.send();
    let json1 = JSON.parse(xml.response);
    let url = "https://weatherapi-com.p.rapidapi.com/current.json?q=%3CREQUIRED%3E";
    url+=json1["city"];
    $("input").on("focus",()=>{
    $("input").val("");
    });
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.open("GET",url);
    xhr.setRequestHeader("X-RapidAPI-Key", "508dbb053bmshbdae63e2aaf643ap1e7812jsn4a1ff3357a0e");
    xhr.setRequestHeader("X-RapidAPI-Host", "weatherapi-com.p.rapidapi.com");
    xhr.send();
    $(".set_c").on("click",()=>{
    $(".settings_cont").css({"display":"flex"});
    $(".settings_cont").fadeIn();
    });
    $(".close_s").on("click",()=>{
    $(".settings_cont").fadeOut(500);
    });
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
          $(".all").fadeIn(700);
            $(".loader").hide();
             $(".loader2").hide();
               let json2 = JSON.parse(xhr.response);
                $(".weather_in span")
                 .text(json1["city"]);
    $(".country")
    .html(json1["country_name"]);
    $(".temp")
    .html(Math.floor(json2["current"].temp_c)+"°C"); document.querySelector(".icon")
    .style.background="url(https:"+json2["current"]["condition"].icon+")";
    $(".condition").html(json2["current"]["condition"].text);
    $(".humi").html(json2["current"].humidity+"%");
    $(".wind").html(json2["current"].wind_kph+"km/h");
    $(".tz").html(json2["location"].tz_id);
    $(".local_time").
    html(json2["location"].localtime);
    $(".clouds").html(json2["current"].cloud);
    document.querySelector(".icon")
    .style.backgroundRepeat="no-repeat";
    let cc = "fi fi-"+json1["country"].toLowerCase();
    $(".flag").addClass(cc);
    $("input[name='radio']").change(function() {
    if($("#rf").is(':checked')){
    $(".temp")
    .html(Math.floor(json2["current"].temp_f)+"°F");
    }else{
    $(".temp")
    .html(Math.floor(json2["current"].temp_c)+"°C");
    }
    });
    
    document.querySelector(".modes i.fa-sun").style.display="none";
    $(".modes").click(()=>{
    if(document.querySelector(".modes i.fa-sun").style.display=="none"){
    $(".modes i.fa-moon").hide();
    $(".modes i.fa-sun").show();
    $(".w_cont")
    .css({"background":"rgba(0,0,0,.4)"});
    $(".header")
    .css({"background":"rgba(0,0,0,.4)"});
    $(".time_c")
    .css({"background":"rgba(0,0,0,.4)"});
    $(".humidity")
    .css({"background":"rgba(255,255,255,.15)"});
    $(".s_header")
    .css({"background":"rgba(255,255,255,.15)"});
    $(".close_s").css({"background":"red"});
    }else{
    if(document.querySelector(".modes i.fa-moon").style.display=="none"){
    $(".modes i.fa-sun").hide();
    $(".modes i.fa-moon").show();
    $(".w_cont")
    .css({"background":"rgba(255,255,255,.2)"});
    $(".header")
    .css({"background":"rgba(255,255,255,.4)"});
    $(".time_c")
    .css({"background":"rgba(255,255,255,.2)"});
    $(".humidity")
    .css({"background":"rgba(0,0,0,.2)"});
    $(".s_header")
    .css({"background":"rgba(0,0,0,.3)"});
    $(".close_s").css({"background":"red"});
    }}
    });
    
    
    $(".t:nth-child(1)").click(()=>{
    document.querySelector(".container").style.background=`url(https://dl.dropboxusercontent.com/s/tqvkvy0764j7whz/clear.gif)`; document.querySelector(".container").style.backgroundSize="cover";
    $(".w_cont")
    .css({"background":"rgba(0,0,0,.4)"});
    $(".header")
    .css({"background":"rgba(0,0,0,.4)"});
    $(".time_c")
    .css({"background":"rgba(0,0,0,.4)"});
    $(".humidity")
    .css({"background":"rgba(255,255,255,.15)"});
    $(".s_header")
    .css({"background":"rgba(255,255,255,.15)"});
    $(".close_s").css({"background":"red"});
    });
    
    $(".t:nth-child(2)")
    .click(()=>{ document.querySelector(".container").style.background=`url(https://dl.dropboxusercontent.com/s/g5w8plbt793q54t/clouds.gif)`; document.querySelector(".container").style.backgroundSize="cover";
    $(".w_cont")
    .css({"background":"rgba(0,0,0,.4)"});
    $(".header")
    .css({"background":"rgba(0,0,0,.4)"});
    $(".time_c")
    .css({"background":"rgba(0,0,0,.4)"});
    $(".humidity")
    .css({"background":"rgba(255,255,255,.15)"});
    $(".s_header")
    .css({"background":"rgba(255,255,255,.15)"});
    $(".close_s").css({"background":"red"});
    });
    
    $(".t:nth-child(3)")
    .click(()=>{ document.querySelector(".container").style.background=`url(https://dl.dropboxusercontent.com/s/3vyagrftk3xxmc8/overcast_night.gif)`; document.querySelector(".container").style.backgroundSize="cover";
    $(".w_cont")
    .css({"background":"rgba(0,0,0,.4)"});
    $(".header")
    .css({"background":"rgba(0,0,0,.4)"});
    $(".time_c")
    .css({"background":"rgba(0,0,0,.4)"});
    $(".humidity")
    .css({"background":"rgba(255,255,255,.15)"});
    $(".s_header")
    .css({"background":"rgba(255,255,255,.15)"});
    $(".close_s").css({"background":"red"});
    });
    
    $(".t:nth-child(4)")
    .click(()=>{ document.querySelector(".container").style.background=`url(https://dl.dropboxusercontent.com/s/1j4y4yb98icdqjl/clear_night.gif`; document.querySelector(".container").style.backgroundSize="cover";
    $(".w_cont")
    .css({"background":"rgba(0,0,0,.4)"});
    $(".header")
    .css({"background":"rgba(0,0,0,.4)"});
    $(".time_c")
    .css({"background":"rgba(0,0,0,.4)"});
    $(".humidity")
    .css({"background":"rgba(255,255,255,.15)"});
    $(".s_header")
    .css({"background":"rgba(255,255,255,.15)"});
    $(".close_s").css({"background":"red"});
    });
    
    $("i.fa-search").click(()=>{
    if($("input").val()!=""){
    url="https://weatherapi-com.p.rapidapi.com/current.json?q="+$("input").val();
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.open("GET",url);
    xhr.setRequestHeader("X-RapidAPI-Key", "79cd07e5damsh16e82764c0d6f5dp1b7cd6jsn17aae8b6f8ef");
    xhr.setRequestHeader("X-RapidAPI-Host", "weatherapi-com.p.rapidapi.com");
    xhr.send();
    $(".all").hide();
    $(".loader").show();
    $(".loader2").show();

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
        let json2 = JSON.parse(xhr.response);
           $(".all").fadeIn(700);
           $(".loader").hide();
           $(".loader2").hide();
    let inp = json2["location"].country.toLowerCase();
    let xmlf = new XMLHttpRequest(); xmlf.open("GET","https://restcountries.com/v2/name/"+inp,false);
        xmlf.send();
        let jsonf = JSON.parse(xmlf.response);
        let imgf = document.querySelector(".country_flag");
        imgf.src=jsonf[1].flag;  //Some countries have 2 flags, so I used the second one
        $(".flag").hide();
        $(".country_flag").show();
        $(".weather_in span").text(json2["location"].name);
    $("input[name='radio']").change(function() {
    if($("#rf").is(':checked')){
    $(".temp")
    .html(Math.floor(json2["current"].temp_f)+"°F");
    }else{
    $(".temp")
    .html(Math.floor(json2["current"].temp_c)+"°C");
    }
    });
    if($("#rf").is(':checked')){
    $(".temp")
    .html(Math.floor(json2["current"].temp_f)+"°F");
    }else{
    $(".temp")
    .html(Math.floor(json2["current"].temp_c)+"°C");
    } document.querySelector(".icon").style.background="url(https:"+json2["current"]["condition"].icon+")"; document.querySelector(".icon").style.backgroundRepeat="no-repeat";
    $(".condition").html(json2["current"]["condition"].text);
    $(".humi")
    .html(json2["current"].humidity+"%");
    $(".wind")
    .html(json2["current"].wind_kph+"km/h");
    $(".clouds").html(json2["current"].cloud);
    $(".country")
    .html(json2["location"].country);
    $(".tz").html(json2["location"].tz_id);
    $(".local_time")
    .html(json2["location"].localtime);
    }});
    }});       
    }});
    }