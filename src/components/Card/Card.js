import  { CardContainer, ImagemContainer, DescContainer }  from "./styled"

function Card({ postContent }){

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