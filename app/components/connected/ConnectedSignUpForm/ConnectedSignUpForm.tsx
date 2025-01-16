import { doSignUp } from "@/app/actions/user.actions"
import UserForm, { UserFormProps } from "@/app/components/molecules/UserForm/UserForm"

export type ConnectedSignUpFormProps = Omit<UserFormProps, 'submit'>
const ConnectedSignUpForm = (props: ConnectedSignUpFormProps) => {
  return (
    <UserForm {...props} submit={doSignUp} />
  )
}

export default ConnectedSignUpForm