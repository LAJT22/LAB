import { useNavigate } from 'react-router-dom';
const Form = ({ login }) => {
  const navigate = useNavigate();
  return (
    <div className="flex w-full flex-col gap-20">
      {login ? (
        <div className="flex flex-col items-center gap-10">
          <input
            className="w-full border-b-2 border-b-white bg-transparent p-3 text-white placeholder:text-gray-400 md:w-[25%]"
            type="text"
            placeholder="Enter Username"
          />
          <input
            className="w-full border-b-2 border-b-white bg-transparent p-3  text-white  placeholder:text-gray-400 md:w-[25%]"
            placeholder="Enter Password"
            type="password"
          />
        </div>
      ) : (
        <div className="flex flex-col items-center gap-10">
          <input
            className="w-full border-b-2 border-b-white bg-transparent p-3 text-white placeholder:text-gray-400 md:w-[25%]"
            type="text"
            placeholder="Enter Username"
          />
          <input
            className="w-full border-b-2 border-b-white bg-transparent p-3 text-white placeholder:text-gray-400 md:w-[25%] "
            type="email"
            placeholder="Enter E-mail"
          />
          <input
            className="w-full border-b-2 border-b-white bg-transparent p-3 text-white placeholder:text-gray-400 md:w-[25%]"
            placeholder="Enter Password"
            type="password"
          />
        </div>
      )}

      {login ? (
        <div className="flex flex-col items-center gap-10">
          <button className="w-[75%]  rounded-full bg-white p-3 md:w-[15%]">Login</button>
          <button
            onClick={() => navigate(`/register`)}
            className="w-[75%] rounded-full p-3 text-white outline outline-2 outline-white md:w-[15%]"
          >
            Create Account
          </button>
        </div>
      ) : (
        <div className=" flex flex-col items-center gap-10">
          <button className="w-[75%] rounded-full bg-white p-3 md:w-[15%]">Register</button>
          <button
            onClick={() => navigate(`/login`)}
            className="w-[75%] rounded-full p-3 text-white outline outline-2 outline-white md:w-[15%]"
          >
            Back To Log In
          </button>
        </div>
      )}
    </div>
  );
};

Form.propTypes = {};

export default Form;
