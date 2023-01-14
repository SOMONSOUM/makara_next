import { useRouter } from 'next/router'

const PostPage = () => {
  const router = useRouter();
  const { pid } = router.query

  return (
    <div>
      <h1 className="text-center text-light">
        Post Detail Page {pid}
      </h1>
    </div>
  )
}

export default PostPage;