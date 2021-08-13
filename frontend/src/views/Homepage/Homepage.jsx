import "./Homepage.css"
import SingleAlbum from "../../components/SingleAlbum/SingleAlbum"
import { fetchMusic } from "../../apicalls"
import { useEffect, useState } from "react"
import Header from "../../components/Header/Header"
import {Link} from "react-router-dom"
const Homepage = () => {
    const [greenDay, setGreenDay] = useState([])
    const [kesha, setKesha] = useState([])
    const [maneskin, setManeskin] = useState([])
    useEffect(()=> {
        fetchMusic("bruce springsteen").then((res)=> setGreenDay(res) )
        fetchMusic("kesha").then((res)=> setKesha(res) )
        fetchMusic("maneskin").then((res)=> setManeskin(res) )
    }, [])
    return(<div className='home__wrap'>
        <Header/>
        {/* Section 1 */}
        <h2>The Boss 👑 </h2>
        <div className='home__line'>
        {greenDay && greenDay.slice(0,6).map((song)=> <Link to={"album/" + song.album.id}> <SingleAlbum src={song.album.cover_medium} key={song.id}/> </Link> )}
        </div>
        {/* Section 2 */}
        <h2>2000s TikTok 🎶</h2>
        <div className='home__line'>
        {kesha?.slice(0,6)?.map((song)=> <Link to={"album/" + song.album.id}> <SingleAlbum src={song.album.cover_medium} key={song.id}/> </Link> )}
        </div>
        <h2>Eurovision 🚀</h2>
        <div className='home__line'>
        {maneskin?.slice(0,6)?.map((song)=> <Link to={"album/" + song.album.id}> <SingleAlbum src={song.album.cover_medium} key={song.id}/> </Link> )}
        </div>
    </div>)
}

export default Homepage