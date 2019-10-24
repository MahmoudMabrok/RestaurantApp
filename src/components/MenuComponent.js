import React from 'react';
import { Media } from 'reactstrap';

export class Menu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selecedDish : null
        }
    }

    onDishSelected(dish) {
        this.setState({
            selecedDish : dish
        });
    }

    renderDish() {
        if (this.state.selecedDish != null) {

        } else {
            return <div></div>
        }
    }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 mt-5">
                    <Media tag="li">
                        <Media left middle>
                            <Media object src={dish.image}></Media>
                        </Media>

                        <Media body className="ml-5">
                            <Media heading > {dish.name}</Media>
                            <p>{dish.description}</p>
                        </Media>
                    </Media>
                    <hr />
                </div>
            );
        });


        return (
            <div className="container">
                <div className="row">

                    {menu}
                </div>
                <div className="row">
                    {this.renderDish}
                </div>
            </div>
        );
    }

}