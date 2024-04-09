import ContentArea from "../../components/ContentArea"
import Divisor from "../../components/Divisor"
import Title from "../../components/Title"
import ProfileArea from "../../components/ProfileArea"
import PostsList from "../../components/PostsList"

export default function Profile(){
    return(
        <section>
            <Title title="Perfil" />
            <ContentArea>
                <ProfileArea 
                    username="Gabriel" 
                    url={null} 
                    description="Aqui é uma descrição" 
                    followCount={13} 
                    postsCount={0} 
                    likesCount={0} 
                />
                <Divisor txt="PUBLICAÇÕES"/>
                {/* <PostsList /> */}
                
            </ContentArea>
        </section>
    )
}