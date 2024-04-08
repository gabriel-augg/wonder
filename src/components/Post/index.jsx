import styles from "./styles.module.css"
import Like from "../Like";
import AnswerCounter from "../AnswerCounter";
import Time from "../Time";
import User from "../User";
import Description from "../Description";
import ButtonLink from "../ButtonLink";
import Button from "../Button";

export default function Post({id, username, likesCount, description, answerCount, createdAt, show, handleDelete, btnTxt, path}){

    return(
        <div className={styles.post}>
            <div className={styles.post_header}>
                <div>
                    <User 
                        url={null} 
                        username={username} 
                    />

                    <Time 
                        date={createdAt} 
                    />
                </div>
                <div>

                    <AnswerCounter 
                        count={answerCount} 
                    />

                    <Like 
                        id={id} 
                        type="posts"
                        likesQty={likesCount} 
                    />
                </div>
                
            </div>
            <Description description={description} />
            {show && (
                <div className={styles.post_footer}>
                    { handleDelete && (
                        <Button  btnTxt="Excluir" classN="delete" options={{
                            onClick: () => handleDelete(id)
                        }}/>
                    )}
                    <ButtonLink path={`/publicacoes/${id}`} btnTxt="Ver respostas" classN="simple" />
                    <ButtonLink path={ path ? `${path}/${id}` : `/publicacoes/${id}`} btnTxt={btnTxt} classN="btn" />
                </div>
            )}

        </div>
    )
}