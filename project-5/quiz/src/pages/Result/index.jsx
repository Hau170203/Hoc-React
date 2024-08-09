/* eslint-disable react-hooks/exhaustive-deps*/
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getAnswersId } from '../../Services/AnswersServices';
import { Form, Radio, Space, Tag } from 'antd';
import { getQuiz } from '../../Services/QuizServices';
import './Result.scss';
import { getListTopic } from '../../Services/TopicService';

export default function Result() {
  const param = useParams();
  //  console.log(param);
  const [result, setResult] = useState();
  const [point, setPoint] = useState({});

  useEffect(() => {
    const callApiAnswers = async () => {
      const resultAns = await getAnswersId(param.id);
      const resultQue = await getQuiz(resultAns.TopicId);
      const resultTop = await getListTopic();
      // console.log(resultTop);
      // console.log(resultAns)

      const finalResult = [];

      for (let i = 0; i < resultQue.length; i++) {
        finalResult.push({
          ...resultQue[i],
          ...resultAns.answer.find(item => item.questionId === resultQue[i].id)
        });
      }
      console.log(finalResult);
      setResult(finalResult);
       // tên đề thi
    let name = ''
    for(let i = 0; i < resultTop.length; i++){
      if(resultTop[i].id === resultAns.TopicId){
         name = resultTop[i].name
      }
    }
    // console.log(name);

    // đếm số câu đúng sai
    let T = 0;
    let F = 0;
    for (let i = 0; i < finalResult.length; i++) {
      if (finalResult[i].answer === finalResult[i].correctAnswer) {
        T++;
      }else{
        F++;
      }
    }
    console.log(T);
    console.log(F);
    // 

    setPoint({
      name: name,
      CountTrue: T,
      CountFalse: F,
      Total: resultQue.length,
      Ratio: (T / resultQue.length)*100
    })
    console.log(point);
    
    }
    callApiAnswers();
  }, []);
   
  return (
    <>
      <div className='result'>
         <h2>Kết quả chủ đề:{point.name}  </h2>
        <p>Đúng: <strong>{point.CountTrue}</strong> || Sai: <strong>{point.CountFalse}</strong> || Tổng số câu: <strong>{point.Total}</strong> || Tỉ lệ đúng: <strong>{point.Ratio}%</strong></p> 
        <Form >
          {result && (
            result.map((item, index) => {
              const check = (item.correctAnswer === item.answer) ? true : false
              return (
                <div className='result__item' key={item.id}>
                  <p>Câu {index + 1}: {item.question}
                    <span>
                      {(check) ?
                        (<Tag color='success'> Đúng</Tag>) :
                        (<Tag color='error'> Sai</Tag>)}
                    </span>
                  </p>
                  <Form.Item>
                    <Radio.Group value={item.correctAnswer}>
                      <Space direction='vertical'>
                        {item.answers.map((itemAns, indexAns) => {
                          let className = '';
                          if (item.answer === indexAns) {
                            className += ' result__radio--false';
                          }
                          if (item.correctAnswer === indexAns) {
                            className += ' result__radio--true';
                          }
                          return (
                            <Radio key={indexAns} value={indexAns} className={`result__radio ` + className} >{itemAns}</Radio>
                          )
                        })}
                      </Space>
                    </Radio.Group>
                  </Form.Item>
                </div>
              )
            })
          )}
        </Form>
      </div>
    </>
  )
}
