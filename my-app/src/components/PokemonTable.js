import React from "react";
import { Space, Table, Tag } from "antd";
import Spinner from "./Spinner";

const columns = [
    {
        title: "Number",
        dataIndex: "id",
        key: "number",
    },
    {
        title: "Name",
        dataIndex: "name",
        key: "name",
        render: (name) => <a>{name.english}</a>,
    },
];

function PokemonTable(props) {
    //if we have pokemon data, return our table
    if (props.pokemon !== null) {
        return <Table columns={columns} dataSource={props.pokemon} />;
    }
    //if we don't have pokemon data, return the spinner
    else {
        return <Spinner />;
    }
}

export default PokemonTable;
