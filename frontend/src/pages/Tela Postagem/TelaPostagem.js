import { useNavigate } from "react-router-dom";
import { DescContainer, TituloContainer, TextoContainer, DivPublic, DivImg, ButtonEstilo } from "./styled";

import Card from "../../components/Card/Card";
import { ContainerGrande } from "../../components/Card/styled";
import Header2 from "../../components/Header2/Header2";

import PublicImg from "../../assets/add_box_FILL0_wght400_GRAD0_opsz48.png"
import { useEffect, useState } from "react";
import { url } from "../../constants/url";
import axios from "axios";

function Postagem() {

  const navigate = useNavigate()
  
  // const goToPost = () => {
  //   navigate('/post')
  // }

  // useEffect(() => {
  //   const token = localStorage.getItem('token')
  //   if (!token) {
  //     navigate('/')
  //   }
  // },[navigate])

  
  function goToPost() {
    navigate('/createPost')
}


  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get(`${url.defaults.baseURL}/posts/posts`)
        .then(function (response) {
            const sortedPosts = response.data.data.sort((a, b) => {
                const dateA = new Date(a.created_at);
                const dateB = new Date(b.created_at);
                return dateB - dateA;
            });

            setPosts(sortedPosts);
        })
        .catch(function (error) {
            console.log(error);
            alert("erro");
        });
}, []);

const [users, setUsers] = useState({});


useEffect(() => {
    // Buscar informações de todos os usuários e armazenar em um objeto
    axios.get(`${url.defaults.baseURL}/users`)
        .then(function (response) {
            const usersData = response.data.data;
            const usersObject = {};
            usersData.forEach(user => {
                usersObject[user.id] = user;
            });
            setUsers(usersObject);
        })
        .catch(function (error) {
            console.log(error);
            alert('Erro ao carregar informações dos usuários.');
        });
}, []);


    return(
    <>
      <Header2/>
      <TextoContainer>    
      <TituloContainer>Introdução ao mercado de trabalho</TituloContainer>
      <DescContainer>Venha participar do nosso fórum dedicado a discutir a inserção do cidadão no mercado de trabalho! Juntos, podemos compartilhar experiências, ideias e soluções para os desafios enfrentados por aqueles que buscam oportunidades profissionais. Seja você um estudante em busca do primeiro emprego, um profissional em transição de carreira ou um empregador disposto a oferecer oportunidades, o nosso espaço é aberto e acolhedor para todos.</DescContainer>
      </TextoContainer>
      <DivPublic>
        <ButtonEstilo onClick={goToPost}>    
          <DivImg src={PublicImg} alt=""/>
            </ButtonEstilo>
      </DivPublic>
      <ContainerGrande>
      {posts.map((post) => ( 
          <Card
              key={post.id_post}
              postId={post.id_post}
              titulo={post.name}
              descricao={post.descricao}
              userIdValue={post.userPost_id}
              user={users[post.userPost_id]}
          />
      ))}
      </ContainerGrande> 
    </>
    )
  }
  
  export default Postagem;