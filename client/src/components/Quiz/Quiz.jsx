import React,{ useEffect, useState } from 'react';
import Question from '../Question/Question';
const Quiz = (props) => {
    const {SampleQuestions}=props;
    const [loading, setLoading] = useState(true);

    //Setting the Wrong Ans
    let wrongans;
    if(sessionStorage.getItem('wrong')){
        wrongans=JSON.parse(sessionStorage.getItem('wrong'));
    }
    else{
      wrongans=0;
    }
    const [wrong, setWrong] =useState(wrongans);
    //Setting Up the Current Question 
    let curr;
    if(sessionStorage.getItem('currentQuestionIndex')){
        curr=JSON.parse(sessionStorage.getItem('currentQuestionIndex'));
    }
    else{
      curr=0;
    }
    const [currQuestionIndex, setCurrQuestionIndex ] = useState(curr);
    const [currQuestion, setCurrQuestion ] = useState({});
    const [questionList, setQuestionList ] = useState(SampleQuestions);
    
    useEffect(()=>{
            setLoading(true);
            setQuestionList(SampleQuestions)
            setCurrQuestion(questionList[currQuestionIndex])
            setLoading(false);
    },[currQuestionIndex,questionList,SampleQuestions])
    
  
    return (
  <>    
    { !loading &&(
        currQuestion && 
    <Question key={currQuestion.id} questions= {currQuestion} wrong={wrong} setWrong={setWrong} setCurrQuestionIndex={setCurrQuestionIndex} currQuestionIndex={currQuestionIndex} />  
              )
    }
  </>
  );
};

export default  Quiz;