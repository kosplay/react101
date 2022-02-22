import React, { Component } from 'react';

class Counter extends Component {
    // state = {
    //     value: this.props.counter.value,
    //     imageUrl: 'https://picsum.photos/200',
    //     tags: ['tag1', 'tag2', 'tag3']
    // };

    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    // handleIncrement = (product) => { // arrow function binds to the class
    //     // console.log('increment clicked', this, product)
    //     this.setState({value: this.state.value + 1})
    // }

    render() {
        return (
        <div>
            {/* <img src={this.state.imageUrl} alt="" /> */}
            <span className={this.getBadgeClasses()}>{this.formateCount()}</span>
            <button onClick={() => this.props.onIncrement(this.props.counter)}
                className="btn btn-secondary btn-sm">
                Increment</button>
            <button onClick={() => this.props.onDelete(this.props.counter.id) }
            className='btn btn-danger btn-sm m-2'>Delete</button>
            {/* <ul>
                {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
            </ul> */}
        </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formateCount() {
        const {value } = this.props.counter;
        return value === 0 ? "Zero" : value;
    }
}
 
export default Counter;