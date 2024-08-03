import Form from "../components/CredentialsForm"

function RegisterPage() {
    return <Form route="/api/user/register/" method="register" />
}

export default RegisterPage