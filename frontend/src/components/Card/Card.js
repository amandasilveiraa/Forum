import { useEffect, useState } from "react"
import  { CardContainer, DescContainer }  from "./styled"
import { BlueTextCard, ButtonContainer, ButtonContainer2,Content, ContentCard, FooterContent, HeaderContent, ImageUserHeader, MenssageImg, NameUserHeader, UserTextCard, TempoPubli } from './styled'
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { url } from "../../constants/url";

function Card(props) {

    const [user, setUser] = useState(null);
    const userId = props.userIdValue;
    console.log('id do usuario:', userId)
    const [comentarios, setComentarios] = useState([])

    const navigate = useNavigate();

    function goToOpenedPostScreen() {
        navigate(`/post`);
    }

    useEffect(() => {
        axios.get(`${url.defaults.baseURL}/user/information/${userId}`)
            .then(function (response) {
                setUser(response.data.data);
            })
            .catch(function (error) {
                alert("Erro ao buscar informações do usuário");
            });
    }, [userId]);

    return(
        <>
        <CardContainer>
            <ContentCard onClick={goToOpenedPostScreen}>
                <HeaderContent>
                    <ButtonContainer2>
                        <ImageUserHeader  alt="Imagem do usuario"/>
                    </ButtonContainer2>
                    <NameUserHeader>
                    {user ? (
                            <>
                                <p>{user.name}</p>
                            </>
                        ) : (
                            <p>Carregando...</p>
                        )}
                    </NameUserHeader>
                </HeaderContent>
                <Content>
                    <h2>{props.titulo}</h2>
                </Content>
                <FooterContent>
                    <ButtonContainer>
                        <MenssageImg  alt='Ícone de mensagens'/>
                        {comentarios.length} comentários
                    </ButtonContainer>
                </FooterContent>
            </ContentCard>
        </CardContainer>
            <></>

    </>
    )
}

export default Card;