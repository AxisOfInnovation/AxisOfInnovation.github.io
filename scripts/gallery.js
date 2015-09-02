function animateGallery()
{
    // disable animated galleries for mobile devices
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test( navigator.userAgent ) ) return;

    $( 'div.content.gallery' ).css( "overflow-x", "hidden" ).each(
        function ( i )
        {
            var gallery = $( 'div.content.gallery' )[ i ];
            var children = $( gallery ).children( 'span' );
            $( children ).first().css( "marginLeft", getStartPosition( gallery ) );

            var index = 0;
            var delay = $( gallery ).hasClass( "small" ) ? 2750 : 4000;
            setInterval(
                function()
                {
                    if ( ++index >= $( children ).length ) index = 0;
                    nextImage( gallery, index );
                },
                delay
            );   
        }
    );
}

function nextImage( parent, index )
{
    var translation = getStartPosition( parent );

    if ( index > 0 )
    {
        for ( i = 0; i < index; i++ )
        {
            var width = $( parent ).children( 'span' ).eq( i ).outerWidth();
            if ( i == 0 ) width /= 2;
            translation -= width;
        }
        translation -= $( parent ).children( 'span' ).eq( index ).outerWidth() / 2;
    }
    
    $( parent ).children().first().animate(
        {
            marginLeft: translation
        },
        750
    );
}

function getStartPosition( parent )
{
    var parentWidth = $( parent ).outerWidth();
    var width = $( parent ).children( 'span' ).first().outerWidth();
    return ( parentWidth / 2 ) - ( width / 2 );
}