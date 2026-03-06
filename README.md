### What is JSX, and why is it used?
  Ans: JSX (JavaScript XML) হলো JavaScript এর একটি syntax extension যা দিয়ে React-এ JavaScript এর ভিতরে HTML এর মতো code লেখা যায়।
Why used:
- UI structure সহজে লেখা যায়
- HTML এবং JavaScript একসাথে ব্যবহার করা যায়
- Code readable এবং maintain করা সহজ হয়

 ### What is the difference between State and Props?
  Ans: Props ব্যবহার করা হয় parent component থেকে child component এ data পাঠানোর জন্য। Props read-only, অর্থাৎ এটাকে পরিবর্তন করা যায় না। 
 - State হলো component এর নিজের data যা সময় অনুযায়ী পরিবর্তন হতে পারে। State পরিবর্তন হলে component পুনরায় render হয়।
- Props বাইরে থেকে আসে এবং change করা যায় না
- State component এর ভিতরের data এবং change করা যায়

 ### What is the useState hook, and how does it work?
  Ans: useState হলো একটি React Hook যা functional component এ state manage করার জন্য ব্যবহার করা হয়। 
 - এটি দুইটা value return করে: 
    1. current state value, 
    2. state update করার function
- Example: 
  const [count, setCount] = useState(0);
এখানে count হলো state এবং setCount দিয়ে আমরা state value update করি। update হলে component re-render হয়

 ### How can you share state between components in React?
  Ans: React এ state share করার জন্য state parent component এ রাখা হয় এবং child components এ props এর মাধ্যমে pass করা হয়। এভাবে একাধিক component একই state ব্যবহার করতে পারে।
  - Parent Component -> Props -> Child Components. এটাকে Lifting State Up বলা হয়।

 ### How is event handling done in React?
  Ans: React এ event handling করা হয় camelCase event name এবং function handler ব্যবহার করে। আমরা event এর সাথে একটি function pass করি। Example: 
 - function handleClick() {
  console.log("Button clicked");
   } 
 <button onClick={handleClick}>Click</button>
এখানে onClick হলো event এবং handleClick হলো function যা button click করলে execute হবে।

---
###