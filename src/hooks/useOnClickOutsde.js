import React, { useEffect} from 'react'

const useOnClickOutsde = (ref, handler) => {
  useEffect(() => {

    const listner =  (event) => {
      console.log('ref', ref.current);
      console.log(event);
      console.log(event.target);
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler();
    };

    document.addEventListener("mousedown", listner);
    document.addEventListener("touchstart", listner);

    return () => {
      document.removeEventListener("mousedown", listner);
      document.removeEventListener("touchstart", listner);


    }
  }, [])
  return (
    <div>useOnClickOutsde</div>
  )
}

export default useOnClickOutsde