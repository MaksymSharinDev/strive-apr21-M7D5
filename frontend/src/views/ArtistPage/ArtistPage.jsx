import "./ArtistPage.css";
import {fetchArtist} from "../../apicalls";
import {useEffect, useState} from "react";
import SingleAlbum from "../../components/SingleAlbum/SingleAlbum";
import Button from "../../components/Button/Button"
import SingleSong from "../../components/SingleSong/SingleSong"

import {connect} from 'react-redux'
import {setCurrentArtistAction} from './actions'
import {fetchArtistAction} from '../../apicalls/actions'

const mapStateToProps = state => ({

    fetchedData: state.apiData.artistObj,
    artist: state.artist.current
})
const mapDispatchToProps = dispatch => ({
    fetchArtist: id => dispatch(fetchArtistAction(id)),
    setArtist: artist => dispatch(setCurrentArtistAction(artist))

})


const ArtistPage = ({match, fetchArtist, fetchedData, setArtist, artist}) => {
    //TODO AlbumPage reducers and actions

    useEffect(() => {
        fetchArtist(match.params.id)
    }, []);
    useEffect(() => {

        setArtist( fetchedData )
    }, [fetchedData])
    return (
        <div className="artist-page__wrap">
            <img className="artist__header" src={artist?.picture_xl}/>
            <div className="header__wrap--art">
                <div className='listeners'>{artist?.nb_fan} MONTHLY LISTENERS</div>
                <h1>{artist?.name}</h1>
                <div>
                    <Button text="Play"/>
                    <button className='follow__btn'>Sign up</button>
                </div>
            </div>
            <h2>Albums</h2>
            <div className='artist__line'>
                {artist?.albums?.map((album) => (
                    <SingleAlbum src={album.cover_medium} key={album.id}/>
                ))}
            </div>
            <h2>Top tracks</h2>
            <div className='artist__tracks'>
                {artist?.tracklist?.map((song) => (
                    <SingleSong title={song.title} artist={song.artist.name} duration={song.duration / 60}/>
                ))}
            </div>
        </div>
    );
};
export default  connect( mapStateToProps , mapDispatchToProps )(ArtistPage)


//HOWTO
// in ./src/components/component/component.jsx

// import {connect} from 'react-redux'
// import { stuffAction } from './actions'
/*
const mapStateToProps  = state => ({
    propElementName: state.stateSliceName.ElementName
})
const mapDispatchToProps = dispatch => ({
    functionName: (data) => dispatch( stuffAction(data) )
})
*/
// ... CODE ...  how access global state and state-editing functions
// this.propElementName
// this.functionName() ,
// ... CODE ...
// export connect( mapStateToProps , mapDispatchToProps )( component )