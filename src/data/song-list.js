 export let exampleSongList = [
    {
        id: -6,
        title: 'Symphony nr. 2 in D-majeur, op.43',
        artist: 'Jean Sibelius',
        genre: 'Classical',
        rating: 3,
    },
    {
        id: -5,
        title: 'Enigma Variations',
        artist: 'Edward Elgar',
        genre: 'Classical',
        rating: 5,
    },
    {
        id: -4,
        title: 'Go down Moses!',
        artist: 'Louis Armstrong',
        genre: 'other',
        rating: 3,
    },
    {
        id: -3,
        title: 'Oohs and Ahhs',
        artist: 'NEEDTOBREATHE',
        genre: 'Rock',
        rating: 4,
    },
    {
        id: -2,
        title: 'Mary did you know',
        artist: 'Voctave feat. Mark Lowry',
        genre: 'other',
        rating: 5,
    },
    {
        id: -1,
        title: "j'aurais bien voulu",
        artist: 'Babylon Circus',
        genre: 'Pop',
        rating: 4,
    },
    {
        id: 0,
        title: 'Africa',
        artist: 'Toto',
        genre: 'Pop',
        rating: 1,
    }
]

export const addSong = song => {
    exampleSongList.push(song)
}

export const deleteSong = id => {
    let newSongList = exampleSongList.filter(song => song.id !== id)
    exampleSongList = newSongList
}


