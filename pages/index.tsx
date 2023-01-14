import { Button, Container } from "reactstrap";
import { FaSun } from 'react-icons/fa'
import PostsPage from "./news/posts";

export default function Home() {
  return (
    <Container className="mt-5">
      <PostsPage />
    </Container>
  )
}
