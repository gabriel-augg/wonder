import "./loading.css"

export default function LoadingPost(){
    return(
        <div className="loading">
            <div class="skeleton">
                <div class="header">
                    <div>
                        <span class="avatar"></span>
                        <span class="username"></span>    
                        <span class="date"></span>
                    </div>
                    <div>
                        <span className="comment"></span>
                        <span className="like"></span>
                    </div>
                </div>
                <div class="message-content">
                    <div class="message-paragraph"></div>
                    <div class="message-paragraph"></div>
                </div>
                <div class="footer">
                    <div class="reply-area"></div>
                    <div class="reply-button"></div>
                </div>
            </div>
            <div class="skeleton">
                <div class="header">
                    <div>
                        <span class="avatar"></span>
                        <span class="username"></span>    
                        <span class="date"></span>
                    </div>
                    <div>
                        <span className="comment"></span>
                        <span className="like"></span>
                    </div>
                </div>
                <div class="message-content">
                    <div class="message-paragraph"></div>
                    <div class="message-paragraph"></div>
                </div>
                <div class="footer">
                    <div class="reply-area"></div>
                    <div class="reply-button"></div>
                </div>
            </div>
            <div class="skeleton">
                <div class="header">
                    <div>
                        <span class="avatar"></span>
                        <span class="username"></span>    
                        <span class="date"></span>
                    </div>
                    <div>
                        <span className="comment"></span>
                        <span className="like"></span>
                    </div>
                </div>
                <div class="message-content">
                    <div class="message-paragraph"></div>
                    <div class="message-paragraph"></div>
                </div>
                <div class="footer">
                    <div class="reply-area"></div>
                    <div class="reply-button"></div>
                </div>
            </div>
        </div>
        
        // <div className={styles.loading_container}>
        //     <div></div>
        //     <div></div>
        //     <div></div>
        // </div>
    )
}