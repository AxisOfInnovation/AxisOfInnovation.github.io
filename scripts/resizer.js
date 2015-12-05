function resize()
{
    resizeContainers();
}

function resizeContainers()
{
    var maxHeight = -1;
    $( 'div.container' ).each(
        function( i )
        {
            if ( $( document ).width() > 1270 )
            {
                maxHeight = -1;
                $(this).children( 'div.content' ).each(
                    function( i )
                    {
                        // set it back to the original height, then get that height
                        // (yes, I know it looks stupid)
                        maxHeight = Math.max( maxHeight, $( this ).outerHeight( 'initial' ).outerHeight() );
                    }
                );
                $(this).children( 'div.content' ).each(
                    function( i )
                    {
                        $(this).outerHeight( maxHeight );
                    }
                );
            }
            else
            {
                $( this ).children( 'div.content:not(.schedule)' ).each(
                    function( i )
                    {
                        var height = $( this ).outerHeight( 'initial' ).outerHeight(); // gets the outer height after setting it to the original height
                        $( this ).outerHeight( height + 25 ); // adds 25 for spacing
                    }
                );
                $( this ).children( 'div.content.schedule' ).each(
                    function( i )
                    {
                        $( this ).css( "height", "" );
                    }
                );
            }
        }
    );
}