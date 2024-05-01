import Form from '../../../components/Form/Form';

const Login = () => {
  return (
    <div className="flex h-dvh w-screen flex-col items-center justify-around p-10">
      <div className="space-y-5 text-center">
        <h1 className="text-3xl text-white font-bold">TrackUrGelt</h1>
        <p className="text-xl text-white ">Manage all your funds</p>
      </div>
      <Form login />
    </div>
  );
};

Login.propTypes = {};

export default Login;
