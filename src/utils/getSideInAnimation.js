export default function getSideInAnimation(props) {
 
	return (
    props ?
    {
    offscreen: {
      x: "-100%",
      opacity: 0,
    },
    onscreen: ({duration = 2} = {}) =>  ({
      x: 0,
      opacity: 1,
      transition: {
      type: "spring",
      duration,
      }
    })
  }
  :
  {
    offscreen: {
      x: "100%",
      opacity: 0,
    },
    onscreen: ({duration = 2} = {}) =>  ({
      x: "25%",
      right:0,
      opacity: 1,
      transition: {
      type: "spring",
      duration,
      }
    })
  }
  )
}