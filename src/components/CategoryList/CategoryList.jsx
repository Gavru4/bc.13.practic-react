import { Component } from "react"
import { nanoid } from 'nanoid'


class CategoryList extends Component {
  state = {
    inputCategory: "",
  }

  handleInputChange = (e) => {
    const { value } = e.target
    this.setState({ inputCategory: value })
  }

  handleSubmitCategoty = (e) => {
    e.preventDefault();
    const newCategory = {
      title: this.state.inputCategory,
      id: nanoid(),
    }
   
    this.props.addCategory(newCategory)
    this.reset()
  }
  reset = () => {
    this.setState({inputCategory: ''})
  }

  render() {
    const { categoriesList, toggleOpenCategoryList, setCategory } = this.props
    return (
      <>
        <button onClick={toggleOpenCategoryList} type="button">
          Назад
        </button>
        <h2>Категории</h2>
        <ul>
          {categoriesList.map((el) => (
            <li key={el.id}>
              <p onClick={() => setCategory(el.title)}>{el.title}</p>
              <button type="button">...</button>
              {/* <div>
                <button>Delete</button>
                <button>Edit</button>
              </div> */}
            </li>
          ))}
        </ul>
        <form action="" onSubmit={this.handleSubmitCategoty}>
          <input
            onChange={this.handleInputChange}
            type="text"
            placeholder="Создать категорию"
            value={this.state.inputCategory}
          />
          <button type="submit">+</button>
        </form>
      </>
    )
  }
}

export default CategoryList
