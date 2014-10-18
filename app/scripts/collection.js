var buildAlbumThumbnail = function() {
    var template = ' \
        <div class="collection-album-container col-md-2"> \
            <img src="/images/album-placeholder.png" /> \
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

var updateCollectionView = function(){
    var $collection = $(".collection-container .row");
        $collection.empty();
        
        for (var i=0; i < (Math.floor(Math.random() * (100 - 25) + 25)); i++){
             $collection.append(buildAlbumThumbnail());
            // Im would assume that the above line would work in this instance.
            // but am curious why the course assigment asks for a 
            // variable assignment over a function call?
        }
}

if (document.URL.match(/\/collection.html/)) {
    $(document).ready(function(){
        updateCollectionView();
    });
}