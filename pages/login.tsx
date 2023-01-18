import axios from "axios";
import { useState, useContext, useEffect } from "react";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import { AuthContext } from "./_app";

const baseURI = 'https://jsonplaceholder.typicode.com'

export const AxiosClient = axios.create({ baseURL: baseURI })

export default function LoginPage() {

  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  const getUsers = async () => {
    const { data } = await AxiosClient.get('/users')
    setUsers(data)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      getUsers();
      setLoading(false);
    }, 1000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  console.log(users);


  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const context = useContext(AuthContext)
  context.setToken('4444');
  // console.log(context.token);
  // GET, POST, PATCH, PUT, DELETE



  const handleSubmit = (e: any) => {
    e.preventDefault();
    let input = { email, password }
    // AxiosClient.post("/login", input).then((res) => {
    //   localStorage.setItem("token", res?.data?.token)
    // }).catch((error) => console.error(error))
  }


  return (
    <Container className="mt-5">
      <Form onSubmit={handleSubmit}>
        <FormGroup floating>
          <Input
            id="exampleEmail"
            name="email"
            placeholder="Email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Label for="exampleEmail">
            Email
          </Label>
        </FormGroup>
        {' '}
        <FormGroup floating>
          <Input
            id="examplePassword"
            name="password"
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Label for="examplePassword">
            Password
          </Label>
        </FormGroup>
        {' '}
        <Button>
          Submit
        </Button>
      </Form>
    </Container>
  )
}