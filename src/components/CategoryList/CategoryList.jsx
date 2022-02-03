import React, { Component } from "react";

class CategoryList extends Component {
  state = {
    inputCategory: "",
  };

  handleInputChange = (e) => {
    const { value } = e.terget;
    this.setState({ inputCategory: value });
  };
  render() {
    const { categorieslist } = this.props;
    return (
      <>
        <ul>
          {categorieslist.map((el) => {
            <li>
              <p>Title</p>
              <button>...</button>
              <div>
                <button>Delate</button>
                <button>Edit</button>
              </div>
            </li>;
          })}
        </ul>
        <form action="">
          <input
            type="text"
            placeholder="new category"
            name="text"
            value={this.state.inputCategory}
            onChange={this.handleInputChange}
          />
          <button type="submit">+</button>
        </form>
      </>
    );
  }
}
export default CategoryList;
