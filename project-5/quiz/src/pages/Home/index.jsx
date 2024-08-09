import React from 'react';
import './Home.scss';

export default function Home() {
  return (
    <>
      <div className='home'>
        <div className='home__introduce'>
          <h4>Chào mừng bạn đến với trang Quiz Công Nghệ Thông Tin của chúng tôi 
           điểm đến lý tưởng dành cho những ai đam mê và muốn thử thách kiến thức 
            về lĩnh vực công nghệ thông tin!</h4>
          <p>
          Trang Quiz Công Nghệ Thông Tin của chúng tôi cung cấp một loạt các bài kiểm tra và câu đố đa dạng, từ những khái niệm cơ bản đến các chủ đề nâng cao trong lĩnh vực IT. Bạn sẽ được khám phá các chủ đề như lập trình, bảo mật mạng, cơ sở dữ liệu, trí tuệ nhân tạo, phát triển web, và nhiều hơn nữa. 
          Chúng tôi tin rằng việc học tập và thử thách bản thân thông qua các câu đố không chỉ
           giúp củng cố kiến thức mà còn làm cho quá trình học tập trở nên thú vị hơn.
          </p>
          </div>
          <div className='home__reason'>
          <h4>Tại sao bạn nên tham gia trang Quiz Công Nghệ Thông Tin của chúng tôi?</h4>
            <ol>
              <li>Đa dạng và phong phú: Chúng tôi cung cấp một kho tàng câu đố phong phú, được cập nhật thường xuyên để đảm bảo nội dung luôn mới mẻ và thú vị.</li>
              <li>Tương tác và hấp dẫn: Các bài quiz được thiết kế tương tác, giúp bạn không chỉ kiểm tra kiến thức mà còn học hỏi thêm qua từng câu hỏi.</li>
              <li>Phù hợp với mọi trình độ: Dù bạn là người mới bắt đầu hay là một chuyên gia trong lĩnh vực công nghệ thông tin, chúng tôi đều có những bài quiz phù hợp với trình độ của bạn.</li>
              <li>Cộng đồng học tập: Tham gia vào trang Quiz của chúng tôi, bạn sẽ trở thành một phần của cộng đồng những người đam mê công nghệ thông tin, nơi bạn có thể giao lưu, học hỏi và chia sẻ kinh nghiệm.</li>
              <li>Khuyến khích học tập liên tục: Với hệ thống điểm số và xếp hạng, chúng tôi khuyến khích bạn học tập liên tục và nỗ lực để cải thiện kỹ năng của mình.</li>
            </ol>
          </div>
          <div className="home__finish">
            <h4>Hãy bắt đầu hành trình khám phá công nghệ thông tin ngay hôm nay!</h4>
            <p>Tham gia vào trang Quiz Công Nghệ Thông Tin của chúng tôi để kiểm tra kiến thức, thử thách bản thân và mở rộng hiểu biết về thế giới công nghệ. Hãy để mỗi bài quiz là một bước tiến trên con đường chinh phục tri thức công nghệ thông tin của bạn!</p>
          </div>
      </div>
    </>
  )
}
