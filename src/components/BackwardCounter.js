import Card from './Card';
import useCounter from "../hooks/use-counter";
import React from "react";

const BackwardCounter = () => {

    const counter = useCounter(false)

    return <Card>{counter}</Card>;
};

export default BackwardCounter;
