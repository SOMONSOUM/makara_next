import { useRouter } from "next/router"
import { FaEye } from "react-icons/fa"
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap"

type CustomCardProps = {
  id: number,
  title: string,
  description?: string,
  image?: string,
  author?: string,
}

export const CustomCard = ({ id, title, description, image, author }: CustomCardProps) => {
  const router = useRouter()

  return (
    <Card
      className="mb-4"
    >
      <img
        alt=""
        src={image}
        height={180}
      />
      <CardBody>
        <CardTitle tag="h5" className="line-clamp-title">
          {title}
        </CardTitle>
        <CardSubtitle
          className="mb-2 text-muted"
          tag="h6"
        >
          {author}
        </CardSubtitle>
        <CardText className="line-clamp-desc">
          {description}
        </CardText>
        <Button onClick={() => router.push(`/news/${id}`)}>
          <FaEye /> View
        </Button>
      </CardBody>
    </Card>
  )
}