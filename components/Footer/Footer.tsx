import { Icons } from "components/Icons";

type FooterProps = {};

const Footer: React.VFC<FooterProps> = (props) => {
  return (
    <footer className="mx-auto px-[75px] mb-4 mt-[75px] max-w-[980px]">
      {/* Social Icons */}
      <ul className="inline-flex gap-4 ">
        <li>
          <a href="" rel="noopenner norefferer" target="_blank">
            <Icons.Facebook />
          </a>
        </li>
        <li>
          <a href="" rel="noopenner norefferer" target="_blank">
            <Icons.Instagram />
          </a>
        </li>
        <li>
          <a href="" rel="noopenner norefferer" target="_blank">
            <Icons.Twitter />
          </a>
        </li>
        <li>
          <a href="" rel="noopenner norefferer" target="_blank">
            <Icons.Youtube />
          </a>
        </li>
      </ul>

      {/* External Links */}
      <div className="flex justify-between text-[#808080] text-sm mt-4 mb-10">
        <ul className="flex flex-col gap-3">
          <li>
            <a href="" className="text-[#808080]">
              Âm thanh và phụ đề
            </a>
          </li>
          <li>
            <a href="" className="text-[#808080]">
              Trung tâm đa phương tiện
            </a>
          </li>
          <li>
            <a href="" className="text-[#808080]">
              Quyền riêng tư
            </a>
          </li>
          <li>
            <a href="" className="text-[#808080]">
              Liên hệ với chúng tôi
            </a>
          </li>
        </ul>
        <ul className="flex flex-col gap-3">
          <li>
            <a href="" className="text-[#808080]">
              Mô tả âm thanh
            </a>
          </li>
          <li>
            <a href="" className="text-[#808080]">
              Quan hệ với nhà đầu tư
            </a>
          </li>
          <li>
            <a href="" className="text-[#808080]">
              Thông báo pháp lý
            </a>
          </li>
        </ul>
        <ul className="flex flex-col gap-3">
          <li>
            <a href="" className="text-[#808080]">
              Trung tâm trợ giúp
            </a>
          </li>
          <li>
            <a href="" className="text-[#808080]">
              Việc làm
            </a>
          </li>
          <li>
            <a href="" className="text-[#808080]">
              Tùy chọn cookie
            </a>
          </li>
        </ul>
        <ul className="flex flex-col gap-3">
          <li>
            <a href="" className="text-[#808080]">
              Thẻ quà tặng
            </a>
          </li>
          <li>
            <a href="" className="text-[#808080]">
              Điều khoản sử dụng
            </a>
          </li>
          <li>
            <a href="" className="text-[#808080]">
              Thông tin doanh nghiệp
            </a>
          </li>
        </ul>
      </div>
      {/* Licenses */}
      <div>
        <p className="text-xs text-[#808080]">&#169; 1997-2022 Netflix, Inc. {`{74aed07e-10c5-492f-9ae4-c2cdde51a5c4}`}</p>
      </div>
    </footer>
  );
};

export default Footer;
