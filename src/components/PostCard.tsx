import { VFC } from "react";
import { UserPost } from "../types/userPost";

type Props = {
  post: UserPost;
};

export const PostCard: VFC<Props> = (props) => {
  const { post } = props;

  const style = {
    border: "solid 1px #ccc",
    borderRadius: "8px",
    padding: "0 16px",
    margin: "8px"
  }

  return (
    <div style={style}>
      <dl>
        <dt>id</dt>
        <dd>{post.id}</dd>
        <dt>userId</dt>
        <dd>{post.userId}</dd>
        <dt>タイトル</dt>
        <dd>{post.title}</dd>
        <dt>本文</dt>
        <dd>{post.body}</dd>
      </dl>
    </div>
  )
}