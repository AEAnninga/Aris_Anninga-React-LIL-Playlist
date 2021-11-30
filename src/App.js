import React, { Component, Fragment } from 'react'
import SongForm from './components/song-form'
import Table from './components/table'
import Filter from './components/filter'

class App extends Component {
  constructor() {
    super()
    this.state = { 
      songList: [],
      backupList: [],
      selectedGenreList: [],
      selectedGenre: false,
      idCount: 0,
      form: {
        title: '',
        artist: '',
        genre: '',
        rating: ''
      },
      tableHeader: {
        title: 'Title',
        artist: 'Artist',
        genre: 'Music genre',
        rating: 'Rating'
      },
      genres: [
        {name: 'Pop', selected: false, id: 1},
        {name: 'Rock', selected: false, id: 2},
        {name: 'Classical', selected: false, id: 3},
        {name: 'Jazz', selected: false, id: 4},
        {name: 'other', selected: false, id: 5},
      ],
      ratings: [
        {stars: 1, name: "fa fa-star warning", id: 1},
        {stars: 2, name: '&#11088; &#11088;', id: 2},
        {stars: 3, name: '&#11088; &#11088; &#11088;', id: 3},
        {stars: 4, name: '&#11088; &#11088; &#11088; &#11088;', id: 4},
        {stars: 5, name: '&#11088; &#11088; &#11088; &#11088; &#11088;', id: 5},
      ] 
    } 
  }

  handleChange = head => {
    let newForm = this.state.form
    newForm[head] = event.target.value
    this.setState({form: newForm})
  }

  handleSubmit = (event) => {
    const { songList, idCount } = this.state
    let newSongList = songList
    // let newBackUpList = songList
    let newId = idCount + 1
    let song = {
      id: newId,
      title: event.target[0].value,
      artist: event.target[1].value,
      genre: event.target[2].value,
      rating: event.target[3].value,
    }
    newSongList.push(song)
    // newBackUpList.push(song)
    this.setState({songList: newSongList, idCount: newId})
    event.preventDefault()
    let form = document.getElementById('form')
    form.reset()
  }

  handleDelete = (id) => {
    const { songList, selectedGenreList } = this.state
    let newSongList = songList.filter(song => song.id !== id)
    let newSelectedGenreList = selectedGenreList.filter(song => song.id !== id)
    this.setState({songList: newSongList, selectedGenreList: newSelectedGenreList})
  }

  handleGenres = event => {
    let genre = event.target.value
    let newSongList = this.state.songList
    let newSelectedGenreList = newSongList.filter(song => song.genre === genre)
    if (genre) {
      this.setState({selectedGenreList: newSelectedGenreList, selectedGenre: true})
    } else {
      this.setState({songList: newSongList, selectedGenre: false}) 
    }
  }

  handleRating = () => {
    console.log('rating check')
  }


  render() {
    const { songList, tableHeader, genres, selectedGenre, selectedGenreList, ratings } = this.state
    return (
      <Fragment>
        <SongForm
          handleChange={head => this.handleChange(head)}
          handleSubmit={event => this.handleSubmit(event)}
          genres={genres}
        />
        <Filter 
          genres={genres}
          handleGenres={event => this.handleGenres(event)}
          ratings={ratings}
          handleRating={event => this.handleRating(event)}
        />
        <Table 
          tableHeader={tableHeader}
          songList={songList}
          handleDelete={index => this.handleDelete(index)}
          selectedGenre={selectedGenre}
          selectedGenreList={selectedGenreList}
        />

      </Fragment>
    );

  }
}

export default App;
