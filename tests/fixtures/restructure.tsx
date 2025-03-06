const App = /* @restructure */ ([[[,foo]], {id: {foo: [bar]}}], { baz }) => {
  function onClick({ foo }){
    return { foo, baz: baz.baz }
  };
  return [ foo, bar, baz ]
}


const App1 = /* @restructure */ ([{root: {foo}}]) => (
  <>{[foo]}</>
)

/* @restructure */ function App2({foo: bar = 'bar', baz: qux, ...rest}, [foo = 'foo']){
  return <>{[bar, qux, rest, foo]}</>
}

/* @restructure */ function App3({foo, bar = 1, ...rest}){
  return <>{[foo, bar, rest]}</>
}

/* @restructure */ function App4([foo, bar = 1, ...rest]){
  return <>{[foo, bar, rest]}</>
}
