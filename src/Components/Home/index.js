import {Component} from "react"
import Emojis from "../Emojis"
import "./index.css"


const emojisList = [
    {
      id: 0,
      emojiName: 'Face with stuck out tongue',
      emojiUrl:
        'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-img.png',
    },
    {
      id: 1,
      emojiName: 'Face with head bandage',
      emojiUrl:
        'https://assets.ccbp.in/frontend/react-js/face-with-head-bandage-img.png',
    },
    {
      id: 2,
      emojiName: 'Face with hugs',
      emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-hugs-img.png',
    },
    {
      id: 3,
      emojiName: 'Face with laughing',
      emojiUrl:
        'https://assets.ccbp.in/frontend/react-js/face-with-laughing-img.png',
    },
    {
      id: 4,
      emojiName: 'Laughing face with hand in front of mouth',
      emojiUrl:
        'https://assets.ccbp.in/frontend/react-js/face-with-laughing-with-hand-infront-mouth-img.png',
    },
    {
      id: 5,
      emojiName: 'Face with mask',
      emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-mask-img.png',
    },
    {
      id: 6,
      emojiName: 'Face with silence',
      emojiUrl:
        'https://assets.ccbp.in/frontend/react-js/face-with-silence-img.png',
    },
    {
      id: 7,
      emojiName: 'Face with stuck out tongue and winked eye',
      emojiUrl:
        'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-and-winking-eye-img.png',
    },
    {
      id: 8,
      emojiName: 'Grinning face with sweat',
      emojiUrl:
        'https://assets.ccbp.in/frontend/react-js/grinning-face-with-sweat-img.png',
    },
    {
      id: 9,
      emojiName: 'Smiling face with heart eyes',
      emojiUrl:
        'https://assets.ccbp.in/frontend/react-js/smiling-face-with-heart-eyes-img.png',
    },
    {
      id: 10,
      emojiName: 'Grinning face',
      emojiUrl: 'https://assets.ccbp.in/frontend/react-js/grinning-face-img.png',
    },
    {
      id: 11,
      emojiName: 'Smiling face with star eyes',
      emojiUrl:
        'https://assets.ccbp.in/frontend/react-js/smiling-face-with-star-eyes-img.png',
    },
    {
        id: 12,
        emojiName: 'Face with stuck out tongue',
        emojiUrl:
          'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-img.png',
    },
    {
        id: 13,
        emojiName: 'Face with head bandage',
        emojiUrl:
          'https://assets.ccbp.in/frontend/react-js/face-with-head-bandage-img.png',
    },
    {
        id: 14,
        emojiName: 'Face with hugs',
        emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-hugs-img.png',
      },
      {
        id: 15,
        emojiName: 'Face with laughing',
        emojiUrl:
          'https://assets.ccbp.in/frontend/react-js/face-with-laughing-img.png',
      },
      {
        id: 16,
        emojiName: 'Laughing face with hand in front of mouth',
        emojiUrl:
          'https://assets.ccbp.in/frontend/react-js/face-with-laughing-with-hand-infront-mouth-img.png',
      },
      {
        id: 17,
        emojiName: 'Face with mask',
        emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-mask-img.png',
      },
      {
        id: 18,
        emojiName: 'Face with silence',
        emojiUrl:
          'https://assets.ccbp.in/frontend/react-js/face-with-silence-img.png',
      },
      {
        id: 19,
        emojiName: 'Face with stuck out tongue and winked eye',
        emojiUrl:
          'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-and-winking-eye-img.png',
      },
      {
        id: 20,
        emojiName: 'Grinning face with sweat',
        emojiUrl:
          'https://assets.ccbp.in/frontend/react-js/grinning-face-with-sweat-img.png',
      },
      {
        id: 21,
        emojiName: 'Smiling face with heart eyes',
        emojiUrl:
          'https://assets.ccbp.in/frontend/react-js/smiling-face-with-heart-eyes-img.png',
      },
      {
        id: 22,
        emojiName: 'Grinning face',
        emojiUrl: 'https://assets.ccbp.in/frontend/react-js/grinning-face-img.png',
      },
      {
        id: 23,
        emojiName: 'Smiling face with star eyes',
        emojiUrl:
          'https://assets.ccbp.in/frontend/react-js/smiling-face-with-star-eyes-img.png',
      },
    
  ]

  
      
  

class Home extends Component{
    state={
        score:0,
        emojiId:"",
        count:1,
        
        result:true,
        topscore:0,
        time:0,
        activeId:""
    

    }

    
   
        
        


    clickEmoji=(emojiName,id)=>{
        console.log(emojiName)
        this.setState(prev=>({
            emojiId:emojiName,
            count:prev.count+1,
            onPress:true,
            activeId:id
        }))


        const {emojiId,count,score}=this.state
        console.log(count)
       
        if(emojiName===emojiId){
            this.setState(prev=>({
                score:prev.score+1,
                topscore:score
            
            }))
        }
        if(count%2===0 && count>0){
            if(emojiId!==emojiName){
                this.setState({
                    score:0,
                    result:false,
                })
            }
            

        }
       

        

    }
    render(){
        const {score,result,topscore,time,activeId}=this.state
       
        let r
        if(topscore>0){
            r=topscore+1

        }
        if(topscore===0){
            r=0
        }
        const name=localStorage.getItem("name")
        
        
        
        
        return(
            <div>
                {result &&
            <div className="main">
                <h1>Mahajong Game</h1>
                <div className="divide">
                    <p className="para">Score:{score}</p>
                    <p className="para">Time:{time}</p>
                </div>
                <h1>Welcome {name}</h1>
                <ul className="unis">
                    
                    
                    {
                        emojisList.map(each=>(
                            <Emojis emoji={each} key={each.id} clickEmoji={this.clickEmoji} isActive={activeId===each.id} />
                        ))
                        
                    }
                </ul>
                
            </div>
    }
            {!result &&<div className="main">
                <h1>React Tiles</h1>
                <div className="divide">
                    <p className="para">Score:{r}</p>
                    <p className="para">Time:0</p>
                </div>
                <div className="d">
                    <h1>Game Finished!</h1>
                    <h1>Score:{r}</h1>
                    <h1>Play again!!!!!!</h1>

                </div>

            </div>
    }
            </div>
        )
    }
}
export default Home