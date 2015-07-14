<html>

    <head>
        <title> %title% :: AoI </title>
        <link rel="icon" type="image/png" href="favicon.png"/>

        %headerextras%
        <script type="text/javascript">
            /* fixes the "returning to single column from two column" problem */
            window.onload = onLoad;
            window.onresize = onResize;

            function onLoad()
            {
                addAnimationDelays();
                resizeColumns();
                resizeGrid();
            }

            function onResize()
            {
                resizeColumns();
                resizeGrid();
            }

            function resizeGrid()
            {
                var grids = document.getElementsByClassName( "grid" );

                for ( var i = 0; i < grids.length; i++ )
                {
                    var rows = grids[ i ].children;

                    for ( var j = 0; j < rows.length; j++ )
                    {
                        var items = rows[ j ].children;
                        var height = 0;

                        for ( var k = 0; k < items.length; k++ )
                        {
                            for ( var l = 0; l < items[ k ].children.length; l++ )
                            {
                                if ( items[ k ].children[ l ].tagName.toLowerCase() === "img" )
                                {
                                    items[ k ].children[ l ].style.marginTop = "15px";
                                    items[ k ].children[ l ].style.marginBottom = "15px";
                                }
                            }
                            height = Math.max( height, items[ k ].clientHeight );
                        }
                        for ( var k = 0; k < items.length; k++ )
                        {
                            items[ k ].style.height = height + "px";
                        }
                    }
                }
            }

            function resizeColumns()
            {
                var splits = document.getElementsByClassName( "split" );

                for ( var i = 0; i < splits.length; i++ )
                {
                    var columns = splits[ i ].children;

                    var left = 0;
                    var right = 0;

                    for ( var j = 0; j < columns.length; j++ )
                    {
                        var height = columns[ j ].offsetHeight;
                        if ( columns[ j ].className.indexOf( "left" ) > -1 )
                        {
                            left += height;
                        }
                        else
                        {
                            right += height;
                        }
                    }
                    splits[ i ].style.height = Math.max( left, right );
                }
            }

            function addAnimationDelays()
            {
                /* add a larger animation delay to each sheet */
                var sheets = document.getElementsByClassName( "sheet" );
                var duration = 0.5;
                for ( var i = 0; i < sheets.length; i++ )
                {
                    sheets[ i ].style.animationDuration = duration + "s";
                    duration += 0.2;
                }
                document.getElementsByClassName( "footer" )[ 0 ].style.animationDuration = duration + "s";
            }

        </script>
    </head>

    <body>

        <nav class="bgPrimaryDark cVertical main">
            %nav%
        </nav>

        <div id="content">
            %content%
        </div>
        
        <div>
            <p class="fglh footer">
                Copyright &copy; 2015 The Axis of Innovation. All Rights Reserved. <br/>
                Created by
                    <a class="fglh"
                       style="font-size: inherit; text-decoration: underline;"
                       href="http://donofanne.github.io/">
                        Austin Donovan
                    </a>
            </p>
        </div>

    </body>

</html>