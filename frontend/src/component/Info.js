import React from 'react';
import axios from 'axios';
function Info(props) {
  const get_info = async () => {
    try {
      const response = await axios.get(
        'http://127.0.0.1:8000/accounts/myprofile/',
      );
    } catch (err) {}
  };

  return <div></div>;
}

export default Info;

const my_profile = {
  profile: {
    id: 1,
    nickname: '',
    user_image: null,
    content: null,
  },
  user_club_list: [
    {
      id: 1,
      name: 'club1',
      introduce: 'introduce1',
      content: 'content1',
      image: 'image.com',
      category: 'hobby',
      start_date: '2022-10-11',
      end_date: '2022-11-11',
      howto: 'howto',
      created_at: '2022-11-02T02:29:19.604536',
      updated_at: '2022-11-02T02:29:19.604572',
      users: [1],
      post: null,
    },
  ],
  user_todo_list: [
    {
      id: 1,
      user: 1,
      title: 'title1',
      box: false,
      club: 1,
    },
    {
      id: 2,
      user: 1,
      title: 'title2',
      box: false,
      club: 1,
    },
  ],
};
