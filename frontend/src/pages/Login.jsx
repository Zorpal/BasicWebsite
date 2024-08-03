import Form from "../components/CredentialsForm"

function Login() {
    return <Form route="/api/token/" method="login" />
}

export default Login