function doSomething() {
  console.log(`screen: (${event.screenX},${event.screenY}),
     page: (${event.pageX},${event.pageY}), client:
     (${event.screenX},${event.screenY})`);
}
addEventListener("click", doSomething);
