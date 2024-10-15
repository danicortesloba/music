import { faker } from '@faker-js/faker';

const createRandomSong =() => {
    return {
    songId: faker.string.uuid(),
    songname: faker.music.songName(),
    artistby: faker.music.artist(),
    album: faker.music.album(),
    length: faker.number.float(),
    genre: faker.music.genre(),
    released: faker.date.past(),
    };
}


const createRandomPlaylist = () => {
    return {
    playlistId: faker.string.uuid(),
    name: faker.music.songName(),
    description: faker.music.genre(),
    songs: [createRandomSong(), createRandomSong(), createRandomSong(), createRandomSong(), createRandomSong],
    creator: faker.internet.userName(),
    date: faker.date.past(),
    };
}

export {createRandomSong, createRandomPlaylist}