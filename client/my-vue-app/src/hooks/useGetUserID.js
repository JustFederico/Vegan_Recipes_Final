export const useGetUserID = () => {
    return window.localStorage.getItem("userID");
  };

//   persist and retrieve user-related information across page reloads