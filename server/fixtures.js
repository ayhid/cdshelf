if (Releases.find().count() === 0) {
    Releases.insert(
        {
            artist: 'David Gilmour',
            release: {
                mbid: '3a29e7e8-aace-412e-812b-f66acd02e2e6',
                name: 'Rattle that lock'
            }
        }
    );

    Releases.insert(
        {
            artist: 'lana del ry',
            release: {
                mbid: '3a29e7e8-aace-412e-812b-f66acd02e2e6',
                name: 'honeymoon'
            }
        }
    );

    Releases.insert({
            artist: 'Stereophonics',
            release: {
                mbid: '3a29e7e8-aace-412e-812b-f66acd02e2e6',
                name: 'Keep the village alive'


            }
        }
    );

    Releases.insert({
            artist: 'Dave Gahan',
            release: {
                mbid: '3a29e7e8-aace-412e-812b-f66acd02e2e6',
                name: 'Angels & Ghosts'


            }
        }
    );

    Releases.insert({
            artist: 'Violet Bones',
            release: {
                mbid: '3a29e7e8-aace-412e-812b-f66acd02e2e6',
                name: 'Got Nobody'


            }
        }
    );
}

