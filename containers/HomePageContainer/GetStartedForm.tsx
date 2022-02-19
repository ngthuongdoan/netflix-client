import Button from 'components/Button/Button';
import { Icons } from 'components/Icons';
import Input from 'components/Input/Input';

type GetStartedFormProps = {};

const GetStartedForm: React.VFC<GetStartedFormProps> = (props) => {
  return (
    <form className="intro__form text-center">
      <p className="intro__content py-5 text-lg ">Ready to watch? Enter your email to create or restart your membership.</p>
      <div className="flex items-center justify-center h-[70px]">
        <Input />
        <Button className="h-full text-2xl px-5" icon={<Icons.Arrow size={9} />}>
          Get Started
        </Button>
      </div>
    </form>
  );
};

export default GetStartedForm;
