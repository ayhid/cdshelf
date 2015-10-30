Template.newRelease.helpers({
    results: function () {
        return Session.get('results');
    }
});

Template.releaseResultItem.helpers({
    thumbnail: function () {
        var image = '/images/no_image.jpg';

        if (_.isUndefined(Session.get('cover:' + this.id).error)) {
            image = Session.get('cover:' + this.id)
        }
        return image;

    },

    artistName: function () {
        return _.first(this['artist-credit']).artist.name;
    },

    trackCount: function () {
        return _.first(this.media)['track-count'];
    },

    format: function () {
        return _.first(this.media).format;
    }

});

Template.newRelease.events({
    'submit form': function (e) {
        e.preventDefault();
        var barcode = $(e.target).find('[name=barcode]').val();
        Meteor.call('getReleaseForBarcode', barcode, function (error, results) {
            if (error) {
                Session.set('results', {error: error});
            } else {

                _.each(results.releases, function (release) {
                    Meteor.call('getCoverArt', release.id, function (error, coverArt) {
                        if (error) {
                            var response = {error: error}
                            Session.set('cover:' + release.id, {error: error});
                        } else {
                            response = coverArt;
                        }
                        Session.set('cover:' + release.id, response);
                    });
                });
                Session.set('results', results);
                return results;
            }
        });
    },
    'click .add-to-collection': function (e) {
        var releaseId = Meteor.call('insertReleaseFromMusicBrainz', this);
    }
});