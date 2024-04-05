
type MiniLogoProps = {
  size: Size;
  classNames?: string;
}

export default function MiniLogo({ size, classNames="" }: MiniLogoProps) {

  const { width, height } = size;

  return (
    <svg width={width} height={height} className={classNames} viewBox="0 0 18 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.1037 0.830439V0.900683C11.0274 0.903024 10.9696 0.91239 10.9303 0.92878C10.891 0.942829 10.8644 0.970927 10.8505 1.01307C10.8366 1.05288 10.8297 1.1161 10.8297 1.20273V2.94478C10.8297 3.02907 10.8366 3.09229 10.8505 3.13444C10.8644 3.17659 10.891 3.20468 10.9303 3.21873C10.9696 3.23278 11.0274 3.24215 11.1037 3.24683V3.31707C11.0482 3.31239 10.9777 3.31005 10.8921 3.31005C10.8089 3.30771 10.7233 3.30654 10.6354 3.30654C10.5383 3.30654 10.447 3.30771 10.3614 3.31005C10.2781 3.31005 10.2099 3.31239 10.1567 3.31707V3.24683C10.2353 3.24215 10.2943 3.23278 10.3336 3.21873C10.3729 3.20468 10.3984 3.17659 10.41 3.13444C10.4238 3.09229 10.4308 3.02907 10.4308 2.94478V1.20273C10.4308 1.1161 10.4238 1.05288 10.41 1.01307C10.3984 0.970927 10.3718 0.942829 10.3302 0.92878C10.2909 0.91239 10.233 0.903024 10.1567 0.900683V0.830439C10.2099 0.83278 10.2781 0.835122 10.3614 0.837463C10.447 0.839805 10.5383 0.840975 10.6354 0.840975C10.7233 0.840975 10.8089 0.839805 10.8921 0.837463C10.9777 0.835122 11.0482 0.83278 11.1037 0.830439Z" fill="#311807"/>
      <path d="M13.5895 0.830439V0.900683C13.5109 0.905366 13.4519 0.919414 13.4126 0.942829C13.3733 0.966244 13.3467 1.00488 13.3328 1.05873C13.3213 1.11024 13.3155 1.184 13.3155 1.28V3.33112C13.297 3.33112 13.2785 3.33112 13.26 3.33112C13.2415 3.33112 13.2218 3.33112 13.201 3.33112L11.7302 1.16761V2.85346C11.7302 2.9518 11.7371 3.02907 11.751 3.08527C11.7649 3.13912 11.7949 3.17776 11.8412 3.20117C11.8874 3.22459 11.958 3.2398 12.0528 3.24683V3.31707C12.0089 3.31239 11.9522 3.31005 11.8828 3.31005C11.8158 3.30771 11.7522 3.30654 11.692 3.30654C11.6342 3.30654 11.5764 3.30771 11.5186 3.31005C11.4608 3.31005 11.4134 3.31239 11.3764 3.31707V3.24683C11.4527 3.2398 11.5105 3.22576 11.5498 3.20468C11.5891 3.18127 11.6157 3.14263 11.6296 3.08878C11.6435 3.03493 11.6504 2.96117 11.6504 2.86751V1.20273C11.6504 1.1161 11.6435 1.05288 11.6296 1.01307C11.6157 0.970927 11.5891 0.942829 11.5498 0.92878C11.5105 0.91239 11.4527 0.903024 11.3764 0.900683V0.830439C11.4134 0.83278 11.4608 0.835122 11.5186 0.837463C11.5764 0.839805 11.6342 0.840975 11.692 0.840975C11.7429 0.840975 11.7926 0.839805 11.8412 0.837463C11.8898 0.835122 11.9325 0.83278 11.9695 0.830439L13.2357 2.6638V1.29405C13.2357 1.19337 13.2276 1.1161 13.2114 1.06224C13.1976 1.00839 13.1675 0.969756 13.1212 0.946341C13.075 0.920585 13.0056 0.905366 12.9131 0.900683V0.830439C12.9547 0.83278 13.0102 0.835122 13.0796 0.837463C13.149 0.839805 13.2137 0.840975 13.2739 0.840975C13.3317 0.840975 13.3895 0.839805 13.4473 0.837463C13.5051 0.835122 13.5525 0.83278 13.5895 0.830439Z" fill="#311807"/>
      <path d="M15.0191 0.781268C15.1717 0.781268 15.2955 0.804683 15.3903 0.851512C15.4851 0.896 15.5718 0.948683 15.6505 1.00956C15.6805 1.03298 15.7037 1.04468 15.7198 1.04468C15.7638 1.04468 15.7927 0.973268 15.8066 0.830439H15.8863C15.8817 0.919415 15.8783 1.02712 15.8759 1.15356C15.8736 1.27766 15.8725 1.4439 15.8725 1.65229H15.7927C15.7765 1.5399 15.7545 1.43571 15.7268 1.33971C15.7013 1.24371 15.6562 1.16176 15.5915 1.09385C15.529 1.01893 15.4469 0.96039 15.3452 0.918244C15.2457 0.876098 15.144 0.855024 15.0399 0.855024C14.9197 0.855024 14.8133 0.885463 14.7208 0.946341C14.6283 1.00488 14.5496 1.08917 14.4849 1.19922C14.4225 1.30927 14.3739 1.43922 14.3392 1.58907C14.3068 1.73659 14.2906 1.89932 14.2906 2.07727C14.2906 2.49873 14.3542 2.8078 14.4814 3.00449C14.6109 3.19883 14.8052 3.296 15.0642 3.296C15.1382 3.296 15.2018 3.28546 15.255 3.26439C15.3105 3.24332 15.3544 3.22224 15.3868 3.20117C15.4261 3.17307 15.4516 3.14615 15.4631 3.12039C15.4747 3.09229 15.4805 3.056 15.4805 3.01151V2.67083C15.4805 2.57015 15.4712 2.49639 15.4527 2.44956C15.4365 2.40039 15.403 2.36761 15.3521 2.35122C15.3013 2.33249 15.2272 2.32195 15.1301 2.31961V2.24937C15.1741 2.25171 15.2261 2.25405 15.2862 2.25639C15.3463 2.25639 15.4088 2.25756 15.4735 2.2599C15.5406 2.2599 15.6007 2.2599 15.6539 2.2599C15.7372 2.2599 15.8123 2.25873 15.8794 2.25639C15.9488 2.25405 16.0054 2.25171 16.0494 2.24937V2.31961C16.0008 2.32195 15.9638 2.33015 15.9384 2.3442C15.9153 2.35824 15.8991 2.38634 15.8898 2.42849C15.8829 2.47063 15.8794 2.53502 15.8794 2.62166V3.31707H15.81C15.8077 3.27727 15.7985 3.23395 15.7823 3.18712C15.7684 3.14029 15.7464 3.11688 15.7164 3.11688C15.7002 3.11688 15.6828 3.12039 15.6643 3.12741C15.6481 3.13444 15.6192 3.152 15.5776 3.1801C15.4967 3.23629 15.4123 3.28195 15.3244 3.31707C15.2365 3.34985 15.1371 3.36624 15.026 3.36624C14.7786 3.36624 14.567 3.31707 14.3912 3.21873C14.2155 3.11805 14.0813 2.97405 13.9888 2.78673C13.8986 2.59707 13.8535 2.37229 13.8535 2.11239C13.8535 1.84078 13.9033 1.60546 14.0027 1.40644C14.1045 1.20741 14.2421 1.05405 14.4155 0.946341C14.5913 0.836293 14.7925 0.781268 15.0191 0.781268Z" fill="#311807"/>
      <path d="M17.0757 0.788293C17.1983 0.788293 17.292 0.802341 17.3567 0.830439C17.4215 0.858537 17.4781 0.888975 17.5267 0.921756C17.5545 0.938146 17.5764 0.951024 17.5926 0.96039C17.6111 0.967414 17.6285 0.970927 17.6446 0.970927C17.6678 0.970927 17.684 0.958049 17.6932 0.932293C17.7048 0.906536 17.714 0.867902 17.721 0.81639H17.8008C17.7984 0.858537 17.795 0.908878 17.7903 0.967414C17.788 1.02361 17.7857 1.09854 17.7834 1.1922C17.7834 1.28585 17.7834 1.40878 17.7834 1.56098H17.7036C17.6967 1.44624 17.6712 1.33502 17.6273 1.22732C17.5857 1.11961 17.5232 1.0318 17.44 0.963902C17.359 0.896 17.255 0.862049 17.1278 0.862049C17.0098 0.862049 16.9115 0.898341 16.8329 0.970927C16.7566 1.04117 16.7184 1.13483 16.7184 1.2519C16.7184 1.35493 16.7439 1.44156 16.7948 1.5118C16.8456 1.57971 16.915 1.6441 17.0029 1.70498C17.0931 1.76351 17.1948 1.82907 17.3082 1.90166C17.4238 1.97659 17.5279 2.05151 17.6204 2.12644C17.7129 2.19902 17.7857 2.2798 17.8389 2.36878C17.8921 2.45776 17.9187 2.56546 17.9187 2.6919C17.9187 2.8441 17.8829 2.97054 17.8112 3.07122C17.7418 3.16956 17.6481 3.24332 17.5302 3.29249C17.4122 3.34166 17.2827 3.36624 17.1417 3.36624C17.0121 3.36624 16.9092 3.3522 16.8329 3.3241C16.7566 3.296 16.6918 3.26673 16.6387 3.23629C16.5878 3.20351 16.5485 3.18712 16.5207 3.18712C16.4976 3.18712 16.4802 3.2 16.4687 3.22576C16.4594 3.25151 16.4513 3.29015 16.4444 3.34166H16.3646C16.3692 3.29015 16.3715 3.23044 16.3715 3.16254C16.3739 3.09229 16.375 3.00098 16.375 2.88859C16.3773 2.7762 16.3785 2.63454 16.3785 2.46361H16.4583C16.4675 2.60878 16.493 2.74459 16.5346 2.87102C16.5785 2.99746 16.6444 3.09932 16.7323 3.17659C16.8225 3.25151 16.9416 3.28898 17.0896 3.28898C17.1682 3.28898 17.2411 3.27376 17.3082 3.24332C17.3752 3.21288 17.4296 3.16488 17.4712 3.09932C17.5128 3.03376 17.5336 2.94946 17.5336 2.84644C17.5336 2.75044 17.5105 2.66615 17.4643 2.59356C17.4203 2.52098 17.3579 2.45424 17.2769 2.39337C17.1983 2.33015 17.1058 2.26576 16.9994 2.2002C16.8907 2.12995 16.789 2.05971 16.6942 1.98946C16.5993 1.91922 16.523 1.83727 16.4652 1.74361C16.4097 1.64995 16.3819 1.53873 16.3819 1.40995C16.3819 1.26712 16.4143 1.15005 16.4791 1.05873C16.5461 0.967414 16.6317 0.899512 16.7358 0.855024C16.8422 0.810537 16.9555 0.788293 17.0757 0.788293Z" fill="#311807"/>
      <path d="M11.1107 5.12312V5.19337C11.0321 5.19571 10.9719 5.20507 10.9303 5.22146C10.891 5.23551 10.8644 5.26361 10.8505 5.30576C10.8366 5.34556 10.8297 5.40878 10.8297 5.49541V7.25151C10.8297 7.33112 10.8355 7.39083 10.847 7.43063C10.8609 7.47044 10.8864 7.49737 10.9234 7.51141C10.9627 7.52312 11.0182 7.52898 11.0899 7.52898H11.3153C11.4148 7.52898 11.498 7.51493 11.5651 7.48683C11.6345 7.45873 11.6923 7.41658 11.7386 7.36039C11.7848 7.30419 11.8207 7.23161 11.8461 7.14263C11.8715 7.05366 11.8912 6.94946 11.9051 6.83005H11.9849C11.9779 6.90498 11.9745 7.00332 11.9745 7.12507C11.9745 7.1719 11.9756 7.24097 11.9779 7.33229C11.9825 7.42127 11.9895 7.51376 11.9987 7.60976C11.8808 7.60507 11.7478 7.60273 11.5998 7.60273C11.4518 7.60039 11.32 7.59922 11.2043 7.59922C11.1512 7.59922 11.0829 7.59922 10.9997 7.59922C10.9164 7.59922 10.8262 7.60039 10.7291 7.60273C10.6343 7.60273 10.5371 7.6039 10.4377 7.60624C10.3406 7.60624 10.2469 7.60742 10.1567 7.60976V7.53951C10.2353 7.53483 10.2943 7.52546 10.3336 7.51141C10.3729 7.49737 10.3984 7.46927 10.41 7.42712C10.4238 7.38498 10.4308 7.32176 10.4308 7.23746V5.49541C10.4308 5.40878 10.4238 5.34556 10.41 5.30576C10.3984 5.26361 10.3718 5.23551 10.3302 5.22146C10.2909 5.20507 10.233 5.19571 10.1567 5.19337V5.12312C10.2099 5.12546 10.2781 5.1278 10.3614 5.13015C10.447 5.13249 10.5383 5.13366 10.6354 5.13366C10.7233 5.13366 10.81 5.13249 10.8956 5.13015C10.9835 5.1278 11.0552 5.12546 11.1107 5.12312Z" fill="#311807"/>
      <path d="M13.2604 5.10907L14.1068 7.31473C14.1392 7.40137 14.1762 7.4599 14.2178 7.49034C14.2618 7.52078 14.3022 7.53717 14.3392 7.53951V7.60976C14.2837 7.60507 14.2178 7.60273 14.1415 7.60273C14.0675 7.60039 13.9924 7.59922 13.916 7.59922C13.8189 7.59922 13.7287 7.60039 13.6455 7.60273C13.5622 7.60273 13.4951 7.60507 13.4443 7.60976V7.53951C13.5622 7.53483 13.6362 7.51493 13.6663 7.4798C13.6986 7.44234 13.6917 7.3639 13.6455 7.24449L13.021 5.53756L13.0765 5.47434L12.5007 6.99863C12.4591 7.104 12.4336 7.1918 12.4244 7.26205C12.4174 7.33229 12.4232 7.38732 12.4417 7.42712C12.4625 7.46693 12.4972 7.49502 12.5458 7.51141C12.5944 7.5278 12.6545 7.53717 12.7262 7.53951V7.60976C12.6568 7.60507 12.5863 7.60273 12.5146 7.60273C12.4452 7.60039 12.3793 7.59922 12.3168 7.59922C12.2613 7.59922 12.2116 7.60039 12.1677 7.60273C12.1261 7.60273 12.0879 7.60507 12.0532 7.60976V7.53951C12.1018 7.5278 12.1503 7.49854 12.1989 7.45171C12.2475 7.40488 12.2937 7.32527 12.3377 7.21288L13.1425 5.10907C13.161 5.10907 13.1806 5.10907 13.2014 5.10907C13.2222 5.10907 13.2419 5.10907 13.2604 5.10907ZM13.6246 6.59824V6.66849H12.5909L12.6256 6.59824H13.6246Z" fill="#311807"/>
      <path d="M15.2329 5.08098C15.3554 5.08098 15.4491 5.09502 15.5138 5.12312C15.5786 5.15122 15.6353 5.18166 15.6838 5.21444C15.7116 5.23083 15.7335 5.24371 15.7497 5.25307C15.7682 5.2601 15.7856 5.26361 15.8018 5.26361C15.8249 5.26361 15.8411 5.25073 15.8503 5.22498C15.8619 5.19922 15.8711 5.16058 15.8781 5.10907H15.9579C15.9556 5.15122 15.9521 5.20156 15.9475 5.2601C15.9451 5.31629 15.9428 5.39122 15.9405 5.48488C15.9405 5.57854 15.9405 5.70146 15.9405 5.85366H15.8607C15.8538 5.73893 15.8284 5.62771 15.7844 5.52C15.7428 5.41229 15.6804 5.32449 15.5971 5.25659C15.5162 5.18868 15.4121 5.15473 15.2849 5.15473C15.1669 5.15473 15.0687 5.19102 14.99 5.26361C14.9137 5.33385 14.8756 5.42751 14.8756 5.54459C14.8756 5.64761 14.901 5.73424 14.9519 5.80449C15.0027 5.87239 15.0721 5.93678 15.16 5.99766C15.2502 6.0562 15.352 6.12176 15.4653 6.19434C15.5809 6.26927 15.685 6.34419 15.7775 6.41912C15.87 6.49171 15.9428 6.57249 15.996 6.66146C16.0492 6.75044 16.0758 6.85815 16.0758 6.98459C16.0758 7.13678 16.04 7.26322 15.9683 7.3639C15.8989 7.46224 15.8052 7.536 15.6873 7.58517C15.5693 7.63434 15.4398 7.65893 15.2988 7.65893C15.1693 7.65893 15.0663 7.64488 14.99 7.61678C14.9137 7.58868 14.849 7.55941 14.7958 7.52898C14.7449 7.49619 14.7056 7.4798 14.6778 7.4798C14.6547 7.4798 14.6374 7.49268 14.6258 7.51844C14.6165 7.5442 14.6084 7.58283 14.6015 7.63434H14.5217C14.5263 7.58283 14.5287 7.52312 14.5287 7.45522C14.531 7.38498 14.5321 7.29366 14.5321 7.18127C14.5344 7.06888 14.5356 6.92722 14.5356 6.75629H14.6154C14.6246 6.90146 14.6501 7.03727 14.6917 7.16371C14.7356 7.29015 14.8015 7.392 14.8894 7.46927C14.9796 7.54419 15.0987 7.58166 15.2467 7.58166C15.3254 7.58166 15.3982 7.56644 15.4653 7.536C15.5323 7.50556 15.5867 7.45756 15.6283 7.392C15.6699 7.32644 15.6908 7.24215 15.6908 7.13912C15.6908 7.04312 15.6676 6.95883 15.6214 6.88624C15.5774 6.81366 15.515 6.74693 15.4341 6.68605C15.3554 6.62283 15.2629 6.55844 15.1565 6.49288C15.0478 6.42263 14.9461 6.35239 14.8513 6.28215C14.7565 6.2119 14.6801 6.12995 14.6223 6.03629C14.5668 5.94263 14.5391 5.83141 14.5391 5.70263C14.5391 5.5598 14.5714 5.44273 14.6362 5.35141C14.7033 5.2601 14.7888 5.1922 14.8929 5.14771C14.9993 5.10322 15.1126 5.08098 15.2329 5.08098Z" fill="#311807"/>
      <path d="M17.157 5.08098C17.2796 5.08098 17.3733 5.09502 17.438 5.12312C17.5028 5.15122 17.5594 5.18166 17.608 5.21444C17.6358 5.23083 17.6577 5.24371 17.6739 5.25307C17.6924 5.2601 17.7098 5.26361 17.726 5.26361C17.7491 5.26361 17.7653 5.25073 17.7745 5.22498C17.7861 5.19922 17.7953 5.16058 17.8023 5.10907H17.8821C17.8797 5.15122 17.8763 5.20156 17.8716 5.2601C17.8693 5.31629 17.867 5.39122 17.8647 5.48488C17.8647 5.57854 17.8647 5.70146 17.8647 5.85366H17.7849C17.778 5.73893 17.7526 5.62771 17.7086 5.52C17.667 5.41229 17.6045 5.32449 17.5213 5.25659C17.4403 5.18868 17.3363 5.15473 17.2091 5.15473C17.0911 5.15473 16.9928 5.19102 16.9142 5.26361C16.8379 5.33385 16.7997 5.42751 16.7997 5.54459C16.7997 5.64761 16.8252 5.73424 16.8761 5.80449C16.9269 5.87239 16.9963 5.93678 17.0842 5.99766C17.1744 6.0562 17.2761 6.12176 17.3895 6.19434C17.5051 6.26927 17.6092 6.34419 17.7017 6.41912C17.7942 6.49171 17.867 6.57249 17.9202 6.66146C17.9734 6.75044 18 6.85815 18 6.98459C18 7.13678 17.9642 7.26322 17.8925 7.3639C17.8231 7.46224 17.7294 7.536 17.6115 7.58517C17.4935 7.63434 17.364 7.65893 17.223 7.65893C17.0934 7.65893 16.9905 7.64488 16.9142 7.61678C16.8379 7.58868 16.7731 7.55941 16.72 7.52898C16.6691 7.49619 16.6298 7.4798 16.602 7.4798C16.5789 7.4798 16.5615 7.49268 16.55 7.51844C16.5407 7.5442 16.5326 7.58283 16.5257 7.63434H16.4459C16.4505 7.58283 16.4528 7.52312 16.4528 7.45522C16.4552 7.38498 16.4563 7.29366 16.4563 7.18127C16.4586 7.06888 16.4598 6.92722 16.4598 6.75629H16.5396C16.5488 6.90146 16.5743 7.03727 16.6159 7.16371C16.6598 7.29015 16.7257 7.392 16.8136 7.46927C16.9038 7.54419 17.0229 7.58166 17.1709 7.58166C17.2495 7.58166 17.3224 7.56644 17.3895 7.536C17.4565 7.50556 17.5109 7.45756 17.5525 7.392C17.5941 7.32644 17.6149 7.24215 17.6149 7.13912C17.6149 7.04312 17.5918 6.95883 17.5456 6.88624C17.5016 6.81366 17.4392 6.74693 17.3582 6.68605C17.2796 6.62283 17.1871 6.55844 17.0807 6.49288C16.972 6.42263 16.8703 6.35239 16.7755 6.28215C16.6806 6.2119 16.6043 6.12995 16.5465 6.03629C16.491 5.94263 16.4633 5.83141 16.4633 5.70263C16.4633 5.5598 16.4956 5.44273 16.5604 5.35141C16.6275 5.2601 16.713 5.1922 16.8171 5.14771C16.9235 5.10322 17.0368 5.08098 17.157 5.08098Z" fill="#311807"/>
      <path d="M4.37615 0H1.45872V2.19608L0 4L1.45872 5.96078V8H4.37615V5.96078L2.91743 4L4.37615 2.19608V0Z" fill="#311807"/>
      <path d="M9.44327 0.470588V0H6.44257L3.68518 4L6.44257 8H9.44327V7.68628L6.76697 4L9.44327 0.470588Z" fill="#D69203"/>
    </svg>
  )
}