export const isUserAuth = () => {
  const username = localStorage.getItem("username");
  return username && username.length > 0
    ? username : null;
}