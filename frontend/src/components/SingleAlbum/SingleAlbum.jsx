import "./SingleAlbum.css"

const SingleAlbum = (props)=> {
    return (<img className='album' src={props.src} alt="album cover" key={props.key}/>)
}
export default SingleAlbum;
