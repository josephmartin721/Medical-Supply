import React from "react";
import imgurl from "../../images";

function ProductCard(props) {
    return (
        <Col m={4} s={6} className="center">
            <Card>
            <div className="card-image">
                <img src={require(`../../images${props.id}.png`)}/>
            </div>
            <CardTitle>{props.name}</CardTitle>
            <p>{props.slug}</p>
            <Link to={`/products/:${props.id}`}>
                <Button
                node="button"
                waves="light"
                className="indigo btn-small"
                style={{marginBottom: "5px"}}
                >
                View
                </Button>
            </Link>
            <br/>
            <Link to={"/contact"}>
                <Button 
                node="button"
                waves="light"
                className="indigo btn-small"
                >
                Schedule a Meeting
                </Button>
            </Link>
            </Card>
        </Col>
    );
}

export default ProductCard;