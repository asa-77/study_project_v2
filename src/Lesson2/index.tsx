import React from "react";
import CardListItem from "./CardListItem";
import style from "./CardList.module.scss";


class CardList extends React.Component{
    constructor(props: any){
        super(props)
        this.state ={};
    }

    render(){
        return(
            <>
            <h1>Это мой первый компонент</h1>
            
            <div className={style.block}>
                Тело компонента
                <CardListItem title ="Я первый пропс"/>
                </div> 

            </>
        );
    }
}

export default CardList;