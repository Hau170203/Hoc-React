import React, { useEffect, useState } from 'react'
import { getAnswers } from '../../Services/AnswersServices';
import { getQuiz } from '../../Services/QuizServices';
import { getListTopic } from '../../Services/TopicService';
import { Table, Tag } from 'antd';
import  './Answers.scss';

export default function Answers() {
  const [data, setData] = useState();
  const columns = [
    {
      title: "Mã đề thi",
      dataIndex: 'TopicId',
      key: 'TopicId'
    },
    {
      title: "Tên đề thi",
      dataIndex: 'Name',
      key: 'Name'
    },
    {
      title: "Tổng số câu hỏi",
      dataIndex: 'Total',
      key: 'Total'
    },
    {
      title: "Số câu đúng",
      dataIndex: 'True',
      key: 'True',
    },
    {
      title: "Số câu sai",
      dataIndex: 'False',
      key: 'False'
    },
    {
      title: "Điểm số",
      dataIndex: 'Point',
      key: 'Point'
    },
    {
      title: "Xếp loại",
      dataIndex: 'Point',
      key: 'rank',
      render: (_, {Point}) => {
        console.log(Point);
        let color = '';
        let title = '';
        if(Point >8.5){
          console.log(Point);
          color = 'green';
          title = 'Giỏi';
        } else if (Point <= 8.5 && Point > 7) {
          console.log(Point);
          color = 'yellow';
          title = 'Khá';
      } else if (Point <= 7 && Point > 6) {
          console.log(Point);
          color = 'orange';
          title = 'Trung bình';
      } else {
          console.log(Point);
          color = 'red';  
          title = 'Yếu';
      }
      
        return (
          <Tag color={color}>{title}</Tag>
        )
      }
       
    },
    {
      title: ' ',
      dataIndex: 'id',
      key: 'x',
      render: (_, {id}) => <a  href={`/result/${id}`}>Xem chi tiết</a>,
    },
  ];
  useEffect(() => {
    const callApi = async () => {
      const resultAns = await getAnswers();
      console.log(resultAns);
      const resultTop = await getListTopic();
      console.log(resultTop)

      let newQues = [];


      for (let i = 0; i < resultAns.length; i++) {
        for (let j = 0; j < resultTop.length; j++) {
          const result = await getQuiz(j + 1);
          if (resultAns[i].TopicId === resultTop[j].id) {
            // console.log(resultAns[i]);
            newQues.push({
              ...resultAns[i],
              Data: result,
              Total: resultAns[i].answer.length,
              Name: resultTop[j].name
            })
          }
        }
      }

      const points = [];
      for (let i = 0; i < newQues.length; i++) {
        let T = 0;
        let F = 0;
        for (let j = 0; j < newQues[i].answer.length; j++) {
          if (newQues[i].answer[j].questionId === newQues[i].Data[j].id) {
            if (newQues[i].answer[j].answer === newQues[i].Data[j].correctAnswer) {
              T++;
            } else {
              F++
            }
          }
        }
        points.push({
          idAns: newQues[i].id,
          True: T,
          False: F,
          Point: (10/newQues[i].Data.length)*T
        })
      }
      let finalStudied = []
      for(let i = 0; i < newQues.length; i++){
        if(newQues[i].id === points[i].idAns){
          finalStudied.push({
            ...newQues[i],
            ...points[i]
          })
        }
      }

      console.log(points);
      console.log(newQues);
      console.log(finalStudied);

      setData(finalStudied.reverse());

    };
    callApi();
  }, []);

  return (
    <>
      <div className='studied'>
        <h2>Danh sách kết quả đề đã làm: </h2>
        <div className='studied__list'>
          <Table columns={columns} dataSource={data} rowKey={'id'} pagination={{ pageSize: 20 }} scroll={{ y:'81vh' }} />
        </div>
      </div>
    </>
  )
}
