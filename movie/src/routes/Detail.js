import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Detail(props) {
    const {id} = useParams();
    const [title, setTitle] = useState("");
    const [coverImg, setCoverImg] = useState("");
    const [summary, setSummary] = useState("");
    const [genres, setGenres] = useState([]);
    const [loading, setLoading] = useState(true);

    const getMovie = async() => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
           ).json();
           const obj = json.data.movie;       
           console.log(obj);
           setTitle(obj.title);
           setCoverImg(obj.background_image);
           setSummary(obj.description_full);
           setGenres(obj.genres);
           setLoading(false);
    };
        
    useEffect(() => {
        getMovie();
        
    },[]);
      
    return (
        <div>
            { loading ? <h1>Loading...</h1> :
                        <div>
                            <h1>{title}</h1>
                            <img src={coverImg} alt={title}/>
                            <p>{summary}</p>
                            <ul>
                                {genres.map((g) => (
                                    <li key={g}>{g}</li>
                                ))}              
                            </ul>
                        </div>
            }

        </div>
    );
}

export default Detail;