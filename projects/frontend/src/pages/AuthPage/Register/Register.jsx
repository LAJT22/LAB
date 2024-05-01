import Form from '../../../components/Form/Form';

const Register = () => {
  return (
    <div className="flex h-dvh w-screen flex-col items-center justify-around p-10">
      <div className="space-y-5 text-center">
        <h1 className="text-3xl font-bold text-white">TrackUrGelt</h1>
        <p className="text-xl text-white ">Register your account</p>
      </div>
      <Form />
    </div>
  );
};

Register.propTypes = {};

export default Register;
