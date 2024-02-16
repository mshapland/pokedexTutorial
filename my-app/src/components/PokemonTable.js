import React from "react";
import { Table, Typography, Avatar, Modal } from "antd";
import Spinner from "./Spinner";
import { useState } from "react";

const { Title, Text } = Typography;

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
    const [modalTitle, setModalTitle] = useState("");
    const [modalContent, setModalContent] = useState("");
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    //function to get the data for our modal
    function getModalData(record) {
        //set the modal title
        setModalTitle(record.name.english);

        let theContent = (
            <div>
                <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${record.id}.png`}
                    alt={record.name.english}
                    width={100}
                    height={100}
                />
                <br />
                <Text level={5}>Number: {record.id}</Text>
                <br />
                <Text level={5}>Type(s): {record.type.join(", ")}</Text>
            </div>
        );

        //set the modal content
        setModalContent(theContent);

        //now show the modal
        showModal();
    }

    ///////////////////////
    //RETURN BLOCK
    ///////////////////////

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
                                getModalData(record);
                            },
                        };
                    }}
                />
                <Modal
                    title={modalTitle}
                    open={isModalOpen}
                    onOk={handleOk}
                    onCancel={handleCancel}
                >
                    <Text>{modalContent}</Text>
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
