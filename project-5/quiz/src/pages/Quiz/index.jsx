/* eslint-disable react-hooks/exhaustive-deps*/
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getQuiz } from '../../Services/QuizServices';
import { getTopic } from '../../Services/TopicService';
import { getCookie } from '../../Helpers/Cookie';
import { postAnswers } from '../../Services/AnswersServices';
import './Quiz.scss';


export default function Quiz() {
  const param = useParams();
  const [data, setData] = useState();
  const [dataTopic, setDataTopic] = useState();
  const navigate = useNavigate();
  // console.log(param);

  useEffect(() => {
    const CallApiTopic = async () => {
      const Topic = await getTopic(param.id);
      // console.log(Topic);
      setDataTopic(Topic);
    };
    CallApiTopic();
  }, []);

  useEffect(() => {
    const CallApiAnswers = async () => {
      const result = await getQuiz(param.id);
      // console.log(result);
      setData(result);
    }
    CallApiAnswers();
  }, []);

  // console.log(dataTopic);

  const HandleSubmit = async (e) => {
    e.preventDefault();
    // console.log(e.target.elements);
    let arrayAns = [];
    for (let i = 0; i < e.target.elements.length; i++) {
      if (e.target.elements[i].checked) {
        const name = e.target.elements[i].name;
        const value = e.target.elements[i].value;
        // console.log(name, value);
        arrayAns.push({
          questionId: parseInt(name),
          answer: parseInt(value)
        });
      };
    };

    // console.log(arrayAns);
    let option = {
      userId: parseInt(getCookie('id')),
      TopicId: parseInt(param.id),
      answer: arrayAns
    }

    console.log(option);

    const response = await postAnswers(option);
    console.log(response);
    if(response) {
      navigate(`/result/${response.id}`)
    }

  }
  return (
    <>
    
      <div className='form__quiz'>
        <h2>Bài Quiz chủ đề: {dataTopic && (<>{dataTopic.name}</>)}</h2>
        <form onSubmit={HandleSubmit}>
          {data && (
            data.map((item, index) => (
              <div className='form__quiz--item' key={item.id}>
                <p>Câu {index + 1}: {item.question}</p>
                {item.answers.map((itemAns, indexAns) => (
                  <div className='form__quiz--answers' key={indexAns}>
                    <input type="radio" name={item.id} id={`quiz-${item.id}-${indexAns}`} value={indexAns} />
                    <label htmlFor={`quiz-${item.id}-${indexAns}`}>{itemAns}</label>
                  </div>
                ))}
              </div>
            ))
          )}
          <button type='submit'>Nộp bài</button>
        </form>
      </div>
    </>

  )
}
