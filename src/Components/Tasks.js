import Task from './Task'
import Slider from './Slider'


const Tasks = ({tasks, onAddCart,onAddFav,imag1, imag2,imag3}) => {
  return (
    <div className="productSection">
      <h1 className="text-center">Products</h1>
      <div className="sliderSection">
        <Slider imag1={imag1} imag2={imag2} imag3={imag3} />
      </div>
      <div className="productItems">
        {tasks.map((task)=>(
            <Task  task={task} onAddCart={onAddCart} onAddFav={onAddFav}/>
        ))}
      </div>
    </div>
    
    
  )
}

export default Tasks
