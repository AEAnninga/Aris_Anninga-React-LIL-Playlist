import React, { Component} from 'react'
import SongForm from './song-form'
import Table from './table'
import Filter from './filter'
import _ from 'lodash'
import { exampleSongList } from '../data/song-list'

class PlayList extends Component {
  constructor() {
    super()
    this.state = { 
      songList: [...exampleSongList],
      genreList: [],
      ratingList: [],
      doubleFilteredList: [],
      genreFilter: {selected: false, genre: ''},
      ratingFilter: {selected: false, rating: ''},
      idCount: 0,
      form: {
        title: '',
        artist: '',
        genre: '',
        rating: ''
      },
      tableHeaders: [
        {path: 'title', label: 'Title'},
        {path: 'artist', label: 'Artist'},
        {path: 'genre', label: 'Music genre'},
        {path: 'rating', label: 'Rating'}
      ],
      sortColumn: {path: 'title', order: 'desc', sorted: false},
      genres: [
        {name: 'Pop', id: 1},
        {name: 'Rock', id: 2},
        {name: 'Classical', id: 3},
        {name: 'Jazz', id: 4},
        {name: 'other', id: 5},
      ],
      ratings: [
        {stars: 1, id: 1},
        {stars: 2, id: 2},
        {stars: 3, id: 3},
        {stars: 4, id: 4},
        {stars: 5, id: 5},
      ] 
    } 
  }

  handleChange = head => {
    let newForm = this.state.form
    newForm[head] = event.target.value
    this.setState({form: newForm})
  }

  handleSubmit = event => {
    const { songList, idCount } = this.state
    let newSongList = songList
    let newId = idCount + 1
    let song = {
      id: newId,
      title: event.target[0].value,
      artist: event.target[1].value,
      genre: event.target[2].value,
      rating: event.target[3].value,
    }
    newSongList.push(song)
    this.setState({songList: newSongList, idCount: newId})
    event.preventDefault()
    let form = document.getElementById('form')
    // form.reset() 
  }

  handleDelete = id => {
    const { songList } = this.state
    let newSongList = songList.filter(song => song.id !== id)
    this.setState({songList: newSongList})
  }

  handleGenres = event => {
    const { songList, ratingFilter } = this.state
    let newGenre = event.target.value
    let newGenreList = songList.filter(song => song.genre == newGenre)
    if (newGenre && ratingFilter.selected) {
      let newRatingList = songList.filter(song => song.rating == ratingFilter.rating)
      let newDoubleFilteredList = newRatingList.filter(song => song.genre == newGenre)
      this.setState({
        genreFilter: {selected: true, genre: newGenre},
        genreList: newGenreList,
        doubleFilteredList: newDoubleFilteredList // sets state of doubleFilteredList needed in tablebody
      })
    } else if (newGenre ) {
      this.setState({
        genreFilter: {selected: true, genre: newGenre},
        genreList: newGenreList
      })
    } else {
      this.setState({genreFilter: {selected: false, genre: ''}}) 
    }
  }

  handleRating = event => {
    const { songList, genreFilter } = this.state
    let newRating = event.target.value
    let newRatingList = songList.filter(song => song.rating == newRating)
    if (newRating && genreFilter.selected) {
      let newGenreList = songList.filter(song => song.genre == genreFilter.genre)
      let newDoubleFilteredList = newGenreList.filter(song => song.rating == newRating)
      this.setState({
        ratingFilter: {selected: true, rating: newRating},
        ratingList: newRatingList,
        doubleFilteredList: newDoubleFilteredList // sets state of doubleFilteredList needed in tablebody
      })
    } else if (newRating) {
      this.setState({
        ratingFilter: {selected: true, rating: newRating},
        ratingList: newRatingList
      })
    } else {
      this.setState({ratingFilter: {selected: false, rating: ''}}) 
    }
  }

  handleSort = path => {
    const { 
      sortColumn, 
      songList, 
      genreList, 
      ratingList, 
      doubleFilteredList 
    } = this.state

    let newSortColumn = sortColumn
    if(newSortColumn.path === path) {
      newSortColumn.order = newSortColumn.order === 'asc' ? 'desc' : 'asc'
      newSortColumn.sorted = true
    } else {
      newSortColumn.path = path
      newSortColumn.order = 'asc'
      newSortColumn.sorted = true
    }
    this.setState({sortColumn: newSortColumn})

    let sortedSongList = _.orderBy(songList, [sortColumn.path], sortColumn.order)
    let sortedGenreList = _.orderBy(genreList, [sortColumn.path], sortColumn.order)
    let sortedRatingList = _.orderBy(ratingList, [sortColumn.path], sortColumn.order)
    let sortedDoubleFilteredList = _.orderBy(doubleFilteredList, [sortColumn.path], sortColumn.order)

    this.setState({
      songList: sortedSongList,
      genreList: sortedGenreList,
      ratingList: sortedRatingList,
      doubleFilteredList: sortedDoubleFilteredList
    })
  }

  renderSortIcon = column => {
    const { sortColumn } = this.state
    let sortIcon = 'active m-2 fa fa-sort-'

    if (column.path !== sortColumn.path) {
      return null
    } else if (sortColumn.order === 'asc') {
      sortIcon += 'asc'
      return <i cursor='pointer' className={sortIcon}/>
    } else {
      sortIcon += 'desc'
      return <i cursor='pointer' className={sortIcon}/>
    }
  }


  render() {
    const { 
      songList, 
      tableHeaders,
      sortColumn,
      genres, 
      genreFilter, 
      genreList, 
      ratings,
      ratingFilter,
      ratingList,
      doubleFilteredList 
    } = this.state

    const style = {
      position: 'sticky',
      top: 0
    }

    return (
      <section className='container-fluid'>
        <nav 
          className='pageNav navbar navbar-default navbar-fixed-top'
          style={style} // vanwege bootstrap inline style gebruikt
        >
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
            handleFilters={event => this.handleFilters(event)}
          />
        </nav>
        <Table 
          tableHeaders={tableHeaders}
          sortColumn={sortColumn}
          songList={songList}
          handleDelete={index => this.handleDelete(index)}
          handleSort={(path) => this.handleSort(path)}
          renderSortIcon={(column) => this.renderSortIcon(column)}
          genreFilter={genreFilter}
          genreList={genreList}
          ratingFilter={ratingFilter}
          ratingList={ratingList}
          doubleFilteredList={doubleFilteredList}
        />
      </section>
    );
  }
}

export default PlayList;
