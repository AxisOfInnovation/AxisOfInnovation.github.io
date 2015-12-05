<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title> %title% :: AoI </title>
        <link rel="icon" type="image/png" href="media/favicon.png"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </head>

    <body>

        %nav%

        <div>
            %content%
            
            <div>
                <p class="fglh footer">
                    Copyright &copy; 2015 The Axis of Innovation. All Rights Reserved. <br/>
                    Website designed &amp; created by
                        <a style="font-size: inherit; text-decoration: underline;"
                           href="http://donofanne.github.io/">
                            Austin Donovan
                        </a>
                </p>
            </div>
        </div>

        <script src="scripts/jquery-2.1.4.min.js"></script>
        <script src="scripts/resizer.js"></script>
        <script src="scripts/gallery.js"></script>
        <script>
            $( window ).resize( resize );
            $( window ).load( onLoad );

            /* add a div that clears floating div.contents to make the div.container take have a size and position */
            $( 'div.container' ).append( '<div style="clear: both"> </div>' );

            animateGallery();

            function onLoad()
            {
                resize();
            }
        </script>
    </body>
</html>