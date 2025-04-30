export default interface IUserContext { 
  user: {
    username: string | null;
    name: string | null;
    email: string | null;
    _id: string | null;
  } | null;
}
