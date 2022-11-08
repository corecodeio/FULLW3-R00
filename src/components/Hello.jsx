const Hello = ({name, bar, val}) => {
    return (<div>
      {name ? <span> Hello {name}</span> : null}
      {name && <span> foo  ={bar}</span> }
      {name && <span> val = {val}</span> }
    </div>)
  }
  export default Hello;