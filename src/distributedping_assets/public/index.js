import distributedping from 'ic:canisters/distributedping';

distributedping.greet(window.prompt("Enter your name:")).then(greeting => {
  window.alert(greeting);
});
