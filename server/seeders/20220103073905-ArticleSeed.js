'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Articles', [
      {
        id: '1',
        user_Id: '2',
        book_Title: '가재가 노래하는 곳',
        book_Author: '델리아 오언스 지음, 김선형 옮김',
        book_Thumbnail: 'https://image.aladin.co.kr/product/19469/77/cover/s762635820_1.jpg',
        book_Publisher: '살림',
        sentence: '카야는 숨을 쉬는 촉촉한 흙에 가만히 손을 대었다. 그러자 습지가 카야의 어머니가 되었다',
        comment: '모든 것을 맞춰주시는 어머니의 품 안이었기에 카야는 원하는 것을 얻을 수 있지 않았을까',
        createdAt: '2022-1-19',
        updatedAt: new Date()
      },
      {
        id: '2',
        user_Id: '2',
        book_Title: '달러구트 꿈 백화점 - 주문하신 꿈은 매진입니다',
        book_Author: '이미예 지음',
        book_Thumbnail: 'https://image.aladin.co.kr/product/24512/70/cover/k392630952_2.jpg',
        book_Publisher: '팩토리나인',
        sentence: '과거의 어렵고 힘든 일 뒤에는 그걸 이겨냈던 자신의 모습도 함께 존재한다는 사실.',
        comment: '힘든 시절의 꿈을 꿨을 때 불쾌함만 남았었는데, 이 문장으로 생각의 전환을 할 수 있었습니다.',
        createdAt: '2022-1-19',
        updatedAt: new Date()
      },
      {
        id: '3',
        user_Id: '2',
        book_Title: '달러구트 꿈 백화점 - 주문하신 꿈은 매진입니다',
        book_Author: '이미예 지음',
        book_Thumbnail: 'https://image.aladin.co.kr/product/24512/70/cover/k392630952_2.jpg',
        book_Publisher: '팩토리나인',
        sentence: '"페니, 나는 자신의 삶을 사랑하는 방법에는 2가지가 있다고 믿는단다. 첫째, 아무래도 삶에 만족할 수 없을 때는 바꾸기 위해 최선을 다한다." (중략) "자신의 삶을 있는 그대로 받아들이고 만족하는것, 두 번째 방법은 말은 쉽지만 실행하기는 쉽지 않지. 하지만 정말 할 수 있게 된다면, 글쎄다 행복이 허무하리만치 가까이에 있었다는 걸 깨달을 수 있지.',
        comment: '나는 나 자신을 사랑하기 위해 무얼 했을까. 되뇌어본다.',
        createdAt: '2022-1-19',
        updatedAt: new Date()
      },
      {
        id: '4',
        user_Id: '2',
        book_Title: '약해지지 마',
        book_Author: '시바타 도요 지음, 채숙향 옮김',
        book_Thumbnail: 'https://image.aladin.co.kr/product/785/57/cover/8961091557_3.jpg',
        book_Publisher: '지식여행',
        sentence: '있잖아, 불행하다고 한숨짓지 마 / 햇살과 산들바람은 한 쪽 편만 들지 않아 / 꿈은 평등하게 꿀 수 있는 거야 / 나도 괴로운 일 많았지만 살아 있어 좋았어 / 너도 약해지지 마”',
        comment: '그저 부끄럽다. 불평가득했던 날들이.. 그리고 그걸 반성하지 못했던 내 자신이..',
        createdAt: '2022-1-19',
        updatedAt: new Date()
      },
      {
        id: '5',
        user_Id: '2',
        book_Title: '내 아이가 만날 미래 - 무엇을 어떻게 준비할 것인가?',
        book_Author: '정지훈 지',
        book_Thumbnail: 'https://image.aladin.co.kr/product/2831/63/cover/8997396242_1.jpg',
        book_Publisher: '코리아닷컴(Korea.com) ',
        sentence: '열정과 재능을 이야기하지만, 이러한 개인의 열정과 재능은 동료들을 만나 관계를 형성하지 못하거나, 무엇인가를 성취할 수 있는 기회가 주어지지 않는다면 쉽게 사그라지고 만다.',
        comment: '열정, 동료, 기회. 직업적 성공의 열쇠들.',
        createdAt: '2022-1-19',
        updatedAt: new Date()
      },
      {
        id: '6',
        user_Id: '2',
        book_Title: '뉴 롱 라이프 - 장수와 신기술의 시대에 어떻게 적응할 것인가',
        book_Author: '린다 그래튼.앤드루 J. 스콧 지음, 김원일 옮김',
        book_Thumbnail: 'https://image.aladin.co.kr/product/26359/32/cover/k482738129_1.jpg',
        book_Publisher: '클',
        sentence: '일하는 기간이 늘어났음을 고려하면, 지식을 배우고 찾는 방법(여기에는 다시 배우는 방법도 포함된다) 그 자체를 배우는 것이 더욱 중요해졌다.',
        comment: '세상은 내가 모르는 것들로 가득차있다. 많이 아는 것도 중요하나 많이 배우는 것이 훨신 중요하다.',
        createdAt: '2022-1-19',
        updatedAt: new Date()
      },
      {
        id: '7',
        user_Id: '2',
        book_Title: '오늘부터 개발자 - 비전공자를 위한 개발자 취업 입문 개론',
        book_Author: '김병욱 지음',
        book_Thumbnail: 'https://image.aladin.co.kr/product/28307/33/cover/k632835709_1.jpg',
        book_Publisher: '천그루숲',
        sentence: '" (중략) 선배님은 퇴근 후에도 계속 노트북 앞에서 개발을 하신다면서요?" 이 때 그분이 해주신 답변은 아주 짧았지만 가관이었다. "괜찮아요. 나는 집에 가서는 회사 일 말고 다른 개발을 해요."',
        comment: '매일같이 보는 검정화면이 스크래치 그림을 그리듯 아름다워질 때까지',
        createdAt: '2022-1-19',
        updatedAt: new Date()
      },
      {
        id: '8',
        user_Id: '2',
        book_Title: '한 공기의 사랑, 아낌의 인문학',
        book_Author: '강신주 지음',
        book_Thumbnail: 'https://image.aladin.co.kr/product/24566/51/cover/8954753892_1.jpg',
        book_Publisher: 'EBS BOOKS',
        sentence: "불행히도 누군가를 사랑한다고 말하고 심지어 스스로도 그렇게 믿고 있지만, 사랑하는 사람의 고통을 제대로 느끼지 못하는 경우가 있다. 이것이 바로 '관념적 사랑', '말뿐인 사랑', 혹은 '가짜 사랑'이다.",
        comment: '사랑한다는 말이 쉬워질 수록 그 무게감을 모를 때가 있다. 상대의 모든 것을 받아들이고자 했을 때 사랑이었다.',
        createdAt: '2022-1-19',
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Articles', null, {});
  }
};

