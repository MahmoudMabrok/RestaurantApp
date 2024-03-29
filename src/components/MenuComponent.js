import React from 'react';

import { Card, CardBody, CardImg, CardImgOverlay, CardText, CardTitle } from 'reactstrap';

export class Menu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selecedDish: null
        }

    }

    onDishSelect(dish) {
        console.log("selected " + dish)
        this.setState({
            selecedDish: dish
        });
    }

    renderDish() {
        var dish = this.state.selecedDish ; 
        console.log("render " + dish)
        if (dish != null) {
            return (
                <Card key={dish.id}>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        } else {
            return (
                <div></div>
            );
        }
    }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
                <div  className="col-12 col-md-5 m-1">
                    <Card key={dish.id}
                        onClick={ () => this.onDishSelect(dish )}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>

            );
        });


        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>

                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish()}
                    </div>
                </div>

            </div>
        );
    }

}