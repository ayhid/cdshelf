Meteor.methods({
    getReleaseForBarcode: function (barcode) {
        barcode = barcode.replace(/\s+/g, '');
        var apiUrl = 'http://musicbrainz.org/ws/2/release?fmt=json&query=barcode:' + barcode;
        this.unblock();
        var response = Meteor.wrapAsync(apiCall)(apiUrl);

        return response;
    },
    getReleaseByMbid: function (mbid) {

        var apiUrl = 'http://musicbrainz.org/ws/2/release/' + mbid + '?inc=artist-credits+labels+discids+recordings&fmt=json';
        this.unblock();
        var response = Meteor.wrapAsync(apiCall)(apiUrl);

        return response;
    },
    getCoverArt: function (mbid) {

        var apiUrl = 'http://coverartarchive.org/release/' + mbid;
        this.unblock();
        var response = Meteor.wrapAsync(apiCall)(apiUrl);

        var imagesCount = response.images.length;

        var i =0;
        var front = false;
        var coverArtUrl = null;

        while(i<imagesCount && !front){
            if(response.images[i].front){
                front = true;
                coverArtUrl = response.images[i].thumbnails.small;
            }
            i++;
        }

        return coverArtUrl;
    }

});