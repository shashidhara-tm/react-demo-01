import { Button } from './Button'

const cellStyle = {
    border: "1px solid blue",
    padding: 5
}

const headerStyle = {
    ...cellStyle,
    backgroundColor: "lightblue",
    color: "black"
}

function Table({ todoList, onDone, onDelete }){
    return <table style={{
        border: "1px solid blue",
        borderCollapse: "collapse",
        margin: 5
    }}>
        <tbody>
        <tr>
          <th style={headerStyle}>Sl. No.</th>
          <th style={headerStyle}>Title</th>
          <th style={headerStyle}>Is Completed?</th>
          <th style={headerStyle}>Action</th>
        </tr>
        {todoList.map((item, index) => {
          return <tr key={item.id}>
            <td style={cellStyle}>{index+1}</td>
            <td style={cellStyle}>{item.title}</td>
            <td style={cellStyle}>
              {item.isCompleted ? "Yes" : "No"}
            </td>
            <td style={cellStyle}>
               {!item.isCompleted && <Button type="action" onClick={() => onDone(item.id)} label="Done"/>}
               <Button type="danger" onClick={() => onDelete(item.id)} label="Delete"/>
            </td>
          </tr>
        })}
        </tbody>
    </table>
}

export { Table }
