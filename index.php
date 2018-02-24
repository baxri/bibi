<!DOCTYPE html>
<html>
<hea
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>www.BIBI.ge</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="bower_components/highlightjs/styles/tomorrow-night.css" />
    <link rel="stylesheet" type="text/css" media="screen" href="css/main.css" />
    
    <script src="bower_components/showdown/dist/showdown.js"></script>    
    <script src="bower_components/jquery/dist/jquery.js"></script>
    <script src="bower_components/highlightjs/highlight.pack.js"></script>   
    <script>hljs.initHighlightingOnLoad();</script>
        
    <script type="text/javascript"> 
        $(document).ready(function(){
            $.get('README.md', function(markdown) {  
                
                

                converter = new showdown.Converter();   
                $("#showdown").html(converter.makeHtml(markdown));
                
                // hljs.initHighlightingOnLoad();                
                setTimeout(function(){
                    $("#showdown").fadeIn('slow');
                }, 500);
            });
        });
    </script>
    
</head>
<body>
    <div id="showdown"></div>      
</body>
</html>