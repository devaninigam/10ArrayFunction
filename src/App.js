// import logo from './logo.svg';
import './App.css';

function App() {
  let arr = ["langth", "reverse", "push", "pop", "shift", "findindex", "splice", "slice", "tostring", "concat"]
  console.log(arr)
  let twoConcat = ["log" ,"log"];

  let lengthMa = arr.length;
  console.log('lengthMa ' + lengthMa)

  let reverse = [...arr].reverse();
  console.log("reverse " + reverse)

  let push1 = arr.push("now");
  console.log("push1 " + push1)

  let pop = arr.pop();
  console.log("pop " + pop)

  let shift = arr.shift();
  console.log(shift)

  function call(arr) {
    return arr == ["findindex"]
  }

  let string = arr.toString();  
  console.log(string)

  let mix = arr.concat(twoConcat) ;
  console.log(mix)

  return (
    <div>
      <h2>let arr = ["langth" , "reverse" , "push" , "pop" , "shift" , "findindex" , "splice" , "slice" , "tostring" , "concat"]</h2>
      <hr />

      <h3>langth</h3>
      <p>in langth mathode we check array langth (0 To n)</p>
      <p>arr length is {lengthMa}</p>

      <hr />

      <h3>reverse</h3>
      <p>reverse mathode use for data reverse like [7,6,5,4,3] , [z,y,x]</p>
      <p>reverse is {reverse}</p>

      <hr />

      <hr />

      <h3>push</h3>
      <p>In array last Element is add n.push ["l" , "m" , but - add array "n"]</p>
      <p>Push is last Element {push1}</p>

      <hr />

      <hr />

      <h3>pop</h3>
      <p>In array last Element is delete n.pop </p>
      <p>pop is last Element {pop}</p>

      <hr />

      <hr />

      <h3>shift</h3>
      <p>shift() [] in first element is remove now </p>
      <p>shift {shift}</p>

      <hr />

      <hr />

      <h3>findindex</h3>
      <p>findindex() in aplay for your search your Elements </p>
      <p>findindex index is {arr.findIndex(call)}</p>

      <hr />

      <hr />

      <h3>splice</h3>
      <p>splice() first index Enter position and second index is remove elements </p>
      <p>splice index start in 0 {arr.splice(0, 0, "length")} {arr.length[0]}</p>

      <hr />

      <hr />

      <h3>slice</h3>
      <p>slice() array in part</p>
      <p>slice {arr.slice(0 , 2)}</p>

      <hr />

      <hr />
      
      <h3>tostring</h3>
      <p>toString() array covert to string</p>
      <p>tostring {string}</p>

      <hr />

      <hr />
      
      <h3>concat</h3>
      <p>concat() two array mix in one array</p>
      <p>Concat {mix}</p>

      <hr />

    </div>
  );
}

export default App;
