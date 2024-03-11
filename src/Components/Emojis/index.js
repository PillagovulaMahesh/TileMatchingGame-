import "./index.css"

const Emojis=(props)=>{
    const {emoji,clickEmoji,isActive}=props
    const {emojiUrl,emojiName,id}=emoji
    const onclickEmoji = () => {
        clickEmoji(emojiName,id)
      }
    return(
        <li className="emojisCard">
            <button className="but" type="button" onClick={onclickEmoji}>
                {isActive?
                <img src={emojiUrl} alt={emojiName} className="image"/>:<p className="p">gyguy</p>}
               
            </button>
        </li>
    )

}
export default Emojis