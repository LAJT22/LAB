import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button.jsx';
import Input from '../Input/Input.jsx';
const Form = ({ login }) => {
  const navigate = useNavigate();
  return (
    <div className="flex w-full flex-col gap-20">
      {login ? (
        <div className="flex flex-col items-center gap-10">
          <Input width='md:w-[25%]' type="text" placeholder="Enter Username" />
          <Input width='md:w-[25%]' type="password" placeholder="Enter Password"></Input>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-10">
          <Input width='md:w-[25%]' type="text" placeholder="Enter Username" />
          <Input width='md:w-[25%]' type="email" placeholder="Enter E-mail" />
          <Input width='md:w-[25%]' type="password" placeholder="Enter Password" />
        </div>
      )}

      {login ? (
        <div className="flex flex-col items-center gap-10">
          <Button>Login</Button>
          <Button outline onClick={() => navigate(`/register`)}>
            Register
          </Button>
        </div>
      ) : (
        <div className=" flex flex-col items-center gap-10">
          <Button>Register</Button>
          <Button outline onClick={() => navigate(`/login`)}>
            Back to log in
          </Button>
        </div>
      )}
    </div>
  );
};

Form.propTypes = {};

export default Form;
