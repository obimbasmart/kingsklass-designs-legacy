interface IUserInfo {
    title: string;
    value: string | undefined;
  }
  
const UserInfo = ({ title, value }: IUserInfo) => {
    return (
      <div className="flex text-fdt-grey-darker flex-col pb-2 text-base gap-2 border-b-[0.5px] font-montserrat border-fdt-grey-normal">
        <h3 className="font-medium capitalize">{title.replace("_", " ")}</h3>
        <p className="font-normal px-1">{value}&nbsp;</p>
      </div>
    );
  };

  export default UserInfo
  