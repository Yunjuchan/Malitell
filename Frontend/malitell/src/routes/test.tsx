import React, { useState } from 'react'

export default function Test() {
  const [visible, setVisible] = useState(false);

  const onClick = () => {
    const url = '/'
    window.open(url, "_blank", "width=1500, height=1000");
    setVisible(true);
  }

  return (
    <>{visible? null : <button onClick={onClick}>click me!!</button> }

    </>
    )
}
