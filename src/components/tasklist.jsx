import { Homework } from "./homework.jsx"

export function List ({ list=[] }) {
  return (
    <ul className="list">
      {
        list.map( hm => {
          return (
            <li key={hm.id}>
              <Homework task={hm} text={hm.text} id={hm.id}></Homework>
            </li>
          )
        })
      }
    </ul>
  )
}