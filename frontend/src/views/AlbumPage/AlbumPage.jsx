import "./AlbumPage.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import { AiOutlineHeart } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import SingleSong from "../../components/SingleSong/SingleSong";

import {connect} from 'react-redux'
import { fetchAlbumAction  } from '../../apicalls/actions'
import { setCurrentAlbumAction } from './actions'


const mapStateToProps  = state => ({
  album: state.album.current,
  fetchedData : state.apiData.albumObj
})

const mapDispatchToProps = dispatch => ({

  fetchAlbum : id => dispatch(fetchAlbumAction(id)),
  setAlbum : album => dispatch(setCurrentAlbumAction( album ))
})

const AlbumPage = ({match, album, fetchAlbum , fetchedData , setAlbum}) => {



  useEffect(() => {
    fetchAlbum(match.params.id)

  }, []);
  useEffect(() => {
    setAlbum( fetchedData )
  }, [fetchedData]);

  return (
    <div className="album__wrap">
      <div className="album__info">
        <img src={album.cover_medium} />
        <h2>{album.title}</h2>
        <Link to={"/artist/" + album?.artist?.id}>
          <h3>{album?.artist?.name}</h3>
        </Link>
        <Button text={"Play"} />
        <span>
          {album?.release_date?.slice(0, 4)} ∙ {album?.tracks?.data.length} SONGS
        </span>
        <span>
          <AiOutlineHeart className="artist__icon" />
          <BsThreeDots className="artist__icon" />
        </span>
      </div>
      <div className="album__tracks">
        {album?.tracks?.data.map((track) => (
          <SingleSong

            title={track.title}
            artist={track.artist.name}
            duration={track.duration / 60}
          />
        ))}
      </div>
    </div>
  );
};
export default connect( mapStateToProps , mapDispatchToProps )( AlbumPage );

//TODO singleSongClick - Player Relationship

