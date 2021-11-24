import React, { useState, useEffect } from 'react'
import * as THREE from 'three'
import { useTransition, animated } from 'react-spring'

function Loading() {
  const [finished, set] = useState(false)
  const [width, setWidth] = useState(0)

  useEffect(() => {
    THREE.DefaultLoadingManager.onLoad = () => set(true)
    THREE.DefaultLoadingManager.onProgress = (url, itemsLoaded, itemsTotal) =>
      setWidth((itemsLoaded / itemsTotal) * 200)
  }, [])

  const transitions = useTransition(finished, {
    from: { opacity: 1, width: 0 },
    leave: { opacity: 0 },
    update: { width }
  })
  console.log(transitions)

  return (
    <>
      {transitions(({ opacity, width }, item,key) => {
        if (!finished) {
          return (
            <animated.div className="loading" key={key} style={{ opacity }}>
              <h1 className="welcome">3D Demo with VR</h1>
              <div className="loading-bar-container">
                <animated.div className="loading-bar" style={{ width }} />
              </div>
            </animated.div>
          )
        } else {
          return <div key={key}></div>
        }
      })}
    </>
  )
}

export default Loading
