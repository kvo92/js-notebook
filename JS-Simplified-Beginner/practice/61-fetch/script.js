const url = "https://jsonplaceholder.typicode.com/users";

async function doStuff() {
  const res = await fetch(url);
  const users = await res.json();
  console.log(users.map((user) => user.name));
}
doStuff();
