import { useEffect } from "react"
import  { CardContainer, ImagemContainer, DescContainer }  from "./styled"
import axios from "axios"

function Card(props) {
    
    useEffect(() => {
        const pegarNoticias = () => {
        axios.get('http://localhost:8000/news')
        .then(response => props.setNews(response.data))
        .catch (error => console.error(error))
    }
         pegarNoticias();
    }, [props])

    const novasNoticias = props.news.map((item) => {
        return (
            <CardContainer key={item.id}>
            <ImagemContainer src={item.content} alt="procurar" />
            <DescContainer>{item.title}</DescContainer>
            </CardContainer>
        )
    })

    return(
        <>
            {novasNoticias}
        </>
    )
}

export default Card;