// @types designer.d.ts
type ChildrenNode = {
  children: React.ReactNode;
};
type Toggle = "OPEN" | "CLOSE";
type Size = {
  width: string;
  height: string;
};
type AppModalTypes = "signin" | "signup";
type ToggleNav =
  | "openNavModal"
  | "userNavModal"
  | "productFilterPanel"
  | "notifications"
  | "measurements"
  | "carts"
  | "paymentPrompt"
  | "cartPreview"
  | "paymentCheckout"
  | "purchasePrompt"
  | "adminAccountSetting"
  | "orderProgress"
  | "pass";
type AppModals = Record<AppModalTypes, Toggle>;
type ToggleOption = {
  modalType: ToggleNav;
  prevModal?: ToggleNav;
};

type ProgressType = "pending" | "completed";
type PaymentProgress = {
  progress: ProgressType;
};

type DesignerContextProps = {
  user: User;
  appModals: AppModals;
  toggleNav: ToggleOption;
  starRating: number[];
  paymentProgress: PaymentProgress;
  setUser: React.Dispatch<React.SetStateAction<User>>;
  setPaymentProgress: React.Dispatch<React.SetStateAction<PaymentProgress>>;
  setStarRating: React.Dispatch<React.SetStateAction<number[]>>;
  setAppModals: React.Dispatch<React.SetStateAction<AppModals>>;
  setToggleNav: React.Dispatch<React.SetStateAction<ToggleOption>>;
};

type AppStateType = {
  isLoading: boolean;
  isError: boolean;
  isSuccess?: boolean;
  error: any;
};

type ReviewsType = {
  id?: number;
  rating: number[];
  content: string;
  author: string;
  createdAt: string;
};

type MEASUREMENT_METRICS =
  | "chest/bust"
  | "stomach"
  | "top length"
  | "shoulder"
  | "sleeve length"
  | "neck"
  | "muscle"
  | "waist"
  | "laps"
  | "knee";

type ImageReturnType = { status: string; url: string };
type STORAGES = "displayPictures" | "products" | "receipts";

type OrderStatusType = "Pending" | "In progress" | "Completed";

type OrderPropsTypes = Record<
  OrderStatusType,
  {
    bgColor: string;
    color: string;
    width: string;
  }
>;
