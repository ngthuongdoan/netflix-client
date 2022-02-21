import Button from "components/Button/Button";
import { Icons } from "components/Icons";
import Input from "components/Input/Input";

type GetStartedFormProps = {};

const GetStartedForm: React.VFC<GetStartedFormProps> = (props) => {
  return (
    <form className="intro__form text-center">
      <p className="intro__content py-5 text-base lg:text-lg px-14 md:px-0 ">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <div className="flex items-center justify-center w-full h-[70px] flex-col sm:flex-row">
        <Input />
        <Button className="h-full lg:text-2xl px-5 text-lg" icon={<Icons.Arrow size={9} />}>
          Get Started
        </Button>
      </div>
    </form>
  );
};

export default GetStartedForm;
