//Who's Online
friends = [
  {
    username: "David",
    status: "online",
    lastActivity: 10,
  },
  {
    username: "Lucy",
    status: "offline",
    lastActivity: 22,
  },
  {
    username: "Bob",
    status: "online",
    lastActivity: 104,
  },
];
function whosOnline() {
  let result = { online: [], offline: [], away: [] };
  for (let i = 0; i < friends.length; i++) {
    if (friends[i].status == "online" && friends[i].lastActivity <= 10) {
      result.online.push(friends[i].username);
    } else if (friends[i].status == "online" && friends[i].lastActivity > 10) {
      result.away.push(friends[i].username);
    } else {
      result.offline.push(friends[i].username);
    }
  }
  if (result.online.length === 0) {
    delete result.online;
    return result;
  } else {
    return result;
  }
}

console.log(whosOnline(friends));
