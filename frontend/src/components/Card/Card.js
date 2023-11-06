import { useEffect } from "react"
import  { CardContainer, DescContainer }  from "./styled"
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
                <p>{item.content}</p>
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