import axios from "axios";
import { useState } from "react";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";

const baseURI = 'http://localhost:3001/api/v1'

export const AxiosClient = axios.create({ baseURL: baseURI })

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: any) => {
    e.preventDefault();
    let input = { email, password }
    AxiosClient.post("/login", input).then((res) => {
      localStorage.setItem("token", res?.data?.token)
    }).catch((error) => console.error(error))
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