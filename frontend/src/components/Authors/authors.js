import React from "react";

const authors = (props) => {
    return (
        <div className={"container mm-4 mt-5"}>
            <div className={"row"}>
                <div className={"table-responsive"}>
                    <table className={"table table-striped"}>
                        <thead>
                            <tr>
                                <th scope={"col"}>Name</th>
                                <th scope={"col"}>Surname</th>
                                <th scope={"col"}>Country</th>
                            </tr>
                        </thead>
                        <tbody>
                            { props.authors.map((term) => {
                                return (
                                    <tr>
                                        <td>{term.name}</td>
                                        <td>{term.surname}</td>
                                        <td>{term.country.name}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default authors;