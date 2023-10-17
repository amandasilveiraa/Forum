import { useEffect } from "react"
import  { CardContainer, ImagemContainer, DescContainer }  from "./styled"
import axios from "axios"

function Card({ postContent }, props){

    const pegarNoticias= () => {
        axios.get('http://localhost:8000/news')
        .then(response => props.setNews(response.data))
        .catch (error => console.error(error))
    }

    useEffect(() => {
        pegarNoticias()
    },[])

    const novasNoticias = props.news.map( (item) => {
        return (
            <div>
                <h2>{item.titulo}</h2>
                <p>{item.content}</p>
            </div>
        )
    })

    return(
        <>
        {postContent.map((post, index) => (
        <CardContainer key={index}>
            <ImagemContainer src={post.PostImage} alt="procurar" />
            <DescContainer>{post.PostDescription}</DescContainer>
        </CardContainer>
        ))}
     </>
    )
}
export default Card