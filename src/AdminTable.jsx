import React from 'react';

const AdminTable = (props) =>{
    const {name,emails,foodnames,addresses,contacts} = props;
    return<>

        <tr>
            <td>{name}</td>
            <td>{emails}</td>
            <td>{contacts}</td>
            <td>{foodnames}</td>
            <td>{addresses}</td>
        </tr>     

    </>
}


export default AdminTable;