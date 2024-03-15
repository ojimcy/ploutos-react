import React from 'react';
import PropTypes from 'prop-types';
import { Row, Table } from 'reactstrap';

const History = ({ history }) => {
  return (
    <div className="history-table">
      <Row>
        <h3>Claim History</h3>
        <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>Date</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {history.map((claim, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{claim.date}</td>
                <td>{claim.amount}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Row>
    </div>
  );
};

History.propTypes = {
  history: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default History;
