import { useEffect, useState } from "react"

export default function NumOperators() {
  const [preState, setPrestate] = useState("")
  const [curState, setCurState] = useState("")
  const [input, setInput] = useState("0")
  const [operator, setOperator] = useState(null)
  const [total, setTotal] = useState(false)
  const inputNum = (e) => {
    if(curState.includes(".") && e.target.innerText ===".") return
    if(total){
      setPrestate("")
    }
    curState ? setCurState(prev => prev + e.target.innerText): setCurState(e.target.innerText)
    setTotal(false)
  } 
  useEffect(()=>{
    setInput(curState)
  }, [curState])
  useEffect(()=>{
    setInput("0")
  },[])
  const operators = (e) => {}
  const equals = (e)=> {}
  const percent = (e) => {}
  const minusPlus = (e) => {}
  const reset = (e) =>  {}
  return (
    <>
      <div className="bg-gray-600 h-full w-full py-3 text-end text-white">{input}</div>
      <div className="grid grid-cols-4 border border-r-2 border-l-2">
        <div className="border-l-2 h-full w-full py-6 text-center" onClick={reset}>AC</div>
        <div className="border-l-2 h-full w-full py-6 text-center" onClick={minusPlus}>+/-</div>
        <div className="border-l-2 h-full w-full py-6 text-center" onClick={percent}>%</div>
        <div className="bg-orange-500 h-full w-full py-6 text-center text-white" onClick={operators}>/</div>
      </div>
      <div className="grid grid-cols-4 border border-r-2 border-l-2">
        <div  className="border-l-2 h-full w-full py-6 text-center" onClick={inputNum}>7</div>
        <div  className="border-l-2 h-full w-full py-6 text-center" onClick={inputNum}>8</div>
        <div  className="border-l-2 h-full w-full py-6 text-center" onClick={inputNum}>9</div>
        <div className="bg-orange-500 h-full w-full py-6 text-center text-white" onClick={operators}>X</div>
      </div>
      <div className="grid grid-cols-4 border border-r-2 border-l-2">
        <div className="border-l-2 h-full w-full py-6 text-center" onClick={inputNum}>4</div>
        <div className="border-l-2 h-full w-full py-6 text-center" onClick={inputNum}>5</div>
        <div className="border-l-2 h-full w-full py-6 text-center" onClick={inputNum}>6</div>
        <div className="bg-orange-500 h-full w-full py-6 text-center text-white" onClick={operators}>-</div>
      </div>
      <div className="grid grid-cols-4 border border-r-2 border-l-2">
        <div className="border-l-2 h-full w-full py-6 text-center" onClick={inputNum}>1</div>
        <div className="border-l-2 h-full w-full py-6 text-center" onClick={inputNum}>2</div>
        <div className="border-l-2 h-full w-full py-6 text-center" onClick={inputNum}>3</div>
        <div className="bg-orange-500 h-full w-full py-6 text-center text-white" onClick={operators}>+</div>
      </div>
      <div className="grid grid-cols-4 border border-r-2">
        <div className="col-span-2 border-l-2 h-full w-full py-6 text-center" onClick={inputNum}>0</div>
        <div className="border-l-2 h-full w-full py-6 text-center">.</div>
        <div className="bg-orange-500 h-full w-full py-6 text-center text-white" onClick={equals}>=</div>
      </div>
    </>
  );
}
