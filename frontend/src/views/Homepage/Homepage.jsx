import "./Homepage.css"
import {useEffect, useState} from "react"
import {Link} from "react-router-dom"
import SingleAlbum from "../../components/SingleAlbum/SingleAlbum"
import Header from "../../components/Header/Header"
import {connect} from 'react-redux'
import { fetchPushMusicAction} from "../../apicalls/actions"

const mapDispatchToProps = dispatch => ({
    fetchPushMusic: query => dispatch(fetchPushMusicAction(query))
})

const mapStateToProps = state => ({
    musicObjs : state.apiData.musicObjs
})

const Homepage =
    ({
         fetchPushMusic,
         musicObjs
     }) => {
        useEffect(() => {
            fetchPushMusic("bruce springsteen")
            fetchPushMusic("kesha")
            fetchPushMusic("maneskin")
        }, [])
        let [kesha, maneskin, greenDay] = []
        useEffect(() => {
        [kesha, maneskin, greenDay] = [
            musicObjs.filter(obj => obj.query === 'kesha')[0]?.results,
            musicObjs.filter(obj => obj.query === 'maneskin')[0]?.results,
            musicObjs.filter(obj => obj.query === 'bruce springsteen')[0]?.results,
        ]

            console.log( kesha, maneskin, greenDay )
        }, [musicObjs])

        return (
            <div className='home__wrap'>
                <Header/>
                {/* Section 1 */}
                <h2>The Boss 👑 </h2>
                <div className='home__line'>
                    {greenDay && greenDay.slice(0, 6).map((song) => <Link to={"album/" + song.album.id}> <SingleAlbum
                        src={song.album.cover_medium} key={song.id}/> </Link>)}
                </div>
                {/* Section 2 */}
                <h2>2000s TikTok 🎶</h2>
                <div className='home__line'>
                    {kesha?.slice(0, 6)?.map((song) => <Link to={"album/" + song.album.id}> <SingleAlbum
                        src={song.album.cover_medium} key={song.id}/> </Link>)}
                </div>
                <h2>Eurovision 🚀</h2>
                <div className='home__line'>
                    {maneskin?.slice(0, 6)?.map((song) => <Link to={"album/" + song.album.id}> <SingleAlbum
                        src={song.album.cover_medium} key={song.id}/> </Link>)}
                </div>
            </div>)
    }

export default connect(mapStateToProps, mapDispatchToProps)(Homepage)