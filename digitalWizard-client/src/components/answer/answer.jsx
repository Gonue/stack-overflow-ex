import Post from "../Post/Post.jsx";
import styles from "./answer.module.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Editor from "../Editor.jsx";
import useInput from "../../hooks/useInput.js";

function Answer() {
  // 실제 url http://localhost:8080/question/1/answers
  // /question/{questionId}/answers
  const [data, setData] = useState([]);
  const [value] = useInput("", true);
  const [focus, setFocus] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:4001/answer")
      .then(res => setData(res.data))
      .catch(error => console.log(error));
  }, []);

  console.log(value.value);
  function answerAdd(data) {
    //http://{{BaseUrl}}/question/{questionId}/answers
    axios
      .post("http://localhost:4001/answer", {
        // body: data,
        // headers: {
        //   Authorization: "token",
        // },
        body: data,
        vote: 0,
        createdAt: "2023-04-17T14:51:42.576425",
        modifiedAt: "2023-04-17T14:51:42.576425",
        member: {
          memberId: 1,
          email: "test1@gmail.com",
          profileImage: "https://avatars.githubusercontent.com/u/120456261?v=4",
          memberNickName: "김아무개",
        },
      })
      .catch(error => console.log(error));
  }

  return (
    <div className={styles.answer}>
      <div className={styles.header}>
        <h2 className={styles.title}>{data.length + " Answers"}</h2>
        <div className={styles.sort}>
          <label className={styles.sortLabel} htmlFor="sortAnswer">
            Sorted by:
          </label>
          <select className={styles.sortInput} name="sorted" id="sortAnswer">
            <option value="scoredDesc">Highest score &#40;default&#41;</option>
            <option value="trending">
              Trending &#40;recent votes count more&#41;
            </option>
            <option value="modifiedDesc">
              Date modified &#40;newest first&#41;
            </option>
            <option value="createDesc">
              Date created &#40;oldest first&#41;
            </option>
          </select>
        </div>
        {/* sorted by 추가 */}
      </div>
      {data.map(data => (
        <Post
          className={styles.post}
          key={data.id}
          data={data}
          // 질문은 Q로 수정
          QA={"A"}></Post>
      ))}
      <h2 className={styles.title}>Your Answer</h2>
      <Editor value={value} setFocus={setFocus} />
      <button
        className={`btnPrimary btn ${styles.btn}`}
        onClick={() => answerAdd(value.value)}>
        Post Your Answer
      </button>
    </div>
  );
}

export default Answer;
