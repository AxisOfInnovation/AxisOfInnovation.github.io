head
    meta(charset: "UTF-8")
    title < "#[alias title] :: AoI"

    link
        rel: "icon"
        type: "image/png"
        href: "media/favicon.png"
    meta
        name: "viewport"
        content: "width=device-width, initial-scale=1.0"

body
    #[frag nav]

    div
        #[content]

        div
            p.fglh.footer
                "Copyright &copy; 2016 The Axis of Innovation. All Rights Reserved. \n"
                "Website designed &amp; created by"
                a
                    style: "font-size: inherit; text-decoration: underline;"
                    href: "http://donofanne.github.io"
                    "Austin Donovan"
                "."

    script(src: "scripts/jquery-2.1.4.min.js")
    script(src: "scripts/resizer.js")
    script(src: "scripts/gallery.js")
    script
        $( window ).resize( resize );
        $( window ).load( onLoad );

        /* add a div that clears floating div.contents to make the div.container take have a size and position */
        $( 'div.container' ).append( '<div style="clear: both"> </div>' );

        animateGallery();

        function onLoad()
        {
            resize();
        }