// creating a ajax uploading from flicker api.

$(document).ready(() => {

    const ulBottons = $('.filter-select');
    const divPhotos = $('#photos');
    
        ulBottons.click( (event) => {
            
            const callJson = (query) => {
                const url = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
                const flickOptions = {
                    tags : query,
                    format : "json"
                };
                let photosHTML = '<ul>';
    
                $.getJSON(url, flickOptions, (result) => {
                    console.log(result);
                    
                    $.each(result.items, (i, photo) => {
                        photosHTML += '<li class="grid-25 tablet-grid-50">';
                        photosHTML += '<a href="'+ photo.link +'" class="image">';
                        photosHTML += '<img src="'+ photo.media.m +'"/></a></li>';
                    });
    
                    photosHTML += '</ul>';

                    divPhotos.html( photosHTML );
    
                });
                
            }


            if( event.target.nodeName === 'BUTTON'){
                
                if( event.target.textContent === 'Dog'){
                    $('.filter-select button').removeClass('selected');
                    $(event.target ).addClass('selected'); 
                    callJson("Dog");
                }else if(event.target.textContent === 'Cat'){
                    $('.filter-select button').removeClass('selected');
                    $(event.target ).addClass('selected');
                    callJson("Cat");
                }else{
                    $('.filter-select button').removeClass('selected');
                    $(event.target ).addClass('selected');
                    callJson("Moose");
                }
            }
            


        });


}); // jQuery ends here