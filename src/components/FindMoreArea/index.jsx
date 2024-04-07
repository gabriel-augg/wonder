import Button from "../Button"

import styles from "./styles.module.css"

export default function FindMoreArea({show, loading, handleFindMore}){
    return(
        <>
            { show && (
                <div className={styles.find_more}>
                    <Button
                        btnTxt="Buscar mais"
                        classN="button"
                        isLoading={loading}
                        options={{
                            onClick: handleFindMore,
                        }}
                    />
                </div>
            )}
        </>
    )
}