<!doctype html>
<meta charset="UTF-8">
<html>
    <head>
        <title>puzzle game</title>
        <style>
            .picture{
                border: 1px solid black;
            }

            .pi img{
                width: 200px;
                height: 200px;
            }

        </style>
    </head>
    <body>
        <div id="title">
            <h2>jigsaw puzzle</h2>
        </div>
        <div id="slider">
            <form>
                <label>easy</label>
                <input type="range" id="scale" value="3" min="3" max="5" step="1">
                <label>hard</label>
            </form>
            <br>
        </div>
        <div id='main' class="main">
            <canvas id="puzzle" width="480px" height="480px"></canvas>
        </div>
        <div class= "pi">
            <img src="1.jpg">
         <img src="2.jpg">
         <img src="3.jpg">   

        </div>
        
        <script src="slinding.js"></script>
    </body>