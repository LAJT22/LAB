import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button.jsx';
import Input from '../Input/Input.jsx';
const Form = ({ login }) => {
  const navigate = useNavigate();
  return (
    <div className="flex w-full md:w-[30%] p-10  rounded-xl border-2 border-black flex-col gap-10 md:gap-20 bg-bgAccent ">
      {login ? (
        <div className="flex flex-col items-center gap-10">
          <Input width='md:w-[100%]' type="text" placeholder="Enter Username" />
          <Input width='md:w-[100%]' type="password" placeholder="Enter Password"></Input>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-10">
          <Input width='md:w-[100%]' type="text" placeholder="Enter Username" />
          <Input width='md:w-[100%]' type="email" placeholder="Enter E-mail" />
          <Input width='md:w-[100%]' type="password" placeholder="Enter Password" />
        </div>
      )}

      {login ? (
        <div className="flex flex-col items-center gap-10">
          <Button width='w-[100%]'>Login</Button>
          <Button width='w-[100%]' outline onClick={() => navigate(`/register`)}>
            Register
          </Button>
        </div>
      ) : (
        <div className=" flex flex-col items-center gap-10">
          <Button width='w-[100%]'>Register</Button>
          <Button width='w-[100%]' outline onClick={() => navigate(`/login`)}>
            Back to log in
          </Button>
        </div>
      )}
    </div>
  );
};

Form.propTypes = {};

export default Form;
