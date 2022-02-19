import Input from 'components/Input/Input';

type GetStartedFormProps = {};

const GetStartedForm: React.VFC<GetStartedFormProps> = (props) => {
  return (
    <form className="intro__form">
      <p className="intro__content py-5 text-lg ">Ready to watch? Enter your email to create or restart your membership.</p>
      <div className=" flex items-center justify-center h-[70px]">
        <Input />
        <button className="button-main h-full text-2xl px-5">Get Started</button>
      </div>
    </form>
  );
};

export default GetStartedForm;
