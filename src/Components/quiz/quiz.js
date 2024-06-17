import { useEffect, useState } from "react"
import useSound from "use-sound"
import play from "../../Assets/src_sounds_play.mp3"
import correct from "../../Assets/src_sounds_correct.mp3"
import wrong from "../../Assets/src_sounds_wrong.mp3"

 const Quiz = ({
  data,
  setTime,
  setQuestionNumber,
  questionNumber
 }) => {
  const[question,setQuestion]=useState(null)
  const[selectedAnswer,setSelectedAnswer]=useState(null)
  const[classname,setClassname]=useState(null)
  const[letsPlay]=useSound(play)
  const[correctAnswer]= useSound(correct)
  const[wrongAnswer]= useSound(wrong)

  useEffect(()=>{
    letsPlay()
  },[letsPlay])

  useEffect(()=>{
    setQuestion(data[questionNumber-1])
  },[data,questionNumber])

  const delay = (duration,callback) => {
    setTimeout(() => {
      callback()
    }, duration);
  }

  const handleClick = (a) => {
    setSelectedAnswer(a)
    setClassname("answer active")
    delay(3000,()=>{
      setClassname(a.correct ? "answer correct" : "answer wrong")
    });
    delay(5000,()=>{
        if(a.correct){
          correctAnswer()
          delay(1000, ()=>{
            setQuestionNumber((prev)=>prev+1)
          setSelectedAnswer(null)
          })
          
        }
        else{
          wrongAnswer()
          delay(1000,()=>{
            setTime(true)
          })
          
        }
    });
  }

    return(
      <div className="quiz">
        <div className="question">{question?.question}</div>
        <div className="answers">
          {
            question?.answers.map((a)=>(
              <>
              <div className={selectedAnswer === a? classname : "answer"} onClick={()=>handleClick(a)}>{a.text}</div>
              </>
            ))
          }
        </div>
      </div>
    )
 }
 export default Quiz