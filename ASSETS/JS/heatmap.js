$(document).ready(function () {
    console.log("start system ... ");
    //DECLARAÇÃO DE VARIÁVEIS
    var copiaHTML;
    //INCLUSÃO DE BOTÕES PARA DICIONAR OS ICONES
    $( "<img src='./ICONES/capacete.png' width='100' height='100' class='capaceteAdd'/>" ).appendTo( "#addIcones");
    $( "<img src='./ICONES/NCAmbientalMenor.png' width='100' height='100' class='NCAMenAdd'/>" ).appendTo( "#addIcones");
    $( "<img src='./ICONES/NCAmbientalMaior.png' width='100' height='100' class='NCAMaiAdd'/>" ).appendTo( "#addIcones");
    $( "<img src='./ICONES/eventoAp.png' width='100' height='100' class='EventoApAdd'/>" ).appendTo( "#addIcones");
    $( "<img src='./ICONES/eventograve.png' width='100' height='100' class='EventoGraveAdd'/>" ).appendTo( "#addIcones");
    $( "<img src='./ICONES/eventongrave.png' width='100' height='100' class='EventoNGraveAdd'/>" ).appendTo( "#addIcones");
    $( "<img src='./ICONES/tabela.png' width='100' height='100' class='tabelaAdd'/>" ).appendTo( "#addIcones");
    //ATRELADO A FUNÇÃO addIcon AOS BOTÕES
    $( ".capaceteAdd" ).on("click", {ic:"capacete"}, addIcon);       
    $( ".NCAMenAdd" ).on("click", {ic:"NCAmbientalMenor"}, addIcon);  
    $( ".NCAMaiAdd" ).on("click", {ic:"NCAmbientalMaior"}, addIcon);    
    $( ".EventoApAdd" ).on("click", {ic:"eventoAp"}, addIcon);    
    $( ".EventoGraveAdd" ).on("click", {ic:"eventograve"}, addIcon);    
    $( ".EventoNGraveAdd" ).on("click", {ic:"eventongrave"}, addIcon);
    $(".tabelaAdd").on("click", addTabela);

    
    
    function addIcon (event) {
        var data = event.data;
        switch (data.ic) {
            //capacete
            case "capacete":
                var legenda = prompt("DIGITE A LEGENDA", "Digite a legenda.");
                $( "<img src='./ICONES/capacete.png' width='100' height='100' class='capaceteIco' width='100' height='100' class='NCAMenIco' title=''/><div class='legenda'></div>" ).appendTo( "#layoutSr").attr("title", legenda);
                $( ".capaceteIco" ).draggable().on("click", {ref:"capacete"}, escondeTudo).on("dblclick", mostraTudo);
                break;
            //NCAmbientalMenor
            case "NCAmbientalMenor":
                var legenda = prompt("DIGITE A LEGENDA", "Digite a legenda.");
                $( "<img src='./ICONES/NCAmbientalMenor.png' width='100' height='100' class='NCAMenIco'/>" ).appendTo( "#layoutSr").attr("title", legenda);
                $( ".NCAMenIco" ).draggable().on("click", {ref:"NCAmbientalMenor"}, escondeTudo).on("dblclick", mostraTudo); 
                break;
            //NCAmbientalMaior
            case "NCAmbientalMaior":
                var legenda = prompt("DIGITE A LEGENDA", "Digite a legenda.");
                $( "<img src='./ICONES/NCAmbientalMaior.png' width='100' height='100' class='NCAMaiIco'/>" ).appendTo( "#layoutSr").attr("title", legenda);;
                $( ".NCAMaiIco" ).draggable().on("click", {ref:"NCAmbientalMaior"}, escondeTudo).on("dblclick", mostraTudo);  
                break;
            //eventoAp
            case "eventoAp":
                var legenda = prompt("DIGITE A LEGENDA", "Digite a legenda.");
                $( "<img src='./ICONES/eventoAp.png' width='100' height='100' class='eventoApIco'/>" ).appendTo( "#layoutSr").attr("title", legenda);
                $( ".eventoApIco" ).draggable().on("click", {ref:"eventoAp"}, escondeTudo).on("dblclick", mostraTudo);  
                break;
            //eventograve
            case "eventograve":
                var legenda = prompt("DIGITE A LEGENDA", "Digite a legenda.");
                $( "<img src='./ICONES/eventograve.png' width='100' height='100' class='eventograveIco'/>" ).appendTo( "#layoutSr").attr("title", legenda);
                $( ".eventograveIco" ).draggable().on("click", {ref:"eventograve"}, escondeTudo).on("dblclick", mostraTudo);    
                break;
            //eventongrave
            case "eventongrave":
                var legenda = prompt("DIGITE A LEGENDA", "Digite a legenda.");
                $( "<img src='./ICONES/eventongrave.png' width='100' height='100' class='eventongraveIco'/>" ).appendTo( "#layoutSr").attr("title", legenda);
                $( ".eventongraveIco" ).draggable().on("click", {ref:"eventongrave"}, escondeTudo).on("dblclick", mostraTudo);    
                break;
            //default não faz nada apenas para.
                default:
                break;
        }   
    } //function addIcon
    
    function escondeTudo (event) {
        var data = event.data;
        switch (data.ref) {
            //capacete
            case "capacete":
                //$( ".capaceteIco" ).addClass("esconde");
                $( ".NCAMenIco" ).addClass("esconde");
                $( ".NCAMaiIco" ).addClass("esconde");
                $( ".eventoApIco" ).addClass("esconde");
                $( ".eventograveIco" ).addClass("esconde");
                $( ".eventongraveIco" ).addClass("esconde");
                break;
            //NCAmbientalMenor
            case "NCAmbientalMenor":
                $( ".capaceteIco" ).addClass("esconde");
                //$( ".NCAMenIco" ).addClass("esconde");
                $( ".NCAMaiIco" ).addClass("esconde");
                $( ".eventoApIco" ).addClass("esconde");
                $( ".eventograveIco" ).addClass("esconde");
                $( ".eventongraveIco" ).addClass("esconde");
                break;
            //NCAmbientalMaior
            case "NCAmbientalMaior":
                $( ".capaceteIco" ).addClass("esconde");
                $( ".NCAMenIco" ).addClass("esconde");
                //$( ".NCAMaiIco" ).addClass("esconde");
                $( ".eventoApIco" ).addClass("esconde");
                $( ".eventograveIco" ).addClass("esconde");
                $( ".eventongraveIco" ).addClass("esconde");    
                break;
            //eventoAp
            case "eventoAp":
                $( ".capaceteIco" ).addClass("esconde");
                $( ".NCAMenIco" ).addClass("esconde");
                $( ".NCAMaiIco" ).addClass("esconde");
                //$( ".eventoApIco" ).addClass("esconde");
                $( ".eventograveIco" ).addClass("esconde");
                $( ".eventongraveIco" ).addClass("esconde");    
                break;
            //eventograve
            case "eventograve":
                $( ".capaceteIco" ).addClass("esconde");
                $( ".NCAMenIco" ).addClass("esconde");
                $( ".NCAMaiIco" ).addClass("esconde");
                $( ".eventoApIco" ).addClass("esconde");
                //$( ".eventograveIco" ).addClass("esconde");
                $( ".eventongraveIco" ).addClass("esconde");    
                break;
            //eventongrave
            case "eventongrave":
                $( ".capaceteIco" ).addClass("esconde");
                $( ".NCAMenIco" ).addClass("esconde");
                $( ".NCAMaiIco" ).addClass("esconde");
                $( ".eventoApIco" ).addClass("esconde");
                $( ".eventograveIco" ).addClass("esconde");
                //$( ".eventongraveIco" ).addClass("esconde");   
                break;
            //default não faz nada apenas para.
                default:
                break;
        }
	$(".esconde").animate({opacity:0});
    } //function escondeTudo
    
    function mostraTudo () {
	$(".esconde").animate({opacity:100}, 500, function() {$("*").removeClass("esconde")});
       
    } //function mostraTudo

    function addTabela () {
        var titulo = prompt("DIGITE O TÍTULO DA TABELA", "Digite o título aqui.");
        if(titulo == null || titulo == "") {
            alert("Tabela cancelada.");
        } else {
            var colunas = prompt("QUANTIDADE DE COLUNAS", "Digite a quantidade de colunas. Valores posíveis: 1, 2, 3 ou 4");
            if(colunas == null || colunas =="") {
                alert("Tabela cancelada.");
            } else {
                var tabelaIcones = "<select><option>Incêndio</option><option>Rasgo de Correia</option><option>Queda/Projeção</option><option>Romp. Cabo Elétric.</option><option>Colisão</option></select>";
                var tabelaUmaColuna = "<table class='tabelaUmaColuna'><tr><th>"+ titulo +"</th></tr> <tr></tr><td>"+tabelaIcones+"</td></tr><tr><td><textarea class='textTabela' name='textTabela' rows='5' cols='33'>DIGITE AQUI A LISTA DE EVENTOS</textarea></td></tr></table>";
                var tabelaDuasColunas = "<table class='tabelaDuasColunas'><tr><th colspan='2'><h2>"+ titulo +"</h2></th></tr><tr><td>"+tabelaIcones+"</td><td>"+tabelaIcones+"</td></tr><tr><td><textarea class='textTabela' name='textTabela' rows='5' cols='33'>DIGITE AQUI A LISTA DE EVENTOS</textarea></td><td><textarea class='textTabela' name='textTabela' rows='5' cols='33'>DIGITE AQUI A LISTA DE EVENTOS</textarea></td></tr></table>";
                var tabelaTresColunas = "<table class='tabelaTresColunas'><tr><th colspan='3'><h2>"+ titulo +"</h2></th></tr><tr><td>"+tabelaIcones+"</td><td>"+tabelaIcones+"</td><td>"+tabelaIcones+"</td></tr><tr><td><textarea class='textTabela' name='textTabela' rows='5' cols='33'>DIGITE AQUI A LISTA DE EVENTOS</textarea></td><td><textarea class='textTabela' name='textTabela' rows='5' cols='33'>DIGITE AQUI A LISTA DE EVENTOS</textarea></td><td><textarea class='textTabela' name='textTabela' rows='5' cols='33'>DIGITE AQUI A LISTA DE EVENTOS</textarea></td></tr></table>";
                var tabelaQuatroColunas ="<table class='tabelaQuatroColunas'><tr><th colspan='4'><h2>"+ titulo +"</h2></th></tr><tr><td>"+tabelaIcones+"</td><td>"+tabelaIcones+"</td><td>"+tabelaIcones+"</td><td>"+tabelaIcones+"</td></tr><tr><td><textarea class='textTabela' name='textTabela' rows='5' cols='33'>DIGITE AQUI A LISTA DE EVENTOS</textarea><td><textarea class='textTabela' name='textTabela' rows='5' cols='33'>DIGITE AQUI A LISTA DE EVENTOS</textarea></td><td><textarea class='textTabela' name='textTabela' rows='5' cols='33'>DIGITE AQUI A LISTA DE EVENTOS</textarea></td><td><textarea class='textTabela' name='textTabela' rows='5' cols='33'>DIGITE AQUI A LISTA DE EVENTOS</textarea></td></tr></table>";
                
                
                
                switch (colunas) {
                    case "1":
                    alert("VOCÊ ESCOLHEU UMA COLUNA");
                        $(tabelaUmaColuna).appendTo( "#layoutSr").draggable();
                        //$( "<img src='./ICONES/capacete.png' width='100' height='100' class='capaceteIco' width='100' height='100' class='NCAMenIco' title=''/><div class='legenda'></div>" ).appendTo( "#layoutSr").attr("title", legenda);
                        //$( ".capaceteIco" ).draggable().on("click", {ref:"capacete"}, escondeTudo).on("dblclick", mostraTudo);
                        break;
                    case "2":
                    alert("VOCÊ ESCOLHEU DUAS COLUNAS");
                        $(tabelaDuasColunas).appendTo( "#layoutSr").draggable();
                        break;
                    case "3":
                    alert("VOCÊ ESCOLHEU TRÊS COLUNAS");
                        $(tabelaTresColunas).appendTo( "#layoutSr").draggable();
                        break;
                    case "4":
                    alert("VOCÊ ESCOLHEU QUATRO COLUNAS");
                        $(tabelaQuatroColunas).appendTo( "#layoutSr").draggable();
                        break;
                    
                    default:
                        alert("VOCÊ NÃO ESCOLHEU UMA DAS OPÇÕES POSSÍVEIS!");
                        break;
                }
            }
        }
    } //addTabela
    
    //FUNCAO PARA TRANSFORMAR OS SELETORES EM IMAGEM
    function metamorfo () {
            $(".metamorf").html("<h1>SOU UM H1 AGORA, ANTES ERA UM H6</h1>");
    }$(".metamorf").on("click", metamorfo);

    //FUNÇÃO COPIA HTML
    $("#botaoCopiar").click(function () {
        copiaHTML = $("#layoutSr").html();
        $("#copialayoutSr").text(copiaHTML);
        alert("copiou");
    })


    //FUNÇÃO PARA O DASHBARD
   $(".carregaHTML").on("click", carregaBody);
    function carregaBody () {
       alert("copiou a página");
       var meuHtml = $("#dash").val();
       var conteudo = $("#layoutSr").html(meuHtml);
    $("#addIcones").css("display", "none");
    $("#layoutSr > img").draggable();
    }
});




