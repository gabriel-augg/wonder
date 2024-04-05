import SpecialTitle from "../../components/SpecialTitle";
import { BsChatQuote } from "react-icons/bs";

export default function ShowUserPosts(){
    return(
        <section>
            <SpecialTitle title="Minhas publicações">
                <BsChatQuote size={25} />
            </SpecialTitle>
        </section>
    )
}