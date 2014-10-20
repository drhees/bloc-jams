var buildAlbumThumbnail = function() {
    var template = ' \
        <div class="collection-album-container col-xs-6 col-sm-4 col-md-2"> \
            <div class="album-img-container"> \
                <img src="/images/album-placeholder.png" /> \
            </div> \
            <div class="collection-album-info caption"> \
                <p> \
                    <a class="album-name" href="/album.html"> The Colors </a> \
                    <br/> \
                    <a href="/album.html"> Pablo Picasso </a> \
                    <br/>X songs \
                    <br/> \
                </p> \
            </div> \
        </div> ';
        
    return $(template);
}

var buildAlbumOverlay = function(albumURL) {
    var template =' \
        <div class="collection-album-image-overlay"> \
            <div class="collection-overlay-content"> \
                <a class="collection-overlay-button" href="' + albumURL + '"> \
                    <i class="fa fa-play"></i> \
                </a> \
                <a class="collection-overlay-button"> \
                    <i class="fa fa-plus"></i> \
                </a> \
            </div> \
        </div> \
      ';

    return $(template);
};

var updateCollectionView = function(){
    var $collection = $(".collection-container .row");
        $collection.empty();
        
        for (var i=0; i < (Math.floor(Math.random() * (100 - 25) + 25)); i++){
             $collection.append(buildAlbumThumbnail());
            // Im would assume that the above line would work in this instance.
            // but am curious why the course assigment asks for a 
            // variable assignment over a function call?
        }
        
    var onHover = function(event){
        $(this).append(buildAlbumOverlay("/album.html"));
    };

    var offHover = function(event) {
        $(this).find('.collection-album-image-overlay').remove();
    };

    $collection.find('.album-img-container').hover(onHover, offHover);
}


if (document.URL.match(/\/collection.html/)) {
    $(document).ready(function(){
        updateCollectionView();
    });
}