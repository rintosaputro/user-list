import { FC, ReactNode } from "react";

interface AddressSectionProps {
  shortAddress: string;
  fullAddress: string | ReactNode;
}

const AddressSection: FC<AddressSectionProps> = ({
  shortAddress,
  fullAddress,
}) => {
  return (
    <div className="relative container-address z-30">
      <span>{shortAddress}</span>
      <div className="absolute left-0 bottom-8 bg-slate-50 text-base text-[13px] p-3 rounded-sm container-tooltip">
        <div className="relative z-10">{fullAddress}</div>
        <div className="w-[15px] h-[15px] bg-slate-50 absolute arrow-tooltip bottom-[-6px] left-3 z-0 rounded-sm" />
      </div>
    </div>
  );
};

export default AddressSection;
