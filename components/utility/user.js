const user = {
  accessToken : undefined,
  id : undefined
}

user.set = function(info){
  user.accessToken = info.accessToken;
  user.id = info.id;
}

export default user;
