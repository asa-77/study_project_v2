import React from "react";


type TProps ={
    title: string;
};

type TState ={
    count: number;
};

class CardListItem extends React.Component<TProps, TState>{
    constructor(props: TProps){
        super(props);
        this.state ={count: 0};
        this.minusOne = this.minusOne.bind(this);
    }

    plusOne =() =>{
        const{count} = this.state;
        this.setState({count:count+1});
    };

    minusOne(){
        const{count} = this.state;
        this.setState({count:count-1});
    }

    render(){
        const{title} =this.props;
        const{count} =this.state;
        return(
            <>
            <h3>Я карточка</h3>
            <div>{title}</div>
            <p>{count}</p>
            <button type="button" onClick={this.plusOne}>
                PLUS
                </button>
            <button type="button" onClick={this.minusOne}>
                MINUS
                </button>
            </>
        );
    }
}


export default CardListItem;