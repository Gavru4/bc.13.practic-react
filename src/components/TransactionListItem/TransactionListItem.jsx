import { Component } from "react";

class TransactionListItem extends Component {
  state = {
    isOpenMenu: false,
  }

  switchMenu = () => this.setState((prevState) => ({ isOpenMenu: !prevState.isOpenMenu }))
  render() {
    const { comment, curency, date, sum, time} = this.props
    return (
      <li >
        <p>{date}</p>
        <p>{time}</p>
        <p>{sum}</p>
        <p>{curency}</p>
        <p>{comment}</p>
        <button onClick={this.switchMenu} type="button">
          ...
        </button>
        {this.state.isOpenMenu && (
          <div>
            <button>Delete</button>
            <button>Edit</button>
          </div>
        )}
      </li>
    )
  }
}
 
export default TransactionListItem;