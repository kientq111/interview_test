
import './App.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getPost } from './action/postAction';

function App() {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.post)
  const [id, setId] = useState('');
  const [userId, setUserId] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [post, setPost] = useState();

  useEffect(() => {
    dispatch(getPost());
    console.log(data);
  }, [])

  useEffect(() => {
    if (loading === false)
      setPost(data);
  }, [loading])

  const sendPost = () => {
    if (id === '' || userId === '' || title === '' || body === '') {
      alert('Please Fill All Input Field!');
      return;
    }
    post.push({ id: id, userId: userId, title: title, body: body })
    let item = [...post]
    setPost(item);
  }

  return (
    <div className="App">
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 40 }}>
        <div style={{ borderStyle: 'solid', width: 700, height: 250 }}>
          <input type="text" placeholder='input ID' value={id} onChange={(e) => setId(e.target.value)} />
          <br />
          <input type="text" placeholder='user ID' value={userId} onChange={(e) => setUserId(e.target.value)} />
          <br />
          <input type="text" placeholder='input title' value={title} onChange={(e) => setTitle(e.target.value)} />
          <br />
          <input type="text" placeholder='input body' value={body} onChange={(e) => setBody(e.target.value)} />
          <br />
          <button style={{ marginTop: 10, width: 60, height: 40 }} onClick={sendPost}>SEND</button>
        </div>
      </div>
      {loading === true && <div>Loading</div>}
      <table id="customers">
        <tr>
          <td>
            ID
          </td>
          <td>
            UserID
          </td>
          <td>
            Title
          </td>
          <td>
            Body
          </td>
        </tr>
        {
          post?.map(item => (
            <tr>
              <td>
                {item.id}
              </td>
              <td>
                {item.userId}
              </td>
              <td>
                {item.title}
              </td>
              <td>
                {item.body}
              </td>
            </tr>
          ))
        }

      </table>
    </div >
  );
}

export default App;
