const greeting: string = "Xin chào";

function sayHello(userName: string): string {
  return `${greeting}, ${userName}!`;
}

const userName: string = "Rikkei";
const message: string = sayHello(userName);

document.getElementById("app")!.innerHTML = message;
