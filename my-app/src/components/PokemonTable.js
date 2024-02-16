import React from "react";
import { Table, Typography, Avatar, Modal } from "antd";
import Spinner from "./Spinner";
import { useState } from "react";

const { Title } = Typography;

const columns = [
    {
        title: "Number",
        dataIndex: "id",
        key: "number",
    },
    {
        title: "Image",
        dataIndex: "id",
        key: "image",
        render: (id) => {
            return (
                <Avatar
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
                    size={"large"}
                />
            );
        },
    },
    {
        title: "Name",
        dataIndex: "name",
        key: "name",
        render: (name) => <Title level={4}>{name.english}</Title>,
    },
    {
        title: "Type",
        dataIndex: "type",
        key: "type",
        render: (type) => <div>{type.join(", ")}</div>,
    },
];

function PokemonTable(props) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    //if we have pokemon data, return our table
    if (props.pokemon !== null) {
        return (
            <div>
                <Table
                    columns={columns}
                    dataSource={props.pokemon}
                    onRow={(record) => {
                        return {
                            onClick: () => {
                                showModal();
                            },
                        };
                    }}
                />
                <Modal
                    title="Basic Modal"
                    open={isModalOpen}
                    onOk={handleOk}
                    onCancel={handleCancel}
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
            </div>
        );
    }
    //if we don't have pokemon data, return the spinner
    else {
        return <Spinner />;
    }
}

export default PokemonTable;
