import { CounterProvider, initState } from "./context/CounterContext"
import Counter from "./Counter"

function App() {

  return (
    <>
    <CounterProvider count={initState.count} text={initState.text}>
      <Counter>{(num: number) => <>Current Count: {num}</>}</Counter>
      </CounterProvider>
    </>
  )
}

export default App


// The Provider only expects one child . Wrap the children in a fragment <> </> OR change the ChildrenType in context to:
// ReactElement | ReactElement[] | undefined