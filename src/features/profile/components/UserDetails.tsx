import UserInfo from './UserInfo' 


interface IUserDetail {
  firstName: string | undefined;
  lastName: string | undefined;
  email: string | undefined;
  mobileNumber: string | undefined;
  username: string;
}

const UserDetails = ({
  email,
  username,
  firstName,
  mobileNumber,
}: IUserDetail) => {
  return (
    <div className="flex flex-col gap-4">
      <UserInfo title={`Full name`} value={firstName ? firstName : ""} />
      <UserInfo title={`Mobile number`} value={mobileNumber ? firstName : ""} />

      <UserInfo title={`Username`} value={username} />

      <UserInfo title={`Email`} value={email} />
    </div>
  );
};




export default UserDetails