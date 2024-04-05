type UserResponse = {
    id: string;
    file?: string;
    is_admin: boolean,
    created_at: string,
    email: string;
    first_name?: string,
    last_name?: string,
    phone_no: string,
    updated_at: string,
    username: string
  }
  
  type User = {
    file?: string;
    isSignedIn: boolean;
    isAdmin: boolean;
    access_token?: string;
    id?: string;
    created_at?: string,
    email?: string,
    first_name?: string,
    last_name?: string,
    phone_no?: string,
    updated_at?: string,
    username: string
  }
  

  type UserInfo = {
    username?: string,
    email: string;
    password: string;
    confirm_password?: string;
    remember_me?: boolean;
  }
  type UserDetails = Omit<UserInfo, 'confirm_password'> & { 
    file?: string;
    username: string;
    mobileNumber: string;
  }
  type UserRole = 'ADMIN' | 'USER';
  type Validations = {
    validEmail: boolean;
    validPassword: boolean; 
    matchingPassword: boolean;
  }