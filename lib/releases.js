Releases = new Mongo.Collection('releases');
Meteor.methods({
    'insertReleaseFromMusicBrainz': function (mbRelease) {
        var release = {
            artist: _.first(mbRelease['artist-credit']).artist.name,
            release: {
                mbid: mbRelease.id,
                name: mbRelease.title
            }
        }
        var releaseId = Releases.insert(release);

        return {
            _id: releaseId
        };
    }
});
